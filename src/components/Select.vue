<template>
  <div class="city_select">
      <el-select v-model="value" placeholder="Select City">
        <el-option v-for="item in cityList" :key="item.value" :label="item.label" :value="item.value">
            {{ item.label }}
        </el-option>
      </el-select>

      <el-select v-model="poi_type" style="margin-left:20px;" placeholder="Select POI Type">
        <el-option v-for="item in pois" :key="item.value" :label="item.label" :value="item.value">
            {{ item.label }}
        </el-option>
      </el-select>

    <el-radio-group style="margin-left:20px;" v-model="radio">
        <el-radio :label="0">Default</el-radio>
        <el-radio :label="1">Add</el-radio>
        <el-radio :label="2">Delete</el-radio>
    </el-radio-group>

  </div>
</template>

<script>
import FEProxy from "../utils/FEProxy"
import { mapState } from 'vuex';
export default {
    name: "Select",
    data() {
        return {
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
            radio: 0
        }
    },
    methods: {
        update_callback(cityData) {
            this.$store.commit("setCityData", cityData);
        }
    },
    computed: mapState({
      cityList: state => state.cityList,
      config: state => state.config,
    }),
    watch: {
        value(val) {
            this.$store.commit("setConfigCity", val);
            let proxy = new FEProxy();
            proxy.configUpdate(this.config, this.update_callback);
        },
        poi_type(val) {
            this.$store.commit("setConfigPOIType", val);
            let proxy = new FEProxy();
            proxy.configUpdate(this.config, this.update_callback);
        },
        radio(val) {
            this.$store.commit("setClickEvent", val);
        }
    }
}
</script>

<style lang="less" scoped>
.city_select {
  width: 70vw;
  height: 5vh;
//   background: coral;
}
</style>