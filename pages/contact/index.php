 <!doctype html>

<html>
	<head>

		<title>David A Kerr</title>

    <link href='https://fonts.googleapis.com/css?family=Playfair+Display:400,400italic,700,700italic' rel='stylesheet' type='text/css'>

		<link href='../../styles/style.min.css' rel='stylesheet' />

	</head>
	<body>

		<div class="header">
			<div class="container">

				<h1><a href="../../">David A Kerr</a></h1>

			</div>
		</div>


		<div class="nav">
			<div class="container">

				<ul>
					<a href="../../"><li>back</li></a>
				</ul>

			</div>
		</div>


		<div class="form">
			<div class="container">

				<?php include 'mail.php'; ?>

				<form class="contact-form" action="mail.php" method="post">
					<input name="name" type="text" placeholder="name" id="name">
					<input name="email" type="email" placeholder="email" id="email">
					<br>
					<textarea name="body" type="text" placeholder="How's it going?" id="body"></textarea>
					<input name="submit" type="submit" value="say hi">
				</form>

			</div>
		</div>


		<div class="footer">
			<div class="container">

				<p>design work and general niceties.</p>

			</div>
		</div>

	</body>
</html>
