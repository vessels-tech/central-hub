FROM mhart/alpine-node:8.9.4

WORKDIR /opt/central-hub
COPY src /opt/central-hub/src
COPY config /opt/central-hub/config
COPY package.json .npmrc webpack.config.js .babelrc /opt/central-hub/

RUN apk add --no-cache -t build-dependencies make gcc g++ python libtool autoconf automake \
    && cd $(npm root -g)/npm \
    && npm config set unsafe-perm true \
    && npm install -g node-gyp \
    && apk del build-dependencies

EXPOSE 4001
CMD node src/server
