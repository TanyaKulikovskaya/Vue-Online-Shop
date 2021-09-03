<template>
  <li class="catalog-item">
    <router-link :to="{ name: 'product', params: { id: product_data.id} }">
      <img class="catalog-item__img"        
          :src="catalogItemImagePath" 
          :alt="catalogItemImageAlt"
        >
      <h2 class="catalog-item__name">{{ product_data.name | formattedTitle }}</h2>
      <p class="catalog-item__price">{{ product_data.price | currency}}</p>
    </router-link>
   </li>
</template>

<script>
import constants from '../../services/constants'

export default {
    name: "catalog-item",
    props: {
        product_data: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    data() {
        return {
            altText: constants.ALT_TEXT,
        }
    },
    computed: {
        catalogItemImagePath() {
            return require(`../../assets/images/${this.product_data.image}`)
        },
        catalogItemImageAlt() {
            return `${this.altText} ${this.product_data.name}`
        },
    }
}
</script>

<style lang="scss">
    .catalog-item {
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
        &:hover 
          &__price {
            color: $yellow;
            transition-duration: .3s;
        }
    }
</style>