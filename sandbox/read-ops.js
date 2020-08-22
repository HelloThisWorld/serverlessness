const AWS = require("aws-sdk");
AWS.config.update({ region: 'ap-northeast-1' });

const docClient = new AWS.DynamoDB.DocumentClient();

// docClient.get({
//     TableName: "td_notes_sdk",
//     Key: {
//         user_id: 'A',
//         timestamp: 1
//     }
// }, (err, data) => {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// });

// docClient.query({
//     TableName: "td_notes_sdk",
//     KeyConditionExpression: "user_id = :uid",
//     ExpressionAttributeValues: {
//         ":uid": "A"
//     }
// }, (err, data) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// });

// docClient.scan({
//     TableName: "td_notes_sdk",
//     FilterExpression: "cat = :cat",
//     ExpressionAttributeValues: {
//         ":cat": "general"
//     }
// }, (err, data) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// });

docClient.batchGet({
    RequestItems: {
        "td_notes_sdk": {
            Keys: [
                {
                    user_id: "A",
                    timestamp: 1
                },
                {
                    user_id: "B",
                    timestamp: 2
                }
            ]
        },
        "td_notes": {
            Keys: [
                {
                    user_id: "2345jhfd",
                    timestamp: 1597770174
                }
            ]
        }
    }
}, (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(JSON.stringify(data, null, 2));
    }
});