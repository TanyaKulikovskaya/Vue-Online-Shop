<template>
    <main class="catalog">
        <h1 class="catalog__title">Catalog</h1>
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
    </main>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import CatalogItem from '../components/catalog/catalog-item.vue'
import CatalogSelect from '../components/catalog/catalog-select.vue'

export default {
    name: "catalog",
    components: {
        CatalogItem,
        CatalogSelect
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
            products: 'PRODUCTS'
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
        position: relative;
        &__title {
            padding-top: $padding*2;
            margin: 0 0 $margin*2;
        }
        &__list {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
            grid-gap: 28px;
            justify-items: center;
        }
        &__link-to-cart {
            position: absolute;
            top: 0px;
            right: 0px;
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
