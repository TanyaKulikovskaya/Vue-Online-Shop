<template>
    <header class="header">
        <router-link to="/">
            <p class="header__logo">
                FUNIRO
            </p>
        </router-link>
         <router-link :to="{ name: 'cart' }">
            <div class="header__link-to-cart">
                <p>Cart</p> 
                <the-header-cart-counter-badge :count="CART.length" />
            </div>
        </router-link>
    </header>
</template>

<script>
import TheHeaderCartCounterBadge from './the-header-cart-counter-badge'
import { mapGetters } from 'vuex'

export default {
    name: "the-header",
    components: {
        TheHeaderCartCounterBadge,
    },
    computed: {
        ...mapGetters([
            'CART',
        ])
    },
}
</script>

<style lang="scss">
    .header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: $padding*3 $padding;
        border-bottom: $border;
        &__logo {
            font-size: 20px;
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