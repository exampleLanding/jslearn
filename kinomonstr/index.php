<?php

    // define("DBNAME", "kinomonstr"); - определить константу

    // $name = "Andrey";

    // $num = 0;
    // $num2 = 10;

    // $num3 = $num2 + $num;

    // $trafficlights = "red";

    // // if($trafficlights == "green") {
    // //     echo "Светофор зеленый, я перехожу дорогу";
    // // } else if($trafficlights == "yellow") {
    // //     echo "Сейчас светофор желтый";
    // // }
    // // else {
    // //     echo "жду, когда загорится зеленый";

    // $i = 1;

    // while ($i <= 10) {
    //     echo $i."<br>";
    //     $i++;
    // }

    // for($i = 0; $i <=10; $i++) {
    //     echo $i."<br>";
    // }

    // // $arr["product"] = "products";
    // // $arr["water"] = "water";

    // // echo $arr[0]."<br>";

    // // print_r($arr);

    // // echo count($arr);

    // // for($i = 0; $i < count($arr); $i++) {
    // //     echo $arr[$i]."<br>";
    // // }

    // // foreach($arr as $key => $value) {
    // //     echo "Ключ к массиву: ".$key." - Значение массива: ".$value."<br>";
    // // }

    // // $arr2 = array("product"=>"products", "water"=>"water");

    // // foreach($arr2 as $key => $value) {
    // //     echo "Ключ к массиву: ".$key." - Значение массива: ".$value."<br>";
    // // }

    // $arr3 = ["products", "water"];

    // // // unset($arr3[0]); //удалить 0 элемент массива

    // // array_push($arr3, "apple"); // вставляет в конец массива новый элемент
    // // array_unshift($arr3, "orange"); // вставляет в начало массива новый элемент
    // // array_push($arr3, "orange");

    // // $arr3 = array_unique($arr3); // удаляет 1 эдемент если в массиве есть дубликаты

    // // // $arr3 = array_reverse($arr3); // переворачивает массив 

    // // //sort($arr3); // сортирует в алфавитном порядке

    // // shuffle($arr3); // рандомно меняет порядок при каждом обновлении, перемешивает в случаном порядке

    // $arr4 = array("coconut", "watermelon");

    // $newarr = array_merge($arr3, $arr4); // - соединяет нескольео массивов в 1

    // // foreach($newarr as $key => $value) {
    // //     echo "Ключ к массиву: ".$key." - Значение массива: ".$value."<br>";
    // // }

    // foreach($arr3 as $key => $value) {
    //     echo "Ключ к массиву: ".$key." - Значение массива: ".$value."<br>";
    // }

    // $str = implode(", ", $newarr); // преобразует массив в строку с разделителем ","
    // echo "<br>".$str."<br>";

    // $str2 = "products, water, watermelon, coconut";
    // $strtoarr = explode(", ", $str2); // преобразует строки в массив

    // echo "<pre>"; // если обернуть в данный тег то массив будет выглядеть красиво
    // print_r($strtoarr);
    // echo "</pre>";


    // // $camera["market1"]["row1"][0] = "prosucts";
    // // $camera["market1"]["row1"][1] = "bag"; 
    // // $camera["market2"]["row2"][0] = "orange";
    // // $camera["market2"]["row2"][1] = "camera";
    // // $camera["market2"]["row2"][2] = "phone"; // создаем многомерные массивы. В нашем случае у нас есть 2 магазина, в которых 2 несколько камер хранения, в которых лежат продукты и вещи

    // $camera = array(

    //     "market1"=>array(

    //         "row1"=>array(

    //             "products",
    //             "bag"

    //         ),

    //         "row2"=>array(

    //             "orange",
    //             "camera",
    //             "phine"

    //         )

    //     ),

    //     "market2"=>array(

    //         "row1"=>array(

    //             "products",
    //             "bag"

    //         ),

    //         "row2"=>array(

    //             "orange",
    //             "camera",
    //             "phone"

    //         )

    //     )
    // ); // 2 способ создания многомерного массива
    
    // echo "<pre>";
    // print_r($camera);
    // echo "</pre>";

    // foreach($camera as $key => $value) {
    //     foreach($value as $key2 => $value2) {
    //         foreach($value2 as $key3 => $value3) {
    //             echo $value3; // сколько уровней в многомерном массиве, столько и циклов
    //         }
    //     }
    // }

    // ПОЛУЧЕНИЕ ДАННЫХ С ФОРМЫ

    // print_r($_GET); - выведет массив со значением в форме которое было отправлено
    // print_r($_POST); 

    // При использовании метода GET пользователь видит в строке браузера какие параметры значения передаются, а при использовании метода POST пользователь не видит параметров в строке браузера

    //echo $_GET['name']; // выведет значение инпута с именем name

    // if (isset()) { // если заполнено поле то вывести
    //     echo "Моё имя - " . $_POST['name'];
    // }

    //print_r($_POST);

    // $user = "   ВаСЯ   ";
    // echo mb_strtolower(trim($user)); // trim - удаляетп пробелы с начала и конца строки. mb_strtolower переводит большие бувы в нижний регистр

    // if (isset($_POST['name'])) { 
    //     $nameFilter =  htmlspecialchars($_POST['name'], ENT_QUOTES, 'UTF-8'); // защита от xss атак. Пользователь не сможет произвести script в инпуте. Если он это сделает то скрипт не выаолнится в просто попадет на сервер в виде строки. 
    //     echo "Моё имя - " . $nameFilter;
    // }

    // функции

    // function sum($a, $b) {
    //     $result = false;

    //     if(!is_numeric($a)) { // проверяет число или нет переданное значение
    //         $result = "Ошибка. Значение 'a' не является числом";
    //     } else if (!is_numeric($b)) {
    //         $result = "Ошибка. Значение 'b' не является числом";
    //     } else {
    //         $result = $a + $b;
    //     }

    //     return $result;
    // }

    // function maxSum($sum) {
    //     $result = false;

    //     if($sum > 30) {
    //         $reslt = "Сумма больше 30";
    //     } else {
    //         $result = "Сумма меньше 30";
    //     }

    //     return $result;
    // }

    // echo maxSum(sum(20, 9));

    // SQL

    // $mysqli = new mysqli('localhost', 'root', '', 'kinomonstr');// Устанавливаем соединение с бд. 1 аргумент - сервер, 2 - имя потзователя бд, 3 - пароль от бд, 3 - название бд 

    // if (mysqli_connect_errno()) {
    //     printf("Соединение не установлено", mysqli_connect_error()); // показывает ошибку при подключении к бд
    //     exit();
    // } // если есть ошибка при подключании таблицы то выйти из таблицы

    // $mysqli->set_charset('utf8'); // устанавливаем кодировку, чтобы сообщения нормально отображались

    // $query = $mysqli->query('SELECT * FROM movie'); // получить все данные из таблицы movie
    // while ( $row = mysqli_fetch_assoc($query) ) { // запрос данных из бд возвращает массив. Получаем эти данные и выводим
    //     echo $row['name'].$row['year']."<br>"; // выводит имя и год фильма , которые были взяты из бд
    // }

    // $query = "INSERT INTO movie VALUES(null, 'Безумный Макс', 'Описания фильма Безумный Макс', '2015', Now())"; // указываем что хотим вставить в таблицу "movie". 1 параметр - id(null потому что автоматически подставляется), 2 - название фильма(name), 3 - описание(descriptions), 4 - год фильма(year), 5 - сегодняшняя дата(add_date)
    // $mysqli->query($query); // помещаем данный в бд

    // $query = "UPDATE movie SET year = 1990 WHERE id = 3"; // обновляем данный в таблице movie в ячейке 'год' у таблицы, id которой = 3
    // $mysqli->query($query); // помещаем обновленные данные в таблицу

    // $query = "DELETE FROM movie WHERE id = 3"; // удалить ячейку с id = 3 в бд movie
    // $mysqli->query($query); // отправить запрос в таблицу movie

    // SELECT * FROM 'categories' INNER JOIN movie - соединяет 2 таблицы
    // SELECT * FROM `categories` INNER JOIN movie USING(id) - ищет 2 значения id ячеек 2 таблиц и выводит их
    // SELECT * FROM `categories` INNER JOIN movie ON movie.category_id = categories.id - сопоставть id в таблице movie и в таблице categories
    // SELECT * FROM `categories`, `movie` WHERE categories.id = movie.category_id - результат такой же как и предыдущий

    // XML

    function insert($name, $desc, $year, $rating, $poster, $category_id) { // аргументы передаем в том же порядке в каком у нас стоят значения в бд
        $mysqli = new mysqli('localhost', 'root', '', 'kinomonstr');

        if (mysqli_connect_errno()) {
            print_f('Соединение не установлено');
            exit();
        }

        $mysqli->set_charset('utf8');

        $query = "INSERT INTO movie VALUES(null, '$name', '$desc', '$year', '$rating', '$poster', Now(), '$category_id')"; //null - потому что ID ВСТАВЛЯЕТСЯ АТОМАТИЧЕСКИ ПОТОМУ ЧТО МЫ ПОСТАВИЛИ ГАЛОЧКУ НА A_I. аргументы передаем в том же порядке в каком у нас стоят значения в бд

        //При вставке в базу данных вы можете использовать и такой формат записи, где можно указывать название полей для вставки (соблюдая последовательность):
        // $query = "INSERT INTO movie (`name`, `descriptions`, `year`, `rating`, `poster`, `add_date`, `category_id`) VALUES ('$name', '$desc', '$year', '$rating', '$poster', Now(), 1(2));

        $result = false;

        if($mysqli->query($query)) {
            $result = true;
        }

        return $result;
    }

    $xml = simplexml_load_file("xml_files/movies.xml") or die("Error: Cannot create object"); // взять файл xml в папке. данный метод возвратит многомерный массив
    
    // echo count($xml); // посчитать фильмы в файле xml

    $title = null;
    $title_origin = null;
    $post = null;
    $rating = null;
    $year = null;

    foreach ($xml as $movie_key => $movie) {
        // echo $movie->title_russian."<br>";

        $title = $movie->title_russian; // достаем все данные о фильмах из xml файла и присваимваем их переменным
        $title_origin = $movie->title_original;
        $year =  $movie->year;
        

        foreach($movie->poster->big->attributes() as $poster_key => $poster) {
            // echo $poster."<br>";
            $post  = $poster;
        }

        if ($movie->imdb) {
            // echo $movie->imdb->attributes()['rating']; // найти массив imdb и с помощью attributes()['rating'] получить рейтинг фильмов
        
            $rating = $movie->imdb->attributes()['rating'];
        } else {
            $rating = null;
        }

        insert($title, $title_origin, $year, $rating, $post, 1); // вставляем в функцию которая отправляет полученные файлы из xml в бд на сервер
    } 
    echo "<pre>";
    print_r($xml);
    echo "</pre>"; // вывести сам массив с данными о фильмах


    $xml1 = simplexml_load_file("xml_files/serials.xml") or die("Error: Cannot create object"); // взять файл xml в папке. данный метод возвратит многомерный массив

    $title1 = null;
    $title_origin1 = null;
    $post1 = null;
    $rating1 = null;
    $year1 = null;

    foreach ($xml1 as $serial_key => $serial) {
        
        $title1 = $serial->title_russian; // достаем все данные о фильмах из xml файла и присваимваем их переменным
        $title_origin1 = $serial->title_original;
        $year1 =  $serial->year;

        foreach($serial->poster->big->attributes() as $poster_key => $poster) {
            $post1  = $poster;
        }

        if ($serial->imdb) {
    
            $rating1 = $serial->imdb->attributes()['rating'];

        } else {
            $rating1 = null;
        }

        insert($title1, $title_origin1, $year1, $rating1, $post1, 2); // вставляем в функцию которая отправляет полученные файлы из xml в бд на сервер
    } 
    echo "<pre>";
    print_r($xml1);
    echo "</pre>"; // вывести сам массив с данными о фильмах

?>

<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    
    <!-- <form action="" method="POST">  метод GET может передать максимум 1024 символа. Также при отправке данные виводятся в адресную строку. А метод пост делает это скрытно -->
    
        <!-- <input type="text" name="name" placeholder="Ваше имя">
        <textarea name="comment"></textarea>
        <input type="hidden" name="id_user" value="1313">    
        <input type="submit" value="Отправить"> -->

    <!-- </form> -->


</body>
</html>

