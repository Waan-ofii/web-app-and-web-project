<?php
$program = array(
    array("php","html", "javascript"),
    array("Java","python", "C++")
    
);
echo $program[1][2];
for($row=0; $row<1; $row++){
    echo "Row number $row <br>";
    for($col=0; $col<2; $col++)
        echo "Row number $col <br>";
    echo $program[$row][$col];
    echo "<br>";
}
?>