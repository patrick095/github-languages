FROM node

WORKDIR /usr/app

COPY package*.json ./

COPY . .

ENV PORT=3000

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]