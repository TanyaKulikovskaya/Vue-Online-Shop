<template>
    <div>
        <main v-if="IS_LOADING_PRODUCT">
            <product-skeleton />
        </main>
        <main v-else-if="IS_ERROR_LOADING_PRODUCT">Error</main>
        <main v-else class="product">
            <div class="product__header">
                <go-back />
            </div>
            <div class="product__body">
                <div class="product__img">
                    <img 
                        :src="productWithImage.image" 
                        :alt="`Image of ${PRODUCT.name}`"
                    >
                </div>
                <div class="product__info">
                    <h2 class="product__name">{{ PRODUCT.name }}</h2>
                    <p class="product__article">Article: {{ PRODUCT.id }}</p>
                    <p class="product__price">Price: {{ PRODUCT.price | currency }}</p>
                    <button 
                        class="product__add-to-cart-btn btn"
                        @click.prevent="addToCart"
                    >
                        Add to cart
                    </button>
                </div> 
            </div>
            <product-tabs>
                    <product-tab
                        :selected="true"
                        label="DESCRIPTION"
                        >
                        {{ PRODUCT.description }}
                    </product-tab>
                    <product-tab label="DIMENSIONS">
                        <ul>
                            <li 
                                v-for="dimension in PRODUCT.dimensions"
                                :key="dimension.id"
                                class="product-tabs__item"
                                >
                                <dt>{{ dimension.name }} ({{ dimension.unit }}) : </dt>
                                <dd>{{ dimension.value }}</dd>
                            </li>
                        </ul>
                    </product-tab>
                    <product-tab label="WARRANTY">
                        {{ PRODUCT.warranty }}
                    </product-tab>
            </product-tabs>
        </main> 
    </div>
</template>

<script>
import GoBack from '../components/go-back.vue'
import ProductTabs from '../components/product/product-tabs.vue'
import ProductTab from '../components/product/product-tab.vue'
import ProductSkeleton from '../components/product/product-skeleton.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'product',
    components: {
        GoBack,
        ProductTabs,
        ProductTab,
        ProductSkeleton
    },
    computed: {
        ...mapGetters([
            'PRODUCT',
            'IS_LOADING_PRODUCT',
            'IS_ERROR_LOADING_PRODUCT'
        ]),
        productWithImage() {
            return {
                ...this.PRODUCT,
                image: this.PRODUCT.image && require(`../assets/images/${this.PRODUCT.image}`)
            }
        }
    },
    methods: {
        ...mapActions([
            'GET_PRODUCT_FROM_API',
            'ADD_TO_CART',
        ]),
        addToCart() {
            this.ADD_TO_CART(this.PRODUCT);
        }
    },
    created() {
        this.GET_PRODUCT_FROM_API(this.$route.params.id)
    }
};
</script>

<style lang="scss">
    .product {
        &__header {
            position: relative;
            min-height: 40px;
        }
        &__body {
            display: flex;
            flex-wrap: wrap;
            padding-top: $padding*2;
            padding-bottom: $padding*2;
        }
        @media screen and (max-width: 639px) {
            &__body {
                padding-left: $padding*2;
                padding-right: $padding*2;
            }
        }
        &__img {
            flex: 0 0 40%;
            box-shadow: $box-shadow;
            img {
                max-width: 100%;
                height: auto;
                display: block;
            }
        }
        @media screen and (max-width: 639px) {
            &__img {
                flex: 0 0 100%;
            }
        }
        &__info {
            flex: 0 0 60%;
            padding: $padding*2 $padding*4;
            text-align: left;
        }
        @media screen and (max-width: 639px) {
            &__info {
                flex: 0 0 100%;
                padding: $padding*2 0;
            }
        }
        &__name {
            text-transform: uppercase;
            font-size: 20px;
            margin-bottom: $margin*2;
        }
        &__article {
            margin-bottom: $margin;
        }
        &__price {
            margin-bottom: $margin*4;
        }
        &__add-to-cart-btn {
            background-color: $main-font-color;
            color: $white;
            &:hover {
                background-color: $light-gray;
                color: $black;
            }
        }
        .product-tabs__item {
            display: flex;
            max-width: 300px;
            width: 100%;
            dt,
            dd {
                width: 50%;
            }
            &:not(:last-child) {
                margin-bottom: $margin;
            }
        }

    }
</style>