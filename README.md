# typescript-lambda-template

A template to quickly spin up a repo for an existing AWS Lambda function.
Edit, commit, push, and have your changes published.

## Usage
- Start a new repo using this template.

- Configure the following secrets in your new repo (region and function name may optionally be configured directly in `.github/workflows/main.yml`).

    - `AWS_ACCESS_KEY_ID`

    - `AWS_SECRET_ACCESS_KEY`

    - `AWS_REGION`

    - `AWS_FUNCTION_NAME`
  
- `npm install`
  
  
## Troubleshooting
- Make sure your `AWS_FUNCTION_NAME` exists as a Lambda function in AWS.
- [Getting your AWS access key id and secret](https://docs.aws.amazon.com/general/latest/gr/aws-sec-cred-types.html)
