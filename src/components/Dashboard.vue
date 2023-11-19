<template>
  <div class="mt-5 ml-16 mr-16">
    <v-card outlined class="mt-6" elevation="10">
      <v-sheet
        tile
        height="54"
        class="d-flex"
      >
        <v-btn icon class="ma-2" @click="$refs.calendar.prev(), getMonth()">
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>

        <v-spacer></v-spacer>
        <div class="ml-8">
          <v-row align="center" style="margin-top: 1px">
            {{month}} {{year}}
            <v-tooltip right>
              <template v-slot:activator="{ on }">
                <v-btn icon v-on="on" @click="enableEditor()">
                  <v-icon>mdi-plus</v-icon>
                </v-btn>
              </template>
              <span>Add your plan for the month</span>
            </v-tooltip>
          </v-row>
        </div>
        <v-spacer></v-spacer>
        
        <v-btn icon class="ma-2" @click="$refs.calendar.next(), getMonth()">
          <v-icon>mdi-chevron-right</v-icon>
        </v-btn>

      </v-sheet>
      <v-sheet height="800">
        <v-calendar
          ref="calendar"
          v-model="value"
          :type="type"
          :events="events"
          :event-overlap-mode="mode"
          :event-overlap-threshold="30"
        ></v-calendar>
        <!-- @change="getEvents" -->
      </v-sheet>
    </v-card>

    <v-dialog v-model="editDialog" persistent width="820px">
       <v-card>
        <v-date-picker
          v-model="dates"
          :min="minDate"
          :max="maxDate"
          first-day-of-week="1"
          multiple
          width="650px"
          color="#008B8B"
          landscape
          elevation="18"
        >
          <v-btn @click="submitYourDays()" color="primary" text x-small>submit</v-btn>
          <v-spacer/>
          <v-btn @click="closeEditor()" color="red" text x-small>cancel</v-btn>
        </v-date-picker>
       </v-card>
    </v-dialog> 
  </div>
</template>

<script>
  export default {
    name: 'Dashboard',

    data: () => ({
      type: 'month',
      mode: 'stack',
      value: new Date().toISOString().split('T')[0],
      month:'',
      year:'',
      editDialog: false,
      events: [],
      dates: [],
    }),
    computed:{
      minDate() {
        let month = this.value.split('-')[1]
        let year = this.value.split('-')[0]
        let minDate = year + '-' + month + '-' + '01'
      
        return minDate
      },
      maxDate() {
        let month = this.value.split('-')[1]
        let year = this.value.split('-')[0]
        let maxDate = year + '-' + month + '-' + '31'
        
        return maxDate
      }
    },
    methods: {
      getMonth() {
        let monthNumber = this.value.split('-')[1]
        this.year = this.value.split('-')[0]

        if (monthNumber == 1) {
          this.month = 'January'
        } else if (monthNumber == 2) {
          this.month = 'February'
        } else if (monthNumber == 3) {
          this.month = 'March'
        } else if (monthNumber == 4) {
          this.month = 'April'
        } else if (monthNumber == 5) {
          this.month = 'May'
        } else if (monthNumber == 6) {
          this.month = 'June'
        } else if (monthNumber == 7) {
          this.month = 'July'
        } else if (monthNumber == 8) {
          this.month = 'August'
        } else if (monthNumber == 9) {
          this.month = 'September'
        } else if (monthNumber == 10) {
          this.month = 'October'
        } else if (monthNumber == 11) {
          this.month = 'November'
        } else if (monthNumber == 12) {
          this.month = 'December'
        }
      },
      enableEditor(){
        this.editDialog = true
      },
      closeEditor() {
        this.editDialog = false
        this.dates = []
      },
      submitYourDays(){
        console.log(this.dates);
        for(let i=0; i<this.dates.length; i++){
          let day = {
            name: this.$store.getters.loggedInUser.first_name + ' ' +  this.$store.getters.loggedInUser.last_name,
            start: this.dates[i],
            end: this.dates[i],
            color: 'deep-purple'
          }
          this.events.push(day)
        }
        this.closeEditor()
      }
    },

    created() {
      this.getMonth()
    }
  }
</script>

<style scoped>

</style>
