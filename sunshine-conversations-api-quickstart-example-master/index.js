'use strict';

// Imports
const express = require('express');
const bodyParser = require('body-parser');
const SunshineConversationsApi = require('sunshine-conversations-client');
var request = require('request')



// Config
let defaultClient = SunshineConversationsApi.ApiClient.instance;
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'app_61517f2a9389f200d91f7cdb';
basicAuth.password = 'WJpfj9V_VaVlp9izrTw5IDOyk3Uahz7el35bi4IXLPTBt6-bSwG85aM8qldJzTt4rgZlf_XQukWKE8ADMno85g';
const PORT = 5050;

const apiInstance = new SunshineConversationsApi.MessagesApi()

// Server https://expressjs.com/en/guide/routing.html
const app = express();

app.use(bodyParser.json());

// Expose /messages endpoint to capture webhooks https://docs.smooch.io/rest/#operation/eventWebhooks
app.post('/messages', function(req, res) {
  //to get the conversation Id
 //console.log('webhook PAYLOAD:\n', JSON.stringify(req.body.events[0].payload.conversation.id, null, 4));
  const appId = req.body.app.id;
  const trigger = req.body.events[0].type;

  // Call REST API to send message https://docs.smooch.io/rest/#operation/postMessage
  if (trigger === 'conversation:message') {
    const authorType = req.body.events[0].payload.message.author.type;
    const displayName=req.body.events[0].payload.message.author.displayName;
    if(authorType === 'user'){
        const conversationId = req.body.events[0].payload.conversation.id;
        console.log(conversationId);
        console.log(displayName);
        insertlead(displayName,conversationId);

        sendMessage(appId, conversationId);
        res.end();
    }
  }
});

// Listen on port
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});

async function sendMessage(appId, conversationId){
    let messagePost = new SunshineConversationsApi.MessagePost();  
    messagePost.setAuthor({type: 'business'});
    messagePost.setContent({type: 'text', text: 'Thank you for connecting CNHI. we will get back to you'});
    let response = await apiInstance.postMessage(appId, conversationId, messagePost);
   //console.log('API RESPONSE:\n', response);
 

   
    
}
function insertlead(displayName,conversationId){

  var myJSONObject ={
    "data":[
        {
            "Company":"abhiseh's crm",
            "Last_Name":displayName,
            "conversationid":conversationId
            //"First_Name":"dhruv",
            //"Email":"dhruv@crm.com",
            //"State":"utter pradesh"
        }
    ],
    "trigger":[
        
        "approval",
        "workflow",
        "blueprint"
    ]
    
    };
request({
    method: "POST",
    url: "https://www.zohoapis.in/crm/v2/Leads",
    headers : {
        "Authorization" : "Zoho-oauthtoken 1000.0b283e7aca1a2fc9cb6a1f64cdc9fcc2.1a716293c62c94ca9531e6215d4a21d8"
    },
    
    json: true,   // <--Very important!!!
    body: myJSONObject
}, function (error, response, body){
    console.log(response);
});
}
