<template>
  <div class="cart-item">
      <router-link :to="{ name: 'product', params: { id: cart_item_data.id}}">
        <img 
            class="cart-item__img" 
            :src="cartItemImagePath" 
            :alt="cartItemImageAlt"
            >
      </router-link>
      <div class="cart-item__info">
          <p><b>{{ cart_item_data.name | formattedTitle }}</b></p>
          <span>{{ cart_item_data.price | currency }}</span>
          <span>{{ cartItemArticle }}</span>
      </div>
      
       <div class="cart-item__quantity">
          <p>{{ qtyText }}</p> 
          <span 
            class="quantity-btn" 
            @click="handleClick('decrementItem')"
            >
            {{ decText }}
          </span>
          <span>{{ cart_item_data.quantity }}</span>
          <span 
            class="quantity-btn" 
            @click="handleClick('incrementItem')"
            >
            {{ incText }}
          </span>
       </div>
      <button
        class="cart-item__delete-from-cart-btn btn"
        @click="handleClick('deleteFromCart')"
        >
        {{ deleteText }}
      </button>
  </div>
</template>

<script>
import constants from '../../services/constants';

export default {
    name: 'cart-item',
    props: {
        cart_item_data: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    data() {
        return {
            qtyText: constants.CART_ITEM.QUANTITY.QTY_TEXT,
            decText: constants.CART_ITEM.QUANTITY.DEC_TEXT,
            incText: constants.CART_ITEM.QUANTITY.INC_TEXT,
            altText: constants.CART_ITEM.ALT_TEXT,
            articleText: constants.CART.ITEM_ART_TEXT,
            deleteText: constants.CART.ITEM_DEL_TEXT
        }
    },
    computed: {
        cartItemImagePath() {
            return require(`../../assets/images/${this.cart_item_data.image}`)
        },
        cartItemImageAlt() {
            return `${this.altText} ${this.cart_item_data.name}`
        },
        cartItemArticle() {
            return `${this.articleText}: ${this.cart_item_data.id}`
        }
    },
    methods: {
        handleClick(cartItemAction) {
            this.$emit(cartItemAction)
        }
    }
}
</script>

<style lang="scss">
    .cart-item {
        display: flex;
        align-items: center;
        border-bottom: $border;
        padding: $padding*2;
        margin-bottom: $margin*2;
        background-color: $white;
        &__img {
            background-color: $light-gray;
            width: 90px;
            height: 135px;
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
        .cart-item {
            flex-direction: column;
            &__img {
                width: 180px;
                height: 270px;
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