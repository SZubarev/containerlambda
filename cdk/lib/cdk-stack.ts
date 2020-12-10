import * as cdk from '@aws-cdk/core';
import * as lambda from '@aws-cdk/aws-lambda';
import * as path from 'path';
import * as ecr from '@aws-cdk/aws-ecr';

export class ContainerLambdaStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const repo = ecr.Repository.fromRepositoryName(this, 'EcrRepo',"contlambda");

    const containerFn = new lambda.DockerImageFunction(this, 'ECRFunction', {
      code: lambda.DockerImageCode.fromEcr(repo),
    });

    // const containerFn = new lambda.DockerImageFunction(this, 'ContainerLambdaFunction', {
    //   code: lambda.DockerImageCode.fromImageAsset(path.join(__dirname, '../..')),
    // });



  }
}
