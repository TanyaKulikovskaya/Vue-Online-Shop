<template>
  <span v-if="count > 0" class="v-counter-badge">
    {{ count }}
  </span>
</template>

<script>
export default {
    name: 'v-counter-badge',
    props: {
        count: Number
    }
}
</script>

<style lang="scss">
    .v-counter-badge {
        position: absolute;
        top: -12px;
        right: -20px;
        height: 20px;
        width: 20px;
        border-radius: 50%;
        background-color: $yellow;
        font-weight: 500;
        font-size: 12px;
        line-height: 20px;
    }
</style>