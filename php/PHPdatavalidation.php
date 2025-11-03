<?php
$user = $pass = $usererror = $passerr = "";
  if(isset($_POST['submit'])){
    $user = $_POST['username'];
    $pass = $_POST['password'];
    $uppercase = preg_match('@[A-Z]@',$pass);
    $lowercase = preg_match('@[a-z]@',$pass);
    $number = preg_match('@[0-9]@',$pass);
    $speacialchar = preg_match('@[^\w]@',$pass);
  if(empty($user)){
    $usererror = "username is mandatory";
  }else if(strlen($user)<=3){
     $usererror = "username should be atleast 4 character";
  }else{
    echo $user;
  }
  if(!$uppercase || !$lowercase || !$number || !$speacialchar || strlen($pass)<8){
    $passerr = "password should be at least 8 character in lenght and  include at least one uppercase letter, and one number, and one special character!";
  }
}
    ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>php data validation</title>
</head>
<body>
    <form action="PHPdatavalidation.php" method="POST">
        username : <input type="text" name="username" id=""><?php
        echo $usererror 
        ?>
        <br>
        password : <input type="password" name="password" id=""><?php
        echo $passerr; 
        ?><br>
        <input type="submit" name="submit" value="Register">
    </form>
    
</body>
</html>