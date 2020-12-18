import * as cdk from '@aws-cdk/core';
import * as lambda from '@aws-cdk/aws-lambda';
import * as path from 'path';
import * as ecr from '@aws-cdk/aws-ecr';
import { DockerImageAsset } from '@aws-cdk/aws-ecr-assets';
import { Duration } from '@aws-cdk/core';


export class RegularLambdaStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const goLambdaFn = new lambda.Function(this,'RegularLambdaFn',{
      runtime: lambda.Runtime.GO_1_X,
      memorySize: 1024,
      timeout: Duration.seconds(30),
      handler: 'main',
      code: lambda.Code.fromAsset(path.join(__dirname, '../../bin')),
    })

  }
}
