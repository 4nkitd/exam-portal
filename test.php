<?php include("in/fun.php"); ?>
<!doctype html>
<html>
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title><?php echo webname(); ?> - Exam</title>
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
	</head>
	<body>
		<div class="in-head text-center">
			<h1><?php echo webname(); ?></h1>
			<h3>Exam :- GK </h3>
			<h4><strong>Duration :- 90 min</strong></h4>
		</div>
		<hr>
		<div class="container px-4">
<?php

	include("in/db.php");
	$i = 1;
    $sql = "SELECT * FROM `questions` WHERE `tcode`='test20325509740934012';";
    $foster=$con->prepare($sql);
    $foster->execute();

	while($row_pro=$foster->fetch(PDO::FETCH_ASSOC)) {

	$quest = $row_pro['text'];
	$qcode = $row_pro['qcode'];
	$qid = $row_pro['uid'];
	$type = $row_pro['type'];

	if($type==1){
	
			echo '<div class="row my-3">
				<div class="que">
					<p> <b>'.$i.'. <img src="img/ques/'.$quest.'"> </b></p>
				</div>';

	          	$sql1 = "SELECT * FROM `p_answers` WHERE `qid`='$qid';";
    			$foster1=$con->prepare($sql1);
    			$foster1->execute();
   			    $j=0;
   			    while($ans=$foster1->fetch(PDO::FETCH_ASSOC)){
   			 	
   			 		$j++;
   			 		echo '<div class="col-md-6">'.$j.'). <img src="img/ques/'.$ans['pans'].'"> </div>';
    			}
    			echo '</div>';
    			echo '<div class="row"> 
    					<div class="col-md-6">Given Answer : </div>';
    			echo '<div class="col-md-6">Correct Answer : </div>
    					</div>';

	} else {

			echo '<div class="row my-3">
				<div class="que col-md-12">
					<p><b> '.$i.'. '.substr(base64_decode(urldecode($quest)),3,-4).'</b></p>
				</div><br>';

	          	$sql1 = "SELECT * FROM `p_answers` WHERE `qid`='$qid';";
    			$foster1=$con->prepare($sql1);
    			$foster1->execute();
   			    $j=0;
   			    while($ans=$foster1->fetch(PDO::FETCH_ASSOC)){
   			 	$j++;
   			 	echo '<div class="col-md-6 my-2">'.$j.'). '.substr(base64_decode(urldecode($ans['pans'])),3,-4).'</div>';
    			}

	        echo '</div>';

	    }

	$i++;

	}
	// 
// }

	?>

		</div>
	</body>
</html>

