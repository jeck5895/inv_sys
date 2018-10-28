<template>
    <div class="row clearfix">
        <div class="col-md-4 float-left">
           Displaying from {{ object.from }} to {{ object.to }} total of {{ object.total }}
        </div>
        
        <div class="col-md-8 float-right">
            <nav aria-label="...">
                <ul :class="'pagination ' + classSize +' justify-content-end'">
                    <li :class="object.from == object.current_page ? 'page-item disabled' : '' ">
                        <a class="page-link" @click.prevent="firstPage(object.first_page_url)" href="#" tabindex="-1">
                            <span class="fa fa-long-arrow-left"></span>
                        </a>
                    </li>
                    <li :class="object.prev_page_url == null ? 'page-item disabled' : 'page-item'">
                        <a class="page-link" @click.prevent="prevPage(object.prev_page_url)" href="#" tabindex="-1">Previous</a>
                    </li>
                    <template v-for="i in links">
                        <li :class="object.current_page == i ? 'page-item active':'active'"  :key="i">
                            <a class="page-link" @click.prevent="toPage(i)" href="#">{{ i }}</a>
                        </li>
                    </template>
                    <li :class="object.next_page_url == null ? 'page-item disabled' : 'page-item'">
                        <a class="page-link" @click.prevent="nextPage(object.next_page_url)" href="#">Next</a>
                    </li>
                    <li :class="object.last_page == object.current_page ? 'page-item disabled' : '' ">
                        <a class="page-link" @click.prevent="lastPage(object.last_page_url)" href="#">
                            <span class="fa fa-long-arrow-right"></span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</template>

<script>
    export default {
        props:['scope','object', 'url', 'classSize', 'query'],
        props: {
            object: {
                type: Object,
                required: true
            }
        },
        created(){
            // console.log(this.$route)
        },
        data: () => ({
            max_visible: 5,
        }),
        computed: {
            startPage() {
                // When on the first page
                if (this.object.current_page === 1) {
                    return 1;
                }
                // When on the last page
                if (this.object.current_page === this.object.last_page) {
                    return this.object.last_page-1;
                }
                // When in between
                return this.object.current_page - 1;
                },
            links () {
                const range = [];

                for (let i = this.startPage;
                    i <= Math.min(this.startPage + this.max_visible - 1, this.object.last_page);
                    i++ ) {
                    range.push(i);
                }

                return range;
            }
        },
        methods:{
            toPage(page){
                
            },
            nextPage (url) {
               
            },
            prevPage (url) {
            
            },
            firstPage(url){
                
            },
            lastPage(url){
                
            },
        }
    }
</script>

<style>

</style>