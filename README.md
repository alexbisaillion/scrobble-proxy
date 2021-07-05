# scrobble-proxy

---

## Background

- A simple AWS Lambda function that pings my music library server, making a request to an external server that registers recent plays.
- The endpoint pinged on the external server is responsible for gathering recent plays from the Spotify API, saving them to my music library database, and scrobbling the plays on Last.fm.
- The function can be executed at regular intervals using an AWS EventBridge rule. The rule should be configured to pass in credentials required by the external endpoint. In this case, the external server requires a secret key, which is included as an input to the EventBridge rule.

## Deployment

### Prerequisites

- Node
- npm
- [SAM CLI installed](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-install-windows.html)
- [AWS user/group set up](https://docs.aws.amazon.com/IAM/latest/UserGuide/getting-started_create-admin-group.html)
- [AWS credentials configured](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-getting-started-set-up-credentials.html)

### Instructions

- With the SAM CLI installed, as well as a valid AWS user and associated credentials configured locally, run `sam deploy --guided` to deploy the function to AWS.
- Subsequent deployments can be executed by running `sam deploy`.

### Notes

- This function was bootstrapped with the AWS Lambda [hello-world function example](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-getting-started-hello-world.html).
