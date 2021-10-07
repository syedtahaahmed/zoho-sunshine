//working good able to create lead in zoho crm when user approaches us via facebook or whatsapp
//need to change zoho outh token every hour
/*'use strict';

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
    messagePost.setContent({type: 'text', text: 'Thanks boy'});
    let response = await apiInstance.postMessage(appId, conversationId, messagePost);
   //console.log('API RESPONSE:\n', response);
 

   
    
}
function insertlead(displayName,conversationId){

  var myJSONObject ={
    "data":[
        {
            "Company":"scrys's crm",
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
        "Authorization" : "Zoho-oauthtoken 1000.e17aadff32a3651624423ce88d88bfb7.b230caddb6477e8308891fe1237e7271"
    },
    
    json: true,   // <--Very important!!!
    body: myJSONObject
}, function (error, response, body){
    //console.log(response);
});
}*/


//working able to checck if conversation id exists in zoho crm if exists then print match 
/*
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
        //console.log(displayName);
        check_ZOHO_FOR_CONVERSATION_ID(conversationId);
        //insertlead(displayName,conversationId);
      

        //sendMessage(appId, conversationId);
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
    messagePost.setContent({type: 'text', text: 'Thanks boy'});
    let response = await apiInstance.postMessage(appId, conversationId, messagePost);
   //console.log('API RESPONSE:\n', response);
 

   
    
}
function check_ZOHO_FOR_CONVERSATION_ID(conversationId){
  request({
    method: "GET",
    url: "https://www.zohoapis.in/crm/v2/Leads?fields=conversationid",
    headers : {
        "Authorization" : "Zoho-oauthtoken 1000.2ac03819d6852bf9d72916e9dfe05393.a028341b0066a7ec0107317a0a86e9cc"
    },

    
    //json: true,   // <--Very important!!!
}, function (error, response, body){
  var dat=(JSON.parse(body)).data
  dat.forEach(element => {
    var stored_data=(element.conversationid)
    if(stored_data===conversationId){
      console.log("match found")
    }
    
  });
  //console.log((JSON.parse(body)).data[1])

  
  
});

}



function insertlead(displayName,conversationId){

  var myJSONObject ={
    "data":[
        {
            "Company":"scrys's crm",
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
        "Authorization" : "Zoho-oauthtoken 1000.e17aadff32a3651624423ce88d88bfb7.b230caddb6477e8308891fe1237e7271"
    },
    
    json: true,   // <--Very important!!!
}, function (error, response, body){
    //console.log(response);
});
}*/

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
  //console.log(appId)
  const trigger = req.body.events[0].type;

  // Call REST API to send message https://docs.smooch.io/rest/#operation/postMessage
  if (trigger === 'conversation:message') {
    const authorType = req.body.events[0].payload.message.author.type;
    const displayName=req.body.events[0].payload.message.author.displayName;
    if(authorType === 'user'){
        const conversationId = req.body.events[0].payload.conversation.id;
        //console.log(conversationId);
        //console.log(displayName);
        check_ZOHO_FOR_CONVERSATION_ID(appId, displayName, conversationId);

        //insertlead(displayName,conversationId);
      

        //sendMessage(appId, conversationId);
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
    messagePost.setContent({type: 'text', text: 'welcome we are looking forward to host you'});
    let response = await apiInstance.postMessage(appId, conversationId, messagePost);
   //console.log('API RESPONSE:\n', response);
 

   
    
}
async function sendMessage1(appId, conversationId){
  let messagePost = new SunshineConversationsApi.MessagePost();  
  messagePost.setAuthor({type: 'business'});
  messagePost.setContent({type: 'text', text: 'have patience our customer support will connect with you'});
  let response = await apiInstance.postMessage(appId, conversationId, messagePost);
 //console.log('API RESPONSE:\n', response);


 
  
}
function check_ZOHO_FOR_CONVERSATION_ID(appId,displayName, conversationId){
  request({
    method: "GET",
    url: "https://www.zohoapis.in/crm/v2/Leads?fields=conversationid",
    headers : {
        "Authorization" : "Zoho-oauthtoken 1000.5faef0be4b451f278b41b7577ab437a5.f648bc66363536929f0422170de331e2"
    },

    
    //json: true,   // <--Very important!!!
}, function (error, response, body){
  var flag=1
  var dat=(JSON.parse(body)).data
    var l=(dat.length)
    for(let i=0;i<l;i++){
      if(dat[i].conversationid===conversationId)
      {
      console.log("match found, sending patience message")

      sendMessage1(appId,conversationId)
      flag=0
      break
      } 
    }
    if(flag===1){
      insertlead(displayName,conversationId);   
      sendMessage(appId,conversationId)
      console.log("match not found welcome messsge sent")
    }
    flag=1
    
 
    


    

  //console.log((JSON.parse(body)).data[1])

  
  
});

}



function insertlead(displayName,conversationId){

  var myJSONObject ={
    "data":[
        {
            "Company":"scrys's crm",
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
        "Authorization" : "Zoho-oauthtoken 1000.5faef0be4b451f278b41b7577ab437a5.f648bc66363536929f0422170de331e2"
    },
    
    json: true,   // <--Very important!!!
    body: myJSONObject
}, function (error, response, body){
    console.log("lead created in zoho crm");
});
}
