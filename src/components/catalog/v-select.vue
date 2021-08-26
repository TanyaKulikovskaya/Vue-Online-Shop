<template>
  <div class="v-select">
      <p
        class="v-select__title"
        @click="areOptionsVisible = !areOptionsVisible"
        >
        {{ selected }}
      </p>
      <div 
        class="v-select__options"
        v-if="areOptionsVisible"
        >
          <p
            v-for="option in options"
            :key="option.value"
            @click="selectOption(option)"
            >
            {{ option.name }}
          </p>
      </div>
  </div>
</template>

<script>
export default {
    name: "v-select",
    props: {
        options: {
            type: Array,
            default() {
                return []
            }
        },
        selected: {
            type: String,
            default: ''
        },
    },
    data() {
        return {
            areOptionsVisible: false
        }
    },
    methods: {
        selectOption(option) {
            this.$emit('select', option);
            this.areOptionsVisible = false;
        },
        hideSelect() {
            this.areOptionsVisible = false;
        }
    }, 
    mounted() {
        document.addEventListener('click', this.hideSelect.bind(this), true)
    },
    beforeDestroy() {
        document.removeEventListener('click'. this.hideSelect())
    }

}
</script>

<style lang="scss">
    .v-select {
        position: relative;
        width: 180px;
        height: 36px;
        line-height: 36px;
        border: $border;
        border-radius: $radius;
        margin-bottom: $margin*4;
        cursor: pointer;
        &__title {
            position: relative;
            font-weight: 700;
            display: flex;
            justify-content: center;
            padding-right: $padding;
        }
        &__options {
            position: absolute;
            display: block;
            width: 100%;
            top: 100%;
            left: 0;
            border: $border;
            border-radius: $radius;
            background-color: $white;
            font-size: 14px;
            p:hover {
                background-color: $light-gray;
            }
        }
        &::after {
            content: "\25BC";
            position: absolute;
            top: 0;
            right: 0;
            padding: 0 $padding;
            max-height: 100%;
            border-radius: $radius;
            background-color: $light-gray;
            cursor: pointer;
            pointer-events: none;
        }
    }

</style>