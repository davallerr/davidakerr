<?php

	if(isset($POST['submit'])) {

		require __DIR__ . "vendor/autoload.php";

		$mail = new PHPMailer;

		$message=
		'Name:		'.$_POST['name'].'<br />
		Email:		'.$_POST['email'].'<br />
		Message:	'.$_POST['body'].'';

		// Enable SMTP debugging, set as SMTP, set host/user/password, encryption, and port
		$mail->isSMTP();
		$mail->SMTPAuth = true;
		$mail->SMTPDebug = 2;
		$mail->Host = "smtp.gmail.com";
		$mail->Username = "davallerr@gmail.com";
		$mail->Password = "SaintVincent123";
		$mail->SMTPSecure = "ssl";
		$mail->Port = 465;

		// Create message
		$mail->isHTML();
		$mail->Subject = "Website Form";
		$mail->MsgHTML($message);
		$mail->WordWrap = 50;
		$mail->FromName = 'Contact';

		$mail->AddAddress('davallerr@gmail.com', 'David Kerr');

		$mail->Send();

	}

?>
