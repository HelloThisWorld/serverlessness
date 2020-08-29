const AWS = require('aws-sdk')
AWS.config.update({ region: 'ap-northeast-1' });

const dynamodb = new AWS.DynamoDB.DocumentClient();

const tableName = process.env.TABLE_NAME;

exports.handler = async (event) => {
    let userid = event.pathParameters.userid;
    let { firstName, lastName, email, websit } = JSON.parse(event.body);

    let item = {
        userid: userid,
        firstName: firstName,
        lastName: lastName,
        email: email,
        websit: websit
    }

    let data = await dynamodb.put({
        TableName: tableName,
        Item: item
    }).promise();

    return {
        statusCode: 200,
        body: JSON.stringify({
            message: "Data inserted/updated successfully."
        })
    }
};