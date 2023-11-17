# FROM node:20-alpine
FROM arm64v8/node:20-alpine
RUN apk --no-cache add raspberrypi raspberrypi-dev
COPY ./ ./

RUN npm install

EXPOSE 80

CMD ["npm", "run", "start"]

