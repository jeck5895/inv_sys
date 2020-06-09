/**
 *
 * @param {*} items - array of objects
 * @param {*} key - property to be reference on calculation
 */

const computeTotal = (items, key) => {
    if (!Array.isArray(items)) {
        return new Error("items should be of type Array");
        console.error("parameter should be of type Array");
    }

    if (!key || key === undefined || key === "") {
        return new Error("key parameter is required");
    }

    const total = items.reduce((acc, item) => {
        if (item.discount === undefined) {
            return acc + item[key];
        } else {
            const { discount, selling_price } = item;

            if (discount.includes("%")) {
                let value = discount.split("%");
                const percent = value[0];
                const decimal = parseFloat(percent) / 100;
                const deduction = decimal * parseFloat(selling_price);

                return acc + (item[key] - deduction);
            } else {
                return acc + (item[key] - item.discount);
            }
        }
    }, 0);

    return total;
};

const itemsExists = (items, imei) => {
    var i;
    for (i = 0; i < items.length; i++) {
        if (items[i].imei === imei) {
            return true;
        }
    }

    return false;
};

export { computeTotal, itemsExists };
