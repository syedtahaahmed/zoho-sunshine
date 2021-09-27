<?php


function generate_refresh_token(){
    $post=[
        'code'   =>'1000.d1348d2b2d4d2990cf7d739d327265e2.8193b0165653ce87c5d32c5e67bb0e3a',
        'redirect_uri'  =>'http://example.com/callbackurl',
        'client_id'   =>'1000.XZ3LRW97P52O40TCFREZ2DLUQ88QUU',
        'client_secret'   =>'9efc69b3dae03f93da6d30466cc85da9c7afd085f1', 
        'grant_type' =>'authorization_code'

    ];
    $ch=curl_init();
    curl_setopt($ch,CURLOPT_URL,"https://accounts.zoho.in/oauth/v2/token");
    curl_setopt($ch,CURLOPT_POST,1);
    curl_setopt($ch,CURLOPT_POSTFIELDS,http_build_query($post));
    curl_setopt($ch,CURLOPT_RETURNTRANSFER,true);
    curl_setopt($ch,CURLOPT_SSL_VERIFYPEER,0);
    curl_setopt($ch,CURLOPT_HTTPHEADER,array('Content-Type:application/x-www-form-urlencoded'));
    $response=curl_exec($ch);
    $response=json_encode($response);
    var_dump($response);
}
generate_refresh_token();
?>