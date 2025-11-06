<?php
$conn = mysqli_connect("localhost","root","","db");
if(!$conn){
    die("connection failed" .mysqli_connect_error());
}
?>