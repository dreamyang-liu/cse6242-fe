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
        width="42%">
        <p class="method">We employed a <strong>custom, Dockerized travel time isochrone service </strong>based on OpenTripPlanner which computes accurate isochrones based on supplied GTFS and OSM data.</p>
        <p class="method">We also created a normalized dataset with <strong>GeoPandas</strong> and Uber’s <strong>H3 hexagons</strong> being the atomic unit of location. The mapping is done by finding the hex which overlaps with a given POI. The area of each hex was set to be ~0.1 km2.</p>
        <p class="method">Isochrones were combined with the Census data to compute the accessibility index using the <strong>2SFCA</strong> method – an interpretable gravity model</p>
        <p class="method">All the data was stored in a <strong>PostgreSQL</strong> database and cached using <strong>Redis</strong> for low-latency querying.</p>
        <p class="method">The tool was developed with <strong>FastAPI, Vue.js,</strong> and the <strong>Deck.GL</strong> mapping library was used to display the interactive visualization on the H3 hexagon scale. City and catchment level statistics were displayed using <strong>Chart.js</strong> and drew from the PostgreSQL backend.</p>
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
            console.log("Switching city");
            this.$store.commit("clearPOIChanges");
            proxy.switchCity(val, this.update_callback, this.$store.state.config);
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
.method {
  word-wrap:break-word;
  word-break:normal;
}
</style>