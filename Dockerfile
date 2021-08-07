FROM node

WORKDIR /usr/src

COPY package*.json ./

RUN npm install

EXPOSE 3005

CMD ["npm", "start"]