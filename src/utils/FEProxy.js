import config from "./default_config";
import {UpdatePack} from "./UpdatePack";
class FEProxyBase {
    constructor() {
        this.ajax = new XMLHttpRequest();
    }

    api_endpoint() {
        return '/api'
    }
    
    get(url, callback) {
        console.log(this.api_endpoint() + url)
        this.ajax.open("GET", this.api_endpoint() + url, false);
        this.ajax.onreadystatechange = () => {
            if (this.ajax.readyState === 4 && this.ajax.status === 200) {
                callback(this.ajax.responseText);
            }
        };
        this.ajax.send();
    }

    post(url, data, callback) {
        this.ajax.open("POST", this.api_endpoint() + url);
        this.ajax.setRequestHeader("Content-Type", "application/json");
        this.ajax.onreadystatechange = () => {
            if (this.ajax.readyState === 4 && this.ajax.status === 200) {
                callback(this.ajax.responseText);
            }
        };
        this.ajax.send(JSON.stringify(data));
    }
};


class FEProxy extends FEProxyBase {
    constructor() {
        super();
    }

    fetchConfig(callback) {
        this.get("/configuration", (response) => {
            callback(JSON.parse(response));
        });
    }

    init(callback) {
        let update_pack = new UpdatePack();  
        update_pack.add_change("poi_category");
        update_pack.add_change("demographic_category");
        update_pack.add_change("time_of_day");
        this.post(`/city_data/`, update_pack.obj, (response) => {
            callback(JSON.parse(response));
        });
    }

    switchCity(new_city_id, callback, config) {
        let update_pack = new UpdatePack();  
        update_pack.add_change("poi_category");
        update_pack.add_change("demographic_category");
        update_pack.add_change("time_of_day");        
        config.city_id = new_city_id;
        update_pack.fill_config(config);        
        //update_pack.obj.config.city_id = 
        this.post(`/city_data/`, update_pack.obj, (response) => {
            callback(JSON.parse(response));
        });
    }

    updateConfig(callback, payload) {
        this.post(`/city_data/`, payload.obj, (response) => {
            callback(JSON.parse(response));
        });
    }

    updatePOIs(callback, payload) {
        this.get(`/city_data/`, (response) => {
            callback(JSON.parse(response));
        });
    }

    fetchCatchement(callback, city_id, id, time, demographic) {
        this.get(`/catchment/${city_id}/${id}?time_of_day=${time}&demographics_category=${demographic}`, (response) => {
            callback(response);
        });
    }

};

export default FEProxy;