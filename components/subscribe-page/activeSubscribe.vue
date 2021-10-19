<template>
  <div class="active-subscribe">
    <div class="active-subscribe__logo-wrap">
      <div class="active-subscribe__logo-spin"></div>
      <img
        :src="logoPath"
        :alt="name"
        class="active-subscribe__logo-img"
      >
    </div>

    <span class="active-subscribe__name">
      {{ name }}
    </span>

    <div class="active-subscribe__progress">
      <div
        class="active-subscribe__progress-bar"
        :style="{
          '--progress-bar-size': progressBarSize,
        }"
      ></div>
    </div>

    <span class="active-subscribe__end-date">
      {{ endDateText }}
    </span>
  </div>
</template>

<script>
export default {
  props: {
    logoPath: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
    startDate: {
      type: [String, Date],
      default: '',
    },
    endDate: {
      type: [String, Date],
      default: '',
    },
  },
  methods: {
    getShortFullDate(date){
      const day = String(date.getDate()).padStart(2, '0');
      const month = String(date.getMonth()).padStart(2, '0');
      const year = String(date.getFullYear()).padStart(4, '0');

      return `${day}.${month}.${year}`
    },
    constrain(val, min, max){
      return val > max ? max : val < min ? min : val;
    },
  },
  computed: {
    cEndDate(){
      return new Date(this.endDate);
    },
    cStartDate(){
      return new Date(this.startDate);
    },
    currDate(){
      return new Date();
    },
    endDateText(){
      return this.currDate >= this.cEndDate ? 'Отсутствует или истекла' : `Действует до ${this.getShortFullDate(this.cEndDate)}`;
    },
    progressBarSize(){
      const currMilliseconds = Date.parse(this.currDate);
      const startMilliseconds = Date.parse(this.startDate);
      const endMilliseconds = Date.parse(this.endDate);

      return this.constrain((currMilliseconds - startMilliseconds) / (endMilliseconds - startMilliseconds), 0, 1);
    }
  },
}
</script>
