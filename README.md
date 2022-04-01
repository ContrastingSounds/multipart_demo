# Simple endpoint for testing file uploads

Contains two folders:

express_app: the test endpoint
node_app: command line script for testing upload independently

## Overview
1. Start express
2. Create Retool resource
3. Use REST API in an app

## Start express
```
cd express_app
yarn start
```

## Create Retool resource
1. **Your instance needs to be able to reach the test endpoint**
- For an AWS-based instance, use ngrok or other tunnelling solution
- For local dev, localhost is fine
2. **Create resource (simple REST API, no auth)**

## Use REST API in an app

1. **Multipart uploads require a JS transformer e.g.**
```
return {
    data: {{ fileButton1.value[0] }},
    ...{{ fileButton1.files[0] }}
}
```
4. **Create resource query to send file to destination**
- POST to 'upload' endpoint
- Body = Form Data
- file : File : {{ fileMetadata.value }}
5. **Create JS query to call that API query**
- e.g. postFile.trigger()
6. **Add file button whose 'Parse event' handler triggers the JS script**
- Note: Calling the API query directly can fail, as Retool may attempt to start the API call before the model has been updated with the file contents
