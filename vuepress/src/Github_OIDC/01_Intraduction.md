# 1. Introduction

- Open ID Connect (OIDC) is a set of protocols that simplifies the authorization process between two entities that trust each other. This How to will focus on creating the trust relationship between GitHub and AWS.

- When configuring in AWS to use OIDC the first requirement is to have the OIDC component available. When creating the project set for the different ministry teams, the Cloud Pathfinder Team(CPF) adds the OIDC component to the list of components available in AWS to the ministry teams so it is ready for use

- The ministry teams are responsible to configure their AWS and GitHub environments to use OIDC.

## Note

Project sets created prior 2023 do not have the OIDC component configured in AWS. To verify if they are created log into [GitHub](https://github.com/bcgov-c/aws-ecf-live-workspaces-settings-stack/tree/main/projects) and find your project license plate. Open the folder and verify there is a subfolder named github-oidc.If this folder appears it means OIDC is configured on the AWS side.During the first two quarters of 2023 the OIDC layer will be added to Project sets created prior 2023. This addition is transparentand requires no action on the side of the user.However, once all Project sets have the OIDC layer added, the existing tokens which allow access to Terraform Cloud to create the different artifacts in an app deployment will be discontinued. Existing applications already deployed will continue running, but new deployments will be unable to use the existing procedures and will need to use the OIDC authentication procedure explained in this document.
