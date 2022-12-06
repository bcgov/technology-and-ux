# Terraform workspaces management

This chapter is more general about the use of Terraform.  
It's related because of the requirement to create the AWS IAM Roles (and trust relationship and policies) for the Github action (and by extension, the CI/CD) to deploy on AWS.

## Application workspace

This Terraform project would be the one containing the application or infrastructure.  
This is the main component of the product, it will deploy the app but will not be able to deploy automaticaly or at least not the first time. (Since the IAM roles would not be created yet)

That's why a second workspace (or terraform project) would be a great help by creating the deployment requirements. 

## Deployement workspace

This Terraform project would contain all the necessary components for the automation of the CI/CD.  
It would not be in a CI/CD deployment but would be executed on the side before the first deployment of the app.