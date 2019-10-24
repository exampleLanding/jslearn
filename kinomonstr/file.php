<?php
    // 1 способ чтения файла
    //readfile('test.txt'); // прочитать содержимое файла text.txt

    // Способ перезаписи строки в файл в зависимости от расширения
    // $myText = "Записываю эту строку в файл";
    // $file = fopen("test.txt", "w");
    // fwrite($file, $myText);
    // fclose($file);

    // 3 способ
    // $handle = fopen('test.txt', 'r'); // r - режим работы с файлом

    // if ($handle) {
    //     while (($line = fgets($handle)) !== false) { // fgets читает стоку из файла
    //         echo $line;
    //     }

    //     fclose($handle);
    // }
    
    // создание файла
    // $file = fopen("test2.txt", "w");
    // fclose($file);

    // $file = file_get_contents('test2.txt'); // взять содержимое файла, также можно вывести содержание сайта. Можно ей пользоваться чтобы прочитать xml или json файлы
    // echo $file;

?>