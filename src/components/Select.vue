<template>
  <div class="city_select">
    <span style="margin-right:10px;">City Analyzed:</span>
      <div style="padding: 1px 0;">
          <el-select v-model="value" placeholder="Select City">
        <el-option v-for="item in cityList" :key="item.value" :label="item.label" :value="item.value">
            {{ item.label }}
        </el-option>
      </el-select>

        <span style="margin-right:10px; margin-left:20px;">Interaction:</span>
        <el-radio-group style="margin-left:10px;" v-model="radio">
            <el-radio-button :label="0">Explore</el-radio-button>
            <el-radio-button :label="1">Add New POIs</el-radio-button>
            <el-radio-button :label="2">Remove POIs</el-radio-button>
        </el-radio-group>
      </div>
      <el-button style="margin-left:20px;" type="primary" plain @click="dialogVisible = true">Methodology Details</el-button>

        <el-dialog
        title="Methodology"
        :visible.sync="dialogVisible"
        width="30%">
        <span>This is the methodology of the tool</span>
        <span slot="footer" class="dialog-footer">
            <el-button type="primary" @click="dialogVisible = false">Done</el-button>
        </span>
        </el-dialog>
        
      

  </div>
</template>

<script>
import FEProxy from "../utils/FEProxy"
import { mapState } from 'vuex';
export default {
    name: "Select",
    data() {
        return {
            value: 1,
            radio: 0,
            dialogVisible: false
        }
    },
    methods: {
        render(data) {
            this.$store.commit("setCityData", data);
            this.$store.commit("setPois", data.pois.data);
            this.$store.commit("setStatistics", data.stats);
            let newConfig = {
              city_id: this.value,
              poi_category: "Vaccination centre",
              demographic_category: "Race",
              time_of_day: "morning",
            };
            this.$store.commit("setConfig", newConfig);
        },
        update_callback(cityData) {
          this.render(cityData);
        },
        handleClose(done) {
        this.$confirm('Are you sure you want to close this box?')
          .then(_ => {
            done();
          })
          .catch(_ => {});
        }
    },
    computed: mapState({
      cityList: state => state.cityList,
      config: state => state.config,
    }),
    watch: {
        value(val) {
            console.log(val);
            // this.$store.commit("reset");
            // this.$store.commit("setConfigCity", val);
            let proxy = new FEProxy();
            proxy.switchCity(val, this.update_callback);
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
  height: 6vh;
  box-sizing: border-box;
  border: 1px solid rgb(88, 26, 26);
  background: linear-gradient(to right, rgb(6, 246, 242) 0%, rgb(6, 145, 219) 50%, rgb(67, 6, 182) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>