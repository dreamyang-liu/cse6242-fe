<template>
  <div class="control_panel">
    <h1> This is the ControlPanel </h1>
</div>
</template>

<script>
export default {
    name: "ControlPanel",
    methods: {
        render(data) {
          console.log(data);
        }
    }
}
</script>

<style lang="less" scoped>
.control_panel {
  width: 30vw;
  height: 45vh;
  background: chartreuse;
}
</style>