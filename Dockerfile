FROM golang:1-alpine3.12 AS build-image

WORKDIR /app

COPY go.mod go.sum ./
RUN go mod download

COPY /cmd/*.go ./
COPY /pkg ./pkg
RUN go build -tags lambda.norpc -ldflags="-s -w" main.go


FROM alpine:3.12

WORKDIR /app

COPY --from=build-image /app/main ./

ENTRYPOINT ["/app/main"]
