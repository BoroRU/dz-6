<?php
$name=htmlspecialchars($_POST['name']);
$email=htmlspecialchars($_POST['email']);
$phoneNumber=htmlspecialchars($_POST['phoneNumber']);
$checkbox =is_array($_POST['checkBox']) ? $_POST['checkBox'] : array();
$checkbox=implode(', ',$checkbox);

// Mail
$sourse =getenv('HTTP_REFERER');
$subject='text letter'
$mesage ="text email:
<br><br>
Имя: $name<br>
email: $email<br>
Tel: $phoneNumber<br>
источник(ссылка):$sourse
";
$headers= "From:'$email\r\nReply-To: $email\r\nContent-type:text/html;charset=utf-8\r\n";
$success=mail('kobernyksergeu95@gmail.com',$subject,$message,$headers)


// Lids
$date=date("d.m.y") //число месяц год
$time=date("H:i") //time

$f =fopen("leads.xls","a+");
$fwrite($f,"<tr>");
$fwrite($f,"<td>$email<td> <td>$name<td> <td>$phoneNumber<td>");
$fwrite($f,"<td>$sourse<td>");
$fwrite($f,"<tr>");
$fwrite($f,"\n");
$fclose($f);