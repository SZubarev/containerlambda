#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { ContainerLambdaStack } from '../lib/cdk-stack';

const app = new cdk.App();
new ContainerLambdaStack(app, 'ContainerLambdaStack');
