<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="#">
</head>

<body>
    <!-- 
    <h1>
        <?php echo "hello php"; ?>
    </h1>

    <p>
        <?= "San Kyi Thar" ?>
    </p>

    <?php if (true) : ?>
        <h1>it is true</h1>
    <?php else : ?>
        <h1>it is false</h1>
    <?php endif; ?>

    <?php if (false) : ?>
        <h1>Hello world</h1>
    <?php else : ?>
        <h1>Bye world</h1>
    <?php endif; ?>  -->


    <?php
    $fruits = array("apple", "banana", "orange", "grape", "mango");
    ?>

    <ul>
        <?php foreach($fruits as $fruit):?>
            <li>
            <?= $fruit ?>
            </li>
            <?php endforeach; ?>
    </ul>

    <pre>
        <?php
        // print_r($fruits);
        ?>
    </pre>

</body>

</html>