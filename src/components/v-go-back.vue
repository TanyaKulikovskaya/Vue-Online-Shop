<template>
    <a 
      class="v-go-back"
      @click.stop.prevent="goBack"
      >
        <svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.4 5.65714V7.54286H4.70005L8.60005 11.3143L7.62505 13.2L0.800049 6.6L7.62505 0L8.60005 1.88571L4.70005 5.65714H16.4Z" fill="white"/>
        </svg>
        <span>Back</span>
    </a>
</template>

<script>
export default {
    name: 'v-go-back',
    methods: {
        goBack() {
            window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
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