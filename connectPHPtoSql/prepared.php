
<?php
require "connection.php";

$sql = "insert into student(fname,lname,sex) values (?,?,?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("sss" ,$fname,$lname,$sex);
//set parameter and execute
$fname = "Abel";
$lname = "Getnet";
$sex = "male";
$stmt->execute();

$fname = "Farda";
$lname = "Tedy";
$sex = "male";
$stmt->execute();

$fname = "Bona";
$lname = "Samuel";
$sex = "male";
$stmt->execute();

echo "new records inserted successfully";

$stmt->close();
mysqli_close($conn);
?>