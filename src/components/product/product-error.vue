<template>
  <div class="product-error" :style="cssProp">
      <div class="product-error__content">
            <p class="product-error__title">{{ titleErrorLoadingProduct }},</p>
            <p class="product-error__message">{{ messageErrorLoadingProduct }}...</p>
      </div>
    </div>
</template>

<script>
import constants from '../../services/constants';

export default {
    name: 'product-error',
    data() {
        return {
            titleErrorLoadingProduct: constants.ERROR_LOADING_PRODUCT.TITLE_TEXT,
            messageErrorLoadingProduct: constants.ERROR_LOADING_PRODUCT.MESSAGE_TEXT,
            cssProp: {
                backgroundImage: `url(${require('../../assets/images/error-bg.jpg')})`
            }
        }
    }
}
</script>

<style lang="scss">
    .product-error {
        min-height: 80vh;
        margin-top: $margin*2;
        background-repeat: no-repeat;
        background-position: bottom right;
        background-size: cover;
        &__content {
            text-align: left;
            max-width: 320px;
            padding: $padding*4 $padding*2;
        }
        &__title {
            font-size: 28px;
            margin-bottom: $margin;
        }
        &__message {
            font-size: 22px;
        }
    }
</style>