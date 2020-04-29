function success(body) {
  return buildResponse(200, body);
}

function failure(body) {
  return buildResponse(500, body);
}

function error(body,err,text,callback) {
    console.log('\nCATCHED EXCEPTION: '+text+'\n');
    console.log(err);
    console.log('\n');    
    callback(null, failure({ status: false , error : body }));
}

module.exports = {success,failure,error};

function buildResponse(statusCode, body) {
  return {
    statusCode: statusCode,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true
    },
    body: JSON.stringify(body)
  };
}


