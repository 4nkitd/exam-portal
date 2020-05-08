<?php include('in/login_r.php'); ?><!DOCTYPE html><html lang="en">

<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no">
	<title>Login</title>
	<!-- plugins:css -->
	<link rel="stylesheet" href="vendors/iconfonts/mdi/css/materialdesignicons.css">
	<link rel="stylesheet" href="vendors/css/vendor.addons.css"><!-- inject:css -->
	<link rel="stylesheet" href="css/style.css"><!-- endinject -->
	<link rel="shortcut icon" href="images/favicon.ico">
</head>
<body>
	<div class="authentication-theme auth-style_2">
		<div class="row inner-wrapper">
			<div class="col-md-7 banner-section">
				<div class="auth_footer">
					<p class="text-muted text-center">© Aerro <?php echo date('Y'); ?></p>
				</div>
			</div>
			<div class="col-md-5 form-section">
				<div class="logo-section">
					<a href="?" class="logo">
						<img src="images/logo.png" alt="logo">
					</a>
				</div>
				<form action="" method="post" >
					<div class="form-group input-rounded">
						<input type="text" name="username" class="form-control" placeholder="Username">
					</div>
					<div class="form-group input-rounded">
						<input type="password" name="password" class="form-control" placeholder="Password">
					</div>
					<div class="form-inline">
						<div class="checkbox">
							<label>
								<input type="checkbox" name="" class="form-check-input">Remember me <i class="input-frame"></i>
							</label>
						</div>
					</div>
					<button type="submit" name="login" class="btn btn-primary btn-block">Login</button>
				</form>
			</div>
		</div>
	</div>
	<!-- plugins:js -->
	<script src="vendors/js/core.js"></script>
	<script src="vendors/js/vendor.addons.js"></script><!-- endinject -->
	<script src="js/script.js"></script>
</body>
</html>