<template>
  <div class="countdown-timer">
    <div class="countdown-timer__section">
      <span class="countdown-timer__section-value">
        {{ remainingDays }}
      </span>
      <span class="countdown-timer__section-label">
        дней
      </span>
    </div>

    <div class="countdown-timer__time">
      <div class="countdown-timer__section">
        <span class="countdown-timer__section-value">
          {{ remainingHours }}
        </span>
        <span class="countdown-timer__section-label">
          часов
        </span>
      </div>

      <span class="countdown-timer__time-divider">:</span>

      <div class="countdown-timer__section">
        <span class="countdown-timer__section-value">
          {{ remainingMins }}
        </span>
        <span class="countdown-timer__section-label">
          минут
        </span>
      </div>

      <span class="countdown-timer__time-divider">:</span>

      <div class="countdown-timer__section">
        <span class="countdown-timer__section-value">
          {{ remainingSecs }}
        </span>
        <span class="countdown-timer__section-label">
          секунд
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    endDate: {
      type: [Date, String],
      default: function(){
        return new Date();
      },
    },
  },
  data(){
    return {
      sec: null,
      min: null,
      day: null,
      hour: null,
      currDate: new Date(),
    }
  },
  mounted(){
    this.sec = 1000;
    this.min = this.sec * 60;
    this.hour = this.min * 60;
    this.day = this.hour * 24;

    setInterval(() => {
      this.currDate = new Date();

      if(this.currDate <= this.endDate){
        this.$emit('countdown-finished', this.currDate);
      }
    }, this.sec);
  },
  methods: {
    constrain(val, min, max){
      return val > max ? max : val < min ? min : val;
    },
  },
  computed: {
    cEndDate(){
      return new Date(this.endDate);
    },

    remainingDays(){
      const val = Math.trunc((this.cEndDate - this.currDate) / this.day);

      return String(this.constrain(val, 0, 999))
        .padStart(2, '0');
    },

    remainingHours(){
      const val = Math.trunc((this.cEndDate - this.currDate - this.remainingDays * this.day) / this.hour);

      return String(this.constrain(val, 0, 999))
        .padStart(2, '0');
    },

    remainingMins(){
      const val = Math.trunc((this.cEndDate - this.currDate - this.remainingDays * this.day - this.remainingHours * this.hour) / this.min);

      return String(this.constrain(val, 0, 999))
        .padStart(2, '0');
    },

    remainingSecs(){
      const val = Math.trunc((this.cEndDate - this.currDate - this.remainingDays * this.day - this.remainingHours * this.hour - this.remainingMins * this.min) / this.sec);

      return String(this.constrain(val, 0, 999))
        .padStart(2, '0');
    },
  }
}
</script>
