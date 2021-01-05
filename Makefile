.PHONY: build build_docker deploy destroy

.EXPORT_ALL_VARIABLES:
AWS_PROFILE = default
GOPROXY = direct

build:
	GOARCH=amd64 GOOS=linux go build -ldflags="-s -w" -o bin/main ./cmd

build_docker:
	docker build -t contlambda .

test:
	go test ./pkg/...

deploy: build
	cd cdk;\
	cdk deploy '*' --profile ${AWS_PROFILE}

destroy:
	cd cdk;\
	cdk destroy --profile ${AWS_PROFILE}