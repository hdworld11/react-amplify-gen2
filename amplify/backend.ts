import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource';
import { data } from './data/resource';
import { storage } from './storage/resource';

const backend = defineBackend({
  auth,
  data,
  storage
});

// const s3Bucket = backend.storage.resources.bucket;

// const cfnBucket = s3Bucket.node.defaultChild as s3.CfnBucket;

// const { cfnBucket } = backend.storage.resources.resources;

// cfnBucket.accelerateConfiguration = {
//   accelerationStatus: "Enabled"
// }