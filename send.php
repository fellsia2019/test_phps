<?php
$to = 'mushket2018ru@gmail.com';
$name = $_POST['name'];
$tel = $_POST['tel'];
$item = $_POST['item'];
$discr = $_POST['discr'];


$name = htmlspecialchars($name);
$tel = htmlspecialchars($tel);
$item = htmlspecialchars($item);
$discr = htmlspecialchars($discr);


$name = urldecode($name);
$tel = urldecode($tel);
$item = urldecode($item);
$discr = urldecode($discr);

$name = trim($name);
$tel = trim($tel);
$item = trim($item);
$discr = trim($discr);

echo $name;
echo "<br>";
echo $tel;
echo "<br>";
echo $item;
echo "<br>";
echo $discr;
echo "<br>";


 if (mail("example@mail.ru", "Заявка с сайта", "ФИО:".$fio.". E-mail: ".$email ,"From: example2@mail.ru \r\n"))
 {     echo "сообщение успешно отправлено";
} else {
    echo "при отправке сообщения возникли ошибки";
}


mail($to, $name, $tel, $item, $item);
?>



