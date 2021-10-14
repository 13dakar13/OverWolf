<template>
  <article class="chart">
    <header class="chart__header">
      <section-title
        class="chart__title"
        small
      >
        {{ title }}
      </section-title>

      <app-dropdown
        @update:chosen-item="chosenPeriod = $event"

        class="chart__dropdown"
        :dropdown-items="chartPeriods"
        unstyled
      />
    </header>

    <main class="chart__main">
      <chrat
        :chart-data="datacollection"
        :options="chartOptions"
        :styles="styles"
        :height="250"
      />
    </main>
  </article>
</template>

<script>
import chrat from '~/components/common/chart.vue'
import sectionTitle from '~/components/common/sectionTitle.vue';
import appDropdown from '~/components/common/input/appDropdown.vue';

export default {
  props: {
    title: {
      type: String,
      default: '',
    }
  },
  data(){
    return {
      chosenPeriod: '',
      chartPeriods: [
        '7 дней',
        '14 дней',
        '1 месяц',
        '6 месяцев',
      ],
      datacollection: {},
      styles: {},
      chartOptions: {
        legend: {
          display: false
        },
      }
    }
  },
  mounted () {
    this.fillData()
  },
  methods: {
    fillData () {
      const gradientCtx = document.querySelector('#line-chart')
        .getContext('2d');

      const borderGradientCtx = gradientCtx;

      const fillGradient = gradientCtx
        .createLinearGradient(0, 0, 150, -60);

      const borderGradient = borderGradientCtx
        .createLinearGradient(0, 0, 150, 0);

      fillGradient.addColorStop(0, 'rgba(0, 204, 255, 0.03)');
      fillGradient.addColorStop(1, 'rgba(255, 74, 247, 0.15)');

      borderGradient.addColorStop(0, '#7790FC');
      borderGradient.addColorStop(1, '#D361F9');

      this.datacollection = {
        labels: [
          'ПН',
          'ВТ',
          'СР',
          'ЧТ',
          'ПТ',
          'СБ',
          'ВС',
        ],
        datasets: [{
          backgroundColor: fillGradient,
          borderColor: borderGradient,
          borderWidth: 2,
          pointBackgroundColor: '#D361F9',
          pointBorderColor: '#D361F9',
          pointBorderWidth: 0,
          data: [
            this.getRandomInt(),
            this.getRandomInt(),
            this.getRandomInt(),
            this.getRandomInt(),
            this.getRandomInt(),
            this.getRandomInt(),
            this.getRandomInt(),
          ]
        }],
      }
    },
    getRandomInt () {
      return Math.floor(Math.random() * (50 - 5 + 1)) + 5
    }
  },
  components: {
    chrat,
    appDropdown,
    sectionTitle,
  },
}
</script>
