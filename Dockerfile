# Application based in Node.js Version 10
FROM node:14-alpine

# Set work dir /app
WORKDIR /app

# Copy files in /app
ADD ./ /app

# Install npm modules
RUN (cd /app && npm install)


# Expose 9000 port
EXPOSE 3000

# Rebuild npm packages


# Run command npm start
CMD (cd /app && npm start)
