<?php

function sendMail() {
    $to = 'informes2@grupomilenium.pe';
    $subject = 'Contacto - Inmunologia';
    $message = 'Contacto - Inmunologia' . "\r\n" .
            "\r\n" .
            'nombres: ' . $_POST['nombres'] . "\r\n" .
            'correo: ' . $_POST['correo'] . "\r\n" .
            'telefono: ' . $_POST['telefono'] . "\r\n" .  
            "\r\n" .
            'Mensaje: ' . $_POST['mensaje'] . "\r\n";

    $headers = 'From: noreply@congresospi-uaai.com' . "\r\n" .
            'Reply-To: noreply@congresospi-uaai.com' . "\r\n" .
            'X-Mailer: PHP/' . phpversion();

    $r = mail($to, $subject, $message, $headers);
}
function sendMail2() {
    $to2 = 'brayansystemlp@gmail.com';
    $subject2 = 'Contacto - Inmunologia';
    $message2 = 'Contacto - Inmunologia' . "\r\n" .
            "\r\n" .
            'nombres: ' . $_POST['nombres'] . "\r\n" .
            'correo: ' . $_POST['correo'] . "\r\n" .
            'telefono: ' . $_POST['telefono'] . "\r\n" .  
            "\r\n" .
            'Mensaje: ' . $_POST['mensaje'] . "\r\n";

    $headers2 = 'From: noreply@congresospi-uaai.com' . "\r\n" .
            'Reply-To: noreply@congresospi-uaai.com' . "\r\n" .
            'X-Mailer: PHP/' . phpversion();

    $r2 = mail($to2, $subject2, $message2, $headers2);
}


function sendMailToClient() {
    $to = '';
    $subject = 'Gracias por Contactarnos';
    
    $message = file_get_contents(dirname(__FILE__) .'/email-template.php');
    $message = str_replace('[Name]', $_POST['Name'], $message);

    $headers = 'MIME-Version: 1.0' . "\r\n";
    $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

// Additional headers
    $headers .= 'To: '.$_POST['nombre'].' <'.$_POST['correo'].'>' . "\r\n";
    $headers .= 'From: info<noreply@congresospi-uaai.com.com>' . "\r\n";

// Mail it
    mail($to, $subject, $message, $headers);
}

sendMail(); 
sendMail2();

header("Location: http://www.congresospi-uaai.com/");