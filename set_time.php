<?php
@ob_start();
session_start();
if (isset($_POST['chk'])) {
	if(!empty($_SESSION['total_sec']))
	{
		$start=$_SESSION['time_start'];
		$now = time();
		$tmp = $start - $now;
		$hr = floor($tmp / (60 * 60));
		$min = floor(($tmp-$hr*60*60) / 60);
		$sec = floor(($tmp-$min*60) % 60);
		if($hr <= 0 AND $min <= 0 AND $sec <= 0)
		{
			if($_SESSION['total_sec']==$_SESSION['current'])
			{
				echo '<script> document.getElementById("Test_Submit").submit();</script>';
			}
			else
			{
				$_SESSION['current']++;
				$tmp="sec".$_SESSION['current'];
				$_SESSION['time_start']=time() + ($_SESSION[$tmp]*60);
				echo '<script> change_section('.$_SESSION['total_sec'].','.$_SESSION['current'].');</script>';
			}
		}
		else echo $hr . "hr : " . $min . "m : " . $sec . "s";
	}
	else
	{
		echo print_r($_SESSION);
	}
} else {
	echo "error1";
}
?>
