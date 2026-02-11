# Build stage
FROM node:20 AS build
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy app source and build
COPY . .
RUN npm run build

# Production stage
FROM node:20
WORKDIR /app

# Copy built output and package.json
COPY --from=build /app/.output ./.output
COPY --from=build /app/package*.json ./

# Install only production dependencies
RUN npm install --omit=dev

# Set environment
ENV NODE_ENV=production
EXPOSE 3000

# Start Nuxt server
CMD ["node", ".output/server/index.mjs"]
