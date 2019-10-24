<?php

    $mysqli = new mysqli('localhost', 'root', '', 'kinomonstr');

    if (mysqli_connect_errno()) {
        printf("Соединение не установлено", mysqli_connect_error()); // показывает ошибку при подключении к бд
        exit();
    }

    $mysqli->set_charset('utf8');

    $author =  htmlspecialchars($_POST['author'], ENT_QUOTES, 'UTF-8');
    $track = htmlspecialchars($_POST['track'], ENT_QUOTES, 'UTF-8');


    if (isset($_POST['author'])) { 
        $query = "INSERT INTO music VALUES(null, '$author')";
        $mysqli->query($query);
    } else if (isset($_POST['track'])) {
        $query = "INSERT INTO music VALUES(null, '', '$track')";
        $mysqli->query($query);
    }


    $query2 = $mysqli->query('SELECT * FROM music'); 
     while ( $row = mysqli_fetch_assoc($query2) ) { 
         echo $row['author']." ".$row['name']."<br>"; 
     }

    $mysqli->close();



?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    
    <form action="" method="POST">
    
    <input type="text" name="author" placeholder="Введите имя автора"><br>
    <input type="text" name="track" placeholder="Введите трек автора"><br>
    <input type="submit" value="Отправить">

    </form>

</body>
</html>