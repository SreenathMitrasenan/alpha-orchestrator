# Use an official Node.js runtime as a parent image
FROM node:14-alpine

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the remaining application files to the container
COPY . .

# Expose port 3000
EXPOSE 3000

# Start the Node.js application
CMD ["node", "server.js"]