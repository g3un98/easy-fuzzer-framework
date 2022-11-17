FROM golang:alpine as builder

RUN apk add git &&\
    git clone -b feature/back --single-branch --no-tags --depth 1 https://github.com/g3un/easy-fuzzer-framework.git /eff &&\
    cd /eff/back &&\
    go mod tidy &&\
    go build -o main

FROM alpine:latest

COPY --from=builder /eff/back/main /main
COPY ./config /root/.aws/config
COPY ./credentials /root/.aws/credentials

EXPOSE 8080

ENTRYPOINT ["/main"]
