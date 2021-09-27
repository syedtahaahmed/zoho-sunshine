<?php

//session_start();
  


function generate_refresh_token(){
    $post=[
        'refresh_token'   =>'1000.2c940e0b265de0cef2bf0bdaad265516.9209f4833d83c568967e640ba489ef3b',
        'redirect_uri'  =>'http://example.com/callbackurl',
        'client_id'   =>'1000.5M44AIC1E137I2AS4TVY1XFQJ940WE    ',
        'client_secret'   =>'4c0638a5797d24418a452fb39410047ffaf8846789', 
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

   // $key = "access_token";
    //$access_token_val = $jsonArray[$key];
    //$_SESSION['valtosend'] = $access_token_val;
    //var_dump($access_token_val );
    
    //var_dump($response);
    $response=json_encode($response);
    
    var_dump($response);
  

}
generate_refresh_token();
?>