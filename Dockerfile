FROM node:15-alpine
WORKDIR /app
COPY . .
RUN npm install
CMD ["npm", "run", "dev"]
