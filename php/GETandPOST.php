<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>form</title>
</head>
<body>
    <?php
    echo $_GET['username'];
     ?>
    <form method="GET">
        <input type="hidden" name="username" value="TA">
        <button type="submit">Click here</button>
    </form>
</body>
</html>