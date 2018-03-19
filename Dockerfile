FROM node:9.4.0

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/

RUN npm install

# Bundle app source
COPY . /usr/src/app

# Build the project from typscript source
RUN npm run build

CMD ["npm", "start"]
