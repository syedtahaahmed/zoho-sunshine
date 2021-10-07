var request = require('request');
username="app_61517f2a9389f200d91f7cdb"
password="WJpfj9V_VaVlp9izrTw5IDOyk3Uahz7el35bi4IXLPTBt6-bSwG85aM8qldJzTt4rgZlf_XQukWKE8ADMno85g"

var myJSONObject ={
    "author": {
    "type": "business"
    },
    "content": {
    "type": "text",  
    "text": "Hello from nodejs!"
    }
    } ;
    url = "https://api.smooch.io/v2/apps/614db100a5686000d942c0f4/conversations/4fa7b3e94a8c4f699e1b77d1/messages"
    auth = "Basic " + new Buffer(username + ":" + password).toString("base64")
request({
    url: url,
    headers : {
        "Authorization" : auth
    },

    method:"POST",

    json: true,   // <--Very important!!!
    body: myJSONObject
}, function (error, response, body){
    console.log(body);
});
