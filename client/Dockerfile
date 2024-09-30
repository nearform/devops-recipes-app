# ---- Build ----
FROM node:16-alpine AS build-stage
WORKDIR /app

COPY ["package.json","/app/"]

RUN npm install

COPY . .

RUN npm run build

# ---- Run App ----
FROM nginx:stable-alpine AS production-stage

# Copy config
COPY docker/nginx/gzip.conf /etc/nginx/gzip.conf
COPY docker/nginx/default.conf /etc/nginx/conf.d/default.conf

COPY --from=build-stage /app/build /usr/share/nginx/html

# make all files belong to the nginx user
RUN chown nginx:nginx /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
