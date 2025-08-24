# --- Frontend ---
FROM node:20-alpine AS frontend-build
WORKDIR /app/frontend
COPY frontend/package*.json ./
RUN npm install
COPY frontend/ ./
RUN npm run build

#--- Backend ---
FROM node:20-alpine AS backend-build
WORKDIR /app/backend
COPY backend/package*.json ./
RUN npm install
COPY backend/ ./
RUN npm run build

#--- Final image ---
FROM node:20-alpine
WORKDIR /app
# Copy backend
COPY --from=backend-build /app/backend/dist ./backend/dist
COPY --from=backend-build /app/backend/node_modules ./backend/node_modules

# Copy frontend
COPY --from=frontend-build /app/frontend/build ./frontend/build


WORKDIR  /app/backend
EXPOSE 5000
ENV NODE_ENV=production
CMD ["node", "dist/main.js"]