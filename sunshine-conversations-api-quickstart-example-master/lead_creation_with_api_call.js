var request = require('request'),

  myJSONObject ={
    "data":[
        {
            "Company":"abhisehk crm",
            "Last_Name":"abhi",
            "First_Name":"dhruv",
            "Email":"dhruv@crm.com",
            "State":"utter pradesh"
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
        "Authorization" : "Zoho-oauthtoken 1000.c57c3f8033fddc5f81374e126d791087.8c6d8986d0699afc51cf9e571d9a276d"
    },
    
    json: true,   // <--Very important!!!
    body: myJSONObject
}, function (error, response, body){
    console.log(response);
});