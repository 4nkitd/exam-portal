<?php if(!empty($_GET['code'])){ include("in/fun.php");?>
<!doctype html>
<html>
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title>Untitled Document</title>
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
	</head>
	<body>
		<div class="in-head text-center">
			<h1>Institute Name </h1>
	<?php 
		$test=urldecode(base64_decode($_GET['code']));
		include("in/db.php");
		$sql1="SELECT * FROM `exams` WHERE tcode='$test' LIMIT 1;";
		$res=$con->prepare($sql1);
		$res->execute();
		while($r=$res->fetch()){
			
			echo'<h3>Exam :- '.$r['tname'].' </h3>
				<h4><strong>Duration :- '.$r['ttime'].'M</strong></h4>';
		} 
	?>		
		</div>
		<hr>
		<div class="container px-4">
<?php

	//include("in/db.php");
	$i = 1;
	$code=urldecode(base64_decode($_GET['code']));
	$sid=$_GET['sudo'];
	$tid=$_GET['do'];
    
    $sec="SELECT * FROM `section` WHERE `tcode`='$code' AND tid='$tid';";
	$rus=$con->prepare($sec);
	$rus->execute();
	while($ru=$rus->fetch()){
		echo '<hr><h2 class="text-center">'.$ru['name'].'</h2><hr>';
	$secid=$ru['secid'];
    $sql = "SELECT * FROM `questions` WHERE `tid`='$tid' AND `secid`='$secid';";
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

    			$sql2 = "SELECT * FROM `gnas` WHERE `tcode`='$code' AND tid='$tid' AND stu='$sid';";
    			$foster2=$con->prepare($sql2);
    			$foster2->execute();
   			    $j=0;
   			    if($gans=$foster2->fetch(PDO::FETCH_ASSOC)){
   			 	echo '<div class="col-md-6 my-2"> Your Attempted Answer > . '.$gans['gnas'].'</div>';
    			} else { echo '<div class="col-md-6 my-2"> !! NO MATCH FOUND !! </div>'; }

    			$sql3 = "SELECT * FROM `answers` WHERE `qid`='$qid' AND tid='$tid';";
    			$foster3=$con->prepare($sql3);
    			$foster3->execute();
   			    if($gans=$foster3->fetch(PDO::FETCH_ASSOC)){
   			 	echo '<div class="col-md-6 my-2"> Correct Answer > . '.$gans['ans'].'</div>';
    			} else { echo '<div class="col-md-6 my-2"> !! NO MATCH FOUND !! </div>'; }


	        echo '</div>';

	    }

	$i++;

	}
}
	// 
// }

	?>

		</div>
	</body>
</html>

<?php } else { header('Location: index.php?err'); } ?>