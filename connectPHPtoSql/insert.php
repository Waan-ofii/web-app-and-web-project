
<?php
require "connection.php";

$sql = "insert into student(fname,lname,sex) values ('Tesfaye','Ayele','Male')";

if(mysqli_query($conn,$sql)){
    echo "data is inserted successfully";
}else{
    echo "error inserting data ".mysqli_error($conn);
}
mysqli_close($conn);
?>