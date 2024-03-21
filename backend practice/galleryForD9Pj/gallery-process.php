 <?php

    echo "<pre>";

    //  print_r($_FILES);

    $saveFolder = "photos";

    if (!is_dir($saveFolder)) {
        mkdir($saveFolder, 0777);
    }

    print_r($_FILES);

    //   $ext = pathinfo($_FILES["upload"]["name"])["extension"];

    //   $arr = end(explode(".",$_FILES["upload"]["name"]));
    //   print_r($arr);

    //  $saveFileName = $saveFolder."/". uniqid(). "_". $_FILES["upload"]["name"];
    //  print_r($saveFileName);

    //  $saveFileName = $saveFolder."/". uniqid()."." . $ext;
    //   print_r($saveFileName);

    $error = false;
    foreach ($_FILES["upload"]["name"] as $key => $name) {

        $ext = pathinfo($name)["extension"];
        $saveFileName = $saveFolder . "/" . uniqid() . "." . $ext;

        if (!move_uploaded_file($_FILES["upload"]["tmp_name"][$key], $saveFileName)) {
            $error = true;
        }
 
        if ($error === false) {
            header("Location:gallery.php");
        }
    }
