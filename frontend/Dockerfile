# Use an official Node runtime as a parent image
FROM node:14

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the React application
RUN npm run build

# Install serve to serve the build folder
RUN npm install -g serve

# Expose the port the app runs on
EXPOSE 5000

# Start the application
CMD ["serve", "-s", "build"]
