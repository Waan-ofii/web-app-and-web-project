<?php

$x = "hello world";
//echo strlen($x);
//echo str_word_count($x);
//echo strrev($x);
//echo strpos($x,"world"); 
//echo str_replace("world","you tube",$x);
$y = 5;
echo is_finite($y);
var_dump(is_infinite($y));


for($x=1; $x<10; $x++){
    echo "$x <br>";
}

$program = array("php", "HTML","javaScript");
echo $program[0];
$arrylen = count($program);
for($i = 0; $i< $arrylen; $i++){
    echo $program[$i], "<br>";
}

echo "<br>Associtive array ARRAY WITH KEY AND VALUE<br>";
$age = array("Nahom"=>"25","malet"=>"21");
ksort($age);
echo $age["malet"];
foreach($age as $x=>$x_value){
    echo $x.$x_value;
    echo "<br>";
}


?>