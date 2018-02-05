FROM mhart/alpine-node:6.5.0

WORKDIR /opt/central-hub
COPY src /opt/central-hub/src
COPY config /opt/central-hub/config
COPY package.json .npmrc webpack.config.js .babelrc /opt/central-hub/

RUN apk add --no-cache make gcc g++ python && \ 
    npm install && npm run build 
RUN npm uninstall -g npm

EXPOSE 4001
CMD node src/server
