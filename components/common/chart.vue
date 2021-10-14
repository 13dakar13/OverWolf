<script>
import { Line, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins

export default {
  extends: Line,
  mixins: [reactiveProp],
  props: {
    chartData: {
      type: Object,
      default: null
    },
    options: {
      type: Object,
      default: null
    }
  },
  data(){
    return {
      gradient: null,
    }
  },
  mounted() {
    // this.$refs.canvas.id = `line-chart-${Math.random() * 10}`;

    const optionsWithGradient = {
      ...this.options,
      // elements: {
      //   line: {
      //     backgroundColor: this.gradient,
      //   },
      // },
    }

    this.renderChart(this.chartData, optionsWithGradient);
  }
}
</script>
