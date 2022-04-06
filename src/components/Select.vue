<template>
  <div class="city_select">
      <div style="padding: 1px 0;">
          <el-select v-model="value" placeholder="Select City">
        <el-option v-for="item in cityList" :key="item.value" :label="item.label" :value="item.value">
            {{ item.label }}
        </el-option>
      </el-select>

        <el-radio-group style="margin-left:20px;" v-model="radio">
            <el-radio-button :label="0">Default</el-radio-button>
            <el-radio-button :label="1">Add</el-radio-button>
            <el-radio-button :label="2">Delete</el-radio-button>
        </el-radio-group>
      </div>

  </div>
</template>

<script>
import FEProxy from "../utils/FEProxy"
import { mapState } from 'vuex';
export default {
    name: "Select",
    data() {
        return {
            value: '',
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
  box-sizing: border-box;
  border: 1px solid rgb(88, 26, 26);
  background: linear-gradient(to right, rgb(6, 246, 242) 0%, rgb(6, 145, 219) 50%, rgb(67, 6, 182) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>