<template>
  <span v-if="count > 0" class="v-cart-counter-badge">
    {{ count }}
  </span>
</template>

<script>
export default {
    name: 'v-cart-counter-badge',
    props: ['count'],
}
</script>

<style>
    .v-cart-counter-badge {
        position: absolute;
        top: 3px;
        right: -3px;
        height: 20px;
        width: 20px;
        border-radius: 50%;
        background-color: #e0e0e0;
        font-weight: 500;
        font-size: 12px;
        line-height: 20px;
    }
</style>