FROM node:12

# Install PM2
RUN npm install pm2 -g

# Create app directory
WORKDIR /usr/src/app

# Install dependencies (node_modules ignored)
COPY package*.json ./
RUN npm install

# Bundle app (copy all of this working directory to selected directory [WORKDIR])
COPY . .

# Run
CMD [ "pm2-runtime", "start", "ecosystem.config.js" ]