<?php
// Подключение к базе данных (замените значения на свои)
// $servername = "127.0.0.1";
$servername = "127.0.0.1";
 $username = "user";
 $password = "user123345213";
$dbname = "orders";

// Получение данных из POST-запроса
$fio = $_POST['fio'];
$phone = $_POST['phone'];
$purchase = $_POST['purchase'];
$ordersum = $_POST['ordersum'];
$social = $_POST['social'];
$shipType = $_POST['shipType'];
$address = $_POST['address'];

// Создание подключения к базе данных
$conn = new mysqli($servername, $username, $password, $dbname)  or die("Connect failed: %s\n". $conn -> error);
// Проверка соединения
if ($conn->connect_error) {
    die("Ошибка подключения к базе данных: " . $conn->connect_error);
}

// Подготовка SQL-запроса на добавление данных в таблицу
$sql = "INSERT INTO orders (fio, phone, purchase, sum, social, shipType, addres, date, time)
        VALUES ('$fio', '$phone', '$purchase', '$ordersum', '$social', '$shipType', '$address', CURRENT_DATE(), CURRENT_TIME())";

if ($conn->query($sql) === TRUE) {
    echo "Данные успешно добавлены в базу данных";
} else {
    echo "Ошибка при добавлении данных: " . $conn->error;
}

// Закрытие соединения с базой данных
$conn->close();
?>
