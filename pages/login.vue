<template>
  <main>
    <v-container fluid fill-height class="loginOverlay">
      <v-layout flex align-center justify-center>
        <v-flex xs12 sm4 elevation-6>
          <v-toolbar class="pt-5 blue darken-4">
            <v-toolbar-title class="white--text"
              ><h4>Welcome Back</h4></v-toolbar-title
            >
          </v-toolbar>
          <v-card>
            <v-card-text class="pt-4">
              <div>
                <v-form ref="form" v-model="valid">
                  <v-text-field
                    v-model="email"
                    label="Enter your e-mail address"
                    :rules="emailRules"
                    required
                  ></v-text-field>
                  <v-text-field
                    v-model="password"
                    label="Enter your password"
                    min="8"
                    :append-icon="e1 ? 'visibility' : 'visibility_off'"
                    :append-icon-cb="() => (e1 = !e1)"
                    :type="e1 ? 'password' : 'text'"
                    :rules="passwordRules"
                    counter
                    required
                  ></v-text-field>
                  <v-layout justify-space-between>
                    <v-btn
                      :class="{
                        'blue darken-4 white--text': valid,
                        disabled: !valid
                      }"
                      @click="submit"
                      >Login</v-btn
                    >
                    <a href="">Forgot Password</a>
                  </v-layout>
                </v-form>
              </div>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
    <a href="https://unsplash.com/photos/i6Wc5qZO5MQ" target="_blank">
      <v-card class="photoCredit teal">
        <v-card-title>
          <div class="white--text">
            Photo by Tatyana Dobreva on Unsplash
          </div>
        </v-card-title>
      </v-card>
    </a>
  </main>
</template>

<script>
export default {
  data() {
    return {
      valid: false,
      e1: false,
      password: '',
      passwordRules: [(v) => !!v || 'Password is required'],
      email: '',
      emailRules: [
        (v) => !!v || 'E-mail is required',
        (v) =>
          /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
          'E-mail must be valid'
      ]
    }
  },
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        this.$store.dispatch('emailLogin', {
          email: this.email,
          password: this.password
        })
        //this.$refs.form.$el.submit()
      }
    },
    clear() {
      this.$refs.form.reset()
    }
  }
}
</script>

<style></style>
