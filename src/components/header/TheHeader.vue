<template>
    <header class="v-header">
        <router-link to="/">
            <div class="v-header__logo">
                LOGO
            </div>
        </router-link>
         <router-link :to="{ name: 'cart' }">
            <div class="v-header__link-to-cart">
                Cart 
                    <v-counter-badge :count="CART.length" />
            </div>
        </router-link>
    </header>
</template>

<script>
import vCounterBadge from './v-counter-badge.vue'
import { mapGetters } from 'vuex'

export default {
    name: "the-header",
    components: {
        vCounterBadge,
    },
    computed: {
        ...mapGetters([
            'CART',
        ])
    },
}
</script>

<style lang="scss">
    .v-header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: $padding*3 0;
        &__link-to-cart {
            position: relative;
        }
    }
</style>