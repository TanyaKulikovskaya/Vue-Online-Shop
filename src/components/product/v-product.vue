<template>
    <div class="v-product">
        <div class="v-product__img">
            <img 
                :src="productWithImage.image" 
                :alt="`Image of ${PRODUCT.name}`">
        </div>
        <div class="v-product__info">
            <h2 class="v-product__name">{{ PRODUCT.name }}</h2>
            <p class="v-product__article">Article: {{ PRODUCT.id }}</p>
            <p class="v-product__price">Price: $ {{ PRODUCT.price }}</p>
            <button 
      class="v-catalog-item__add-to-cart-btn btn"
      @click="addToCart">
      Add to cart
    </button>   
        </div>
         <router-link :to="{name: 'cart', params: {cart_data: CART}}">
            <div class="v-catalog__link-to-cart">
                Cart 
                    <v-counter-badge :count="CART.length" />
            </div>
        </router-link>
       
     </div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex'
import vCounterBadge from '../v-counter-badge.vue'

export default {
    name: 'product',
    components: {
        vCounterBadge
    },
    computed: {
        ...mapGetters([
            'PRODUCT',
            'CART'
        ]),
        productWithImage() {
            return {
                ...this.PRODUCT,
                image: this.PRODUCT.image && require(`../../assets/images/${this.PRODUCT.image}`)
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
            this.$set(this.PRODUCT, 'quantity', 1)
        }
    },
    mounted() {
        this.GET_PRODUCT_FROM_API(this.$route.params.id)
            .then((response) => {
                if(response.data) {
                    console.log('Data arrived');
                }
            })
    },
    watch: {
        "$route.params.id": {
            handler() {
                if(this.$route.params.id !== undefined) {
                    this.GET_PRODUCT_FROM_API(this.$route.params.id)
                }
            }
        }
    },
};
</script>

<style lang="scss">
    .v-product {
        display: flex;
        padding: $padding*2 0;
        justify-content: space-between;
        &__img {
            flex-basis: 40%;
            img {
                max-width: 100%;
            }
        }
        &__info {
            flex-basis: 50%;
            text-align: left;
        }
    }
</style>