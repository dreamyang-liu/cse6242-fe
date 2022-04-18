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

For a guide on how to setup Nginx reverse proxy, see https://phoenixnap.com/kb/nginx-reverse-proxy.

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