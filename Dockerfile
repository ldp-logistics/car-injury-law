# Stage 1: Build
FROM node:20-alpine AS builder
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source and build
COPY . .
RUN npm run build

# Stage 2: Backend API and fallback SPA server
FROM node:20-alpine AS api
WORKDIR /app
COPY package*.json ./
# Only install production dependencies
RUN npm install --omit=dev
COPY --from=builder /app/dist ./dist

# The API needs dist/public existing to serve index.html with dynamic SEO tags
ENV NODE_ENV=production
ENV PORT=5000
EXPOSE 5000

CMD ["node", "dist/index.js"]

# Stage 3: Nginx Frontend (Serves static assets and proxies Node)
FROM nginx:alpine AS web
# Replace default config
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
# Copy built static files
COPY --from=builder /app/dist/public /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
