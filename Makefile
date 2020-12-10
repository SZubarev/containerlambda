PHONY: build build_docker deploy

.EXPORT_ALL_VARIABLES:
AWS_PROFILE = private

build:
	go build -o bin/main ./cmd


build_docker:
	docker build -t contlambda .

deploy:
	cd cdk;\
	cdk deploy --profile ${AWS_PROFILE}