Init Serverless by cli

```
$ sls create -t <TEMPLATE> -p <PATH>
```

Invoke locally

```
$ sls invoke local -f <FUNCTION_NAME> -d <JSON_DATA>
```

Deploy and remove

```
$ sls deploy --stage <STAGE_NAME> [-f <FUNCTION_NAME>]
$ sls remove
```

Run offline serverless stack

```
$ sls offline
```

CloudWatch logging

```
$ sls logs -f add -s <STAGE_NAME> [--startTime 5m]|[--tail]
```