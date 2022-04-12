<template>
<div>
    <div class="nav_bar">
        <div><img src="https://thumbs.gfycat.com/AgedHeavyHumpbackwhale.webp" alt="" class="nav_img"> </div>
        <span class="nav_title"> The Ease and Equity of Point of Interest Accessibility
via Public Transit in the US </span>
    </div>
    <div class="main_container">
        <div class="select_map_container">
            <Select />
            <Map 
            :poi_types="poitypes"
            :demographic_types="demographictypes"
            :time_types="time_types"
            />
        </div>
        <div class="stat_control_container">
            <GlobalStat />
        </div>
    </div>
</div>
</template>

<script>
import Map from "../components/Map.vue";
import GlobalStat from "../components/GlobalStat.vue";
import Select from "../components/Select.vue";
import FEProxy from "../utils/FEProxy";
import * as d3 from 'd3';
import * as h3 from 'h3-js';

export default {
    name: 'Main',
    components: {
        Map,
        GlobalStat,
        Select,
    },
    data: function() {
        return {
            poitypes: [],
            demographictypes: [],
            time_types: [],
        }
    },
    methods: {
        configure(config) {
            console.log(config);
            this.poitypes = config.poi_categories;
            this.demographictypes = config.demographic_categories;
            this.time_types = config.times_of_day;
            let cities = config.cities;
            let parsed_cities = [];
            for(let i=0; i < cities.length; i++) {
                parsed_cities.push({
                    "value": cities[i].id,
                    "label": cities[i].name,
                });
            }
            this.$store.commit("setCityList", parsed_cities);
        },
        dummy_render(data) {
            let _this = this;
            const load_data = new Promise((resolve, reject) => {
                d3.csv('./dummy_data.csv')
                    .then(response => {
                    let pois = response.map(d => [Number(d.stop_lon), Number(d.stop_lat)]);
                    this.$store.commit("setPois", pois);
                });
                d3.csv('lat_lon_to_census_data.csv')
                    .then(response => {
                    let data = response.map(d => ({hex: h3.geoToH3(Number(d.lat), Number(d.lon), 9), lon: Number(d.lon), lat: Number(d.lat), totpop: Number(d.pop_total), white: Number(d.pop_white), black: Number(d.pop_black), hisp: Number(d.pop_indian_alaskan), asian: Number(d.pop_asian)}));
                    // Calculate the sums and group data (while tracking count)
                    data = data.reduce(function(m, d){
                        if(!m[d.hex]){
                            m[d.hex] = {...d, count: 1};
                            return m;
                        }
                        m[d.hex].totpop += d.totpop;
                        m[d.hex].white += d.white;
                        m[d.hex].black += d.black;
                        m[d.hex].hisp += d.hisp;
                        m[d.hex].asian += d.asian;
                        m[d.hex].count += 1;
                        return m;
                    },{});
                    
                    // Create new array from grouped data and compute the average
                    let city_data = Object.keys(data).map(function(k){
                        let item  = data[k];
                        return {
                            hex: item.hex,
                            totpop: item.totpop,
                            count: item.count,
                            white: item.white,
                            black: item.black,
                            hisp: item.hisp,
                            asian: item.asian
                        }
                    });
                    this.$store.commit("setCityData", city_data);
                });
            });
        },
        render(data) {
            this.$store.commit("setCityData", data);
            this.$store.commit("setPois", data.pois.data);
            this.$store.commit("setStatistics", data.stats);
        },
        init() {
            // this.dummy_render();
            // this.FEProxy.init(this.dummy_render);
            this.FEProxy.fetchConfig(this.configure);
            this.FEProxy.init(this.render);
            // this.dummy_render();
            // 
        },
    },
    mounted() {
        this.FEProxy = new FEProxy();
        this.init();
    },
}
</script>

<style lang="less" scoped>
.nav_bar {
    width: 100vw;
    height: 5vh;
    color: whitesmoke;
    align-items: center;
    justify-content: center;
    background: linear-gradient(to right, #09e9ad, #168aef);
    display: flex;
    flex-direction: row;
    .nav_img {
        width: 4vw;
        height: 5vh;
    }
    .nav_title {
        font-size: 3vh;
        font-weight: bold;
        text-shadow: 0 0 0.5vh black;
    }
}
.main_container {
    display: flex;
    flex-direction: row;
}
.select_map_container {
    width: 70vw;
    height: 95vh;
    display: flex;
    flex-direction: column;
}
.stat_control_container {
    width: 30vw;
    height: 95vh;
    display: flex;
    flex-direction: column;
}
</style>