<!doctype html>
<?php
if(isset($_POST['login'])){

// Authorisation details.
$username = "booksfancy124@gmail.com";
$hash = "2e81b60b675b9acbe7cfff73dd645e9a90186472be530a85e66f4d48f6836619";

// Config variables. Consult http://api.textlocal.in/docs for more info.
$test = "0";
$name=$_POST['name'];

// Data for text message. This is the text message data.
$sender = "TXTLCL"; // This is who the message appears to be from.
$numbers = $_POST['num']; // A single number or a comma-seperated list of numbers
$otp=mt_rand(100000,999999);
setcookie("otp",$otp);
$message = "hey".$name."ur otp is ".$otp;
// 612 chars or less
// A single number or a comma-seperated list of numbers
$message = urlencode($message);
$data = "username=".$username."&hash=".$hash."&message=".$message."&sender=".$sender."&numbers=".$numbers."&test=".$test;
$ch = curl_init('http://api.textlocal.in/send/?');
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$result = curl_exec($ch); // This is the result from the API
echo("otp sent");
curl_close($ch);
}
if(isset($_POST['ver']))
{
    $verotp=$_POST['otp'];
    if($verotp==$_COOKIE['otp']){
        echo("Number verified succesfully");
    }
    else{
        echo("otp wrong ");
    }
}
?>

<html>
    <head>
        <meta charset="utf-8">
        <title>abc</title>
</head>
<body>
<form method="post" action="phpotp.php">
    <table >
        <tr>
            <td>name</td>
            <td><input type="text"  name="name" placeholder="enter name" </td>
</tr>
<tr>
    <td>phone number</td>
    <td><input type="text" name="num" placeholder="valid"></td>
</tr>
<tr>
    <td></td>
    <td> <input type="submit" name="login" value="Send OTP"></td>
</tr>
<tr>
    <td>verify otp</td>
    <td> <input type="text" name="otp" placeholder="enter otp"></td>
</tr>
<tr>
    <td></td>
    <td> <input type="submit" name="ver" value="verify Number" ></td>
</tr>


</table>
</form>
</body>

</html>    