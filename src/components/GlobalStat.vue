<template>
  <div class="globa_stat">
    <h1> This is the Global Stat </h1>
  <div class="block">
    <el-carousel trigger="click" height="35vh" :autoplay=false>
      <el-carousel-item v-for="item in items" :key="item">
        <h2 class="title">{{ item }}</h2>
      </el-carousel-item>
    </el-carousel>
  </div>
</div>
</template>

<script>
export default {
    name: "GlobalStat",
    data() {
        return {
            items: ["Housing", "Income", "Labor", "Poverty", "Unemployment", "Violence"],
        }
    },
}
</script>

<style lang="less" scoped>
.title {
  color: rgb(243, 147, 22);
}
.globa_stat {
  width: 30vw;
  height: 45vh;
  background: cadetblue;
}
</style>