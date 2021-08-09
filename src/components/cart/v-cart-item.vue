<template>
  <div class="v-cart-item">
      <img 
        class="v-cart-item__img" 
        :src=" require(`../../assets/images/${cart_item_data.image}`)" 
        :alt="`Image of ${cart_item_data.name}`">
      <div class="v-cart-item__info">
          <p><b>{{ cart_item_data.name | formattedTitle }}</b></p>
          <span>{{ cart_item_data.price | currency }}</span>
          <span>Article: {{ cart_item_data.id }}</span>
      </div>
       <div class="v-cart-item__quantity">
          <p>Quantity:</p> 
          <span>
              <span 
                class="quantity-btn" 
                @click="decrementItem">
                -
                </span>
                    {{ cart_item_data.quantity }}
               <span 
                class="quantity-btn" 
                @click="incrementItem">
                +
               </span>
          </span>
       </div>
      <button
        class="btn"
        @click="deleteFromCart">
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
        box-shadow: 0 0 8px 0 #e0e0e0;
        padding: $padding*2;
        margin-bottom: $margin*2;
        &__img{
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
        .quantity-btn{
            cursor: pointer;
        }
    }
</style>