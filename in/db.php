<?php
		try{
			$con = new PDO('mysql:host=localhost;dbname=exam','root','');

		}catch(Exception $e){

				die("error :".$e->getMessage());
		}

?>
