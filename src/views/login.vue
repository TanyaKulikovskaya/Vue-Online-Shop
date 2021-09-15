<template>
    <div class="login">
        <form @submit.prevent="login">
            <div>
                <label for="email">E-Mail</label>
                <input id="email" type="email" v-model="email" required>
            </div>
            <div>
                <label for="password">Password:</label>
                <input type="password" name="password" v-model="password" />
            </div>
            <button class="btn" type="submit">Login</button>
        </form>
      <p v-if="showError">{{ errorMessage }}</p>
    </div>
</template>
<script>

export default {
    name: "login",
    data() {
        return {
            email : "",
            password : "",
            showError: false,
            errorMessage: ''
        };
    },
    methods: {
        login: function () {
            let data = {
                email: this.email,
                password: this.password,
            }
            this.$store.dispatch("login", data)
                .then(() => this.$router.push('/cart'))
                .catch(() => {
                    this.showError = true;
                    this.errorMessage = 'Incorrect credentials';
                })
        }
            
    }
}
</script>