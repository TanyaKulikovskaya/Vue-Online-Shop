<template>
    <p 
        class="product-tab"
        v-show="isActive"
        >
        <slot></slot>
    </p>
</template>

<script>
export default {
    name: 'product-tab',
    props: {
        label: {
            type: String,
            default: ''
        },
        selected: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            isActive: false
        }
    },
    mounted() {
        this.isActive = this.selected;
    }
}
</script>
<style lang="scss">
 .product-tab {
     min-height: 98px;
 }
</style>
