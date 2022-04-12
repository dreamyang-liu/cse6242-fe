<template>
  <div class="stat_continer">
    <div class="globa_stat">
    <h3> City Level Statistics </h3>
  <div class="block">
    <el-carousel trigger="click" height="35vh" :autoplay=false>
      <el-carousel-item v-for="item in items" :key="item">
        <BarChart
        v-if="item == 'Bar'"
        :width="400"
        :height="400"
        :chartData="barChartData"
        />
        <Radar
        v-if="item == 'Radar'"
        :width="400"
        :height="300"
        :chartData="radarChartData"
        />
        <LineChart
        v-if="item == 'Line'"
        :width="400"
        :height="300"
        />
        <Bubble
        v-if="item == 'Bubble'"
        :width="400"
        :height="300"
        />
        <DoughnutChart
        v-if="item == 'Doughnut'"
        :width="400"
        :height="300"
        />
        <PolarArea
        v-if="item == 'PolarArea'"
        :width="400"
        :height="300"
        />
      </el-carousel-item>
    </el-carousel>
  </div>
  </div>

  <div class="globa_stat">
    <h3> POI Statistics </h3>
  <div class="block">
    <el-carousel trigger="click" height="35vh" :autoplay=false>
      <el-carousel-item v-for="item in items" :key="item">
        <BarChart 
        :width="400"
        :height="270"
        />
      </el-carousel-item>
    </el-carousel>
  </div>
  </div>
</div>
</template>

<script>
import BarChart from './charts/BarChart.vue';
import Radar from './charts/Radar.vue';
import LineChart from './charts/LineChart.vue';
import Bubble from './charts/Bubble.vue';
import DoughnutChart from './charts/Doughnut.vue';
import PolarArea from './charts/PolarArea.vue';

import { mapState } from 'vuex';
export default {
    name: "GlobalStat",
    components: {
        BarChart,
        Radar,
        LineChart,
        Bubble,
        DoughnutChart,
        PolarArea
    },
    data() {
        return {
            items: ["Radar", "Line", "Bubble", "Doughnut", "PolarArea"],
            barChartData: {},
            radarChartData: {},
        }
    },
    computed: {
      ...mapState({
        statistics: state => state.statistics
      })
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
          console.log(data);
          let keys = Object.keys(data.index_detail);
          let values = Object.values(data.index_detail);
          let radarChartData = {
            labels: [...keys],
            datasets: [
              {
                label: 'City Level Score',
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