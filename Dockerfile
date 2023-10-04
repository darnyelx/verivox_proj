# Use an official Node.js runtime as a parent image
FROM node:14

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install project dependencies
RUN npm install

RUN npm install -g typescript

# Copy the rest of the application code to the container
COPY . .

# Build TypeScript code (adjust this command based on your project setup)
RUN npm run build

# Expose a port (if your application listens on a specific port)
EXPOSE 3000

# Start your application (adjust the command as needed)
CMD ["npm", "start"]
