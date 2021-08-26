<template>
  <li class="v-catalog-item">
    <router-link :to="{ name: 'product', params: { id: product_data.id}}">
      <img class="v-catalog-item__img"        
          :src="require(`../../assets/images/${product_data.image}`)" 
          :alt="`Image of ${product_data.name}`"
        >
      <h2 class="v-catalog-item__name">{{ product_data.name | formattedTitle }}</h2>
      <p class="v-catalog-item__price">{{ product_data.price | currency}}</p>
    </router-link>
   </li>
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
            this.$emit('addToCart', this.product_data);
        }
    }
}
</script>

<style lang="scss">
    .v-catalog-item {
        max-width: fit-content;
        padding-bottom: $padding;
        border: $border;
        background-color: $white;
        &__img {
          max-width: 300px;
          width: 100%;
          height: auto;
          margin-bottom: $margin;
        }
        &__name {
          font-size: 16px;
          font-weight: 400;
          margin-bottom: $margin;
        }
        &__price {
          font-weight: 700;
          transition-duration: .2s;
        }
        &:hover &__price {
            color: $yellow;
            transition-duration: .3s;
        }
    }
</style>