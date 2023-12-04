####
# This Dockerfile is used in order to build a container.
#
# Build the image with:
#
# docker build -f Dockerfile -t dashboard-consultas-sspc
#
# Then run the container using:
#
# docker run -i --rm -p 1234:80 mst/user-ui
#
###
FROM node:18-alpine as build-stage

WORKDIR /app
COPY package*.json ./

RUN npm set progress=false && \
  npm i --silent
COPY . ./
RUN npm run build

FROM nginxinc/nginx-unprivileged:stable-alpine-slim as production-stage
# Use root user to modify user access to specific folder
USER root
# Copy custom NGINX configuration and application
ADD ./nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build-stage /app/dist /usr/share/nginx/html
# Setup unprivileged user 1001
RUN chown 1001 /usr/share/nginx/html \
    && chmod "g+rwX" /usr/share/nginx/html \
    && chown 1001:root /usr/share/nginx/html
# Use user 1001
USER 1001
# Expose a port that is higher than 1024 due to unprivileged access
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
