<?
$dt = new DateTime()->getTimestamp();
$page = $SERVER['REQUEST_URI'];
$ref = $SERVER['HTTP_REFERER'];
$path = "$dt|$page|$ref\n";

$file = fopen('log/'.PATH_LOG, "a") or die("Unable to open file!");
fwrite($file, $path);
fclose($file);
