<?php 

 try {

 	$user = "root";
        $pass = "";
    	$con = new PDO('mysql:host=localhost;dbname=exam','root','');
          $con->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        	$con->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);
        } catch(PDOException $e)  {

          echo "Connection failed: " . $e->getMessage();
          
    }

?>