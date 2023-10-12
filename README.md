# Onebox (oneboxui)

Mailbox management

## Install the dependencies
```bash
yarn
# or
npm install
```

```bash
bun add dotenv --dev
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)
```bash
quasar dev
bun run quasar dev
```


### Build the app for production
```bash
quasar build
```

### Customize the configuration
See [Configuring quasar.config.js](https://v2.quasar.dev/quasar-cli-vite/quasar-config-js).


## Docker

```bash
docker build -t dockerize-bun-onebox .

docker run -it -p 8000:80 --rm dockerize-bun-onebox
```

Access to app: [localhost:8000](localhost:8000)

