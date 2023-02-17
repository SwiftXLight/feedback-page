#build stage
FROM node:18-alpine AS build

WORKDIR /app/backend

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

#prod stage
FROM node:18-alpine

WORKDIR /app/backend

ARG NODE_ENV=production
ARG NODE_ENV={NODE_ENV}

COPY --from=build /app/backend/dist ./dist

COPY package*.json ./

RUN npm install --only=production

RUN rm package*.json

EXPOSE 5000

CMD ["node", "dist/main.js"]