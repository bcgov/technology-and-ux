# AWS IAM configuration
```
Please notice that this procedure has to be executed for each account on which you want to deploy apps 
```


## Introduction
Github OpenID Connect give the right for Github action workflow to assume a role in AWS.  
Most of the applications developed by the cloud users utilize this role to give access to Terraform.
Nonetheless it's not the only context where OIDC authencation can be used. For example it could be use to push a Docker image in a AWS ECR (Amazon Elastic Container Registry)  [see exemple, focus on docker_push job](https://github.com/bcgov/startup-sample-project-aws-containers/blob/main/.github/workflows/push.yaml#:~:text=%2D%20name%3A%20Configure%20AWS%20Credentials,tags%3A%20%24%7B%7B%20env.IMAGE_ID%20%7D%7D%3A%24%7B%7B%20github.sha%20%7D%7D)

## Creation of the AWS IAM Roles
As mention previously we are trying to assume IAM roles, so the roles has to be created in the accounts on which the Github action connect to.  
If you are using regular workflow you should be using multiple accounts (dev,test,prod).   In this regards a role should have been created in each of them.  
(Later in this document it will be shown how to make GitHub action use the right role with [Github Environment](https://docs.github.com/en/actions/deployment/targeting-different-environments/using-environments-for-deployment))

### AWS IAM Roles Trust relationship
This is the configuration that state who has the right to assume the role.  
In the OIDC context it means which repository or more precisely which organization/repo/branch is linked to the AWS IAM role.

The following example is a configuration block defined in the `JSON File` describing the IAM Role.

```
        Condition = {
          "StringLike" = {
            "token.actions.githubusercontent.com:sub" = "repo:<Organization>/<Repository>:<Branch>"
          }
        }
```

**Important note**: Keep the newly created IAM Roles ARN (Amazon Resource Names), they will be use later.

As everything done in IT, it should be created with the *least privilege access principle*.  
If you are using the *dev,test and prod* workflow one branch per environment for your deployement, you should declare in your trust relationship that only the branch `dev` can assume the role in the `dev` environment. 

> Every program and every privileged user of the system should operate using the least amount of privilege necessary to complete the job.  
Jerome Saltzer

## Creation of the Policy

When you set permissions with IAM policies, grant only the permissions required to perform the planned tasks. You do this by defining the actions that can be taken on specific resources under specific conditions, also known as least-privilege permissions. You might start with broad permissions while you explore the permissions that are required for your workload or use case.    
As your use case matures, you can work to reduce the permissions that you grant to work toward least privilege. For more information about using IAM to apply permissions, [see Policies and permissions in IAM](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html).

For more information here is the link towards the AWS DOcumentation about [how to create roles](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_create.html)

