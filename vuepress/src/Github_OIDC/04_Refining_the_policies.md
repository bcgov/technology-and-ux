# 4. Refining the policies

- It is tempting to grant to the role associated to the trusted third party a policy with a wide range of permissions. However, this approach may open unwanted access to your AWS account, and thus it could be exploited with important consequences.The following are a set of tips to help you to write the minimum set of permissions policies

- As developer/architect of the application, you know which components it will use: for example a S3 container, a DynamoDB, a Cloudfront service and a load balancer, So, you can add `s3:*`,`dynamodb:*`, `cloudfront:*` and `elasticloadbalancing:*`

  - If your application can be deployed with the previous permissions, then you can proceed to tighten them. For example, if the app is only reading from an existing table in a dynamodb you will need the `dynamodb:getitem`, `dynamodb:getrecords` actions, but your app doesnot need the `dynamodb:createtable` action. Applying these criteria repeatedly will reduce all the possible actions to a handful.

  - If allowed actions are not present in the policies the deployment will fail. In this case, look at the logs provided by GitHub. Usually, you will get a 400, 403 error. Sometime the logs will clearly indicate the action the code was trying to execute and that was denied.

  - Many actions are pretty harmless, for example `cloudfront:describefunction` does not usually have associated sensitive information while `cloudfront:getfunction` may. However, if the GitHub repo is a public one, then `cloudfront:getfunction` action does not add any security concern.

  - You will need to consider each action that you grant to the trusted entity in its own context.

  - The more open the Audience(see steps g and k),the more you need to refine the policies. The allowed policy actions for a private repo with limited access and pull request procedures may be more open than for repo that does not require PR approvals

  - Never create an OIDC authentication relationship between a GitHub repo and AWS with public access.

# Note

- The CPF team would like to remind you of the quote: `The Unix philosophy basically involves giving you just enough rope to hang yourself. And then a couple of feet more, just to be sure.`

- Mistakes, errors, bugs can create havoc on your whole Cloud environment. For example, you may delete S3 buckets without noticing. Wide open permissions means that a hacker needs only access to your GitHub account to cause damage on your whole cloud environment.
