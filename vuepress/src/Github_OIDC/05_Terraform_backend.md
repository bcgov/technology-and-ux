# Terraform backend configuration
```
Historically the Cloudpath finder and the ministry teams were using Terraform cloud as a Terraform backend manager and to authenticate on AWS.  

By replacing terraform cloud by OIDC to authenticate the backend has to be managed actively by the teams.

This page explains how to do so by using the S3 backend for terraform. 
```

The Terraform Backend setting is use to configure where terraform stores the result of execution and the state of the infrastructure, also known as state file.

To use Terraform as a team (or with automation) the state file has to be stored online and a lock has to be put in place so it's not possible to trigger two deployement at the same time.

## Remote state using S3

In every AWS Project-set created for ministry team the CPF team creates a S3 bucket (for the state file) and a DynamoDB Table (for the locking mechanism).

 - The name of this S3 bucket is : `terraform-remote-state-<licence_plate>-<environment>`  
 - The name of this DynamoDB is : `terraform-remote-state-lock-<licence_plate>`

They can, and should, be used in Terraform by declaring in your terraform config the following:

```
terraform {
  backend "s3" {
    bucket = "terraform-remote-state-<licence_plate>-<environment>"
    key = "<licence_plate>/<env>/virtual-machine.tfstate"
    dynamodb_table = "terraform-remote-state-lock-<licence_plate>"
  }
}
```

```
This implementation is limited if hard coded as the Backend will not be dynamic, and so it can be used in only one environment (or AWS Account).
```

For the backend to be dynamic, variables has to be use to configure the backend parameter to access the S3 bucket of the account in which the resources are deployed.
A good example is the [virtual machine sample app](https://github.com/bcgov/startup-sample-project-aws-virtual-machines):

 - Here is the [Terraform backend configuration](https://github.com/bcgov/startup-sample-project-aws-virtual-machines/blob/main/terraform/versions.tf#:~:text=terraform%20%7B-,backend%20%22s3%22%20%7B%7D,-required_providers%20%7B) (Left blanked as filled dynamically)
 - Here is the [Dynamic value for the terraform backend configuration](https://github.com/bcgov/startup-sample-project-aws-virtual-machines/blob/main/.github/workflows/deploy_dev.yml#:~:text=cat%20%3C%3CEOF%20%3E%20backend,EOF)