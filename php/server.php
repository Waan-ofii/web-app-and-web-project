<?php
echo "<h2>server info</h2>";
echo "<br>php-file : <br>";

echo $_SERVER['PHP_SELF'];
echo "<br>http host: <br>";
echo $_SERVER['HTTP_HOST'];
echo " <br>server name: <br>";
echo $_SERVER['SERVER_NAME'];
echo "<br>script name : <br>";
echo $_SERVER['SCRIPT_NAME'];
echo "<br>document root: <br>";
echo $_SERVER['DOCUMENT_ROOT'];
echo "<br>script filename: <br>";
echo $_SERVER['SCRIPT_FILENAME'];
echo "<br>server softmare: <br>";
echo $_SERVER['SERVER_SOFTWARE'];
echo "<br>";

echo "<h2>client info</h2>";
echo "<br>http_user_agent :<br>";
echo $_SERVER['HTTP_USER_AGENT'];
echo "<br>remote addr: <br>";
echo $_SERVER['REMOTE_ADDR'];
echo "<br>remote port : <br>";
echo $_SERVER['REMOTE_PORT'];
?>