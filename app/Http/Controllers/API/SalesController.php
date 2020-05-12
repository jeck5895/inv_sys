<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use App\Http\Requests\Sales\StoreSale;
use App\Http\Requests\Sales\UpdateSale;
use App\Model\Item;
use App\Model\Sale;
use App\Model\SalesItemFreebie;
use App\Model\SalesItem;
use Illuminate\Database\Eloquent\Relations\Relation;
use Webpatser\Uuid\Uuid;
use PDF;

class SalesController extends Controller
{
    protected $report;
    public function __construct(
        \App\Services\ReportService $report
    ) {
        $this->report = $report;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $per_page = $request->has('per_page') ? $request->per_page : 10;
        $keywords = $request->has('q') ? explode(' ', $request->q) : null;

        if ($request->has('q') || $request->has('order_by') || $request->has('sort_by')) {
            $orderBy = $request->has('order_by') ? $request->order_by : 'desc';
            $sortBy = $request->has('sort_by') ? $request->sort_by : 'created_at';

            $sales = Sale::orderBy($sortBy, $orderBy)
                ->with(['sales_items.item', 'sales_items.sales_item_freebies.freebie'])
                ->where(function ($query) use ($request, $keywords) {
                    if ($request->has("q") && $request->q != null) {
                        foreach ($keywords as $keyword) {
                            $query->orWhere('receipt_no', 'LIKE', '%' . $keyword . '%')
                                ->orWhere('amount', 'LIKE', '%' . $keyword . '%')
                                ->orWhere('payment_mode', 'LIKE', '%' . $keyword . '%');
                        }
                    }
                })
                ->where(function ($query) use ($request) {
                    if (($request->has('date_from') && $request->date_from != null) && ($request->has('date_to') && $request->date_to != null)) {
                        $query->whereBetween(DB::raw("DATE_FORMAT(created_at, '%Y-%m-%d')"), [$request->date_from, $request->date_to]);
                    }
                })
                // ->toSql();

                ->paginate($per_page);

            $sales->map(function ($item) {
                $total_item_cost = 0;
                $total_freebies_cost = 0;

                foreach ($item['sales_items'] as $sales_item) {
                    $total_item_cost = (int) $total_item_cost + (int) $sales_item["item"]->cost;
                }

                foreach ($item['sales_items'] as $sales_item) {
                    foreach ($sales_item['sales_item_freebies'] as $item_freebie) {
                        $total_freebies_cost = (int) $total_freebies_cost + (int) $item_freebie["freebie"]->price;
                    }
                }

                $total_cost = (int) $total_freebies_cost +  (int) $total_item_cost;

                $net_income = (int) $item->amount - (int) $total_cost;

                $item->total_item_cost = [
                    'value' => $total_item_cost,
                    'formatted' => number_format($total_item_cost, 2, '.', ',')
                ];

                $item->total_freebies_cost = [
                    'value' => $total_freebies_cost,
                    'formatted' => number_format($total_freebies_cost, 2, '.', ',')
                ];

                $item->revenue = [
                    'value' => $item->amount,
                    'formatted' => number_format($item->amount, 2, '.', ',')
                ];

                $item->net_income = [
                    'value' => $net_income,
                    'formatted' => number_format($net_income, 2, '.', ',')
                ];

                // $item->total_item_cost = $total_freebies_cost;
                // $item->total_freebies_cost = $total_freebies_cost;

                // $item->formatted_total_freebies_cost = number_format($item->total_freebies_cost, 2, '.', ',');

                return $item;
            });
        } else {
            $sales = Sale::orderBy('created_at', 'desc')
                // ->with(['item.model', 'item.brand', 'item.color', 'item.category', 'item.supplier'])
                // ->with('freebies')
                ->paginate($per_page);
        }

        return $sales;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreSale $request)
    {

        // $transaction_no = strtoupper(uniqid('TR-'));
        $sales_item_ids = [];
        $sales = new Sale;
        $sales->receipt_no = $request->receipt_no;
        $sales->payment_mode = $request->payment_mode;
        if ($request->has('payment_terms')) {
            $sales->payment_terms = $request->payment_terms;
        }
        $sales->amount = $request->total_amount;
        $sales->checkout_date = $request->checkout_date;
        $sales->save();
        $sales_id = $sales->id;

        if (count($request->items) > 0) {

            $new_sales = Sale::find($sales_id);

            foreach ($request->items as $item) {
                $sales_item = new SalesItem(
                    array(
                        'sales_id' => $sales_id,
                        'item_id' => $item["id"]
                    )
                );

                $sales_item = $new_sales->sales_items()->save($sales_item);

                $news_sales_item = SalesItem::find($sales_item["id"]);
                $sales_item_ids[] = $sales_item;
                foreach ($item['freebies'] as $freebie) {
                    $sales_freebie = new SalesItemFreebie(
                        array(
                            'freebie_id' => $freebie,
                            'sales_item_id' => $sales_item["id"]
                        )
                    );
                    $news_sales_item->sales_item_freebies()->save($sales_freebie);
                }

                $item = Item::find($item["id"]);
                $item->is_available = 0;
                $item->save();
            }
        }

        return [
            'message' => 'Sales has been saved.',
            'request' => $request->all(),
            'sales_items_ids' => $sales_item_ids,
            'sales_id' => $sales->id
        ];
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $sales = Sale::findOrFail($id)
            ->with(['sales_items.item', 'sales_items.sales_item_freebies.freebie']);

        return $sales;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateSale $request, $id)
    {
        /**
         * Advance Eloquent relationships
         * https://quickadminpanel.com/blog/eloquent-relationships-the-ultimate-guide/
         */

        $sales = Sale::findOrFail($id);
        $sales->receipt_no = $request->receipt_no;
        $sales->payment_mode = $request->payment_mode;
        if ($request->has('payment_terms')) {
            $sales->payment_terms = $request->payment_terms;
        }
        $sales->amount = $request->total_amount;
        $sales->checkout_date = $request->checkout_date;
        $sales->save();

        if (count($request->items) > 0) {

            $oldSalesItemIds = $sales->sales_items()->pluck("id")->toArray();
            $oldFreebieIds = $sales->freebies()->pluck("sales_item_freebies.id")->toArray();

            foreach ($request->items as $item) {
                $sales_item =  $sales->sales_items()->create([
                    "sales_id" => $sales->id,
                    "item_id" => $item["id"]
                ]);

                foreach ($item["freebies"] as $freebie) {
                    $sales->freebies()->create([
                        'freebie_id' => $freebie,
                        'sales_item_id' => $sales_item->id
                    ]);
                }

                $item = Item::find($item["id"]);
                $item->is_available = 0;
                $item->save();
            }

            $sales->sales_items()->whereIn("id", $oldSalesItemIds)->delete();
            SalesItemFreebie::whereIn("id", $oldFreebieIds)->delete();
            // $sales->freebies()->whereIn("sales_item_freebies.id", [1])->delete();
        }

        return [
            "message" => "Sales with receipt " . $request->receipt_no . " successfully updated",
            "request" => $request->all(),
            "sales_items" => $sales->sales_items()->getResults()->toArray(),
            "freebies" => $sales->freebies()->getResults()->toArray(),
            "sales_items_ids" => $sales->sales_items()->pluck("id")->toArray(),
            "freebie_ids" => $sales->freebies()->pluck("sales_item_freebies.id")->toArray()
        ];
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $sales = Sale::findOrFail($id);

        $sales->delete();
    }

    public function findBy($field, $val)
    {
        $item = Sale::where($field, $val)
            ->with(['sales_items.item', 'sales_items.sales_item_freebies.freebie'])
            ->firstOrFail();
        return $item;
    }

    protected function proccesRelationWithRequest(Relation $relation, array $items)
    {
        $relation->getResults()->each(function ($model) use ($items) {
            foreach ($items as $item) {
                if ($model->item_id === ($item['id'] ?? null)) {
                    $model->fill($item)->save();
                    return;
                }
            }

            return $model->delete();
        });

        foreach ($items as $item) {
            if (!isset($item['id']))
                $relation->create($item);
        };
    }
}
