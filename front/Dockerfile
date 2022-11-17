FROM node:lts-alpine
RUN apk add git &&\
    git clone -b feature/front --single-branch --no-tags --depth 1 https://github.com/g3un/easy-fuzzer-framework.git /eff &&\
    cd /eff/front &&\
    npm install &&\
    npm run build

WORKDIR /eff/front/build

EXPOSE 3000
ENTRYPOINT ["node", "index.js"]
