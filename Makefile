.PHONY: build build_docker deploy

.EXPORT_ALL_VARIABLES:
AWS_PROFILE = default
GOPROXY = direct

build:
	GOARCH=amd64 GOOS=linux go build -ldflags="-s -w" -o bin/main ./cmd

build_docker:
	docker build -t contlambda .

deploy: build
	cd cdk;\
	cdk deploy '*' --profile ${AWS_PROFILE}