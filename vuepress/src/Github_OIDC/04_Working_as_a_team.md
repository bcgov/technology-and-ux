# Context
Terraform Backend setting is use to configure where terraform store the result of terraform execution and the state of the infrastructure, also known as state file.

If use locally by multiple team members it can result in conflict in state or whorse conflicting execution of terraform.

To use Terraform as a team the state file has to be stored online and a lock has to be put in place so it's not possible to trigger two deployement at the same time.

## Remote state in S3

In every AWS Project-set created for ministry team the CPF team creates a S3 bucket (for the state file) and a DynamoDB Table (for the locking mechanism).

The name of this S3 bucket is : `terraform-remote-state-<licence_plate>-<environment>`  
The name of this DynamoDB is : `terraform-remote-state-lock-<licence_plate>`

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

You can find a example of the same configuration implement in a more flexible manners on this the [virtual machine sample app](https://github.com/bcgov/startup-sample-project-aws-virtual-machines):

 - Here is the [Terraform configuration](https://github.com/bcgov/startup-sample-project-aws-virtual-machines/blob/main/terraform/versions.tf#:~:text=terraform%20%7B-,backend%20%22s3%22%20%7B%7D,-required_providers%20%7B)
 - Here is the [Dynamic value for the terraform configuration](https://github.com/bcgov/startup-sample-project-aws-virtual-machines/blob/main/.github/workflows/deploy_dev.yml#:~:text=cat%20%3C%3CEOF%20%3E%20backend,EOF)