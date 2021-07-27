<template>
  <div class="v-cart">
      <router-link :to="{name: 'catalog'}">
          <div class="v-cart__link-to-catalog">
          Back to catalog
          </div>
      </router-link>
      <h1>Cart</h1>
      <p v-if="!cart_data.length">There are no products in cart</p>
      <v-cart-item 
         v-for="(item, index) in cart_data"
        :key="item.article"
        :cart_item_data="item"
        @deleteFromCart="deleteFromCart(index)"
        @decrement="decrement(index)"
        @increment="increment(index)"
      />
      <div class="v-cart__total">
          <p>Total: {{ cartTotalCost }}</p>
      </div>
  </div>
  </template>

<script>
import vCartItem from './v-cart-item.vue'
import { mapActions } from 'vuex'

export default {
    name: "v-cart",
    components: {
        vCartItem
    },
    props: {
        cart_data: {
            type: Array,
            default() {
                return []
            }
        }
    },
    computed: {
        cartTotalCost() {
            let result = [];
            this.cart_data.map(item => result.push(item.price*item.quantity));
            result = result.reduce((sum, el) => sum + el, 0)
            return result;
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
    },

}
</script>

<style lang="scss">
    .v-cart {
        margin-bottom: 80px;
        &__link-to-catalog {
            position: absolute;
            top: 10px;
            right: 10px;
            padding: $padding*2;
        }
        &__total {
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            padding: $padding*2 $padding*3;
            text-align: left;
            background-color: rgb(105, 106, 173);
            color: #fff;
            font-size: 28px;
        }
    }
</style>