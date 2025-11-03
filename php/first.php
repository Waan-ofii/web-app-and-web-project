<?php
echo "welcome to php program <br>";
echo "hello world <br>";
echo " //single line comment  /*multiple line comment*/ <br>" ; //single comment
/*multiple line comment*/ 

$text = "Hello world";
$x = 35;
$y = 40.2;// global variable

ECHO $text;
echo $x;

/*
function loc_scop(){
    echo "<br>";
    $a = 45; //local variable
   echo $a;
   echo "<br>";
   //echo $y; global variable can not be acceced in function or local
   global $y;
   echo $y;
}
loc_scop();
*/
/*
function st(){
  static $z = 1;
    $z++;
    echo $z;
}
echo "<br>";
st();
echo "<br>";
st();
echo "<br>";
st();
*/
$g = 5;
$d = NULL;
$e = array("c++","java","PHP");
echo "<br>";
var_dump($g);
echo "<br>";
var_dump($d);
echo "<br>";
var_dump($e);

?>