# Golang AWS Lambda Boilerplate
Boilerplate code of AWS Lambda functions in Go deployed with AWS CDK.

The project contains two stacks:
- Regular lambda function
- Contenerized lambda function

Commands:
* `make build` - build Linux executable locally
* `make build_docker` - build Docker container locally
* `make deploy` - deploy both stacks to AWS account (defined by `default` profile)
* `make destroy` - destroy both stacks

Useful links:
- Go Project Layout: https://github.com/golang-standards/project-layout
- Dockerized lambda blog post: https://hichaelmart.medium.com/using-container-images-with-aws-lambda-7ffbd23697f1

