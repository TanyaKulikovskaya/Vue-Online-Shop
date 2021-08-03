<template>
  <div class="v-catalog-item">
    <router-link :to="{ name: 'product', params: { id: product_data.id}}" target='_blank'>
      <img 
        class="v-catalog-item__img" 
        :src="require(`../../assets/images/${product_data.image}`)" 
        :alt="`Image of ${product_data.name}`">
      <p class="v-catalog-item__name">{{ product_data.name }}</p>
      <p class="v-catalog-item__price">$ {{ product_data.price }}</p>
    </router-link>
    <button 
      class="v-catalog-item__add-to-cart-btn btn"
      @click="addToCart">
      Add to cart
    </button>    
  </div>
</template>

<script>
export default {
    name: "v-catalog-item",
    props: {
        product_data: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    methods: {
        addToCart() {
            this.$emit('addToCart', this.product_data)
        }
    },
    mounted() {
        this.$set(this.product_data, 'quantity', 1)
    }
}
</script>

<style lang="scss">
    .v-catalog-item {
        box-shadow: 0 0 8px 0 #e0e0e0;
        padding: $padding*2;
        &__img {
          width: 100%;
          max-height: 290px;
          object-fit: cover;
        }
        &__name {
          font-weight: 700;
        }
    }
</style>