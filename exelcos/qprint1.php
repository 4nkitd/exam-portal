<?php if(!empty($_GET['code'])){ include("in/fun.php");?>
<!doctype html>
<html>
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title>Untitled Document</title>
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
	    <script type="text/javascript" async src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/MathJax.js?config=default"></script>
	    <style>
	        .MathJax_Display{
                text-align:left !important;
                font-size:16px !important;
                margin:0px !important;
            }
	    </style>
	</head>
	<body>
		<div class="in-head text-center">
			<h1>Topper's Adda</h1>
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

	$i = 1;
	$code=urldecode(base64_decode($_GET['code']));
	$tid=(int)$_GET['do'];
	$sec="SELECT * FROM `section` WHERE `tcode`='$code' AND tid='$tid';";
	$rus=$con->prepare($sec);
	$rus->execute();
	while($ru=$rus->fetch())
	{
		echo '<div class="row my-2"><div class="col-md-12"><hr><h4 class="text-center">'.$ru['name'].'</h4><hr></div>';
		$secid=$ru['secid'];
        $sql = "SELECT * FROM `questions` WHERE `tid`='$tid' AND `secid`='$secid';";
        $foster=$con->prepare($sql);
        $foster->execute();
        if($foster->rowCount()>0)
        	while($row_pro=$foster->fetch(PDO::FETCH_ASSOC))
        	{
        
            	$quest = $row_pro['text'];
            	$qcode = $row_pro['qcode'];
            	$qid = $row_pro['uid'];
            	$type = $row_pro['type'];
            	$qimg=$row_pro['qimg'];
            	if($qimg!='no-image')
            	{
        	
        			echo '
        				<div class="que col-md-12 pt-3">
        					<p> <b>'.$i.'. <span>'.base64_decode(urldecode($quest)).'</span><img src="../img/'.$qimg.'"> </b></p>
        				</div>';
        
        	          	$sql1 = "SELECT * FROM `p_answers` WHERE `qid`='$qid';";
            			$foster1=$con->prepare($sql1);
            			$foster1->execute();
           			    $j=0;
           			    while($ans=$foster1->fetch(PDO::FETCH_ASSOC)){
           			 	    if($ans['pimg']!="no-image") $tmp='<img src="../img/'.$ans['pimg'].'"/>';
                            else $tmp='';
           			 		$j++;
           			 		echo '<div class="col-md-6">'.$j.'). '.base64_decode(urldecode($ans['pans'])).$tmp.'</div>';
            			}
            			//echo '</div>';
            	    $i++;
        
        	    } 
        	    else
        	    {
        
        			echo '<div class="que col-md-12">
        					<p><b> '.$i.'. '.base64_decode(urldecode($quest)).'</b></p>
        				</div><br>';
        
        	          	$sql1 = "SELECT * FROM `p_answers` WHERE `qid`='$qid';";
            			$foster1=$con->prepare($sql1);
            			$foster1->execute();
          			    $j=0;
          			    while($ans=$foster1->fetch(PDO::FETCH_ASSOC))
          			    {
                            if($ans['pimg']!="no-image") $tmp='<img src="../img/'.$ans['pimg'].'"/>';
                            else $tmp='';
              			 	$j++;
              			 	echo '<div class="col-md-6 my-1">'.$j.'). '.base64_decode(urldecode($ans['pans'])).$tmp.'</div>';
        
        	            }
        
        	    $i++;
        
        	    }
    	}
    	else 
    	{echo "No question Found- Section Id= ".$secid."== Question id-".$tid;}
    	echo '</div>';
    	
    }
	?>

		</div>
	</body>
</html>

<?php } else { header('Location: index.php?err'); } ?>