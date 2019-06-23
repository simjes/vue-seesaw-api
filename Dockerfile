FROM node:10-slim

WORKDIR /app

COPY package.json /app
RUN npm install

COPY . /app

ENV NODE_ENV=production
ENV PORT 4000

EXPOSE $PORT
CMD [ "npm", "start" ]