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
        v-if="areOptionsVisible">
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
        border: 1px solid #e0e0e0;
        border-radius: $radius;
        margin-bottom: $margin*4;
        cursor: pointer;
        &__title {
            position: relative;
            font-weight: 700;
            display: flex;
            justify-content: center;
            margin-bottom: $margin;
        }
        &__options {
            position: absolute;
            display: block;
            width: 100%;
            top: 100%;
            left: 0;
            border: 1px solid #e0e0e0;
            border-radius: $radius;
            background: #ffffff;
        }
    }

</style>