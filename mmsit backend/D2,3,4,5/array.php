<?php

// $arr = array("a","b","c","d");
// $x = ["x","y","z"];

// assoc array key => value

// $assoc = array(
//     "myName" => "HHZ",
//     "age" => 19,

//     "myJob" => array("student", "developer"),
//     "gf" => null,
//     "isHandsome" => true,
// );
// // print_r($assoc); 
// print($assoc["age"]);

// echo array_search(19, $assoc);

// echo $arr; //won't work;
// print("hello");
// print_r($arr);   
// print_r($x);
// echo $arr[0];
// echo $arr[1];

// $arr = [];
// $arr[0] = "a";
// $arr[1] = "b";
// $arr[2] = "c";
// print_r($arr);

// $assoc = [];
// $assoc["name"] = "hhz";
// $assoc["age"] = 30;
// $assoc["gender"] = "male";
// print_r($assoc);

// $arr = [];
// array_push($arr,"a");
// array_push($arr,"b");
// array_push($arr,"c");

// array_unshift($arr, "a");
// array_unshift($arr, "b");
// array_unshift($arr, "c");

// print_r($arr);

// index array 

// $arr = array("a","b","c");
// $x = ["x","y","z"];

// echo array_pop($x);
// echo "\n";
// echo array_shift($x);

// print_r($x);

system('cls');

// $arr = ["a", "b", "c", "a", "d", "e", "f", "c"];

// print_r(array_chunk($arr,3));

// $array1 = array("color" => "red",2,4);
// $array2 = array("a","b","color" => "blue","shape" => "circle",4);
// $result = array_merge($array1,$array2);
// print_r($result);

// $a = array(2,4,5,6);
// echo array_product($a);
// echo array_sum($a);

$arr = ["a", "b", "c", "a", "d", "e", "f", "c"];

// echo $arr[array_rand($arr,1)];   
// print_r(array_rand($arr,3));
// foreach(array_rand($arr,3) as $i){
//     echo $arr[$i];
//     echo "\n";
// }

// print_r(shuffle($arr));
// shuffle($arr);
// array_reverse($arr);

// $r = array_unique($arr);
// print_r($r);
// print_r($arr);

// print_r(join(", ",$arr));
// print(implode(" --- ",$arr)); //array to string
// print_r(explode(" " ,"Hello World")); //string to array

// $r = array_slice($arr,1,3);
// $r = array_splice($arr,1,3);
// print_r($r);
// print_r($arr);

// echo $arr[0];
// echo "\n";
// echo $arr[count($arr) - 1];
// echo "\n";

// echo current($arr);
// echo end($arr);

// echo in_array("c",$arr);

// $info =array("coffee","brown","coke");
// list($x,$y,$z) = $info;
// echo $x,$y,$z;

// print_r(range(10,100,5));

// array to string
// echo implode("---",$arr);

// string to array
// print_r(explode(" " ,"Hello World")); 

$assoc = array(
    "myName" => "HHZ",
    "age" => 19,
    "myJob" => array("student", "developer"),
    "gf" => null,
    "isHandsome" => true,
);

// print_r(array_keys($assoc));
// print_r(array_values($assoc));

// echo array_search(19,$assoc);
// echo array_key_exists("gf",$assoc);

// $nums = [5,12,10,6,7,3];
//  $r = array_map(fn($el) => $el*2 ,$nums);
// $r = array_map(function ($el){
//     return $el *2;
// } , $nums);
//

// $r = array_filter($nums,fn($el)=> $el <= 7);

// $r = array_reduce($nums,fn($pv,$cv) => $pv + $cv,0);

// print_r($nums);
// print_r($r);

// $json = file_get_contents('https://fakestoreapi.com/products/1');
// // echo $json;
// echo "\n";
// $api = json_decode($json,true);
// print_r($api);
// echo "\n";
// echo($api["title"]);
// // echo($api->title);
// echo "\n";

// echo json_encode($assoc);

// Predefined variable

// print_r($GLOBALS);
// print_r($_SERVER);

// $GLOBAL["My_Name"] = "HHZ";
// print_r($GLOBALS);
// function run(){
//     return "My name is ". $GLOBALS["My_Name"];
// }

// echo run();