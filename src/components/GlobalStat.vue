<template>
  <div class="stat_continer">
    <div class="globa_stat">
    <h3> City Level Stat </h3>
  <div class="block">
    <el-carousel trigger="click" height="35vh" :autoplay=false>
      <el-carousel-item v-for="item in items" :key="item">
        <BarChart
        v-if="item == 'Bar'"
        :width="400"
        :height="300"
        />
        <Radar
        v-if="item == 'Radar'"
        :width="400"
        :height="300"
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
        <Doughnut
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
    <h3> POI Stat </h3>
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
import Doughnut from './charts/Doughnut.vue';
import PolarArea from './charts/PolarArea.vue';
export default {
    name: "GlobalStat",
    components: {
        BarChart,
        Radar,
        LineChart,
        Bubble,
        Doughnut,
        PolarArea
    },
    data() {
        return {
            items: ["Bar", "Radar", "Line", "Bubble", "Doughnut", "PolarArea"],
        }
    },
    methods: {
        render(data) {
          console.log(data);
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
  .globa_stat {
    width: 30vw;
    height: 47.5vh;
    // background: cadetblue;
  }
}
</style>