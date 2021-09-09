<template>
   <header class="header">
        <router-link :to="{ name: 'catalog' }">
            <p class="header__logo">{{ headerLogoText }}</p>
        </router-link>
        <router-link :to="{ name: 'cart' }">
            <div class="header__link-to-cart">
                <p>{{ headerCartText }}</p> 
                <the-header-cart-counter-badge :count="cart.length" />
            </div>
        </router-link>
    </header>
</template>

<script>
import constants from '../../services/constants';
import TheHeaderCartCounterBadge from './the-header-cart-counter-badge';
import { mapGetters } from 'vuex';

export default {
    name: "the-header",
    components: {
        TheHeaderCartCounterBadge,
    },
    data() {
        return {
            headerLogoText: constants.HEADER.LOGO_TEXT,
            headerCartText: constants.HEADER.CART_TEXT
        }
    },
    computed: {
        ...mapGetters({
            cart: 'CART',
        })
    },
}
</script>

<style lang="scss">
    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: $padding*3 $padding;
        border-bottom: $border;
        &__logo {
            font-size: 20px;
            line-height: 24px;
            letter-spacing: 2px;
        }
        &__link-to-cart {
            position: relative;
        }
        a:hover {
            color: $black;
            font-weight: 500;
        }
    }
</style>