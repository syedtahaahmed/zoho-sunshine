//const request =require('request')
//chunk norris api with widget
/*
//chunk norris api with widget
function initializeWidget()
{
	ZOHO.embeddedApp.on("PageLoad",function(data)
	{  
	var request ={
			url:"https://api.chucknorris.io/jokes/random",
			params:{
			},
			headers:{
			}
		}
		ZOHO.CRM.HTTP.get(request)
		.then(function(data1){
			console.log(Object.keys(data1));
			var x=JSON.parse(data1);
			document.getElementById("recordInfo").innerHTML = JSON.stringify(data1,null,2);
		})
	})
	ZOHO.embeddedApp.init();
}
*/
//getting authorization error in zoho crm with header as authenticaction
/*
//getting authorization error in zoho crm with header as authenticaction
function initializeWidget()
{
	ZOHO.embeddedApp.on("PageLoad",function(data)
	{ 
		ZOHO.CRM.CONFIG.getCurrentUser()
		.then(function(response)
		{
			document.getElementById("userInfo").innerHTML = JSON.stringify(response,null,2);
		});
		url="https://api.smooch.io/v2/apps/613ef0af8e379c00d71aac65/conversations/b111426441aac3127f4abb85/messages"
	var request ={
			url:url,
			params:{
			//	scope:"crmapi",
			//	type:"AllUsers"
			},
			headers:{
				username:"app_613f27498c905000d771afc0",
				password :"SmXUhi7yTcqj0s49sB077YM9dm3Ftg1K0bAvuxZAvxaXx-znsHDoL76M-65HUpwAVp6CuH6O4tIVZgmEB2iNKw",
			
				}
		}
		ZOHO.CRM.HTTP.get(request)
		.then(function(data1){
			console.log(Object.keys(data1));
			var x=JSON.parse(data1);
		console.log(data1);
			document.getElementById("recordInfo").innerHTML = JSON.stringify(data1,null,2);
		})
	})
	ZOHO.embeddedApp.init();
}*/
//getting error in zoho crm with authentication added in url

/*
//getting error in zoho crm with authentication added in url
function initializeWidget()
{
	ZOHO.embeddedApp.on("PageLoad",function(data)
	{ 
		ZOHO.CRM.CONFIG.getCurrentUser()
		.then(function(response)
		{
			document.getElementById("userInfo").innerHTML = JSON.stringify(response,null,2);
		});
		username = "app_613f27498c905000d771afc0"
		password = "SmXUhi7yTcqj0s49sB077YM9dm3Ftg1K0bAvuxZAvxaXx-znsHDoL76M-65HUpwAVp6CuH6O4tIVZgmEB2iNKw"
		url = "https://" + username + ":" + password + "@api.smooch.io/v2/apps/613ef0af8e379c00d71aac65/conversations/b111426441aac3127f4abb85/messages";
		var request ={
			url:url,
			params:{
			//	scope:"crmapi",
			//	type:"AllUsers"
			},
			headers:{
			//'Access-Control-Allow-Origin': '*'
			//Authorization:"******************************",
			}
		}
		ZOHO.CRM.HTTP.get(request)
		.then(function(data1){
			//console.log(Object.keys(data1));
			//var x=JSON.parse(data1);
		console.log(data1);
			document.getElementById("recordInfo").innerHTML = JSON.stringify(data1,null,2);
		})
	})
	ZOHO.embeddedApp.init();
}*/
//not working even error messege is not displaying in zoho crm
/*
function initializeWidget()
{
	

	ZOHO.embeddedApp.on("PageLoad",function(data)
	{ 
		ZOHO.CRM.CONFIG.getCurrentUser()
		.then(function(response)
		{
			document.getElementById("userInfo").innerHTML = JSON.stringify(response,null,2);
		});
		

//not working even error messege is not displaying in zoho crm
		username = "app_613f27498c905000d771afc0"
		password = "SmXUhi7yTcqj0s49sB077YM9dm3Ftg1K0bAvuxZAvxaXx-znsHDoL76M-65HUpwAVp6CuH6O4tIVZgmEB2iNKw"
		url="https://api.smooch.io/v2/apps/613ef0af8e379c00d71aac65/conversations/b111426441aac3127f4abb85/messages"
		auth = "Basic " + new Buffer(username + ":" + password).toString("base64");
		var request ={
			url:url,
			params:{
			//	scope:"crmapi",
			//	type:"AllUsers"
			},
			headers:{
			//'Access-Control-Allow-Origin': '*'
			//Authorization:"******************************",
			'Authorization':auth
			}
		}
		ZOHO.CRM.HTTP.get(request)
		.then(function(data1){
		//console.log(Object.keys(data1));
		//var x=JSON.parse(data1);
		console.log(data1);
			document.getElementById("recordInfo").innerHTML = JSON.stringify(data1,null,2);
		})
	})
	ZOHO.embeddedApp.init();
}

		ZOHO.CRM.HTTP.get(request)
		.then(function(data1){
			//console.log(Object.keys(data1));
			//var x=JSON.parse(data1);
		console.log(data1);
			document.getElementById("recordInfo").innerHTML = JSON.stringify(data1,null,2);
		})
	})

	ZOHO.embeddedApp.init();
}*/
//getting authorization error in zoho crm
/*
function initializeWidget()
{
	ZOHO.embeddedApp.on("PageLoad",function(data)
	{ 
		ZOHO.CRM.CONFIG.getCurrentUser()
		.then(function(response)
		{
			document.getElementById("userInfo").innerHTML = JSON.stringify(response,null,2);
		});
		url="https://app_613f27498c905000d771afc0:SmXUhi7yTcqj0s49sB077YM9dm3Ftg1K0bAvuxZAvxaXx-znsHDoL76M-65HUpwAVp6CuH6O4tIVZgmEB2iNKw@api.smooch.io/v2/apps/613ef0af8e379c00d71aac65/conversations/b111426441aac3127f4abb85/messages"
		var request ={
		    url:url,
			params:{
			//	scope:"crmapi",
			//	type:"AllUsers"
			},
			headers:{
			//'Access-Control-Allow-Origin': '*'
			//Authorization:"******************************",	
			}
		}
		ZOHO.CRM.HTTP.get(request)
		.then(function(data1){
			//console.log(Object.keys(data1));
			//var x=JSON.parse(data1);
		console.log(data1);
			document.getElementById("recordInfo").innerHTML = JSON.stringify(data1,null,2);
		})
	})
	ZOHO.embeddedApp.init();
}*/
//working perfect ablr to send data to widget stringified data
/*
function initializeWidget()
{
	ZOHO.embeddedApp.on("PageLoad",function(data)
	{ 
		ZOHO.CRM.CONFIG.getCurrentUser()
		.then(function(response)
		{
			document.getElementById("userInfo").innerHTML = JSON.stringify(response,null,2);
		});
		username = "app_613f27498c905000d771afc0"
		password = "SmXUhi7yTcqj0s49sB077YM9dm3Ftg1K0bAvuxZAvxaXx-znsHDoL76M-65HUpwAVp6CuH6O4tIVZgmEB2iNKw"
		url="https://api.smooch.io/v2/apps/613ef0af8e379c00d71aac65/conversations/e3b90ef5dbcf7a366bacb5d8/messages"		
		var request ={
		    url:url,
			params:{
			//	scope:"crmapi",
			//	type:"AllUsers" 
			},
			headers:{
			//'Access-Control-Allow-Origin': '*'
			Authorization:"Basic "+btoa(username+":"+password)	
			}
		}
		ZOHO.CRM.HTTP.get(request)
		.then(function(data1){
		console.log(data1);
		x=JSON.parse(data1)
			document.getElementById("recordInfo").innerHTML = JSON.stringify(x,null,2);
		})
	})
	ZOHO.embeddedApp.init();
}
*/
//working perfect able to send data with styling to widget
/*function initializeWidget()
{	var para = document.createElement("P");  
	ZOHO.embeddedApp.on("PageLoad",function(data)
	{ 
		ZOHO.CRM.CONFIG.getCurrentUser()
		.then(function(response)
		{
			//document.getElementById("userInfo").innerHTML = JSON.stringify(response,null,2);
		});
		username = "app_613f27498c905000d771afc0"
		password = "SmXUhi7yTcqj0s49sB077YM9dm3Ftg1K0bAvuxZAvxaXx-znsHDoL76M-65HUpwAVp6CuH6O4tIVZgmEB2iNKw"
		url="https://api.smooch.io/v2/apps/613ef0af8e379c00d71aac65/conversations/e3b90ef5dbcf7a366bacb5d8/messages"		
		var request ={
		    url:url,
			params:{
			//	scope:"crmapi",
			//	type:"AllUsers" a
			//json:true
			},
			headers:{
			//'Access-Control-Allow-Origin': '*'
			Authorization:"Basic "+btoa(username+":"+password)	
			}
		}
		ZOHO.CRM.HTTP.get(request)
		.then(function(response){
			parsed_data=JSON.parse(response);
		console.log(parsed_data.messages);
		
		//body=response.body;
		//length=(body.messages).length
		(parsed_data.messages).forEach(element => {
		if((element.author.type)==="user"){
			console.log(element.content.text)
			//element.source.originalMessageTimestamp
			var div = document.createElement("div"); 
			div.style.borderColor="#ccc"
			div.style.background = "#ddd";
			div.style.color = "rgb(3, 37, 129)"
			div.style.margin = "5px"
			div.style.textAlign = "right"
			div.style.borderRadius = "5px"
			div.style.padding="8px"
			div.innerText = JSON.stringify(element.content.text);  
			div.innerText+=JSON.stringify(element.source.originalMessageTimestamp)             // Insert text
			document.body.appendChild(div); 

		}
		else if((element.author.type)==="business"){
			var div1 = document.createElement("div"); 
			div1.style.background="rgb(196, 182, 182)"
			div1.style.fontSize="medium"
			div1.style.color = "Burnt umber"
			div1.style.margin = "5px"
			//div1.style.textAlign = "left"
			div1.style.borderRadius = "5px"
			div1.style.padding="8px"
			
			div1.innerText = JSON.stringify(element.content.text);   
			div1.innerText+=JSON.stringify(element.received);
			// Insert text
		   	document.body.appendChild(div1); 	 
		}
		 })
			//document.getElementById("recordInfo").innerHTML = JSON.stringify(parsed_data.messages,null,2);
		})
	})
	ZOHO.embeddedApp.init();
}
*/
function initializeWidget()
{	var para = document.createElement("P");  
	ZOHO.embeddedApp.on("PageLoad",function(data)
	{ 
		ZOHO.CRM.CONFIG.getCurrentUser()
		.then(function(response)
		{
			//document.getElementById("userInfo").innerHTML = JSON.stringify(response,null,2);
		});
		username = "app_613f27498c905000d771afc0"
		password = "SmXUhi7yTcqj0s49sB077YM9dm3Ftg1K0bAvuxZAvxaXx-znsHDoL76M-65HUpwAVp6CuH6O4tIVZgmEB2iNKw"
		url="https://api.smooch.io/v2/apps/613ef0af8e379c00d71aac65/conversations/e3b90ef5dbcf7a366bacb5d8/messages"		
		var request ={
		    url:url,
			params:{
			//	scope:"crmapi",
			//	type:"AllUsers" a
			//json:true
			},
			headers:{
			//'Access-Control-Allow-Origin': '*'
			Authorization:"Basic "+btoa(username+":"+password)	
			}
		}
		ZOHO.CRM.HTTP.get(request)
		.then(function(response){
			parsed_data=JSON.parse(response);
		console.log(parsed_data.messages);
		
		//body=response.body;
		//length=(body.messages).length
		(parsed_data.messages).forEach(element => {
		if((element.author.type)==="user"){
			var div = document.createElement("div"); 
			div.style.border="2px solid #dedede"
			div.style.backgroundColor="rgb(184, 187, 190)"
			div.style.borderRadius="5px"
			div.style.padding="10px"
			div.style.margin="15px 0";
			var p=document.createElement("div");
			p.innerText = JSON.stringify(element.content.text);   
			p.style.fontSize="25px"
			p.style.padding="2px"
			var span=document.createElement("div");
			span.style.float="right";
			span.style.color="rgb(66, 23, 57)";
			span.style.fontSize="12px"
			span.style.margin="12px 0 12px 0";
			span.style.bottom="0";
			span.style.left="0";                         
			span.innerText=JSON.stringify(element.source.originalMessageTimestamp);
			div.appendChild(p);
			div.appendChild(span)
		   	document.body.appendChild(div); 

			//div.innerText = JSON.stringify(element.content.text);  
			//div.innerText=JSON.stringify(element.source.originalMessageTimestamp)             // Insert text


		}
		else if((element.author.type)==="business"){
			var div1 = document.createElement("div"); 
			div1.style.border="2px solid #dedede"
			div1.style.backgroundColor="#f1f1f1"
			div1.style.borderRadius="5px"
			div1.style.padding="10px"
			div1.style.margin="15px 0";
			var p1=document.createElement("div");
			p1.innerText = JSON.stringify(element.content.text);   
			p1.style.fontSize="25px"
			p1.style.padding="2px"
			var span1=document.createElement("div");
			span1.style.float="left";
			span1.style.color="seagreen";
			span1.style.fontSize="12px"
			span1.style.margin="12px 0 12px 0";
			span1.style.bottom="0";
			span1.style.left="0";                         
			span1.innerText=JSON.stringify(element.received);
			div1.appendChild(p1);
			div1.appendChild(span1)
		   	document.body.appendChild(div1); 	 
		}
		 })
			//document.getElementById("recordInfo").innerHTML = JSON.stringify(parsed_data.messages,null,2);
		})
	})
	ZOHO.embeddedApp.init();
}



