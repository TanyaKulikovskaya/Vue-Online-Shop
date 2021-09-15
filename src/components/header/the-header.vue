<template>
   <header class="header">
        <router-link :to="{ name: 'catalog' }">
            <p class="header__logo">{{ headerLogoText }}</p>
        </router-link>
        <div class="header__actions">
            <div v-if ="!isLoggedIn">
                <router-link :to="{ name: 'login' }">
                    <span  class="header__login">{{ headerLoginText }}</span>
                </router-link>
                <router-link :to="{ name: 'register' }">
                    <span class="header__register">Register</span>
                </router-link>
            </div>
            <span class="header__logout"><a v-if ="isLoggedIn" @click="logout">Logout</a></span>
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
import { mapGetters } from 'vuex';

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
            isLoggedIn: 'IS_LOGGED_IN'
        }),
    },
    methods: {
        logout: function () {
            this.$store.dispatch('LOGOUT')
                .then(() => {
                    this.$router.push('/login')
                })
        },
    }
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
        &__login,
        &__register,
        &__logout {
            margin-right: $margin;
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