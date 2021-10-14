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
//able to send data to crm and create lead in crm by avoiding duplicate leads and sending welcome message to
//user on lead creation and patience message everytime the samae lead pings(using conversaation ID stored in CRM)
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
  //console.log(appId)
  const trigger = req.body.events[0].type;

  // Call REST API to send message https://docs.smooch.io/rest/#operation/postMessage
  if (trigger === 'conversation:message') {
    const authorType = req.body.events[0].payload.message.author.type;
    const displayName=req.body.events[0].payload.message.author.displayName;
    if(authorType === 'user'){
        const conversationId = req.body.events[0].payload.conversation.id;
        console.log(conversationId);
        console.log(displayName);
        //check_ZOHO_FOR_CONVERSATION_ID(appId, displayName, conversationId);

        //insertlead(displayName,conversationId);
        sendMessage1(appId, conversationId)

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
 console.log('API RESPONSE:\n', response);


 
  
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
}*/
//sending options to user
/*
async function sendquestions(appId, conversationId){
  const apiInstance = new SunshineConversationsApi.MessagesApi();
  const data = new SunshineConversationsApi.MessagePost();
  data.author = {
      type: 'business'
  };
  data.content = {
      type: 'text',
      text: 'when are you going to buy the tractor?',
      actions: [
          {
              type: 'reply',
              text: 'एक हफ्ता',
              payload: 'week',
  
          },
          {
              type: 'reply',
              text: 'एक माह',
              payload: 'Month',
   
          },
          {
              type: 'reply',
              text: 'तीन महीने',
              payload: '3 months',
          },
          {
              type: 'reply',
              text: 'Within 6 months',
              payload: '6 months',
          },
          {
              type: 'reply',
              text: 'Contact agent',
              payload: 'agent contact',
          }
      ]
  };
  
       
  apiInstance.postMessage(appId, conversationId, data)
  .then(response => {})
  .catch(error =>{console.log(error)} ) 
  }
  */
 // sending and getting data, creating lead n zoho ccrm by storing in array in code which is causing concurrency bugs
 /*
const express = require('express');
const bodyParser = require('body-parser');
const SunshineConversationsApi = require('sunshine-conversations-client');
var request = require('request')

// Config
let defaultClient = SunshineConversationsApi.ApiClient.instance;
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'app_61640257eb4f6500dfba2b8c';
basicAuth.password = 'deSrIP2X_G5KDZ0fKTjJrfP4hHYcSDjITSYNgQLgyXLhjt-DEn2jOVs4fhIMglJ-HW5Nyk3zzt6xu2ESsrcV-w';
const PORT = 5050;
const apiInstance = new SunshineConversationsApi.MessagesApi()
const app = express();
var ans=[]
app.use(bodyParser.json());

app.post('/messages', function(req, res) {
  const appId = req.body.app.id;
  console.log(appId)
  const trigger = req.body.events[0].type;

  if (trigger === 'conversation:message') {
    const authorType = req.body.events[0].payload.message.author.type;
    const displayName=req.body.events[0].payload.message.author.displayName;
    if(authorType === 'user'){
      
        const conversationId = req.body.events[0].payload.conversation.id;
        //console.log(conversationId);
        //console.log(displayName);
        var m=req.body.events[0].payload.message.content.text
        if(m==="one week"|| m==="two week" ||m==="three week"||m==="one month"||m==="contact agent"
        || m==="500"|| m==="700"|| m==="400")
        {
        ans.push(m)
        }
        console.log(ans)
        // console.log(ans.length)
        check_ZOHO_FOR_CONVERSATION_ID(appId, displayName, conversationId,function(x,whenbuy){
          if(x===0){
            if(ans.length<1){
              sendquestions(appId,conversationId)
            }
            if((ans.includes("one week")|| ans.includes("two week") ||ans.includes("three week")|| ans.includes("one month")|| ans.includes("Contact agent"))&& ans.length==1){

              sendquestions1(appId,conversationId)

              
            }
            if((ans.includes("500")|| ans.includes("700")||ans.includes("400"))&&ans.length==2){
              //sendMessage1(appId,conversationId)
              insertlead(displayName,conversationId,ans)
              ans=[]
              check_ZOHO_FOR_CONVERSATION_ID(appId,displayName,conversationId,function(a,b,c){})
              sendMessage1(appId,conversationId)
            }
            
          }
        })
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
    return await true   
}
async function sendMessage1(appId, conversationId){
  let messagePost = new SunshineConversationsApi.MessagePost();  
  messagePost.setAuthor({type: 'business'});
  messagePost.setContent({type: 'text', text: 'have patience our customer support will connect with you'});
  let response = await apiInstance.postMessage(appId, conversationId, messagePost); 
  
}
 
 function check_ZOHO_FOR_CONVERSATION_ID(appId,displayName, conversationId,fn){
 
  request({
    method: "GET",
    url: "https://www.zohoapis.in/crm/v2/Leads?fields=conversationid,whenbuy",
    headers : {
        "Authorization" : "Zoho-oauthtoken 1000.22d2fba7d1bdf0d1fdc23cd8ea1c7125.b87620e8073e7fed6181e6aa90f6ddf4"
    },

    
    //json: true,   // <--Very important!!!
},  function (error, response, body){
  let flag=0
  var dat=(JSON.parse(body)).data
    var l=(dat.length)
    for(let i=0;i<l;i++){
      if(dat[i].conversationid===conversationId)
      {
      flag=1
      console.log("lead")
      fn(flag,dat[i].whenbuy)

      break
      } 
    }
    if(flag===0){
      //sendquestions(appId,conversationId)
      console.log("lead not found")
      fn(flag,0)
    
    }
   
  //console.log((JSON.parse(body)).data[1])
});


}



function insertlead(displayName,conversationId,ans){

  var myJSONObject ={
    "data":[
        {
            "Company":"scrys's crm",
            "Last_Name":displayName,
            "conversationid":conversationId,
            "whenbuy":ans[1],
            'hp':ans[2]
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
        "Authorization" : "Zoho-oauthtoken 1000.22d2fba7d1bdf0d1fdc23cd8ea1c7125.b87620e8073e7fed6181e6aa90f6ddf4"
    },
    
    json: true,   // <--Very important!!!
    body: myJSONObject
}, function (error, response, body){
    console.log("lead created in zoho crm");
});
}
//sending options to user

async function sendquestions(appId, conversationId){
  const apiInstance = new SunshineConversationsApi.MessagesApi();
  const data = new SunshineConversationsApi.MessagePost();
  data.author = {
      type: 'business'
  };
  data.content = {
      type: 'text',
      text: 'when are you going to buy the tractor?',
      actions: [
          {
              type: 'reply',
              text: 'one week',
              payload: 'week',
  
          },
          {
              type: 'reply',
              text: 'two week',
              payload: 'Month',
   
          },
          {
              type: 'reply',
              text: 'three week',
              payload: '3 months',
          },
          {
              type: 'reply',
              text: 'one month',
              payload: '6 months',
          },
          {
              type: 'reply',
              text: 'Contact agent',
              payload: 'agent contact',
          }
      ]
  };
  
       
  apiInstance.postMessage(appId, conversationId, data)
  .then(response => {})
  .catch(error =>{console.log(error)} ) 
  }



  async function sendquestions1(appId, conversationId){
    const apiInstance = new SunshineConversationsApi.MessagesApi();
    const data = new SunshineConversationsApi.MessagePost();
    data.author = {
        type: 'business'
    };
    data.content = {
        type: 'text',
        text: 'what is your rated HP?',
        actions: [
            {
                type: 'reply',
                text: '700',
                payload: 'week',
    
            },
            {
                type: 'reply',
                text: '500',
                payload: 'Month',
     
            },
            {
                type: 'reply',
                text: '400',
                payload: '3 months',
            },

        ]
    };
    
         
    apiInstance.postMessage(appId, conversationId, data)
    .then(response => {})
    .catch(error =>{console.log(error)} ) 
    }

 */
    //working good concurrently
    //able to  create lead in zoho crm when user approches and updating it for every input
    //from user on basis on conversation id eleminating concurrency bug but if 1st question
    //not answered then it will not throw 2nd question and neither throw 1st question again i.e phone number asking
    const express = require('express');
    const bodyParser = require('body-parser');
    const SunshineConversationsApi = require('sunshine-conversations-client');
    var request = require('request')
    
    // Config
    let defaultClient = SunshineConversationsApi.ApiClient.instance;
    let basicAuth = defaultClient.authentications['basicAuth'];
    basicAuth.username = 'app_61640257eb4f6500dfba2b8c';
    basicAuth.password = 'deSrIP2X_G5KDZ0fKTjJrfP4hHYcSDjITSYNgQLgyXLhjt-DEn2jOVs4fhIMglJ-HW5Nyk3zzt6xu2ESsrcV-w';
    const PORT = 5050;
    const apiInstance = new SunshineConversationsApi.MessagesApi()
    const app = express();
    var ans=[]
    app.use(bodyParser.json());
    
    app.post('/messages', function(req, res) {
      const appId = req.body.app.id;
      const trigger = req.body.events[0].type;
    
      if (trigger === 'conversation:message') {
        const authorType = req.body.events[0].payload.message.author.type;
        const displayName=req.body.events[0].payload.message.author.displayName;
        if(authorType === 'user'){
          
            const conversationId = req.body.events[0].payload.conversation.id;
            console.log(conversationId)
            var message=req.body.events[0].payload.message.content.text
            console.log(message)
            let isnum = /^\d+$/.test(message);
            if(isnum==true){
              //.log(isnum)
              var regx = /^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/ ;
              if(regx.test(message)){
                check_ZOHO_FOR_CONVERSATION_ID(appId, displayName,conversationId,function(flag,id,phone_number,when_going_to_buy,state1,district1){
                  if(flag===1){
                    update_number(id,message)
                    send_when_to_buy(appId,conversationId)
                    //sendquestions1(appId,conversationId)
                  }
                })
              }
              else{
                send_enter_correct_number(appId,conversationId)
              }
            }
            else if(/\d/.test(message)){
              send_enter_correct_number(appId,conversationId)
            }
            if(( message==="one week"|| message==="two week" ||message==="three week"||message==="one month"||message==="contact agent"))
            {
              check_ZOHO_FOR_CONVERSATION_ID(appId, displayName,conversationId,function(flag,id,phone_number,when_going_to_buy,state1,district1){
                if(flag===1){
                  update_when_going_to_buy(id,message)
                  send_ask_state(appId,conversationId)
                }
              })
            }
            else if(message==="just researching"){
             // send_templates_and_videos(appId,conversationId)
            }
      
            if(( message==="telengana"|| message==="utterpradesh" ||message==="haryana"))
            {
              check_ZOHO_FOR_CONVERSATION_ID(appId, displayName,conversationId,function(flag,id,phone_number,when_going_to_buy,state1,district1){
                if(flag===1){
                  update_state(id,message)
                }
              })
            }

            check_ZOHO_FOR_CONVERSATION_ID(appId,displayName, conversationId,function(flag,id,phone_number,when_going_to_buy,state1,district1){
              if(flag===1){
                if(phone_number==null){
                  //ask_phone_number(appId,conversationId)
                }
                if(when_going_to_buy==null){
                 // ask_when_going_to_buy(appId,conversationId)
                }
                if(state1==null){
                  //check_ZOHO_FOR_CONVERSATION_ID(appId, displayName,conversationId,function(flag,id,phone_number,when_going_to_buy,state1,district1) {
                    //if(state1==null){
                      //sendquestions1(appId,conversationId)
                    //}
                    
                 // })
 
                }
                if(district1==null){
                  //ask_state(appId,conversationId)
                }


              }
              else{
                insertlead(displayName,conversationId,function(created){
                  if(created==true){
                    send_ask_number(appId,conversationId)
                    //send_when_to_buy(Id,conversationId)
                  }
                })
              }
            })





            res.end();
        }
      }
     
    });
    
    
    // Listen on port
    app.listen(PORT, () => {
      console.log(`App listening on port ${PORT}`);
    });
    async function send_enter_correct_number(appId,conversationId) {
      let messagePost = new SunshineConversationsApi.MessagePost();  
      messagePost.setAuthor({type: 'business'});
      messagePost.setContent({type: 'text', text: 'plz enter correct number'});
      let response = await apiInstance.postMessage(appId, conversationId, messagePost);
      
    }
 

    
    async function sendMessage(appId, conversationId){
        let messagePost = new SunshineConversationsApi.MessagePost();  
        messagePost.setAuthor({type: 'business'});
        messagePost.setContent({type: 'text', text: 'welcome we are looking forward to host you'});
        let response = await apiInstance.postMessage(appId, conversationId, messagePost);
        return await true   
    }
    async function sendMessage1(appId, conversationId){
      let messagePost = new SunshineConversationsApi.MessagePost();  
      messagePost.setAuthor({type: 'business'});
      messagePost.setContent({type: 'text', text: 'have patience our customer support will connect with you'});
      let response = await apiInstance.postMessage(appId, conversationId, messagePost); 
      
    }
    async function send_ask_number(appId,conversationId){
      let messagePost = new SunshineConversationsApi.MessagePost();  
      messagePost.setAuthor({type: 'business'});
      messagePost.setContent({type: 'text', text: 'please enter your number'});
      let response = await apiInstance.postMessage(appId, conversationId, messagePost);
    }
    function  update_number(id,message) {
      console.log("id is "+id)
      var myJSONObject ={
        "data":[
            {
              "id":id,
              "Phone":message
            }
        ],
        "trigger":[
            
            "approval",
        ]
        
        };
    request({
        method: "PUT",
        url: "https://www.zohoapis.in/crm/v2/Leads",
        headers : {
            "Authorization" : "Zoho-oauthtoken 1000.cb3d081c100b2be2bb1936b362473ff7.2f351c001060c52ef6a6fdb0d7c510dc"
        },
        
        json: true,   // <--Very important!!!
        body: myJSONObject
    }, function (error, response, body){
        console.log("lead  number updated in zoho crm");
    });
      
    }
    function update_when_going_to_buy(id,message){
      console.log("id is "+id)
      var myJSONObject ={
        "data":[
            {
              "id":id,
              "whenbuy":message
            }
        ],
        "trigger":[
            
            "approval",
        ]
        
        };
    request({
        method: "PUT",
        url: "https://www.zohoapis.in/crm/v2/Leads",
        headers : {
            "Authorization" : "Zoho-oauthtoken 1000.cb3d081c100b2be2bb1936b362473ff7.2f351c001060c52ef6a6fdb0d7c510dc"
        },
        
        json: true,   // <--Very important!!!
        body: myJSONObject
    }, function (error, response, body){
        console.log("lead updated in zoho crm");
    });
    

    

    }
    function update_state(id,message){
      console.log("id is "+id)
      var myJSONObject ={
        "data":[
            {
              "id":id,
              "state1":message
            }
        ],
        "trigger":[
            
            "approval",
        ]
        
        };
    request({
        method: "PUT",
        url: "https://www.zohoapis.in/crm/v2/Leads",
        headers : {
            "Authorization" : "Zoho-oauthtoken 1000.cb3d081c100b2be2bb1936b362473ff7.2f351c001060c52ef6a6fdb0d7c510dc"
        },
        
        json: true,   // <--Very important!!!
        body: myJSONObject
    }, function (error, response, body){
        console.log(" state lead updated in zoho crm");
    });
    

    

    }
     
     function check_ZOHO_FOR_CONVERSATION_ID(appId,displayName, conversationId,fn){
     
      request({
        method: "GET",
        url: "https://www.zohoapis.in/crm/v2/Leads?fields=id,conversationid,when_going_to_buy,phone_number,state1,district1",
        headers : {
            "Authorization" : "Zoho-oauthtoken 1000.cb3d081c100b2be2bb1936b362473ff7.2f351c001060c52ef6a6fdb0d7c510dc"
        },
    
        
        //json: true,   // <--Very important!!!
    },  function (error, response, body){
      let flag=0
      var dat=(JSON.parse(body)).data
        var l=(dat.length)
        for(let i=0;i<l;i++){
          if(dat[i].conversationid===conversationId)
          {
          flag=1
          console.log("lead found")
          fn(flag,dat[i].id,dat[i].phone_number,dat[i].when_going_to_buy,dat[i].state1,dat[i].district1)
    
          break
          } 
        }
        if(flag===0){
          //sendquestions(appId,conversationId)
          console.log("lead not found")
          fn(flag,0,0,0,0,0)
          
        
        }
       
      //console.log((JSON.parse(body)).data[1])
    });
    
    
    }
    
    
    
    function insertlead(displayName,conversationId,fn){
    
      var myJSONObject ={
        "data":[
            {
                "Company":"scrys's crm",
                "Last_Name":displayName,
                "conversationid":conversationId,

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
            "Authorization" : "Zoho-oauthtoken 1000.cb3d081c100b2be2bb1936b362473ff7.2f351c001060c52ef6a6fdb0d7c510dc"
        },
        
        json: true,   // <--Very important!!!
        body: myJSONObject
    }, function (error, response, body){
      if(body){
        var created=true
        fn(created)
      }
      
        console.log("lead created in zoho crm");
    });
    }
    //sending options to user
    
    async function send_when_to_buy(appId, conversationId){
      const apiInstance = new SunshineConversationsApi.MessagesApi();
      const data = new SunshineConversationsApi.MessagePost();
      data.author = {
          type: 'business'
      };
      data.content = {
          type: 'text',
          text: 'when are you going to buy the tractor?',
          actions: [
              {
                  type: 'reply',
                  text: 'one week',
                  payload: 'week',
      
              },
              {
                  type: 'reply',
                  text: 'two week',
                  payload: 'Month',
       
              },
              {
                  type: 'reply',
                  text: 'three week',
                  payload: '3 months',
              },
              {
                  type: 'reply',
                  text: 'one month',
                  payload: '6 months',
              },
              {
                  type: 'reply',
                  text: 'Contact agent',
                  payload: 'agent contact',
              }
          ]
      };
      
           
      apiInstance.postMessage(appId, conversationId, data)
      .then(response => {})
      .catch(error =>{console.log(error)} ) 
      }
    
    
    
      async function send_ask_state(appId, conversationId){
        const apiInstance = new SunshineConversationsApi.MessagesApi();
        const data = new SunshineConversationsApi.MessagePost();
        data.author = {
            type: 'business'
        };
        data.content = {
            type: 'text',
            text: 'select state?',
            actions: [
                {
                    type: 'reply',
                    text: 'telengana',
                    payload: 'week',
        
                },
                {
                    type: 'reply',
                    text: 'utterpradesh',
                    payload: 'Month',
         
                },
                {
                    type: 'reply',
                    text: 'haryana',
                    payload: '3 months',
                },
    
            ]
        };
        
             
        apiInstance.postMessage(appId, conversationId, data)
        .then(response => {})
        .catch(error =>{console.log(error)} ) 
        }

   