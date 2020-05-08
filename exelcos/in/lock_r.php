<?php
//scrunit
@ob_start();
session_start();

if (isset($_GET['out'])) {
          $_SESSION['loged']="";
          unset($_SESSION['loged']);
          session_unset();
          session_destroy();
          setcookie('user', null, -1, "/");
          header('Location: login.php');
              die();
        }

if(isset($_SESSION['loged'])){
	if($_SESSION['loged']=='true'){
		if(!(isset($_SESSION['locked']) or $_SESSION['locked']=='true')){
		  header('Location: index.php'); die();
		}
	}
} else { header('Location: login.php'); die(); }


require 'db.php';


if(isset($_POST['unlock'])) {

	if (isset($_COOKIE['user'])) {

		if ($_COOKIE['user']!="") {
	
			$user = $_COOKIE['user'];
			$pass = $_POST['password'];

			if(empty($user) || empty($pass)) {
				$message = 'All field are required';
				} else {
					$query = $con->prepare("SELECT * FROM users WHERE u_email=? AND u_pass=? ");
					$query->execute(array($user,$pass));
					$row = $query->fetch(PDO::FETCH_BOTH);

				if($query->rowCount() > 0) {
					$_SESSION['locked'] = "";
					unset($_SESSION['locked']);
				  echo '<script>alert("Success");</script>';

				  header('location: index.php');
				  die();
				} else {
				  echo '<script>alert("Error");</script>';
				}


				}
		}
	}
}


?>