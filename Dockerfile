FROM node:20-alpine

CMD cd /rtg-wiki && \
    npm install --frozen-lockfile && \
    npm run start -- --host 0.0.0.0
