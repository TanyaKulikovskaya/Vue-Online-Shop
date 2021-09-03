<template>
  <main class="cart">
      <div class="cart__header">
          <go-back />
          <h1>{{ cartTitleText }}</h1>
      </div>
      <p 
        class="cart__label"
        v-if="!cart.length"
        >
        {{ emptyCartSubtitleText }}
      </p>
      <cart-item 
        v-for="(item, index) in cart"
        :key="item.id"
        :cart_item_data="item"
        @deleteFromCart="deleteFromCart(index)"
        @decrementItem="decrement(index)"
        @incrementItem="increment(index)"
        />
      <div>
          <p 
            class="cart__total"
            v-if="cart.length"
            >
              <b>{{ totalCartTitleText }}: </b>
              <span>{{ cartTotalCost | currency }}</span>
          </p>
          <router-link v-else to="/">
            <span class="cart__link">{{ btnShopText }}</span>
          </router-link>
      </div>
  </main>
</template>

<script>
import constants from '../services/constants'
import CartItem from '../components/cart/cart-item.vue'
import GoBack from '../components/go-back.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
    name: "cart",
    components: {
        CartItem,
        GoBack
    },
    data() {
        return {
            cartTitleText: constants.CART.CART_TITLE_TEXT,
            emptyCartSubtitleText: constants.CART.EMPTY_CART_SUBTITLE_TEXT,
            totalCartTitleText: constants.CART.TOTAL_CART_TITLE_TEXT,
            btnShopText: constants.CART.BTN_SHOP_TEXT,
        }
    },
    computed: {
        ...mapGetters({
            cart: 'CART',
        }),
        cartTotalCost() {
            return this.cart.map(item => (item.price*item.quantity)).reduce((sum, el) => sum + el, 0)
        }
    },
    methods: {
        ...mapActions({
            deleteCartItemFromCart:'DELETE_CART_ITEM_FROM_CART',
            decrementCartItem: 'DECREMENT_CART_ITEM',
            incrementCartItem:'INCREMENT_CART_ITEM'
        }),
        deleteFromCart(index) {
            this.deleteCartItemFromCart(index);
        },
        decrement(index) {
            this.decrementCartItem(index);
        },
        increment(index) {
            this.incrementCartItem(index);
        } 
    }
}
</script>

<style lang="scss">
    .cart {
        &__header {
            position: relative;
        }
        &__label {
            margin-bottom: $margin*4;
        }
        &__total {
            padding: $padding*2 $padding*3;
            background-color: $gray;
            font-size: 22px;
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