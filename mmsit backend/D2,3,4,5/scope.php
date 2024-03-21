<?php

$x ="xxx";
const My_Name = "HHZ";

function run() {

    // global $x;  //can reassign

    static $y = 0;
    echo $y;
    $y++;

    // echo $x; // cannot reassign in fun
    // echo My_Name;
}

run();
run();
run();

// echo "\n";
// echo $x;