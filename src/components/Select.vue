<template>
  <div class="city_select">
      <el-select v-bind="value" placeholder="Select City">
        <el-option v-for="item in citys" :key="item.value" :label="item.label" :value="item.value">
            {{ item.label }}
        </el-option>
      </el-select>
  </div>
</template>

<script>
export default {
    name: "Select",
    data() {
        return {
            citys: [
                {
                    "value": "atl",
                    "label": "Atlanta",
                }
            ]
        }
    }
}
</script>

<style lang="less" scoped>
.city_select {
  width: 70vw;
  height: 10vh;
  background: coral;
}
</style>