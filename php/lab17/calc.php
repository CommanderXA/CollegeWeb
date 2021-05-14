<?php
  $num1 = null;
  $operator = null;
  $num2 = null;
  $res = null;
  $err = null;

  if ((trim($_POST["num1"]) != '' && is_numeric(trim($_POST["num1"]))) && (trim($_POST["num2"]) != '' && is_numeric(trim($_POST["num2"]))) && (!empty(trim($_POST["operator"])))) {
    if (isset($_POST["num1"]) && isset($_POST["num2"]) && isset($_POST["operator"])) {
      $num1 = $_POST["num1"];
      $operator = $_POST["operator"];
      $num2 = $_POST["num2"];

      switch($operator) {
        case '+':
          $res = $num1 + $num2;
          break;
        case '-':
          $res = $num1 - $num2;
          break;
        case '*':
          $res = $num1 * $num2;
          break;
        case '/':
          $num2 == 0 ? $err = "Can't devide by zero" : $res = $num1 / $num2;
          break;
        default: 
          $err = "Usupported operator";
      }
    }
  } else {
    $err = "Input a valid value(s)";
  }
?>

<!-- Область основного контента -->
<form method="post" action="index.php?id=calc">
  <label><?= $res ?></label>
  <label><?= $err ?></label>
  <br />
  <label>Число 1:</label>
  <br />
  <input name='num1' type='text' />
  <br />
  <label>Оператор: </label>
  <br />
  <input name='operator' type='text' />
  <br />
  <label>Число 2: </label>
  <br />
  <input name='num2' type='text' />
  <br />
  <br />
  <input type='submit' value='Считать'>
</form>
<!-- Область основного контента -->