FROM node:12-alpine AS build-stage

WORKDIR /smart-clinic

COPY package*.json ./

RUN npm ci

COPY . .

RUN npx ngcc

RUN npx ng build --prod

FROM node:12-alpine AS runtime-stage

COPY --from=build-stage /smart-clinic/dist ./dist

COPY --from=build-stage /smart-clinic/release ./release

RUN npm install express

COPY server.js .

EXPOSE 4300

CMD ["node", "server.js"]
