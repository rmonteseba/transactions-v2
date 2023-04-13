FROM node:18-alpine as development

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

ARG PORT

EXPOSE ${PORT}

CMD ["yarn", "start:dev"]

FROM node:18-alpine as production

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

ARG PORT

EXPOSE ${PORT}

ENTRYPOINT ["/app/deploy/entrypoint.sh"]

CMD ["yarn", "start"]