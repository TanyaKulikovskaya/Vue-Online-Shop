<template>
    <div class="v-product">
        <div class="v-product__img">
            <img 
                :src="productWithImage.image" 
                :alt="`Image of ${PRODUCT.name}`">
        </div>
        <div class="v-product__info">
           <h1>{{ PRODUCT.name }}</h1>
            <p class="v-product__name">{{ PRODUCT.name }}</p>
            <p class="v-product__price">$ {{ PRODUCT.price }}</p>
        </div>
     </div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'product',
    computed: {
        ...mapGetters([
            'PRODUCT',
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
        ]),
    },
    mounted() {
        this.GET_PRODUCT_FROM_API(this.$route.params.id)
            .then((response) => {
                if(response.data) {
                    console.log('Data arrived');
                }
            })
    }   
};
</script>

<style lang="scss">
    .v-product {
        display: flex;
    }
</style>