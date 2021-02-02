import * as cdk from '@aws-cdk/core';
import * as lambda from '@aws-cdk/aws-lambda';
import * as path from 'path';
import * as iam from '@aws-cdk/aws-iam'
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
      environment:{
        PARAM1: "test value"
      }
    })

    goLambdaFn.addToRolePolicy(new iam.PolicyStatement({
      actions:["s3:ListAllMyBuckets"],
      resources:["arn:aws:s3:::*"],
      effect: iam.Effect.ALLOW
    }))

  }
}
