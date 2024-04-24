FROM node:latest
WORKDIR /app
COPY C:\Users\Admin\Fan\fanop/package.json ./
RUN npm install
COPY . .
CMD ["npm","start"]