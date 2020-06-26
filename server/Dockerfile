FROM node:12

# Create app directory
WORKDIR /usr/src/app

# Install dependencies (node_modules ignored)
COPY package*.json ./
RUN npm install

# Bundle app (copy all of this working directory to selected directory [WORKDIR])
COPY . .

# Run
CMD [ "npm", "start" ]