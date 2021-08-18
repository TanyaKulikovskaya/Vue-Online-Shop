<template>
  <div class="v-cart">
      <h1>Cart</h1>
      <p v-if="!CART.length">There are no products in cart</p>
      <v-cart-item 
        v-for="(item, index) in CART"
        :key="item.id"
        :cart_item_data="item"
        @deleteFromCart="deleteFromCart(index)"
        @decrement="decrement(index)"
        @increment="increment(index)"
      />
      <div class="v-cart__total">
          <p><b>Total: </b>{{ cartTotalCost | currency }}</p>
      </div>
  </div>
  </template>

<script>
import vCartItem from './v-cart-item.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
    name: "v-cart",
    components: {
        vCartItem
    },
    computed: {
        ...mapGetters([
            'CART',
        ]),
        cartTotalCost() {
            return this.CART.map(item => (item.price*item.quantity)).reduce((sum, el) => sum + el, 0)
        }
    },
    methods: {
        ...mapActions([
            'DELETE_FROM_CART',
            'DECREMENT_CART_ITEM',
            'INCREMENT_CART_ITEM'
        ]),
        deleteFromCart(index) {
            this.DELETE_FROM_CART(index);
        },
        decrement(index) {
            this.DECREMENT_CART_ITEM(index);
        },
        increment(index) {
            this.INCREMENT_CART_ITEM(index);
        }
    }
}
</script>

<style lang="scss">
    .v-cart {
        margin-bottom: 80px;
        position: relative;
        &__total {
            padding: $padding*2 $padding*3;
            background-color: $gray;
            font-size: 28px;
        }
    }
</style>