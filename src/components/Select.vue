<template>
  <div class="city_select">
      <el-select v-model="value" placeholder="Select City">
        <el-option v-for="item in citys" :key="item.value" :label="item.label" :value="item.value">
            {{ item.label }}
        </el-option>
      </el-select>

      <el-select v-model="poi_type" placeholder="Select POI Type">
        <el-option v-for="item in pois" :key="item.value" :label="item.label" :value="item.value">
            {{ item.label }}
        </el-option>
      </el-select>

  </div>
</template>

<script>
import FEProxy from "../utils/FEProxy"
export default {
    name: "Select",
    data() {
        return {
            citys: [
                {
                    "value": "atl",
                    "label": "Atlanta",
                },
                {
                    "value": "nyc",
                    "label": "New York City",
                },
                {
                    "value": "sf",
                    "label": "San Francisco",
                }
            ],
            pois: [
                {
                    "value": "grocery",
                    "label": "Grocery Stores",
                },
                {
                    "value": "vaccination",
                    "label": "Vaccination Centers",
                },
                {
                    "value": "schools",
                    "label": "Schools",
                },
                {
                    "value": "hospitals",
                    "label": "Hospitals",
                },
                {
                    "value": "polling",
                    "label": "Polling Places",
                }
            ],
            value: '',
            poi_type: '',
        }
    },
    methods: {
        setCityCallback(val) {
            console.log(val)
        }
    },
    watch: {
        value(val) {
            let proxy = new FEProxy();
            proxy.setCity(val, this.setCityCallback);
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