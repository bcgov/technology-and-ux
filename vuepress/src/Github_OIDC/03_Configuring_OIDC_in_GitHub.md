# 3. Configuring OIDC in GitHub

- GitHub already has the OIDC components installed. However, you need to indicate to the GitHub action that will deploy the code to use OIDC authentication.

- To show how to include OIDC authentication in a GitHub action,we will the following GitHub action named PushManual as an example :

```yaml
name: PushManual
on:
  workflow_dispatch:
env:
  IMAGE_ID: ${{ secrets.AWS_ECR_URI }}
  TF_VERSION: 1.2.2
  TG_VERSION: 0.37.1
  TG_SRC_PATH: terraform
  TFC_WORKSPACE: dev

permissions:
  id-token: write 
  contents: read  
jobs:
  docker_push:

  name: docker push
  environment: tools
  runs-on: ubuntu-22.04
  steps:
    - name: Check out the repo
      uses: actions/checkout@v2
    - name: Configure AWS Credentials
      uses: aws-actions/configure-aws-credentials@v1
      with:
        role-to-assume: ${{ secrets.AWS_ROLE_ARN_TO_USE}}aws-region: ca-central-1
    - name: Login to Amazon ECR
      id: login-ecr
      uses: aws-actions/amazon-ecr-login@v1
    - uses: actions/cache@v2
```

- The above is a GitHub workflow. To make it use OIDC your need to add the permissions section before the jobs section

```yaml
permissions:
  id-token: write 
  contents: read 
```

- The second addition to the workflow is to add the following step to each job that needs to authenticate to AWS

```yaml
permissions:
- name: Configure AWS Credentials
  uses: aws-actions/configure-aws-credentials@v1
  with:
    role-to-assume: ${{ secrets.AWS_ROLE_ARN_TO_USE}}
    aws-region: ca-central-1
```

- This step assign to GitHub the role which will be used when interacting with AWS. The `secrets.AWS_ROLE_ARN_TO_USE` invokes the  `AWS_ROLE_ARN_TO_USE` GitHub secret. Its value is the arn for the role created in step 2.2 section m.(`arn:aws:iam::512345678906:role/testOIDCrole`)
