# Stage 1: Build the Angular application
FROM node:20-alpine AS build

# Set the working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install --force

# Install Angular CLI
RUN npm install -g @angular/cli

# Copy the rest of the application code
COPY . .

# Build the application
RUN ng build  --aot  --configuration development 

# Stage 2: Serve the application using a lightweight server
FROM node:20-alpine
WORKDIR /app

# Copy the built files from the previous stage
COPY --from=build /app/dist/consumer ./dist/

# Install production dependencies
COPY package*.json ./
RUN npm install --force

# Expose the server port
EXPOSE 4001

# Start the SSR server
CMD ["node", "dist/consumer/server/server.mjs"]
