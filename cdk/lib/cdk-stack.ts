import * as cdk from '@aws-cdk/core';
import * as lambda from '@aws-cdk/aws-lambda';
import * as path from 'path';
import * as ecr from '@aws-cdk/aws-ecr';
import { DockerImageAsset } from '@aws-cdk/aws-ecr-assets';
import { Duration } from '@aws-cdk/core';


export class ContainerLambdaStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    //const repo = ecr.Repository.fromRepositoryName(this, 'EcrRepo',"contlambda");

    //const containerFn = new lambda.DockerImageFunction(this, 'ECRFunction', {
    //  code: lambda.DockerImageCode.fromEcr(repo),
    //});

    const asset = new DockerImageAsset(this, 'container-lambda', {
      directory: path.join(__dirname, "..", ".."),
    });


    const containerFn = new lambda.DockerImageFunction(this, 'ContainerLambdaFn', {
       //code: lambda.DockerImageCode.fromImageAsset(path.join(__dirname, '../..')),
       memorySize: 1024,
       timeout: Duration.seconds(30),
       code: lambda.DockerImageCode.fromEcr(asset.repository,{
         tag:asset.sourceHash
       }),
    });


    const goLambdaFn = new lambda.Function(this,'RegularLambdaFn',{
      runtime: lambda.Runtime.GO_1_X,
      memorySize: 1024,
      timeout: Duration.seconds(30),
      handler: 'main',
      code: lambda.Code.fromAsset(path.join(__dirname, '../../bin')),
    })


  }
}
