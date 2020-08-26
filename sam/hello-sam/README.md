### Create cloudFormation template and upload to S3

```
aws cloudformation package --template-file template.yml --output-template-file sam-template.yml --s3-bucket <BUCKET_NAME>
```

### Deploy SAM
```
aws cloudformation deploy --template-file sam-template.yml --stack-name hello-sam-stack --capabilities CAPABILITY_IAM
```