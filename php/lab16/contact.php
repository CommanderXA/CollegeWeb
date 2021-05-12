
<!-- Область основного контента -->
<?php
  $size = ini_get('post_max_size');
  echo $size;
  switch(substr($size, -1)) {
    // The 'G' modifier is available
    case 'K':
        $size *= 1024;
    case 'M':
        $size *= pow(1024, 2);
    case 'G':
        $size *= pow(1024, 3);
}
?>
<h3>Адрес</h3>
<p>123456 Москва, Малый Американский переулок 21</p>
<h3>Задайте вопрос</h3>
<form action='' method='post'>
  <label>Тема письма: </label>
  <br />
  <input name='subject' type='text' size="50" />
  <br />
  <label>Содержание: </label>
  <br />
  <textarea name='body' cols="50" rows="10"></textarea>
  <br />
  <br />
  <input type='submit' value='Отправить' />
</form>
<!-- Область основного контента -->
