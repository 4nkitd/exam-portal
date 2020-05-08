<?php
@ob_start();
session_start();
if (isset($_POST['chk'])) {
	if(empty($_SESSION['time_start'])){
		$_SESSION['time_start'] = time() + (60*60);
	}
	$start = $_SESSION['time_start'];
	$now = time();
	$tmp = $start - $now;
	$hr = floor($tmp / (60 * 60));
	$min = floor(($tmp-$hr*60*60) / 60);
	$sec = floor(($tmp-$min*60) % 60);
	if ($hr <= 0 AND $min <= 0 AND $sec <= 0) {
		echo '<script> document.getElementById("Test_Submit").submit();</script>';
	} else {
		echo $hr . "hr : " . $min . "m : " . $sec . "s";
	}

} else {
	echo "error1";
}
?>
