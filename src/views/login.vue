<template>
    <div class="login">
        <form @submit.prevent="login">
            <div>
              <label for="username">Username:</label>
              <input type="text" name="username" v-model="username" />
            </div>
            <div>
              <label for="password">Password:</label>
              <input type="password" name="password" v-model="password" />
            </div>
            <button type="submit">Submit</button>
        </form>
      <p v-if="showError">error</p>
    </div>
</template>
<script>

export default {
    name: "login",
    data() {
        return {
            username: "",
            password: "",
            showError: false
        };
    },
    methods: {
        async login() {
            let response = await this.$store.dispatch("login", {
                username: this.username,
                password: this.password,
            });
            if (response) {
                this.$router.push("/");
            } 
            this.showError = true;
            
        }
    }
}
</script>