Run the SAM validtion before deploy

```
$ sam validate
```

Run SAM package

```
$ sam package --template-file template.yml --output-template-file sam.yml --s3-bucket <BUCKET_NAME>
```

Deploy SAM package

```
$ sam deploy --template-file sam.yml --stack-name sam-rest-api --capabilities CAPABILITY_IAM
```

To tail log from cloudWatch

```
$ sam logs -n <FUNC_NAME_IN_TEMPLATE> --stack-name <STACK_NAME> --tail
```