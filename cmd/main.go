package main

import (
	"context"
	"fmt"
	"log"
	"os"

	"contlambda/pkg/utils"

	"github.com/aws/aws-lambda-go/events"
	"github.com/aws/aws-lambda-go/lambda"

	"github.com/aws/aws-sdk-go-v2/aws"
	"github.com/aws/aws-sdk-go-v2/config"
	"github.com/aws/aws-sdk-go-v2/service/s3"
)

var ctx = context.TODO()

func main() {

	lambda.Start(handler)

}

func handler(ctx context.Context, s3Event events.S3Event) (string, error) {

	fmt.Println("Lambda started")

	cfg, err := config.LoadDefaultConfig(ctx)
	if err != nil {
		log.Fatalf("Error loading profile %v", err)
	}

	// Create S3 service client
	s3Client := s3.NewFromConfig(cfg)

	result, err := s3Client.ListBuckets(ctx, nil)
	if err != nil {
		log.Fatalf("Unable to list buckets, %v", err)
	}

	log.Println("Buckets:")

	for _, b := range result.Buckets {
		log.Printf("* %s\n", aws.ToString(b.Name))
	}

	param1 := os.Getenv("PARAM1")

	log.Printf("Param1: %s", param1)

	s := utils.GetHello()

	log.Printf("Function exited")

	return s, nil
}
