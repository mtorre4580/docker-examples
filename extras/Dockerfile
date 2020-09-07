FROM node:12 AS build
WORKDIR /usr/src/app
COPY . .
RUN npm install
RUN npm run build

FROM node:12
RUN npm install -g serve
WORKDIR /usr/src/app
COPY --from=build /usr/src/app/build .
CMD ["serve", "-p", "80", "."]
