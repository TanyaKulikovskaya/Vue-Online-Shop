<template>
    <div>
        <main v-if="isLoadingProduct">
            <product-skeleton />
        </main>
        <main v-else-if="isErrorLoadingProduct">Error</main>
        <main v-else class="product">
            <div class="product__header">
                <go-back />
            </div>
            <div class="product__body">
                <div class="product__img">
                    <img 
                        :src="productImagePath.image" 
                        :alt="productImageAlt"
                        >
                </div>
                <div class="product__info">
                    <h2 class="product__name">{{ product.name }}</h2>
                    <p class="product__article">{{ productArticle }}</p>
                    <p class="product__price">
                        <span>{{ priceText }}: </span> 
                        <span>{{ product.price | currency }}</span>
                    </p>
                    <button 
                        class="product__add-to-cart-btn btn"
                        @click="addProductToCart"
                        >
                        {{ btnAddToCartText }}
                    </button>
                </div> 
            </div>
            <product-tabs>
                    <product-tab
                        :selected="true"
                        label="description"
                        >
                        {{ product.description }}
                    </product-tab>
                    <product-tab label="dimensions">
                        <ul>
                            <li 
                                v-for="dimension in product.dimensions"
                                :key="dimension.id"
                                class="product-tabs__item"
                                >
                                <dt>{{ dimension.name }}</dt>
                                <dd>{{ dimension.unit }}</dd>
                                <dd>{{ dimension.value }}</dd>
                            </li>
                        </ul>
                    </product-tab>
                    <product-tab label="warranty">
                        {{ product.warranty }}
                    </product-tab>
            </product-tabs>
        </main> 
    </div>
</template>

<script>
import constants from '../services/constants'
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
    data() {
        return {
            altText: constants.ALT_TEXT,
            articleText: constants.PRODUCT.ART_TEXT,
            priceText: constants.PRODUCT.PRICE_TEXT,
            btnAddToCartText: constants.PRODUCT.BTN_ADD_TO_CART_TEXT,
            description: constants.PRODUCT.TAB_LABELS.DESCRIPTION_TEXT,
            dimensions: constants.PRODUCT.TAB_LABELS.DIMENSIONS_TEXT,
            warranty: constants.PRODUCT.TAB_LABELS.WARRANTY_TEXT
        }
    },
    computed: {
        ...mapGetters({
            product: 'PRODUCT',
            isLoadingProduct: 'IS_LOADING_PRODUCT',
            isErrorLoadingProduct: 'IS_ERROR_LOADING_PRODUCT'
        }),
        productImagePath() {
            return {
                ...this.product,
                image: this.product.image && require(`../assets/images/${this.product.image}`)
            }
        },
        productImageAlt() {
            return `${this.altText} ${this.product.name}`
        },
        productArticle() {
            return `${this.articleText}: ${this.product.id}`
        }
    },
    methods: {
        ...mapActions({
            getProductFromApi: 'GET_PRODUCT_FROM_API',
            addToCart: 'ADD_TO_CART',
        }),
        addProductToCart() {
            this.addToCart(this.product);
        }
    },
    created() {
        this.getProductFromApi(this.$route.params.id);
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
        &__img {
            position: relative;
            background-color: $light-gray;
            padding-bottom: 60%;
            flex: 0 0 40%;
            height: 0;
            overflow: hidden;
            box-shadow: $box-shadow;
            img {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
            }  
        }
        &__info {
            flex: 0 0 60%;
            padding: $padding*2 $padding*4;
            text-align: left;
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
            max-width: 260px;
            width: 100%;
            dt {
                width: 50%;
            }
            dd {
                width: 25%;
                text-align: right;
            }
            &:not(:last-child) {
                margin-bottom: $margin;
            }
        }
        @media screen and (max-width: 639px) {
            &__body {
                padding-left: $padding*2;
                padding-right: $padding*2;
            }
            &__img {
                margin-bottom: $margin*2;
            }
            &__info {
                flex: 0 0 100%;
                padding: 0;
            }
        }

    }
</style>