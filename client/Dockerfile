FROM node:12.14.0-alpine3.11 as builder

WORKDIR /app

COPY ["package.json", "yarn.lock", "./"]

RUN yarn install

COPY . .

RUN yarn export

FROM node:12.14.0-alpine3.11

COPY --from=builder /app/__sapper__/export .

EXPOSE 5000

CMD ["npx", "http-server", ".", "-p", "5000"]