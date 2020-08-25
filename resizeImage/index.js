const sharp = require('sharp');
const AWS = require('aws-sdk');
AWS.config.update({region: 'ap-northeast-1'});

const s3 = new AWS.S3();

exports.handler = async (event) => {
    let bucket = event.s3.bucket.name;
    let filename = event.s3.object.key;
    
    // Get file from S3
    var inputParams = {
        Bucket: bucket,
        Key: filename
    };
    
    let inputData = await s3.getObject(inputParams).promise();
    
    // Upload the new file to s3
    let targetFilename = filename.substring(0, filename.lastIndexOf('.')) + '-small.jpg';
    let resizedImg = await sharp(inputData.Body).resize(process.env.IMAGE_WIDTH_PX).toFormat('jpeg').toBuffer();
    
    var params = {
      Bucket: process.env.DESTINATION_BUCKET,
      Key: targetFilename,
      Body: resizedImg,
      ContentType: 'image/jpeg'
    };
    
    
    await s3.putObject(params).promise();
    
    return {
        region: 'ap-northeast-1',
        bucket: process.env.DESTINATION_BUCKET,
        key: targetFilename
    };
};
