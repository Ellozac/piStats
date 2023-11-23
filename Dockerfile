# FROM node:20-alpine
FROM arm64v8/node:20-alpine
COPY ./ ./

RUN npm install

EXPOSE 80

CMD ["npm", "run", "start"]

