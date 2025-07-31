FROM node:18-alpine

# Install app dependencies
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci

# Copy source and build
COPY . .
RUN npm run build

# Expose the port used in src/main.ts
EXPOSE 4000

CMD ["node", "dist/main.js"]


#
#