FROM node:12-alpine AS build-stage

WORKDIR /smart-clinic

COPY package*.json ./

RUN npm ci

COPY . .

RUN npx ngcc

RUN npx ng build --prod

FROM node:12-alpine AS runtime-stage

COPY --from=build-stage /smart-clinic/dist ./dist

RUN npm install express

COPY server.js .

EXPOSE 3333

CMD ["node", "server.js"]
