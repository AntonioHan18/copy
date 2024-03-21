<?php

// $weight =(int)130.45;
// $weight =(string)130.45;

// echo $weight;
// var_dump($weight);

// $floatNumber = 10.5;
// $intNumber = (int)$floatNumber;
// echo $initNumber;

// $stringNumber = "123";
// $intNumber = (int)$stringNumber;
// echo $initNumber;

// $boolValue = true;
// $intValue = (int)$boolValue;
// echo $intValue;

// $floatNumber = 8.23;
// $stringFloat = (String)$floatNumber;
// echo $stringFloat;

// $stringFloat = "45.43";
// $floatNumber = (float)$stringFloat;
// echo $floatNumber;
// var_dump($floatNumber);

// $car = (object) [ 
//     "id" => 114,
//      "model" => "BMW S1000",
//      "brand" => "BMW",
//      "type" => "Racing Bike", 
//     ];

// var_dump($car);
// print($car["model"]);
// print($car->id);

// function area(int $w,int $h): int {
//     return $w * $h;
// }
// print(area(3,"a"));

function processArray(array $numbers): int{
    return array_sum($numbers);
}
$result = processArray([1,2,3,4]);
echo $result;

