<?php 
require "connection.php";
$sql = "INSERT INTO student (fname, lname, sex) VALUES (?, ?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("sss",$fname,$lname,$sex);
//set parameter and execute
$fname = "Abebech";
$lname = "Dereje";
$sex = "female";
$stmt->execute();

$fname = "Bona";
$lname = "Getenet";
$sex = "male";
$stmt->execute();

$fname = "Elias";
$lname = "Isayas";
$sex = " male";
$stmt->execute();

if(mysqli_query($conn,$sql)){
    echo "data is inserted successfully";
}else{
    echo "error inserting data".mysqli_error($conn);
}
$stmt->close();
mysqli_close($conn);
?>