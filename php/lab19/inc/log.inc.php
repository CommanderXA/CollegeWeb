<?
$dt = new DateTime("now");
$dt = $dt->getTimestamp();
$page = $_SERVER['REQUEST_URI'];
$ref = $_SERVER['HTTP_REFERER'];
$path = "$dt|$page|$ref\n";

$file = fopen('log/'.PATH_LOG, "a") or die("Unable to open file!");
fwrite($file, $path);
fclose($file);