<?php
$fname = "";
$password = "";
$err = "";
$conn = mysqli_connect("localhost","root",""."logdb");

if(isset($_POST['login'])){
    $fname = mysqli_real_escape_string($conn,$_POST['fname']);
    $password = mysqli_real_escape_string($conn,$_POST['password']);

    $sql = "select * from users where firstname='".$fname."' and 'password='".$password."' limit 1";

    $result = mysqli_query($conn,$sql);

    if(empty($fname)){
        $err = "username is required";
    }else if(empty($password)){
              $err = "password is required";
    }else if(mysqli_num_rows($result === 1)){
        header('location: home.php');
    }else{
              $err = "Invalid username or password";
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login System</title>
    <link rel="stylesheet" href="CSS/login_style.css">
</head>
<body>
    <div class="box"> 
        <h1>Login Here</h1>
        <div class="err">
            <?php
            echo $err."hey guys";
            ?>
            <h2>error</h2>
        </div>
        <form action="login.php" method="post">
            <input type="text" name="fname" placeholder="Enter Username">
            <input type="password" name="password" placeholder="Enter password">
            <input type="submit" name="login" value="Login">
            Not yet a member? <a href="signnup.php" style="color:#ffc107">SIgn Up</a>
            
        </form>
    </div>
</box>
</body>
</html>