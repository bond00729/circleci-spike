FROM node:8.12-alpine
WORKDIR /circleci-spike
COPY package.json yarn.lock ./
RUN yarn install
COPY . .
ENTRYPOINT ["yarn", "start"]