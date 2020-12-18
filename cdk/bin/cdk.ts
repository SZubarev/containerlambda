#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { ContainerLambdaStack } from '../lib/ContainerLambdaStack';
import { RegularLambdaStack } from '../lib/RegularLambdaStack';


const app = new cdk.App();
new ContainerLambdaStack(app, 'ContainerLambdaStack');
new RegularLambdaStack(app, 'RegularLambdaStack');
