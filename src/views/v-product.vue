<template>
    <main v-if="!loadingProduct" class="v-product">
        <div class="v-product__header">
            <v-go-back />
        </div>
        <div class="v-product__body">
            <div class="v-product__img">
                <img 
                    :src="productWithImage.image" 
                    :alt="`Image of ${PRODUCT.name}`"
                >
            </div>
            <div class="v-product__info">
                <h2 class="v-product__name">{{ PRODUCT.name }}</h2>
                <p class="v-product__article">Article: {{ PRODUCT.id }}</p>
                <p class="v-product__price">Price: {{ PRODUCT.price | currency }}</p>
                <button 
                    class="v-product__add-to-cart-btn btn"
                    @click.prevent="addToCart"
                >
                    Add to cart
                </button>   
            </div>     
        </div>
    </main>       
</template>

<script>
import vGoBack from '../components/v-go-back.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'product',
    components: {
        vGoBack
    },
    data() {
        return {
            loadingProduct: false
        }
    },
    computed: {
        ...mapGetters([
            'PRODUCT',
        ]),
        productWithImage() {
            return {
                ...this.PRODUCT,
                image: this.PRODUCT.image && require(`../assets/images/${this.PRODUCT.image}`)
            }
        },
    },
    methods: {
        ...mapActions([
            'GET_PRODUCT_FROM_API',
            'ADD_TO_CART',
        ]),
        addToCart() {
            this.ADD_TO_CART(this.PRODUCT);
        },
        loadProduct() {
            this.loadingProduct = true;
            this.GET_PRODUCT_FROM_API(this.$route.params.id).then(() => this.loadingProduct = false)
        }
    },
    created() {
        this.loadProduct();
    },
    watch: {
        "$route.params.id": {
            handler() {
                if(this.$route.params.id !== undefined) {
                    this.loadProduct();
                }
            }
        }
    },
};
</script>

<style lang="scss">
    .v-product {
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
    }
</style>