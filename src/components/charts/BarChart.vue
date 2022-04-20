<template>
  <Bar
    :chart-options="chartOptions"
    :chart-data="chartData"
    :chart-id="chartId"
    :dataset-id-key="datasetIdKey"
    :plugins="plugins"
    :css-classes="cssClasses"
    :styles="styles"
    :width="width"
    :height="height"
  />
</template>

<script>
import { Bar } from 'vue-chartjs/legacy'
// import { Bar } from 'vue-chartjs'

import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, ChartDataLabels)

export default {
  name: 'BarChart',
  components: { Bar },
  props: {
    chartId: {
      type: String,
      default: 'bar-chart'
    },
    datasetIdKey: {
      type: String,
      default: 'label'
    },
    width: {
      type: Number,
      default: 400
    },
    height: {
      type: Number,
      default: 400
    },
    cssClasses: {
      default: '',
      type: String
    },
    styles: {
      type: Object,
      default: () => {}
    },
    plugins: {
      type: Object,
      default: () => {
          datalabels: {
            formatter: (value, context) => {
                console.log("Rounding");
                return Math.round(value, 2);
            }
        }
      }
    }, 
    chartData: {
      type: Object,
      default: () => {
        return {
            labels: [ 'January', 'February', 'March', 'April', 'May', 'June', 'July' ],
            datasets: [ { data: [40, 20, 12, 15, 18, 30, 24] } ]
          }
      }
    }    
  },
  data() {
    return {
      chartOptions: {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            datalabels: {
                formatter: (value, context) => {                    
                    return value.toFixed(3)
                }
            }
        }
    }
  }
}
}
</script>