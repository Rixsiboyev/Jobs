<?php
//https://api.telegram.org/bot2080463964:AAETPWZyh6bV8poAIXd1GE4iAnSRtohIiVQ/getUpdates
$name = $_POST['name'];
$phone = $_POST['phone'];
$birthday = $_POST['birthday'];
$profasion = $_POST['profasion'];
$age = $_POST['age'];
$email = $_POST['email'];
$token = '2080463964:AAETPWZyh6bV8poAIXd1GE4iAnSRtohIiVQ';
$chat_id = '-696411026';
$arr = array(
    'Foydalanuvchining Ismi :' => $name,
    'Telefon Nomeri :' => $phone,
    'Tugilgan kuni :' => $birthday,
    'Sohasi: ' => $profasion,
    'Yoshi: ' => $age,
    'Emaili: ' => $email,
);
foreach ($arr as $key => $value) :
    $text .= $key . $value . "%0A";
endforeach;
$telegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_emode=html&text={$text}","r");
if($telegram){
    header('Location: telegram.html');
}
else {
    echo "ERROR";
}
?>


