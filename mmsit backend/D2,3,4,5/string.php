<?php 

$myName = "Han Htoo Zaw";
$myText = "ဟန်ထူးဇော်ရဲ့နာမည်ပါ";

// echo $myText;
$text = "aaa b cd  ef";

// echo strlen(trim($text));
// echo trim($text,"a");

// echo htmlentities("<h1>San Kyi Thar</h1>");
// echo htmlentities("I'm HHZ \"'par");\
$jsScript = htmlentities("<script>alert('U are hacked')</script>");
// echo html_entity_decode($jsScript);
// echo htmlspecialchars("I'm HHZ");

echo md5("abcd111");
echo "<br>";
echo password_hash("abc111",PASSWORD_DEFAULT);
echo '<br>';
echo '<br>';

// echo mb_substr($myText,3,7);
// echo substr($myText,3,6);

echo strlen($myName);
echo "\n";
echo str_word_count($myName);
echo "\n";
echo strtolower($myName);
echo "\n";
echo strtoupper($myName);
echo "\n";
echo ucfirst($myName);
echo "\n";
echo ucwords($myName);
echo "\n";
echo strrev($myName);
echo "\n";
echo strpos($myName,"Ht");
echo "\n";
echo str_replace("Ko","Han",$myName);
echo "\n";
echo str_pad("aa",8,"X",STR_PAD_BOTH);
echo "\n";
print_r(explode(' ',$myName));
echo "\n";
print_r(implode(".",["a","b","C"]));
echo "\n";
