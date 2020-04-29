import { success, failure , error} from "../libs/js/response-lib";
var AWS = require('aws-sdk');
AWS.config.region = 'us-east-1';
var lambda = new AWS.Lambda();

export async function main(event, context, callback) {

    var datain = JSON.parse(event.body);
    var params = {
        FunctionName: 'entrevista-dev-calcular_fibo', 
        InvocationType: 'RequestResponse',
        LogType: 'Tail',
        Payload: '{ "val" : '+(datain.input)+' }'
    };    
    params.Payload = JSON.stringify(params.Payload);  
    const lambdaResult = await lambda.invoke(params).promise();
    callback(null, success({"result":lambdaResult.Payload}));      
};


