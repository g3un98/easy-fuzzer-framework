FROM golang:alpine as builder

COPY . /eff/back

RUN cd /eff/back &&\
    go mod tidy &&\
    go build -o main

FROM alpine:latest

COPY --from=builder /eff/back/main /main

EXPOSE 8080

CMD ["/main"]
