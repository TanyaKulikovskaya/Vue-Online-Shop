<template>
    <main class="catalog">
        <h1 class="catalog__title">Catalog</h1>
        <div>
            <div v-if="isLoadingProducts">
                <catalog-skeleton />
            </div>
            <div v-else-if="isErrorLoadingProducts">
                error
            </div>
            <section v-else>
                <catalog-select
                    :options="categories"
                    :selected="selected"
                    @select="sortByCategories"
                    />
                <transition-group tag="ul" class="catalog__list" name="list">
                    <catalog-item 
                        v-for="product in filteredProducts"
                        :key="product.id"
                        :product_data="product"
                        />
                </transition-group>
            </section>
        </div>
    </main>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import CatalogItem from '../components/catalog/catalog-item.vue'
import CatalogSelect from '../components/catalog/catalog-select.vue'
import CatalogSkeleton from '../components/catalog/catalog-skeleton.vue'

export default {
    name: "catalog",
    components: {
        CatalogItem,
        CatalogSelect,
        CatalogSkeleton
    },
    data() {
        return {
            categories: [
                {name: 'All', value: 'ALL'},
                {name: 'Furniture', value: 'FURNITURE'},
                {name: 'Decor', value: 'DECOR'},
            ],
            selected: 'All',
            sortedProducts: []
        }
    },
    computed: {
        ...mapGetters({
            products: 'PRODUCTS',
            isLoadingProducts: 'IS_LOADING_PRODUCTS',
            isErrorLoadingProducts: 'IS_ERROR_LOADING_PRODUCTS'
        }),
        filteredProducts() {
            return this.sortedProducts.length ? this.sortedProducts : this.products;
        }
    },
    methods: {
        ...mapActions({
            getProductsFromApi: 'GET_PRODUCTS_FROM_API'
            
        }),
        sortByCategories(category) {
            this.sortedProducts = [];
            this.products.map(item => {
                if(item.category === category.name) {
                    this.sortedProducts.push(item);
                }
            });
            this.selected = category.name;
        },

    },
    created() {
        this.getProductsFromApi();
    }
}
</script>

<style lang="scss">
    .catalog {
        &__title {
            padding-top: $padding*2;
            margin: 0 0 $margin*2;
        }
        &__list {
            display: grid;
            grid-template-columns: repeat(auto-fill, 242px);
            gap: 36px 18px;
            justify-content: center;
        }
    }
    .list {
        position: relative;
        backface-visibility: hidden;
        z-index: 1;
        &-move {
            transition: all .6s ease-in-out .05s;
        }
        &-enter-active {
            transition: all .4s ease-out;
        }
        &-leave-active {
            transition: all .2s ease-in;
            position: absolute;
            z-index: 0;
        }
        &-enter,
        &-leave-to {
            opacity: 0;
        }
        &-enter {
            transform: scale(0.9);
        }
    }
</style>
