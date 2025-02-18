FROM node:20-alpine

COPY package.json package-lock.json ./


RUN npm install --frozen-lockfile
COPY . .

EXPOSE 3000

CMD ["npm", "run", "start", "--", "--host", "0.0.0.0"]


