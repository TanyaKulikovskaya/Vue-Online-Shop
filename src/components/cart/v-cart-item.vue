<template>
  <div class="v-cart-item">
      <router-link :to="{ name: 'product', params: { id: cart_item_data.id}}">
        <img 
            class="v-cart-item__img" 
            :src=" require(`../../assets/images/${cart_item_data.image}`)" 
            :alt="`Image of ${cart_item_data.name}`"
        >
      </router-link>
      <div class="v-cart-item__info">
          <p><b>{{ cart_item_data.name | formattedTitle }}</b></p>
          <span>{{ cart_item_data.price | currency }}</span>
          <span>Article: {{ cart_item_data.id }}</span>
      </div>
      
       <div class="v-cart-item__quantity">
          <p>Quantity:</p> 
          <span 
            class="quantity-btn" 
            @click="decrementItem"
          >
            -
          </span>
          <span>{{ cart_item_data.quantity }}</span>
          <span 
            class="quantity-btn" 
            @click="incrementItem"
          >
            +
          </span>
       </div>
      <button
        class="v-cart-item__delete-from-cart-btn btn"
        @click.prevent="deleteFromCart"
      >
        Delete
      </button>
  </div>
</template>

<script>

export default {
    name: 'v-cart-item',
    props: {
        cart_item_data: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    methods: {
        decrementItem() {
            this.$emit('decrement');
        },
        incrementItem() {
            this.$emit('increment');
        },
        deleteFromCart() {
            this.$emit('deleteFromCart')
        }
    },
}
</script>

<style lang="scss">
    .v-cart-item {
        display: flex;
        align-items: center;
        border-bottom: $border;
        padding: $padding*2;
        margin-bottom: $margin*2;
        background-color: $white;
        &__img {
            max-width: 90px;
        }
        &__info {
            flex-basis: 45%;
            display: flex;
            flex-direction: column;
        }
        &__quantity {
            flex-basis: 30%;
        }
        .quantity-btn {
            cursor: pointer;
        }
        &__delete-from-cart-btn {
            background-color: $light-gray;
            &:hover {
                background-color: $gray;
                color: $white;
            }
        }
    }
    @media screen and (max-width: 639px) {
        .v-cart-item {
            flex-direction: column;
            &__img {
                max-width: 180px;
                margin-bottom: $margin;
            }
            &__info {
                flex-basis: 100%;
                margin-bottom: $margin*2;
            }
            &__quantity {
                flex-basis: 100%;
                margin-bottom: $margin*2;
                span {
                    font-size: 20px;
                }
            }
        }
    }
</style>