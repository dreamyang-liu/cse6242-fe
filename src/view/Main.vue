<template>
<div>
    <div class="nav_bar">
        <!-- <h1> This is the Navigation Bar </h1> -->
    </div>
    <div class="main_container">
        <div class="select_map_container">
            <Select />
            <Map />
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

export default {
    name: 'Main',
    components: {
        Map,
        GlobalStat,
        Select,
    },
    methods: {
        render(data) {
            console.log(data);
        },
        init() {
            this.FEProxy.init(this.render);
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
    height: 10vh;
    background: saddlebrown;
}
.main_container {
    display: flex;
    flex-direction: row;
}
.select_map_container {
    width: 70vw;
    height: 90vh;
    display: flex;
    flex-direction: column;
}
.stat_control_container {
    width: 30vw;
    height: 90vh;
    display: flex;
    flex-direction: column;
}
</style>