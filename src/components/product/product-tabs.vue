<template>
  <div class="product-tabs">
      <ul class="product-tabs__labels">
          <li 
            v-for="tab in tabs"
            :key="tab.label"
            @click="switchTab(tab)"
            class="product-tabs__label"
            :class="{ 'is-active': tab.isActive }"
            >
            {{ tab.label }}
        </li>
      </ul>
      <div class="product-tabs__content">
          <slot></slot>
      </div>
  </div>
</template>

<script>
export default {
    name: 'product-tabs',
    data() {
        return {
            tabs: []
        }
    }, 
    methods: {
        switchTab(switchedTab) {
            this.tabs.forEach(tab => {
                tab.isActive = (tab.label === switchedTab.label);
            })
        }
    },
    created() {
        this.tabs = this.$children;
    },
}
</script>

<style lang="scss">
    .product-tabs {
        padding-top: $padding*2;
        padding-bottom: $padding*2;
        &__labels {
            display: flex;
            justify-content: space-between;
        }
        &__label {
            flex: 1 1 auto;
            padding-bottom: $padding;
            border-bottom: $border;
            cursor: pointer;
            &.is-active {
                color: $black;
                border-color: $black;
            }
        }
        &__content {
            padding-top: $padding*2;
            text-align: left;
        }
    }

</style>