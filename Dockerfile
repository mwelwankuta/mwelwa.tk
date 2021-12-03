FROM node:14.15.3 as build

WORKDIR /app

COPY package.json /app/
COPY package-lock.json /app/

RUN npm install --only=dev

COPY . /app/

RUN npm run build

# serve with nginx

FROM nginx:1.17.10 as web

COPY --from=build /app/dist /usr/share/nginx/html

CMD [ "nginx","daemon", 'off;' ]