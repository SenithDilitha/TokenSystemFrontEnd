FROM node:18 AS build
EXPOSE 8080
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
CMD ["npm", "run", "dev"]