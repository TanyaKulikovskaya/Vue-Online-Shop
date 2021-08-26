<template>
    <div class="v-catalog">
        <h1 class="v-catalog__title">Catalog</h1>
        <v-select 
            :options="categories"
            :selected="selected"
            @select="sortByCategories"
        />
        <transition-group tag="ul" class="v-catalog__list" name="list">
            <v-catalog-item 
                v-for="product in filteredProducts"
                :key="product.id"
                :product_data="product"
                @addToCart="addToCart"
            />
        </transition-group>
    </div>
</template>

<script>
import vCatalogItem from './v-catalog-item.vue'
import { mapActions, mapGetters } from 'vuex'
import vSelect from './v-select.vue'


export default {
    name: "v-catalog",
    components: {
        vCatalogItem,
        vSelect
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
    created() {
        this.GET_PRODUCTS_FROM_API()
    }
}
</script>

<style lang="scss">
    .v-catalog {
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
