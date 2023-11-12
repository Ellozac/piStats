FROM node:20-alpine

COPY ./ ./

RUN npm install

EXPOSE 80


CMD ["npm","run", "start"]