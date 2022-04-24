# CSE6242 group project Frontend

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


## Serving the backend
`uvicorn serve:app --reload --port 8002 --root-path /api`

(root-path option required to have docs working properly)


## Nginx configuration 

For a guide on how to setup Nginx reverse proxy, see https://phoenixnap.com/kb/nginx-reverse-proxy

You will need the following setup in the nginx.conf (or equivalent) file:

```
server {

        listen 80;

        location / {

        proxy_pass http://localhost:8080;

        }

        location /api/ {

        proxy_pass http://localhost:8002/;

        }

}
```
Our Visualization tool is developed mainly using Vue.JS.
```
frontend
    ├── README.md
    ├── babel.config.js
    ├── dist
    ├── node_modules
    ├── package-lock.json
    ├── package.json
    ├── public
    ├── src
    └── yarn.lock
```
```
cse6242_backend
├── README.md
├── config.ini
├── otp
│   ├── Dockerfile
│   ├── README.md
│   └── isochrones.ipynb
├── requirements.txt
└── src
    ├── __init__.py
    ├── __pycache__
    ├── accessibility_analysis
    ├── analysis.ipynb
    ├── api
    ├── basic_pgsql.ipynb
    ├── data_processing
    ├── isochrones.py
    └── sql_functions
```

After enter the frontend directory, run the following command to install all dependencies.
```
npm install
```
For development mode, just run
```
npm run serve
```
For production mode, run
```
npm run build
```

Due to CORS restrictions, the visualization tool requires NGINX to connect to the backend. For NGINX, please install it from the official NGINX website. And adjust the configuration file `nginx.conf` like our sample file deploy/config/nginx.conf.

For backend, we mainly use fastAPI to serve the API service. You also need to install other dependencies, the best way is creating a virtual environment with miniconda and installing all dependencies with the following code.

```
conda install -y psycopg2 sqlalchemy geoalchemy2 shapely geopandas uvicorn
pip install fastapi orjson bson h3
```
Then, go to the src/api directory and run the following command to install all dependencies.
```
uvicorn serve:app --reload --port 8080
```
