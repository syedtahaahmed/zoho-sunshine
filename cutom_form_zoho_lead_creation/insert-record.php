<?php

/*if(isset($_POST['submit'])){
    $comp=$_POST['company'];
    $lname=$_POST['last'];
    $fname=$_POST['first'];
    $eml=$_POST['email'];
    $stat=$_POST['state'];
    $ph=$_POST['phone'];
    $descp=$_POST['description'];
    insert_leads($comp,$lname,$fname,$eml,$stat,$ph,$descp);
    
}





function insert_leads($comp,$lname,$fname,$eml,$stat,$ph,$descp){
    
   
   $access_token='1000.fbc94d81aa47bb2cbcfba2eb8aeae046.6ca2f685f9ecbeb30a7e4953d55bdc60';

   
   
    
    $post_data=[
        'data'=>[
            [
        "Company" =>$comp,
        "Last_Name"=>$lname,
        "First_Name"=>$fname,
        "Email" =>$eml,
        "State"=>$stat,
        "Phone"=>$ph,
        "Description"=>$descp
    ]
    ],
'trigger'=>[
    "approval",
    "workflow",
    "blueprint"
]
];

$ch=curl_init();
curl_setopt($ch,CURLOPT_URL,"https://www.zohoapis.in/crm/v2/Leads");
    curl_setopt($ch,CURLOPT_POST,1);
    curl_setopt($ch,CURLOPT_POSTFIELDS,json_encode($post_data));
    curl_setopt($ch,CURLOPT_RETURNTRANSFER,true);
    curl_setopt($ch,CURLOPT_SSL_VERIFYPEER,0);
    curl_setopt($ch,CURLOPT_HTTPHEADER,array(
        'Authorization:Zoho-oauthtoken ' .$access_token,
        'content_Type: application/x-www-form-urlencoded'
));

    $response=curl_exec($ch);
    
    //$jsonArray = json_decode($response,true);
    //$response=json_decode($response);
    var_dump($response);
 

    
} */


if(isset($_POST['submit'])){
    $comp=$_POST['company'];
    $lname=$_POST['last'];
    $fname=$_POST['first'];
    $eml=$_POST['email'];
    $stat=$_POST['state'];
    $ph=$_POST['phone'];
    $descp=$_POST['description'];
    $access_token_val='';
    check_error($comp,$lname,$fname,$eml,$stat,$ph,$descp,$access_token_val);
    //insert_leads($comp,$lname,$fname,$eml,$stat,$ph,$descp,$access_token_val);
    
}





function insert_leads($comp,$lname,$fname,$eml,$stat,$ph,$descp,$access_token_val){
    
   
   $access_token=$access_token_val;

   
   
    
    $post_data=[
        'data'=>[
            [
        "Company" =>$comp,
        "Last_Name"=>$lname,
        "First_Name"=>$fname,
        "Email" =>$eml,
        "State"=>$stat,
        "Phone"=>$ph,
        "Description"=>$descp
    ]
    ],
'trigger'=>[
    "approval",
    "workflow",
    "blueprint"
]
];

$ch=curl_init();
curl_setopt($ch,CURLOPT_URL,"https://www.zohoapis.in/crm/v2/Leads");
    curl_setopt($ch,CURLOPT_POST,1);
    curl_setopt($ch,CURLOPT_POSTFIELDS,json_encode($post_data));
    curl_setopt($ch,CURLOPT_RETURNTRANSFER,true);
    curl_setopt($ch,CURLOPT_SSL_VERIFYPEER,0);
    curl_setopt($ch,CURLOPT_HTTPHEADER,array(
        'Authorization:Zoho-oauthtoken ' .$access_token,
        'content_Type: application/x-www-form-urlencoded'
));

    $response=curl_exec($ch);
    // $jsonArray = json_decode($response,true);
    //$response=json_decode($response);
    //var_dump($response); //working this one is commented done for poc
    return($response);
    

 
    
    //var_dump($fname);
    
}





function generate_refresh_token($comp,$lname,$fname,$eml,$stat,$ph,$descp,$access_token_val){
    $post=[
        'refresh_token'   =>'1000.c228578492aa270dce369b4011e642c4.5356995fc36ef1768c09ecca502cc68c',
        'redirect_uri'  =>'http://example.com/callbackurl',
        'client_id'   =>'1000.XZ3LRW97P52O40TCFREZ2DLUQ88QUU',
        'client_secret'   =>'9efc69b3dae03f93da6d30466cc85da9c7afd085f1', 
        'grant_type' =>'refresh_token'

    ];
    $ch=curl_init();
    curl_setopt($ch,CURLOPT_URL,"https://accounts.zoho.in/oauth/v2/token");
    curl_setopt($ch,CURLOPT_POST,1);
    curl_setopt($ch,CURLOPT_POSTFIELDS,http_build_query($post));
    curl_setopt($ch,CURLOPT_RETURNTRANSFER,true);
    curl_setopt($ch,CURLOPT_SSL_VERIFYPEER,0);
    curl_setopt($ch,CURLOPT_HTTPHEADER,array('Content-Type:application/x-www-form-urlencoded'));
    $response=curl_exec($ch);


    //accesing the access token here.
    $jsonArray = json_decode($response,true);

    $key = "access_token";
    $access_token_val = $jsonArray[$key];
    //$_SESSION['valtosend'] = $access_token_val;
    //var_dump($access_token_val );//working ,commented for poc
    echo"<body style='
    text-align: center;
    background-repeat:no-repeat;
    background-position: center center;
    background-image:url(https://media.giphy.com/media/JhwQWbVDHkNWkAs51v/giphy.gif);
    background-size: 800px;
    
   
   '> <h1>Thank You for submitting the response, Our team will get back to you as soon as possible.</h1></body>";
    
    //var_dump($response);
    $response=json_encode($response);
    insert_leads($comp,$lname,$fname,$eml,$stat,$ph,$descp,$access_token_val);
    
    //var_dump($response);
  } 
function check_error($comp,$lname,$fname,$eml,$stat,$ph,$descp,$access_token_val){   
    $response=insert_leads($comp,$lname,$fname,$eml,$stat,$ph,$descp,$access_token_val);

    $jsonArray = json_decode($response,true);
    $key1 ="status";
    $key2="code";
    $key3="message";

    $error_message=$jsonArray[$key3];
    $error_code=$jsonArray[$key2];
    $error = $jsonArray[$key1];

    if($error_code==="INVALID_TOKEN" ||$error==="error" || $error_message==="invalid oauth token")
{
 generate_refresh_token($comp,$lname,$fname,$eml,$stat,$ph,$descp,$access_token_val);
        
    }
    else{
       // function insert_leads($comp,$lname,$fname,$eml,$stat,$ph,$descp)
    }
}



/*if(isset($_POST['submit'])){
    $comp=$_POST['company'];
    $lname=$_POST['last'];
    $fname=$_POST['first'];
    $eml=$_POST['email'];
    $stat=$_POST['state'];
    $ph=$_POST['phone'];
    $descp=$_POST['description'];
    
   // insert_leads($comp,$lname,$fname,$eml,$stat,$ph,$descp,$access_token);
   maincall($comp,$lname,$fname,$eml,$stat,$ph,$descp);
    
}





function insert_leads($comp,$lname,$fname,$eml,$stat,$ph,$descp){
    
   
   $access_token='1000.fbc94d81aa47bb2cbcfba2eb8aeae046.6ca2f685f9ecbeb30a7e4953d55bdc60';

   
   
    
    $post_data=[
        'data'=>[
            [
        "Company" =>$comp,
        "Last_Name"=>$lname,
        "First_Name"=>$fname,
        "Email" =>$eml,
        "State"=>$stat,
        "Phone"=>$ph,
        "Description"=>$descp
    ]
    ],
'trigger'=>[
    "approval",
    "workflow",
    "blueprint"
]
];

$ch=curl_init();
curl_setopt($ch,CURLOPT_URL,"https://www.zohoapis.in/crm/v2/Leads");
    curl_setopt($ch,CURLOPT_POST,1);
    curl_setopt($ch,CURLOPT_POSTFIELDS,json_encode($post_data));
    curl_setopt($ch,CURLOPT_RETURNTRANSFER,true);
    curl_setopt($ch,CURLOPT_SSL_VERIFYPEER,0);
    curl_setopt($ch,CURLOPT_HTTPHEADER,array(
        'Authorization:Zoho-oauthtoken ' .$access_token,
        'content_Type: application/x-www-form-urlencoded'
));

    $response=curl_exec($ch);
    
    return($response);
    //checkerror($response);
    
    //$jsonArray = json_decode($response,true);
    //$response=json_decode($response);
   
 
    
    //var_dump($fname);
    
} 
function checkerror($response)
{ 
    $jsonArray = json_decode($response,true);
     $key1 = "status";
    $key2="code";
    $key3="message";
    $error_message=$jsonArray[$key3];
    $error_code=$jsonArray[$key2];
   
    $error = $jsonArray[$key1];
    if($error_code==="INVALID_TOKEN" ||$error==="error" || $error_message==="invalid oauth token")
    { return("error");

    }
    //else
    //{
      //  insert_leads($comp,$lname,$fname,$eml,$stat,$ph,$descp, )
    //}


}
function maincall($comp,$lname,$fname,$eml,$stat,$ph,$descp){
    $response=insert_leads($comp,$lname,$fname,$eml,$stat,$ph,$descp,$access_token,$access_token);
    $error_data=checkerror($response);
    if($errordata==="error")
    {
        $new_access_token_val=generate_refresh_token();
    }
    var_dump($response);
}
function generate_refresh_token($comp,$lname,$fname,$eml,$stat,$ph,$descp,$access_token_val){
    $time=time();
    $post=[
        'refresh_token'   =>'1000.95682fd8ea709bd13306a90f656125db.67c1505c7269698d9cc8c594bcda617d',
        'redirect_uri'  =>'http://example.com/callbackurl',
        'client_id'   =>'1000.OA5Z1NKJF45OCJINX9PJ62DBX8V2ZD',
        'client_secret'   =>'8f78e752bc46e01646a924cd0f51461428097eac04', 
        'grant_type' =>'refresh_token'

    ];
    $ch=curl_init();
    curl_setopt($ch,CURLOPT_URL,"https://accounts.zoho.in/oauth/v2/token");
    curl_setopt($ch,CURLOPT_POST,1);
    curl_setopt($ch,CURLOPT_POSTFIELDS,http_build_query($post));
    curl_setopt($ch,CURLOPT_RETURNTRANSFER,true);
    curl_setopt($ch,CURLOPT_SSL_VERIFYPEER,0);
    curl_setopt($ch,CURLOPT_HTTPHEADER,array('Content-Type:application/x-www-form-urlencoded'));
    $response=curl_exec($ch);


    //accesing the access token here.
    $jsonArray = json_decode($response,true);

    $key = "access_token";
    $access_token_val = $jsonArray[$key];
    //$_SESSION['valtosend'] = $access_token_val;
    //var_dump($access_token_val );
    
    var_dump($response);
    $response=json_encode($response);
    return($access_token_val);
    
    //var_dump($response);


*/

?>

