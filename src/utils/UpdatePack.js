class UpdatePack {
    constructor() {
        this.obj = {
            "changed": [
            ],
            "config": {
              "poi_category": "Restaurants",
              "demographic_category": "Race",
              "time_of_day": "morning",
              "city_id": 1
            },
            "poi_list": []
          }
    }

    addChanged(field) {
        if(this.obj.changed.indexOf(field) === -1) {
            this.obj.changed.push(field);
        }
    }

    fill_poi_list(poi_list) {
        this.obj.poi_list = poi_list;
    }

    update_config_field(key, value) {
        this.obj.config[key] = value;
    }

    fill_config(config) {
        this.obj.config = config;
    }
};

export {UpdatePack};