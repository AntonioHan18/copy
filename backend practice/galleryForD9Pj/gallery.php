<?php require("./template/header.php"); ?>

<?php include("./template/sidebar.php"); ?>

<section class="bg-gray-100 p-10 rounded-lg">

    <form enctype="multipart/form-data" action="./gallery-process.php" method="post">
        <label for="upload" class="sr-only">Choose file</label>
        <input type="file" name="upload[]" multiple id="upload" class="block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600
    file:bg-gray-50 file:border-0
    file:me-4
    file:py-3 file:px-4
    dark:file:bg-gray-700 dark:file:text-gray-400">

        <button type="submit" class="mt-5 py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
            Upload
        </button>

    </form>

</section>

<section>
<?php 

$photos = array_filter(scandir("photos"),fn($el) => $el != "." && $el != "..");
// print_r($photos);
?>

<section class=" mt-5 columns-3 gap-3">
    <?php foreach($photos as $photo): ?>
        <img class="mb-3 rounded-lg" src="./photos/<?= $photo?>" alt="">
    <?php endforeach ?>
</section>

<?php include("./template/footer.php"); ?>