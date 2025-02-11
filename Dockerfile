FROM node:18 AS build-stage
# FROM johnpapa/angular-cli as client-app
LABEL authors="Patrick Mwangi"

WORKDIR /app

COPY package*.json ./
RUN npm install -g @angular/cli@17 && npm install -f
COPY . .
#RUN rm -rf src/assets/figma-photos
RUN ng build --configuration=production

FROM nginx:alpine AS production-stage
COPY --from=build-stage ./app/dist/point-of-sale/browser ./usr/share/nginx/html/browser
COPY nginx.conf ./etc/nginx/conf.d/default.conf
EXPOSE  80
# CMD ["node", "server.js"]
CMD ["nginx", "-g", "daemon off;"]
