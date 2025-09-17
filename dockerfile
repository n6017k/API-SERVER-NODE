# Use official Node.js LTS image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json first
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy the rest of the application code
COPY . .

# Expose app port (default: 3000)
EXPOSE 3000

# Start the app
#CMD ["node", "server.js"]
CMD ["npm", "start"]
