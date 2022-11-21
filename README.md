This repository contains the source code for my wedding website. The website is a React project started from `create-react-app`.

You can view the live site at [www.Hung-Trang-Wedding.github.io](https://www.Hung-Trang-Wedding.github.io).

The website provides the following features:

-   Multi-language support (my fiancee is Catalonia)
-   Ability to RSVP (site authentication uses AWS Amplify)

## Deploying the Site

### 1. Deploy CloudFormation Stack

```shell script
aws cloudformation create-stack \
    --profile personal \
    --region us-east-1 \
    --stack-name WeddingWebsite \
    --capabilities CAPABILITY_IAM \
    --template-body file://resources/cloudformation/wedding-website-infrastructure.template.yaml \
    --stack-policy-body file://resources/cloudformation/wedding-website-infrastructure.policy.json
```

### 2. Set Environment Variables

```shell script
# see the stack outputs
aws cloudformation describe-stacks \
    --profile personal \
    --region us-east-1 \
    --stack-name WeddingWebsite

# add the outputs to a .env file
cp env-example .env
vim .env  # fill in the correct values from the CloudFormation stack outputs
```

### Resources

-   [Original README](docs/create-react-app.md) from `create-react-app`
