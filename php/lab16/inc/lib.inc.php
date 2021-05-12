<?php
  function drawTable($cols, $rows, $color) {
    echo "<table border='1' width='200'>";
    echo "<tr>";
    echo "<th style='background:".$color.";text-align: center;'><b>0</b></th>";
    for ($c=0; $c < $cols; $c++) { 
      echo "<th style='background:".$color.";text-align: center;'><b>".($c+1)."</b></th>";
    }
    echo "</tr>";
    for ($i=0; $i < $rows; $i++) { 
      echo "<tr>";
      echo "<th style='background:".$color.";text-align: center;'><b>".($i+1)."</b></th>";
      for ($j=0; $j < $cols; $j++) {
        echo "<td>".($j+1)."*".($i+1)."</td>";
      }
      echo "</tr>";
    }
    echo '</table>';
  }

  function drawMenu($menu, $vertical = true) {
    echo "<ul>";
    $style = '';
    foreach ($menu as $el) {
      if ($vertical == false) {
        $style = 'display: inline;';
        $sep = ' | ';
      }
      echo '<li'.$style.'><a href="'.$el['href'].'">'.$el['link'].$sep.'</a></li>';
    }
    echo "</ul>";
  }
?>
