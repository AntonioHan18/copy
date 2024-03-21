<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

<h1>web server</h1>

<!-- <?php echo true? "true" : "false";?>/ -->

<?php

$products = [
    [
        "id" => 1,
        "name" => 'apple',
        "price" => 290,
    ],
    [
        "id" => 2,
        "name" => 'orange',
        "price" => 390,
    ],
    [
        "id" => 3,
        "name" => 'mango',
        "price" => 100,
    ],
]

?>

<?php foreach($products as $product) : ?>
    <div class="">
        <h1>
            <?= $product["name"] ?>
        </h1>

        <p>
            <?= $product["price"] ?>
        </p>
        <hr>
    </div>

<?php endforeach; ?> 

</body>
</html>