<template>
  <div>
    <form @submit.prevent="register">
       <div>
          <label for="email">E-Mail</label>
          <input type="email" v-model="email" required>
      </div>
      <div>
          <label for="password">Password</label>
          <input type="password" v-model="password" required>
      </div>
      <div>
          <label for="password-confirm">Confirm Password</label>
          <input type="password" v-model="password_confirmation" required>
      </div>
      <button class="btn" type="submit">Register</button>
      <p v-if="showError">{{ errorMessage }}</p>
    </form>
  </div>
</template>
<script>
export default {
    name: 'register',
    data(){
        return {
            email : '',
            password : '',
            password_confirmation : '',
            showError: false,
            errorMessage: ""
        }
    },
    methods: {
        register: function () {
            let data = {
                email: this.email,
                password: this.password,
            }
            if(this.password !== this.password_confirmation) {
                this.showError = true;
                this.errorMessage = "Entered passwords do not match";
                return;
            }
            this.$store.dispatch('register', data)
                .then(() => this.$router.push('/'))
                .catch(() => {
                    this.errorMessage = "Server error";
                })
        }
    }
}
</script>