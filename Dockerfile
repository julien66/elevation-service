FROM node:10

COPY . /app
COPY /etc/keys.js /app/keys.js
WORKDIR /app
RUN yarn install

ENV TILE_SET_CACHE 128
ENV TILE_SET_PATH /app/data
ENV MAX_POST_SIZE 1000kb

EXPOSE 4000

HEALTHCHECK CMD curl --fail http://localhost:4000/status || exit 1

CMD ["yarn", "run", "start"]
