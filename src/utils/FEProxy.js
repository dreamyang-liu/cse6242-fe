class FEProxyBase {
    constructor() {
        this.ajax = new XMLHttpRequest();
    }
    
    get(url, callback) {
        this.ajax.open("GET", url);
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

    init(callback) {
        proxy.get(`/init`, (response) => {
            callback(response);
        });
    }

    configUpdate(data, callback) {
        proxy.post(`/updateConfig`, data, (response) => {
            callback(response);
        });
    }

    poiUpdate(data, callback) {
        proxy.post(`/updatePoi`, data, (response) => {
            callback(response);
        });
    }

};

export default FEProxy;