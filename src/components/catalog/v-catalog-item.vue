<template>
  <li class="v-catalog-item">
    <router-link :to="{ name: 'product', params: { id: product_data.id}}">
      <img 
        class="v-catalog-item__img" 
        :src="require(`../../assets/images/${product_data.image}`)" 
        :alt="`Image of ${product_data.name}`">
      <div class="v-catalog-item__description">
        <h2 class="v-catalog-item__name">{{ product_data.name | formattedTitle }}</h2>
        <p class="v-catalog-item__price">{{ product_data.price | currency}}</p>
      </div>
    </router-link>
    <div class="v-catalog-item__footer">
       <button 
          class="v-catalog-item__add-to-cart-btn btn"
          @click.stop="addToCart">
          Add to cart
      </button>   
    </div>
     
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
        display: flex;
        flex-direction: column;
        box-shadow: 0 0 8px 0 #e0e0e0;
        padding: $padding $padding $padding*2 $padding;
        &__img {
          max-width: 100%;
          margin-bottom: $margin;
        }
        &__description {
            flex: 1 0 auto;
        }
        &__name {
          font-size: 1rem;
          font-weight: 400;
          height: 2rem;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 8;
          -webkit-box-orient: vertical;
          margin-bottom: $margin;
        }
        &__price {
          font-weight: 700;
          margin-bottom: $margin
        }
        &__footer {
          margin-top: auto;
        }
    }
</style>