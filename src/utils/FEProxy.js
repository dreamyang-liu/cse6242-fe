import config from "./default_config";
import {UpdatePack} from "./UpdatePack";
class FEProxyBase {
    constructor() {
        this.ajax = new XMLHttpRequest();
    }
    
    get(url, callback) {
        this.ajax.open("GET", url, false);
        this.ajax.onreadystatechange = () => {
            if (this.ajax.readyState === 4 && this.ajax.status === 200) {
                callback(this.ajax.responseText);
            }
        };
        this.ajax.send();
    }

    post(url, data, callback) {
        this.ajax.open("POST", url);
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
        this.get("/config", (response) => {
            callback(JSON.parse(response));
        });
    }

    init(callback) {
        let update_pack = new UpdatePack();  
        update_pack.addChanged("poi_category");
        update_pack.addChanged("demographic_category");
        update_pack.addChanged("time_of_day");
        console.log(update_pack.obj);
        this.post(`/city_data/`, update_pack.obj, (response) => {
            callback(JSON.parse(response));
        });
    }

    updateConfig(callback) {
        this.get(`/city_data`, (response) => {
            callback(JSON.parse(response));
        });
    }

    fetchCatchement(callback, id) {
        this.get(`/catchment/${1}/${id}?time_of_day=${'morning'}&demographics_category=${'race'}`, (response) => {
            callback(response);
        });
    }

};

export default FEProxy;