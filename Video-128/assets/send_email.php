<?php
if(isset($_POST)){
  error_reporting(0);
  $name = $_POST["nombre"];
  $email = $_POST["email"];
  $subject = $_POST["asunto"];
  $comments = $_POST["comentario"];

  $domain = $_SERVER["HTTP_HOST"];
  $to = "bergesio90@gmail.com";
  $subject = "Contacto desde el formulario del sitio $domain: $subject";
  $message = "
  <p>
    Datos enviados desde el formulario del sitio <b> $domain </b>
  </p>
  <ul>
    <li>Nombre: <b> $name </b> </li>
    <li>Email: <b> $email </b> </li>
    <li>Asunto:  $subject  </li>
    <li>Comentarios:  $comments  </li>
  </ul>
  ";
  $headers ="MIME-Version: 1.0\r\n"."Content-Type: text/html; charset=utf-8\r\n"."From: Envío Automático No Responder <no-replay@$domain.com>";

  $send_mail = mail($to,$subject,$message,$headers);

  if($send_mail){
    $res = [
      "err" => false,
      "message" => "Tus datos han sido enviados",
    ];

  }else{
    $res = [
      "err" => true,
      "message" => "Error al enviar tus datos. Intenta nuevamente",
    ];
  }
  header("Content-Type: application/json");
  echo json_encode($res);
  exit;

}