<?php

@ob_start();
session_start();

if(isset($_SESSION['loged'])){
	if($_SESSION['loged']=='true'){
		if(!(isset($_SESSION['locked']) or $_SESSION['locked']=='true')){
		  header('Location: index.php'); die();
		} elseif((isset($_SESSION['locked']) or $_SESSION['locked']=='true')){
		  header('Location: lock.php');  die();
		}
	}
}


require 'db.php';


if(isset($_POST['login'])) {

$user = $_POST['username'];
$pass = $_POST['password'];

if(empty($user) || empty($pass)) {
	$message = 'All field are required';
	} else {
		$query = $con->prepare("SELECT * FROM users WHERE 
		u_email=? AND u_pass=? ");
		$query->execute(array($user,$pass));
		$row = $query->fetch(PDO::FETCH_BOTH);

	if($query->rowCount() > 0) {
	  $_SESSION['loged'] = 'true';
	  $_SESSION['admin'] = 'true';
	  $_SESSION['uid'] = $user;
	  $_SESSION['name'] = $row['u_name'];
	  $_SESSION['user'] = $row['uid'];
	  $cookie_name = "user";
	  $cookie_value = $user;
	  setcookie($cookie_name, $cookie_value, time() + (86400 * 30), "/");
	  header('location:index.php');
	} else {
	  echo '<script>alert("Wrong ID or Password");</script>';
	}


	}

}

?>