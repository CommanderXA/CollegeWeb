<h2>Навигация по сайту</h2>
<!-- Меню -->
<?php
    // Инициализация массива
    $leftMenu = [
    ['link'=>'Домой', 'href'=>'index.php'],
    ['link'=>'О нас', 'href'=>'about.php'],
    ['link'=>'Контакты', 'href'=>'contact.php'],
    ['link'=>'Таблица умножения', 'href'=>'table.php'],
    ['link'=>'Калькулятор', 'href'=>'calc.php']
    ];
    drawMenu($leftMenu, false);
?>
<!-- Меню -->