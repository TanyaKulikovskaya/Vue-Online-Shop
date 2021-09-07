<template>
    <a 
      class="v-go-back"
      @click.prevent="goBack"
      >
        <ArrowLeft />
        <span>{{ goBackText }}</span>
    </a>
</template>

<script>
import constants from '../services/constants';
import ArrowLeft from '../assets/icons/arrow-left';

export default {
    name: 'v-go-back',
    components: {
        ArrowLeft
    },
    data() {
        return {
            goBackText: constants.GO_BACK_TEXT
        }
    },
    methods: {
        goBack() {
            window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/');
        }
    }
}
</script>

<style lang="scss">
    .v-go-back {
        position: absolute;
        left: 8px;
        top: 50%;
        transform: translateY(-50%);
        line-height: 23px;
        svg {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            left: 3px;
        }
        span {
            margin-left: $margin*4;
            cursor: pointer;
        }
        &::before {
            content: '';
            position: absolute;
            display: block;
            width: 23px;
            height: 23px;
            left: 0;
            top: 0;
            background-color: $yellow;
            border-radius: 50%;
            z-index: -1;
        }
    }
</style>