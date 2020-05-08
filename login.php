<?php include("in/fun.php");  headerlink(); stulogin(); ?>

	<body class="bg-color-781515">
		<div class="container-fluid">
			<div class="row">
				<div class="col-md-12">
					<div class="card border-0 welcome-text-headway">
						<div class="card-body">
							<div class="caption text-center test-portal-text">
								<h3>Welcome to<span class="headway-engg"><?php echo webname();?></span>Exam Portal</h3>
								<a href="demo"><span class="btn btn-sm login-btn-sun">Demo Test</span></a>
							</div>
							
							
						</div>
					</div>
				</div>
			</div>
			<div class="row justify-content-center">
				<div class="col-md-4">
					
					<div class="login-form-text" data-aos="fade-up" data-aos-duration="1500">
						<form class="" method="post" >
							<div class="text-center caption test-register-online">
								<h3>Login For Online Test</h3>
							</div>
							<div class="form-row">
								<div class="col form-group">
									<label>Email Id <span style="color:#F31717">**</span></label>
									<input class="form-control" type="text" name="sid" placeholder="Student Id">
								</div>
							</div>
							<div class="form-row">
								<div class="col form-group">
									<label>Password <span style="color:#F31717">**</span></label>
									<input class="form-control" type="password" name="spass" placeholder="Password">
								</div>
							</div>
							<div class="form-row">
								<div class="col form-group">
									<button type="submit" name="stulog" class="btn login-btn-sun">Login</button>
								</div>
								<!--<div class="col form-group ml-auto">-->
								<!--	<a class="float-right text-signmm" href="demo">Demo Test</a>-->
								<!--</div>-->
							</div>
						</form>
					</div>
					
				</div>
			</div>
			
			
			
		</div>
	</body>
</html>