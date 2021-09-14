<template>
   <header class="header">
        <router-link :to="{ name: 'catalog' }">
            <p class="header__logo">{{ headerLogoText }}</p>
        </router-link>
        <div class="header__actions">
            <router-link :to="{ name: 'login' }">
                <span class="header__login">{{ headerLoginText }}</span>
            </router-link>
            <router-link :to="{ name: 'cart' }">
                <div class="header__link-to-cart">
                    <span>{{ headerCartText }}</span> 
                    <the-header-cart-counter-badge :count="cart.length" />
                </div>
            </router-link>
        </div>
    </header>
</template>

<script>
import constants from '../../services/constants';
import TheHeaderCartCounterBadge from './the-header-cart-counter-badge';
import { mapGetters, mapActions } from 'vuex';

export default {
    name: "the-header",
    components: {
        TheHeaderCartCounterBadge
    },
    data() {
        return {
            headerLogoText: constants.HEADER.LOGO_TEXT,
            headerCartText: constants.HEADER.CART_TEXT,
            headerLoginText: constants.HEADER.LOGIN_TEXT
        }
    },
    computed: {
        ...mapGetters({
            cart: 'CART',
            isAuthenticated: 'IS_AUTHENTICATED'
        })
    },
    methods: {
        ...mapActions({
            logOut: 'LOGOUT'
        }),
        async logout() {
            await this.logOut;
            this.$router.push('/')
        }
    },
}
</script>

<style lang="scss">
    .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: $padding*3 $padding;
        border-bottom: $border;
        &__actions {
            display: flex;
        }
        &__logo {
            font-size: 20px;
            line-height: 24px;
            letter-spacing: 2px;
        }
        &__login {
            margin-right: $margin*2;
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