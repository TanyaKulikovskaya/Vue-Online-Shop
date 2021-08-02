<template>
    <div class="v-catalog">
        <router-link :to="{name: 'cart', params: {cart_data: CART}}">
            <div class="v-catalog__link-to-cart">
                Cart 
                    <v-counter-badge :count="CART.length" />
            </div>
        </router-link>
        <h1>Catalog</h1>
        <v-select 
            :options="categories"
            :selected="selected"
            @select="sortByCategories"
        />
        <div class="v-catalog__list">
            <v-catalog-item 
                v-for="product in filteredProducts"
                :key="product.id"
                :product_data="product"
                @addToCart="addToCart"
            />
        </div>
    </div>
</template>

<script>
import vCatalogItem from './v-catalog-item.vue'
import { mapActions, mapGetters } from 'vuex'
import vSelect from '../v-select.vue'
import vCounterBadge from '../v-counter-badge.vue'

export default {
    name: "v-catalog",
    components: {
        vCatalogItem,
        vSelect,
        vCounterBadge
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
        ...mapGetters([
            'PRODUCTS',
            'CART'
        ]),
        filteredProducts() {
            if(this.sortedProducts.length) {
                return this.sortedProducts;
            } else {
                return this.PRODUCTS;
            }
        },
    },
    methods: {
        ...mapActions([
            'GET_PRODUCTS_FROM_API',
            'ADD_TO_CART',
        ]),
        addToCart(data) {
            this.ADD_TO_CART(data);
        },
        sortByCategories(category) {
            this.sortedProducts = [];
            this.PRODUCTS.map(item => {
                if(item.category === category.name) {
                    this.sortedProducts.push(item);
                }
            });
            this.selected = category.name;
        },

    },
    mounted() {
        this.GET_PRODUCTS_FROM_API()
            .then((response) => {
                if(response.data) {
                    console.log('Data arrived');
                }
            })
    }
}
</script>

<style lang="scss">
    .v-catalog {
        &__list {
            display: grid;
            grid-template-columns: repeat(3,1fr);
            grid-gap: 32px;
        }
        &__link-to-cart {
            position: absolute;
            top: 20px;
            right: 20px;
            padding: $padding*2;
        }
    }
</style>
