<?php
if(isset($_POST['submit'])){
    $fname=$_POST['first'];
    echo "First name:" .$fname."<br/>";
    $lname=$_POST['last'];
    echo "Last name:" .$lname."<br/>";
    //insert_leads();
}
?>
