<template>
  <div class="mt-2" :style="isMobile ? '' :
    'margin-left: 20px; margin-right: 20px;'">
    <v-row align="center" justify="center" :style="isMobile ? '' : 'margin-top:100px'">
      <v-col cols="11" sm="8">
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
                        </v-col>
                      </v-row>
                    </v-card-text>
                  </v-col>
                  <v-col cols="12" md="6"
                         :style="{backgroundColor: $vuetify.theme.themes.light.primary}"
                         class="rounded-bl-xl">
                    <div style=" text-align: center; padding: 180px 0;">
                      <v-card-text class="white--text">
                        <h3 class="text-center mb-2">You wanna know the rules about iLink's remote working?</h3>
                        <h5
                            class="text-center"
                        >Let's see how many days per week or month you can work<br> form anywhere you want!
                        </h5>
                      </v-card-text>
                      <div class="text-center">
                        <v-btn tile outlined dark @click="step++">Show rules</v-btn>
                      </div>
                    </div>
                  </v-col>
                </v-row>
              </v-window-item>
              <v-window-item :value="2">
                <v-row>
                  <v-col cols="12" md="6"
                         :style="{backgroundColor: $vuetify.theme.themes.light.primary}"
                         class="rounded-br-xl">
                    <div style=" text-align: center; padding: 180px 0;">
                      <v-card-text class="white--text">
                        <h2 class="text-center mb-5">You wanna know the rules about iLink's remote working?</h2>
                        <h4
                            class="text-center"
                        >Let's see how many days per week or month you can work form anywhere<br> you want!
                        </h4>
                      </v-card-text>
                      <div class="text-center">
                        <v-btn tile outlined dark @click="step--">Log in</v-btn>
                      </div>
                    </div>
                  </v-col>

                  <v-col cols="12" md="6">
                    <v-card-text class="mt-14">
                      <v-row justify="center" align="center">
                        <v-col cols="1">
                          <v-icon>
                            mdi-calendar-range
                          </v-icon>
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
      this.$store.commit('setLoggedIn', true)
      this.$router.push({path: '/dashboard'})
    },
    changeVisibility() {
      this.visiblePass = !this.visiblePass
    }
  },
  computed: {
    isMobile() {
      let innerWidth = window.innerWidth
      return innerWidth < 960;
    },
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