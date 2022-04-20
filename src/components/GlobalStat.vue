<template>
  <div class="stat_continer">
    <div class="globa_stat">
    <h3> City Level Statistics </h3>
  <div class="block">
    <el-carousel trigger="click" height="35vh" :autoplay=false>
      <el-carousel-item v-for="item in items" :key="item">
        <!-- <Radar
        v-if="item == 'Radar'"
        :width="400"
        :height="300"
        :chartData="radarChartData"
        /> -->
        <BarChart
        v-if="item == 'Bar'"
        :width="barWidth"
        :height="barHeight"
        :chartData="radarChartData"
        />
      </el-carousel-item>
    </el-carousel>
  </div>
  </div>

  <div class="globa_stat">
    <h3> Catchment Area Demographics (on POI click) </h3>
  <div class="block">
    <el-carousel trigger="click" height="35vh" :autoplay=false>
      <el-carousel-item v-for="item in items" :key="item">
        <DoughnutChart 
        :width="400"
        :height="400"
        :chartData="dongnutChartData"
        />
      </el-carousel-item>
    </el-carousel>
  </div>
  </div>
</div>
</template>

<script>
// import Radar from './charts/Radar.vue';
import BarChart from './charts/BarChart.vue';
import DoughnutChart from './charts/Doughnut.vue';
import ChartDataLabels from 'chartjs-plugin-datalabels';

import { mapState } from 'vuex';
export default {
    name: "GlobalStat",
    components: {
        BarChart,
        DoughnutChart,
    },
    data() {
        return {
            items: ["Bar"],
            radarChartData: {},
        }
    },
    computed: {
      ...mapState({
        statistics: state => state.statistics,
        dongnutChartData: state => state.poi_statistics,
      }),
      barWidth() {
        return 400;
      },
      barHeight() {
        return 300;
      },
    },
    watch: {
      statistics: {
        handler(val) {
          if(val === null) return;
          this.render(val);
        },
        deep: true
      }
    },
    methods: {
        render(data) {
          let keys = Object.keys(data.index_detail);
          let values = Object.values(data.index_detail);
          let radarChartData = {
            labels: [...keys],
            datasets: [
              {
                label: 'City Level Accessibility Score',
                backgroundColor: '#f67019',
                borderColor: '#f67019',
                pointBackgroundColor: '#f67019',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#f0f',
                pointHoverBorderColor: '#f67019',
                data: values
              }            
            ]            
          }
          this.radarChartData = radarChartData;
        }
    }
}
</script>

<style lang="less" scoped>
.title {
  color: rgb(243, 147, 22);
}
.stat_continer {
  display: flex;
  flex-direction: column;
  align-items: center;
  .globa_stat {
    width: 30vw;
    height: 47.5vh;
    // background: cadetblue;
  }
}
</style>