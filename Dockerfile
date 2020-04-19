FROM node:12.14-alpine AS base-stage
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json .
RUN npm config set unsafe-perm true
RUN yarn
COPY . .

FROM base-stage AS develop-stage
ENV NODE_ENV=development

FROM base-stage AS build-stage
RUN npm run build

FROM build-stage AS production-stage
ENV NODE_ENV=production
EXPOSE 3000