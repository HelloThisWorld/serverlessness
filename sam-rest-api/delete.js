const AWS = require('aws-sdk')
AWS.config.update({ region: 'ap-northeast-1' });

const dynamodb = new AWS.DynamoDB.DocumentClient();

const tableName = process.env.TABLE_NAME;

exports.handler = async (event) => {
    let userid = event.pathParameters.userid;
    let data = dynamodb.delete({
        tableName: tableName,
        Key: {
            userid: userid
        }
    }).promise();
    return {
        statusCode: 200,
        body: JSON.stringify({
            message: "User deleted successfully"
        })
    }
};