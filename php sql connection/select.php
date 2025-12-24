<?php
require "connection.php";
// select form database
$sql = "select id,fname,lname,sex from student";
$result = mysqli_query($conn,$sql);
//output data of each row
while($row = mysqli_fetch_assoc($result)){
    echo $row ["id"].$row["fname"].$row["lname"].$row["sex"]."<br>";
}

mysqli_close($conn);
?>