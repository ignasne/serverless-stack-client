export default {
  s3: {
    REGION: "us-west",
    BUCKET: "arn:aws:s3:::notes-app-api-prod-serverlessdeploymentbucket-juu9weg0pue0"
  },
  apiGateway: {
    REGION: "us-west-2",
    URL: "https://56duezr587.execute-api.us-west-2.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-west-2",
    USER_POOL_ID: "us-west-2_UH7M6K8qz",
    APP_CLIENT_ID: "1i79bup9rrnh8ea0tjf6ml35b0",
    IDENTITY_POOL_ID: "us-west-2:22382426-5bb1-40a3-a8f2-879e7e4cc79c"
  }
};