<?php
require "connection.php";
// select form database
$sql = "select id,fname,lname,sex from student";
$result = mysqli_query($conn,$sql);
//output data of each row
echo "<table border=1>";
echo "<tr> <td>ID</td> <td>F_name</td> <td>L_nmae</td><td>Sex</td>";
while($row = mysqli_fetch_assoc($result)){
    echo "<tr> <td>{$row["id"]}</td> <td>{$row["fname"]}</td> <td>{$row["lname"]}</td><td>{$row["sex"]}</td></tr>";
    // echo $row ["id"].$row["fname"].$row["lname"].$row["sex"]."<br>";
}
echo "</table>";
mysqli_close($conn);
?>