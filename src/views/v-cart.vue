<template>
  <main class="v-cart">
      <div class="v-cart__header">
          <v-go-back />
          <h1>Cart</h1>
      </div>
      <p 
        class="v-cart__label"
        v-if="!CART.length"
      >
        There are no products in cart
      </p>
      <v-cart-item 
        v-for="(item, index) in CART"
        :key="item.id"
        :cart_item_data="item"
        @deleteFromCart="deleteFromCart(index)"
        @decrement="decrement(index)"
        @increment="increment(index)"
        />
      <div>
          <p 
            class="v-cart__total"
            v-if="CART.length"
            >
              <b>Total: </b>{{ cartTotalCost | currency }}
          </p>
          <router-link v-else to="/">
            <span class="v-cart__link">Shop now</span>
          </router-link>
      </div>
  </main>
</template>

<script>
import vCartItem from '../components/cart/v-cart-item.vue'
import vGoBack from '../components/v-go-back.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
    name: "v-cart",
    components: {
        vCartItem,
        vGoBack
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
        &__header {
            position: relative;
        }
        &__label {
            margin-bottom: $margin*4;
        }
        &__total {
            padding: $padding*2 $padding*3;
            background-color: $gray;
            font-size: 28px;
        }
        &__link {
            padding: $padding $padding*3;
            background-color: $yellow;
            transition-duration: .3s;
            &:hover {
                background-color: $main-font-color;
                color: $main-bg-color;
                transition-duration: .3s;
            }
        }
    }
</style>