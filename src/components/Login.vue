<template>
  <div class="mt-2">
    <v-container>
      <v-row align="center" justify="center">
        <v-col cols="10" sm="8">
          <v-hover v-slot="{ hover }">
            <v-card class="mt-5" :elevation="hover ? 14 : 2" style="border-radius: 24px">
              <v-window v-model="step">
                <v-window-item :value="1">
                  <v-row>
                    <v-col cols="12" md="6">
                      <v-card-text class="mt-14">
                        <h3 class="text-center">Login in to Your Account</h3>
                        <h6 class="text-center  grey--text"></h6>
                        <v-row align="center" justify="center">
                          <v-col cols="12" sm="8">
                            <v-text-field
                                label="Email"
                                outlined
                                dense
                                autocomplete="false"
                                class="mt-8"
                            />
                            <v-text-field
                                label="Password"
                                :append-icon="visiblePass ? 'mdi-eye-off' : 'mdi-eye'"
                                @click:append="changeVisibility()"
                                outlined
                                dense
                                autocomplete="false"
                                :type="visiblePass ? 'text' : 'password'"
                            >
                            </v-text-field>
                            <v-row>
                              <v-col cols="12" sm="7">
                                <v-checkbox
                                    label="Remember Me"
                                    class="mt-n1"
                                ></v-checkbox>
                              </v-col>
                              <v-col cols="12" sm="5">
                                <p class="caption blue--text">
                                  Forgot password?
                                </p>
                              </v-col>
                            </v-row>
                            <v-btn @click="login()"
                                :color="$vuetify.theme.themes.light.primary"
                                dark block tile>
                              Log in
                            </v-btn>

<!--                            <div class="d-flex  justify-space-between align-center mt-8 mx-10 mb-16">

                              <v-icon :color="$vuetify.theme.themes.light.accent">mdi-account</v-icon>

                              <v-icon color="blue">fab fa-facebook-f</v-icon>

                              <v-icon color="light-blue lighten-3">fab fa-twitter</v-icon>
                            </div>-->
                          </v-col>
                        </v-row>
                      </v-card-text>
                    </v-col>
                    <v-col cols="12" md="6"
                           :style="{backgroundColor: $vuetify.theme.themes.light.primary}"
                           class="rounded-bl-xl">
                      <div style="  text-align: center; padding: 180px 0;">
                        <v-card-text class="white--text">
                          <h3 class="text-center ">Don't Have an Account Yet?</h3>
                          <h6
                              class="text-center"
                          >Let's get you all set up so you can start creating your your first<br> onboarding experience
                          </h6>
                        </v-card-text>
                        <div class="text-center">
                          <v-btn tile outlined dark @click="step++">SIGN UP</v-btn>
                        </div>
                      </div>
                    </v-col>
                  </v-row>
                </v-window-item>
                <v-window-item :value="2">
                  <v-row>
                    <v-col cols="12" md="6" class="blue rounded-br-xl">
                      <div style="  text-align: center; padding: 180px 0;">
                        <v-card-text class="white--text">
                          <h3 class="text-center ">Alredy Signed up?</h3>
                          <h6
                              class="text-center"
                          >Log in to your account so you can continue building and<br> editing your onboarding flows</h6>
                        </v-card-text>
                        <div class="text-center">
                          <v-btn tile outlined dark @click="step--">Log in</v-btn>
                        </div>
                      </div>
                    </v-col>

                    <v-col cols="12" md="6">
                      <v-card-text class="mt-6">
                        <h4
                            class="text-center"
                        >Sign Up for an Account</h4>
                        <h6
                            class="text-center  grey--text "
                        >Let's get you all set up so you can start creatin your <br>
                          first onboarding experiance</h6>
                        <v-row align="center" justify="center">
                          <v-col cols="12" sm="8">
                            <v-row>
                              <v-col cols="12" sm="6">
                                <v-text-field
                                    label="First Name"
                                    outlined
                                    dense
                                    color="blue"
                                    autocomplete="false"
                                    class="mt-2"
                                />
                              </v-col>
                              <v-col cols="12" sm="6">
                                <v-text-field
                                    label="Last Name"
                                    outlined
                                    dense
                                    color="blue"
                                    autocomplete="false"
                                    class="mt-2"
                                />
                              </v-col>
                            </v-row>
                            <v-text-field
                                label="Email"
                                outlined
                                dense
                                color="blue"
                                autocomplete="false"
                            />
                            <v-text-field
                                label="Password"
                                outlined
                                dense
                                color="blue"
                                autocomplete="false"
                                type="password"

                            />
                            <v-row>
                              <v-col cols="12" sm="7">
                                <v-checkbox

                                    label="I Accept AAE"
                                    class="mt-n1"
                                    color="blue"
                                ></v-checkbox>
                              </v-col>
                              <v-col cols="12" sm="5">
                                <span class="caption blue--text ml-n4">Terms &Conditions</span>
                              </v-col>
                            </v-row>
                            <v-btn color="blue" dark block tile>Sign up</v-btn>

                            <h5
                                class="text-center  grey--text mt-2 mb-3"
                            >Or Sign up using</h5>
                            <div class="d-flex  justify-space-between align-center mx-10 mb-11">
                              <v-btn depressed outlined color="grey">
                                <v-icon color="red">fab fa-google</v-icon>
                              </v-btn>
                              <v-btn depressed outlined color="grey">
                                <v-icon color="blue">fab fa-facebook-f</v-icon>
                              </v-btn>
                              <v-btn depressed outlined color="grey">
                                <v-icon color="light-blue lighten-3">fab fa-twitter</v-icon>
                              </v-btn>
                            </div>
                          </v-col>
                        </v-row>
                      </v-card-text>
                    </v-col>
                  </v-row>
                </v-window-item>
              </v-window>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>

export default {
  name: 'Dashboard',
  data: () => ({
    step: 1,
    visiblePass: false,
  }),
  methods: {
    login() {
      this.$store.commit('setLoggedIn',true)
      this.$router.push({path:'/dashboard'})
    },
    changeVisibility() {
      this.visiblePass = !this.visiblePass
    }
  }
}
</script>

<style scoped>
.v-application .rounded-bl-xl {
  border-bottom-left-radius: 300px !important;
}
.v-application .rounded-br-xl {
  border-bottom-right-radius: 300px !important;
}
</style>