package main

import (
	"context"
	"fmt"

	"contlambda/pkg/utils"

	"github.com/aws/aws-lambda-go/events"
	"github.com/aws/aws-lambda-go/lambda"
)

func main() {

	lambda.Start(handler)

}

func handler(ctx context.Context, s3Event events.S3Event) (string, error) {

	fmt.Println("Lambda started")

	s := utils.GetHello()

	print("Hello world")

	return s, nil
}
