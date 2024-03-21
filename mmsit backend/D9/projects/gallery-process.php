<?php


echo "<pre>";

$saveFolder = "photos";

if (!is_dir($saveFolder)) {
    mkdir($saveFolder,0777);
}

// // print_r($_FILES);

// // print_r(pathinfo($_FILES["upload"]["name"])["extension"]);

// $ext = pathinfo($_FILES["upload"]["name"])["extension"];
// $saveFileName = $saveFolder."/". uniqid(). '.' .$ext;
    
// // $arr = explode(".",$_FILES["upload"]["name"]);
// // echo end($arr);

// // $saveFileName = $saveFolder."/". uniqid(). "_" .$_FILES["upload"]["name"];

// if (move_uploaded_file($_FILES['upload']["tmp_name"],$saveFileName)) {
//     // header("Location:gallery.php");
// }

$error = false;

foreach($_FILES["upload"]["name"] as $key => $name){
    $ext =pathinfo($name)["extension"];
    $saveFileName = $saveFolder ."/". uniqid(). "." . $ext;

    if (!move_uploaded_file($_FILES['upload']["tmp_name"][$key],$saveFileName)) {
        $error = true;
    }

if($error === false) {
    header("Location:gallery.php");
}   

}

print_r($_FILES); 
