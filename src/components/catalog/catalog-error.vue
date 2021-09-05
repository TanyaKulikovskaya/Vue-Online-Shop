<template>
  <div class="catalog-error" :style="cssProp">
      <div class="catalog-error__content">
            <p class="catalog-error__title">{{ titleErrorLoadingCatalog }},</p>
            <p class="catalog-error__message">{{ messageErrorLoadingCatalog }}...</p>
      </div>
    </div>
</template>

<script>
import constants from '../../services/constants'

export default {
    name: 'catalog-error',
    data() {
        return {
            titleErrorLoadingCatalog: constants.ERROR_LOADING_CATALOG.TITLE,
            messageErrorLoadingCatalog: constants.ERROR_LOADING_CATALOG.MESSAGE,
            cssProp: {
                backgroundImage: `url(${require('../../assets/images/error-bg.jpg')})`
            }
        }
    }
}
</script>

<style lang="scss">
    .catalog-error {
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