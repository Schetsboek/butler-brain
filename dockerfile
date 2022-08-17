FROM node:16 AS BUILD

# Create app directory
ARG SERVICE_PATH=/srv/butler/brain
WORKDIR $SERVICE_PATH

# Install app dependencies
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

CMD [ "node", "dist/main.js" ]