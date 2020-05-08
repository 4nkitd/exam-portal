<?php

try{
			$con = new PDO('mysql:host=localhost;dbname=doctor','root','');

		}catch(Exception $e){

				die("error :".$e->getMessage());
		}

$columns = array( 
// datatable column index  => database column name
    0 => 'id',
    1 => 'name',
    2 => 'email',
    3 => 'tolds',
);

$sql = "SELECT * FROM `text`;";
$resultas = $con->prepare($sql);
			$resultas->execute();
while( $row = $resultas->fetch() ) {
    $dataArray = array();

    $dataArray[] = $row["uid"];
    $dataArray[] = $row["1"];
    $dataArray[] = $row["2"];
    $dataArray[] = $row["3"];

}

echo json_encode($dataArray);

?>