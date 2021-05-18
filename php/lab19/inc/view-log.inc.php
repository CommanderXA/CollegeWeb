<?
$file = fopen('log/'.PATH_LOG, "r") or die("Unable to open file!");

echo "<ul>";
while (($line=fgets($file)!==false)) {
    $line=fgets($file);
    $string = explode("|", $line);
    $date = date("d-m-Y H:i:s", $string[0]);
    $page = $string[1];
    $ref = $string[2];
    echo "<li>$date | $path -> $ref</li>";
}
echo "</ul>";

fclose($file);