<?
$file = fopen('log/'.PATH_LOG, "r") or die("Unable to open file!");

while (($line=fgets($file)!==false)) {
    $string = explode("|", $line);
    $date = date("d-m-Y H:i:s", $string[0]);
    $page = $string[1];
    $ref = $string[2]
    echo "$date | $path -> $ref";
}

fclose($file);