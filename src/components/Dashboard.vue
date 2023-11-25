<template>
  <div class="mt-2" :style="isMobile ? '' : 'margin-left: 150px; margin-right: 150px;'">
    <v-card outlined class="mt-3 mb-6" elevation="10">
      <v-sheet
        tile
        height="54"
        class="d-flex"
      >
        <v-btn icon class="ma-2" :disabled="disabledBackMonth" @click="$refs.calendar.prev(), getMonth()">
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>

        <v-spacer></v-spacer>
        <div class="ml-8">
          <v-row align="center" style="margin-top: 1px">
            <section style="font-size: 18px;">
              {{month}} {{year}}
            </section>
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
      <v-sheet height="900">
        <v-calendar
          ref="calendar"
          v-model="value"
          weekdays="1,2,3,4,5"
          :type="type"
          :events="events"
          :event-overlap-mode="mode"
          :event-overlap-threshold="30"
          :show-month-on-first="false"
          :short-weekdays="false"
        ></v-calendar>
        <!-- @change="getEvents" -->
      </v-sheet>
    </v-card>

    <v-dialog v-model="editDialog" persistent :width="isMobile? '350px' : '820px'">
       <v-card>
        <v-date-picker
          v-model="dates"
          :min="minDate"
          :max="maxDate"
          :show-current="value"
          :allowed-dates="allowedDates"
          first-day-of-week="1"
          multiple
          :width="isMobile? '350px' : '650px'"
          color="#008B8B"
          :landscape="!isMobile"
          elevation="18"
          :key="datePickerKey"
        >
          <v-btn @click="closeEditor()" color="red" text small>cancel</v-btn>
          <v-spacer/>
          <v-btn @click="submitYourDays()" color="primary" text small>submit</v-btn>
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
      value:  new Date(new Date().setMonth(new Date().getMonth() + 1)).toISOString().split('T')[0],
      month:'',
      year:'',
      monthNumber: 0,
      editDialog: false,
      events: [],
      dates: [],
      datePickerKey: 0,

      datesToBlock:[],
      counter:0,
      week: [],

      //propertyValue
      daysPerMonth: 5,
      daysPerWeek:2,
      peoplePerDay: 5,
    }),
    computed:{
      isMobile() {
        let innerWidth = window.innerWidth
        return innerWidth < 960;
      },
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
      },
      disabledBackMonth() {
        return parseInt(this.monthNumber) - parseInt(new Date().getMonth()) === 2;
      }
    },
    methods: {
      getMonth() {
        let monthNumber = this.value.split('-')[1]
        this.monthNumber = monthNumber
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
        this.datePickerKey++
        this.editDialog = true
      },
      closeEditor() {
        this.editDialog = false
        this.dates = []
      },
      submitYourDays(){
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
      },
      allowedDates(date) {
        // If the value is a string, convert it to a Date object
        if (typeof date === 'string') {
          date = new Date(date);
        }
        // Get the day of the week (0 for Sunday, 1 for Monday, etc.)
        const dayOfWeek = date.getDay();
        // Allow dates that are not Saturday (6) or Sunday (0)
        return dayOfWeek !== 0 && dayOfWeek !== 6;
      },

      saveAllDates(date) {
        let stringDate = date
        if (typeof date === 'string') {
          date = new Date(date);
        }
        const dayOfWeek = date.getDay();

        this.week.push(stringDate);
        if (dayOfWeek === 6) {
          this.datesToBlock.push([...this.week]); // Use a copy to avoid reactivity issues
          this.week = [];
        }
        console.log(this.datesToBlock);
      },
    },

    created() {
      this.getMonth()
    }
  }
</script>

<style scoped>

</style>
