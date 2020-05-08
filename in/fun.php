<?php

error_reporting(1);
session_start();
date_default_timezone_set("Asia/Calcutta");
if(isset($_GET['out'])){ session_destroy(); header('Location: login.php');	 }

function viewlogo(){
	include'db.php';
	$sql="SELECT * FROM `users` WHERE uid='1';";
	$res=$con->prepare($sql);
	$res->execute();
	$row=$res->fetch();

	return $row['u_logo'];
}//End of function

function webname(){
	include'db.php';
	$sql="SELECT * FROM `users` WHERE uid='1';";
	$res=$con->prepare($sql);
	$res->execute();
	$row=$res->fetch();

	return $row['webname'];
}//End of function
function simg(){
	include'db.php';
	$sid=$_SESSION['uid'];
	$sql="SELECT * FROM `students`  WHERE `uid`='$sid' LIMIT 1;";
	$result=$con->prepare($sql);
	$result->execute();
	$row=$result->fetch();

		return $row['simg'];
}//End of function
function sname(){
	include'db.php';
	$sid=$_SESSION['uid'];
	$sql="SELECT * FROM `students`  WHERE `uid`='$sid' LIMIT 1;";
	$result=$con->prepare($sql);
	$result->execute();
	$row=$result->fetch();

		return $row['sname'];
}//End of function

function smobile(){
	include'db.php';
	$sid=$_SESSION['uid'];
	$sql="SELECT * FROM `students`  WHERE `uid`='$sid' LIMIT 1;";
	$result=$con->prepare($sql);
	$result->execute();
	$row=$result->fetch();

		return $row['sphone'];
}//End of function

function semail(){
	include'db.php';
	$sid=$_SESSION['uid'];
	$sql="SELECT * FROM `students`  WHERE `uid`='$sid' LIMIT 1;";
	$result=$con->prepare($sql);
	$result->execute();
	$row=$result->fetch();

		return $row['semail'];
}//End of function

function sgen(){
	include'db.php';
	$sid=$_SESSION['uid'];
	$sql="SELECT * FROM `students`  WHERE `uid`='$sid' LIMIT 1;";
	$result=$con->prepare($sql);
	$result->execute();
	$row=$result->fetch();

		return '<option value="'.$row['sgen'].'" selected="selected">'.$row['sgen'].'</option>' ;
}//End of function
function sadd(){
	include'db.php';
	$sid=$_SESSION['uid'];
	$sql="SELECT * FROM `students`  WHERE `uid`='$sid' LIMIT 1;";
	$result=$con->prepare($sql);
	$result->execute();
	$row=$result->fetch();

		return $row['sadd'];
}//End of function

function sstate(){
	include'db.php';
	$sid=$_SESSION['uid'];
	$sql="SELECT * FROM `students`  WHERE `uid`='$sid' LIMIT 1;";
	$result=$con->prepare($sql);
	$result->execute();
	$row=$result->fetch();

		return '<option value="'.$row['sstate'].'">'.$row['sstate'].'</option>';
}//End of function

function scity(){
	include'db.php';
	$sid=$_SESSION['uid'];
	$sql="SELECT * FROM `students`  WHERE `uid`='$sid' LIMIT 1;";
	$result=$con->prepare($sql);
	$result->execute();
	$row=$result->fetch();

		return $row['scity'];
}//End of function


function spin(){
	include'db.php';
	$sid=$_SESSION['uid'];
	$sql="SELECT * FROM `students`  WHERE `uid`='$sid' LIMIT 1;";
	$result=$con->prepare($sql);
	$result->execute();
	$row=$result->fetch();

		return $row['spin'];
}//End of function
function updateProfile(){
	include'db.php';
	if(isset($_POST['UpdatePro'])){
            if (!file_exists('img/profile')) {
                  mkdir('img/profile', 0777, true);
                }

	               $simg_tmp=$_FILES['simg']['tmp_name'];
	               $simg = random("img_","15").".png";
	               $target = "img/profile/" . $simg;
	               move_uploaded_file($simg_tmp,$target);

               $sname=$_POST['sName'];
               $sphone=$_POST['sPhone'];
               $semail=$_POST['sEmail'];
               $sgen=$_POST['sGen'];
               $sadd=$_POST['sAdd'];
               $sstate=$_POST['sState'];
               $scity=$_POST['sCity'];
               $spin=$_POST['sPinC'];

                $sid=$_SESSION['uid'];
              	
                $sql="UPDATE students SET sname='$sname', sphone='$sphone', semail='$semail', simg='$target', sgen='$sgen', sadd='$sadd', sstate='$sstate', scity='$scity', spin='$spin' 
						WHERE uid='$sid';";
                $result=$con->prepare($sql);
                if($result->execute()){
                	echo'<script>alert("Update Successfully");</script>';
                }
                else echo'<script>alert("Profile update failed!");</script>';
          }

}//End of function
function random($alpha_key,$size) {
  $keys = range('a', 'z');

  for ($i = 0; $i < 2; $i++) {
    $alpha_key .= $keys[array_rand($keys)];
  }

  $length = $size - 2;

  $key = '';
  $keys = range(0, 9);

  for ($i = 0; $i < $length; $i++) {
    $key .= $keys[array_rand($keys)];
  }

  return $alpha_key . $key;
}
//end of functions
function lstmsgs(){
		include 'db.php';
 		$sid = $_SESSION['uid'];
		$puest = $con->prepare("SELECT * FROM `messages` WHERE `sid`='$sid' AND `send`='1' ;");
        $puest->setFetchMode(PDO:: FETCH_ASSOC);
        $puest->execute();
              	
        $sn = 0;
             while($row=$puest->fetch()){
			$sn++;
	          	echo '<tr>
			    <td>'.$sn.'</td>
			    <td>'.$row['subject'].'</td>
			    <td>'.$row['msg'].'</td>
			    </tr>';

	              	 }
	}//end of if



function s_logcheck(){
  if(!isset($_SESSION['loged']) || $_SESSION['loged']=="" || !isset($_SESSION['stu']) || $_SESSION['stu']=="" ) {
  	header("Location: login.php");
  }  

  if(isset($_GET['out'])) {
  	session_destroy();
  	header("Location: login.php");
  }

}
//end of function session check

function inotify(){
	if(isset($_POST['msg'])){
	include 'db.php';
	$sub = $_POST['sub'];
	$msg = $_POST['mestxt'];
	$sid = $_SESSION['uid'];
	//$course = $_SESSION['course'];
	$string1 = "INSERT INTO `messages`( `sid`,`subject`,`msg`  ) VALUES ( '$sid','$sub','$msg');";
	$data = $con->prepare($string1);
	if($data->execute()){
	echo '<script>	swal( "Success",  "Message Send",  "success" ); </script>';
	}
}
}
//end of function

function total_exams(){

	try {

		include("db.php");
			$sid = $_SESSION["uid"];	
			$scat = $_SESSION["course"]; 
		    $vbb = "SELECT * FROM exams WHERE `state`='1' and `cid`='$scat' ;";
		    $result = $con->prepare($vbb);
		    $result->execute();
		    $count = $result->rowCount();
		   return $count + 0;
		
	} catch (Exception $e) {
		
		die("error :".$e->getMessage());

	}

} //end of function

function cou_name(){

	try {

		include("db.php");	
			$scat = $_SESSION["course"]; 
		    $vbb = "SELECT * FROM courses WHERE `state`='1' and `uid`='$scat' LIMIT 1;";
		    $result = $con->prepare($vbb);
		    $result->execute();
		    $count = $result->fetch(PDO::FETCH_ASSOC);
		   echo $count['cname'] ;
		
	} catch (Exception $e) {
		
		die("error :".$e->getMessage());

	}

} //end of function

function total_atms(){

	try {

		include("db.php");
			$sid = $_SESSION["uid"]; 
		    $vbb = "SELECT `trecord`.* FROM `trecord` INNER JOIN `exams` ON `trecord`.`sid`='$sid' AND `exams`.`tcode`=`trecord`.`tcode` AND `exams`.`state`='1'";
		    $result = $con->prepare($vbb);
		    $result->execute();
		   
		   $count = $result->rowCount();
		   return (int)$count + 0;
		
	} catch (Exception $e) {
		
		die("error :".$e->getMessage());

	}

} //end of function

function not_atmt(){

	(int)$tote = total_exams();
	(int)$somthingankit = total_atms();
	// $not = bcsub($tote,$amnt);
	$not = $tote-$somthingankit;
	return $not;
}

function stulogin(){

	if(isset($_POST['stulog'])){
	   
		$sid=$_POST['sid'];
		$spass=$_POST['spass'];

		  include("db.php");
		  
		    $vbb = "SELECT * FROM students WHERE studentid='$sid' AND `state`='1' LIMIT 1;";
		    $result = $con->prepare($vbb);
		    $result->execute();
		    $row_pro=$result->fetch();
		    $dsid = $row_pro['studentid'];
		    $dspass = $row_pro['spass'];


		      if($sid==$dsid and $dspass==$spass){
		      	$told = $row_pro['uid'];
			    $sql="SELECT * FROM adminsion WHERE pid='$told';";
			    $res=$con->prepare($sql);
			    if($res->execute()){
					
				$roman=$res->fetch();	
							
		        $_SESSION["loged"] = "black";
		      	$_SESSION["stu"]= $row_pro['studentid']; 
		      	$_SESSION["sid"]= $row_pro['studentid']; 
		      	$_SESSION["uid"]= $row_pro['uid']; 
		      	$_SESSION["course"]= $roman['cid']; 
		      	$_SESSION["sna"]= $row_pro['sname']; 

		        header("Location: index.php");
	
			    }
		      } else {

		         echo "<script>alert('Wrong E-mail id or Password');</script>";

		      }//end of else

	} 
}  
//end of function

function stutestlist(){

	include('db.php');
	$course = $_SESSION["course"];
	$sid = $_SESSION["uid"];
	$sql = "SELECT * FROM `exams` WHERE `cid`='$course' and `state`='1' ;";
    $rister=$con->prepare($sql);
    $rister->execute();
    $k=0;
    while($rest = $rister->fetch(PDO::FETCH_ASSOC)){

    		$k++;
    	  $search = $rest['uid'];
          $sql1 = "SELECT * FROM `questions` WHERE `tid`='$search';";
          $foster1=$con->prepare($sql1);
          $foster1->execute();
          $q=0;
          $pm=0;
          $nm=0;
          $secid=0;
          while($dataset1 = $foster1->fetch(PDO::FETCH_ASSOC)){ $pm=$dataset1['pm']+$pm; $nm=$dataset1['nm']+$nm; $q++; $secid=$dataset1['secid'];	}

        echo '<tr>
            	<td>
					<h6>'.$rest['tname'].'</h6>
					<p>Max Marks : '.$pm.'</p>
					<p>Max Question : '.$q.'</p>	
				</td>
				<td>
					<h6>'.$rest['ttime'].' Min</h6>
				</td>';

		echo '<td class="text-center">';
		$resultas = $rest['tcode'];
		$datas=$con->prepare("SELECT * FROM `trecord` WHERE `sid` = '$sid' and `tcode`='$resultas' ORDER BY 1 DESC LIMIT 1;");
    	$datas->setFetchMode(PDO::FETCH_ASSOC);
     	$datas->execute();
		$m=0;
	      while($que=$datas->fetch()){
	      	 $que['pm'];
	      	 $que['nm'];
	       (float)$obta = $que['pm']+$que['nm'];
	      //	$stc = $que['pa']+$que['na'];
	      		echo'<!-- Modal -->
					<button type="button" class="btn btn-default rounded-0" data-toggle="modal" data-target="#modal_'.$k.'" style="background-color: #094477; color: #fff;">
					    View Result
					</button>
					<a href="downloadexam.php?code='.urlencode(base64_encode($resultas)).'&sudo='.$sid.'&do='.$search.'" class="btn btn-default rounded-0 " style="background-color: #094477; color: #fff;" role="button">
					    Detail Result
					</a>
					<div class="modal fade" id="modal_'.$k.'" tabindex="-1" role="dialog" aria-hidden="true">
					    <div class="modal-dialog" role="document">
					        <div class="modal-content">
					            <div class="modal-header">
					                <h5>Exam Summary</h5>
					                <button type="button" class="close" data-dismiss="modal" aria- label="Close">
					                    <span aria-hidden="true">&times;</span>
					                </button>
					            </div>
					            <div class="modal-body">
					                <div class="form-row">
					                    <div class="col mt-2">
					                        <div class="card" id="one">
					                            <span>Total Marks</span>
					                            <h6>'.$pm.'</h6>
					                        </div>
					                    </div>
					                    <div class="col mt-2">
					                        <div class="card" id="two">
					                            <span>Your Marks</span>
					                            <h6>'.$obta.'</h6>
					                        </div>
					                    </div>
					                    <div class="col mt-2">
					                        <div class="card" id="three">
					                            <span>Total Question</span>
					                            <h6>'.$q.'</h6>
					                        </div>
					                    </div>
					                </div>
					                <div class="form-row">
					                    <div class="col mt-2">
					                        <div class="card" id="four">
					                            <span>Correct Question</span>
					                            <h6>'.$que["pa"].'</h6>
					                        </div>
					                    </div>
					                    <div class="col mt-2">
					                        <div class="card" id="five">
					                            <span>Attempted / Wrong Question</span>
					                            <h6>'.$que["na"].'</h6>
					                        </div>
					                    </div>
					                </div>
					            </div>
					        </div>
					    </div>
					</div>';
					$m++;
	      }

	      if($m==0){ echo'<div onclick="window.open(\'term.php?sudo='.$rest['tcode'].'\', \'Exam Portal\', \'menubar=no,location=no,resizable=no,scrollbars=yes,status=0,minimizable=no,fullscreen=yes,resizable=no\'); " class="btn btn-default rounded-0" style="background-color: #094477; color: #fff;">Start</div></td>'; }
	      
		echo '</tr>'; }

}
//end of function

function get_time(){
	//echo '<script>alert("get time");</script>';
    if(isset($_GET['sudo'])){
    	//echo '<script>alert("'.$_GET['sudo'].'");</script>';
        $test=$_GET['sudo'];
        include 'db.php';
        $qry="SELECT `ttime`,`is_sec_time` FROM `exams` WHERE `tcode`='$test'";
        $rslt=$con->prepare($qry);
        $rslt->execute();
        if($rt=$rslt->fetch())
	        if(!$rt['is_sec_time'])
	        {
	        	$_SESSION['time_start']=time() + ($rt['ttime']*60);
	        }
	        else
	        {
	        	$i=1;
	        	$qry="SELECT * FROM `section` WHERE `tcode`='$test';";
	        	$rslt=$con->prepare($qry);
	        	$rslt->execute();
	        	while($rt=$rslt->fetch(PDO::FETCH_ASSOC))
	        	{
	        		if($i===1)
	        		{
	        			$_SESSION['time_start']=time() + ($rt['sectime']*60)+3;
	        			$i++;
	        			$_SESSION['current']=1;
	        		}
	        		else
	        		{
	        			$tmp="sec".$i;
	        			$_SESSION[$tmp]=$rt['sectime'];
	        			$i++;
	        		}
	        		
	        	}
	        	$_SESSION['total_sec']=$i-1;
	        }
	    else header("Location: index.php");
    }
}// end of function
function get_sec_time(){
	if(isset($_GET['sudo']))
	{
		$tcode=$_GET['sudo'];
		$i=1;
		$qry="SELECT * FROM `section` WHERE `tcode`='$tcode';";
	}
}
function is_sec_time($tcode){
	include 'db.php';
	$qry="SELECT `is_sec_time` FROM `exams` WHERE `tcode`='$tcode';";
	$rslt=$con->prepare($qry);
	$rslt->execute();
	$rt=$rslt->fetch(PDO::FETCH_ASSOC);
	return $rt['is_sec_time'];

}
function questsno() {

	include("db.php");
	$test = $_GET["sudo"];
	$i = 1;
	$vbb = "SELECT * FROM `questions` WHERE `tcode`='$test' ";
	$result = $con->prepare($vbb);
	$result->execute();
	$bg='';
	while($row_pro=$result->fetch()) {
		if($i===1) $bg="bg-warning"; else $bg="";
		$quest = $row_pro['quest'];
		//echo ' <span class="qsub que_btn" onclick="" id="qcode-'.$i.'" >'.$i.'</span>';
		 echo '<div class="col"><div class="one qsub que_btn '.$bg.'" id="qcode-'.$i.'">'.$i.'</div></div>';
		$i++;
	}
	//echo "error";

} // end of function fetch questions
function questsno_with_time(){

	include("db.php");
	$test = $_GET["sudo"];
	$i = 1;
	$qry="SELECT * FROM `section` WHERE `tcode`='$test';";
	$rslt=$con->prepare($qry);
	$rslt->execute();
	$x=1;
	while($rt=$rslt->fetch(PDO::FETCH_ASSOC))
	{
		if($x===1) $d="d-block";
		else $d="d-none";
		$secid=$rt['secid'];
		$vbb = "SELECT * FROM `questions` WHERE `tcode`='$test' AND `secid`='$secid'";
		$result = $con->prepare($vbb);
		$result->execute();
		$bg='';
		while($row_pro=$result->fetch()) {
			if($i===1) $bg="bg-warning"; else $bg="";
			$quest = $row_pro['quest'];
			//echo ' <span class="qsub que_btn" onclick="" id="qcode-'.$i.'" >'.$i.'</span>';
			 echo '<div class="col"><div class="one qsub que_btn '.$bg.' btn_sec_num'.$x.' '.$d.'" id="qcode-'.$i.'">'.$i.'</div></div>';
			$i++;
		}
		$x++;
	}
	
	//echo "error";

} // end of function fetch questions


function questsatmp() {

	include("db.php");
	$search = $_GET["sudo"];
	$i = 1;
	$a= array('1' =>'A' , '2' =>'B', '3' =>'C', '4' =>'D');
	$qry="SELECT `secid` FROM `section` WHERE `tcode`='$search';";
	$rslt=$con->prepare($qry);
	$rslt->execute();
	while($rt=$rslt->fetch(PDO::FETCH_ASSOC))
	{
		$secid=$rt['secid'];
	    $sql = "SELECT * FROM `questions` WHERE `tcode`='$search' AND `secid`='$secid';";
	    $foster=$con->prepare($sql);
	    $foster->execute();
		$display='';
		$pans = array();
		while($row_pro=$foster->fetch(PDO::FETCH_ASSOC)) {
		$quest = $row_pro['text'];
		$hquest = $row_pro['htext'];
		$qcode = $row_pro['qcode'];
		$qid = $row_pro['uid'];

		$type = $row_pro['type'];

		if($i===1) $display="d-block"; else $display="d-none";
		if($type==1){
		echo '<div class="card card-body py-5 ques_all_num '.$display.'" id="'.$i.'">
		        <div id="questy">
		         <h6 class="card-header"><span class="qnum">Q. '.$i.')</span> <span class="que"><img width="650px" src="img/ques/'.$quest.'" alt="que-'.$i.'" >  </span></h6>
		            <div class="form-row pt-2">';
		          	$sql1 = "SELECT * FROM `p_answers` WHERE `qid`='$qid';";
	    			$foster1=$con->prepare($sql1);
	    			$foster1->execute();
	    			$pans[$qcode];
	   			    $j=0;
	   			    while($ans=$foster1->fetch(PDO::FETCH_ASSOC)){
	   			 	$j++;
	   			 	echo '<div class="col">
		                    <span>
		                     <input type="radio" id="'.$ans['pans'].'" name="'.$qcode.'" class="display-inline-block ans-'.$i.'" value="'.$j.'"> <img width="150" height="150" src="img/ques/'.$ans['pans'].'" alt="ans-'.$j.'">
		                    </span>
		                </div>';
	    
	    			}
		           echo '
		            </div>
		        </div>
		    </div>';
		} else {
                    if($quest!='') $brk=' <br><br> '; else $brk='';
				echo '<div class="card card-body py-5 ques_all_num '.$display.'" id="'.$i.'">
		        <div id="questy">
		         <h6 class="card-header">
		         	<span class="qnum">Q. '.$i.')</span> <span class="que">'.base64_decode(urldecode($quest)).$brk.'<span class="devlys-hindi">'.base64_decode(urldecode($hquest)).'</span>';
		         if($row_pro['qimg']!="no-image") echo '<img style="width: 650px;" src="img/'.$row_pro['qimg'].'" />';
		            echo '</span>
		         </h6><div class="form-row pt-2">';
		          	$sql1 = "SELECT * FROM `p_answers` WHERE `qid`='$qid';";
	    			$foster1=$con->prepare($sql1);
	    			$foster1->execute();
	    			$pans[$qcode];
	   			    $j=0;
	   			    while($ans=$foster1->fetch(PDO::FETCH_ASSOC)){
	   			 	$j++;
	   			 	echo '<div class="col d-block">
		                    <span>'.$a[$j].'
		                     <input type="radio" id="'.$ans['pans'].'" name="'.$qcode.'" class="display-inline-block ans-'.$i.'" value="'.$j.'"> '.base64_decode(urldecode($ans['pans'])).'<span class="devlys-hindi">'.base64_decode(urldecode($ans['hans'])).'</span>
		                    </span>';
		                    if($ans["pimg"]!="no-image") echo '<img width="150" height="150"   src="img/'.$ans["pimg"].'" />';
		                echo '</div>';
	    
	    			}
		           echo '
		            </div>
		        </div>
		    </div>';

		    }

		$i++;
		}
	}
} // end of function


function cpass(){

	include 'db.php';
	if(isset($_POST['cha'])){
		if (!empty($_POST['opass'])) {
			if (($_POST['npass']==$_POST['ncpass']) and !(empty($_POST['ncpass']) and empty($_POST['npass']))) {
				$i=0;
				$sid = $_SESSION['sid'];
			$opass = $_POST['opass'];
			 $somthing = "SELECT * FROM `students` WHERE `studentid`='$sid' AND `spass`='$opass' LIMIT 1;";
				$puest = $con->prepare($somthing);
              	 $puest->execute();
              	 while($qdata=$puest->fetch(PDO::FETCH_ASSOC)){
	              	 	$i++;
	              	 }
	          if($i==1){

				$pass = $_POST['ncpass'];
				$string = "UPDATE `students` SET `spass` = '$pass' WHERE `studentid`='$sid' and `state`='1';";
				$code_insert = $con->prepare($string);

				if ($code_insert->execute()) {
					echo "<script> alert('password Updated');</script>";
				}

			  } else { echo "<script> alert('Wrong OLD Password');</script>"; }

			} else { echo "<script> alert('Password's DO Not Match!);</script>"; }
		}
	}

}//end of function

function subtest() {

	if (isset($_POST['subtest'])){

		$tcode=$_GET['test'];
		include "db.php";
		$opmk = 0;
		$onmk = 0;
		$noa= 0;
		$ttl=0;
		$pa = 0;
		$na = 0;
		$sid = $_SESSION['uid'];
		$stu = $_SESSION['stu'];
		$tcode = $_POST['test'];
		$date=date("h:i:s A d-m-Y");
		echo "<script> alert('" . $tcode . "');</script>";
		$sql="SELECT * FROM `exams` WHERE `tcode`='$tcode' and `state`='1' LIMIT 1;";
		$result = $con->prepare($sql); 
    	$result->execute(); 
    	$examres = $result->fetch(PDO::FETCH_ASSOC);

    	$tid=$examres['uid']; 
    	$tcode=$examres['tcode']; 
    	$sql1="SELECT * FROM `questions` WHERE `tid`='$tid' and `tcode`='$tcode';";
		$result1 = $con->prepare($sql1); 
    	$result1->execute(); 
    	while($quesres = $result1->fetch(PDO::FETCH_ASSOC)){
    		
    		$pm=$quesres['pm'];
    		$nm=$quesres['nm'];
    		$qid=$quesres['qid'];
	    	$qcode=$quesres['qcode'];
	    	$sql2="SELECT * FROM `answers` WHERE `qcode`='$qcode' and `tid`='$tid';";
			$result2 = $con->prepare($sql2); 
	    	$result2->execute(); 
	    	$ansres = $result2->fetch(PDO::FETCH_ASSOC);
	    	$ans=$ansres['ans'];
	    	if(!(empty($_POST[$qcode])) and $_POST[$qcode]!=='0'){
	    	 $sans = $_POST[$qcode];
	    	 if($sans == $ans){
	    	 	$opmk = $pm+$opmk;
	    	 	$pa++;
	    	 	$string3 = "INSERT INTO `gnas` ( `tid`, `tcode`, `qid`, `qcode`, `sid`, `stu`, `gnas` ) VALUES ( '$tid','$tcode','$qid','$qcode','$stu','$sid','$sans' );";
				$dat3 = $con->prepare($string3);
				$dat3->execute(); 
				
	    	 } else {
	    	 	$onmk = $onmk - $nm;
	    	 	$na++;
	    	 	$string4 = "INSERT INTO `gnas` ( `tid`, `tcode`, `qid`, `qcode`, `sid`, `stu`,  `gnas` ) VALUES ( '$tid','$tcode','$qid','$qcode','$stu','$sid','$sans' );" ;
				$dat4 = $con->prepare($string4);
				$dat4->execute(); 
				
	    	 }
	    	}  else { $noa++; }
			// print_r($_POST); die();s
		}
			$end = date('d-m-Y h:i:s:u');
			$ttl=$opmk + $onmk;
			$string5 = "UPDATE `trecord` SET  `tid` = '$tid', `pm` = '$opmk', `nm` = '$onmk', `pa` = '$pa', `na` = '$na', `end_time` = '$end'			, `noa`='$noa', `ttl`='$ttl',`end_time`='$date' WHERE `sid` = '$sid' AND `tcode` = '$tcode' ;";
			$dat5 = $con->prepare($string5);
			if($dat5->execute()){
				header('Location: index.php?do');
				die();
			} else { header('Location: index.php?not');	die(); }
	}


}
//end of function


function testattande(){

  if(isset($_GET['sudo']) and  isset($_SESSION["stu"])){

  		$tcode = $_GET['sudo'];
  		$sid = $_SESSION["uid"];
  		include('db.php');
  		$j=0;
  		$date=date("h:i:s A d-m-Y");
        $sql = "SELECT * FROM `trecord` WHERE `tcode`='$tcode' and `sid`='$sid';"; 
  		$result = $con->prepare($sql); 
  		$result->execute(); 
  		while($ans = $result->fetch(PDO::FETCH_ASSOC)){ $j++; } 

	    if ($j==0) {
			        
					$code_insert=$con->prepare("INSERT INTO `trecord` (`sid`,`tcode`,`start_time`) VALUES ( '$sid','$tcode','$date')");
			        
					if($code_insert->execute()){ echo"<script> alert('Ready For Exam');</script>"; }
					else {  header("Location: index.php?1"); die(); }

			   } else { header("Location: index.php?old"); die(); }

          } else { header("Location: index.php?out"); die(); }

}

//end of function

function head(){
	echo'
<DOCTYPE html>	
<html lang="en">
        <head>
            <title>'.webname().' Test Series</title>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
<!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="css/bootstrap.min.css">
<!-- jQuery library -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<!-- Popper JS -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"></script>
<!-- Latest compiled JavaScript -->
<script src="js/bootstrap.min.js"></script>
<!--- FONT AWESOME --->
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.1/css/all.css" integrity="sha384-gfdkjb5BdAXd+lj+gudLWI+BXq4IuLW5IT+brZEZsLFm++aCMlF1V92rMkPaX4PP" crossorigin="anonymous">
<link href="https://fonts.googleapis.com/css?family=PT+Serif" rel="stylesheet">
<!--- INTERNAL CSS --->
<link rel="stylesheet" href="css/zontech.css">
<script src="package/dist/sweetalert2.all.min.js"></script>

</head>
<body>
    <!----- HEADER ----->
    <div class="header">
        <div class="container">
            <div class="row">
                <div class="col-md-8" id="right-header">

                    <div class="navbar-brand">
                        <img src="img/'.viewlogo().'" class="img-fluid display-inline-block" alt="'.webname().'" width="70">
                    </div>
                     <div class="navbar-brand">   <h3 class="display-inline-block">'.webname().'</h3> </div>
                </div>
                
                <div class="col-md-4 text-center pt-3">
                    <div class="form-row">
                        <div class="col text-center">
                            <a href="profile.php?78"><i class="fas fa-user"></i><br>
                            <h6>'.$_SESSION["sna"].'</h6></a>
                        </div>
                        <div class="col text-center">
                            <a href="index.php?out" style="text-decoration: none;" ><i class="fas fa-sign-out-alt"></i><br>
                            <h6>Sign Out</h6></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!----- HEADER ----->
    
    
    <!----- NAVBAR ----->
    <div class="navbar navbar-expand-md navbar-default">
        <nav class="container">
            <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbar">
                <i class="fas fa-bars text-white"></i>
            </button> 
            <div class="collapse navbar-collapse" id="navbar">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item"><a href="index.php" class="nav-link">DASHBOARD</a></li>
                    <li class="nav-item"><a href="myexam.php" class="nav-link">MY EXAM</a></li>
                    <li class="nav-item"><a href="notification.php" class="nav-link">NOTIFICATION</a></li>
                    <li class="nav-item"><a href="profile.php" class="nav-link">PROFILE</a></li>
                    <li class="nav-item"><a href="chngpsd.php" class="nav-link">CHANGE PASSWORD</a></li>
                    <li class="nav-item"><a href="help.php" class="nav-link">HELP</a></li>
                </ul>
            </div>     
        </nav> 
    </div>
    <!----- NAVBAR ----->
	';
}//End of function
function foot(){
	echo'
		<!----- FOOTOER ------>
<div class="footer py-3">
    <div class="container">
        <div class="text-center text-white">
            <h6>All Rights Reserved &copy;<a href="https://aerro.in/" target="_blank">Aerro</a> '.date('Y').''.'</h6>
        </div>
    </div>
</div>
	</body>
 </html>
	';
}// End of function

function headerlink(){
	echo'
		<meta charset="utf-8"/>
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<link rel="stylesheet" href="css/bootstrap.min.css">
  <link rel="stylesheet" type="text/css" href="css/style.css">
  <link rel="stylesheet" type="text/css" href="css/responsive.css">
  <script src="js/style.js"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"></script>
  <script src="js/bootstrap.min.js"></script>
  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" media="all">
    <!-- AOS animation start-->
  <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
  <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
  <!-- AOS animation end-->
  <script>
  $(function() {
  AOS.init();
});

$(window).on(\'load\', function() {
  AOS.refresh();
});

</script>
<!DOCTYPE html>
<html>
	<head>
		<title>Sign In Page | '.webname().'</title>
	</head>
	';
}//End of function

function dashHead(){
	echo'<DOCTYPE html>
    <html lang="en">
        <head>
            <title>Online Test Series</title>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
                <!-- Latest compiled and minified CSS -->
            <link rel="stylesheet" href="css/bootstrap.min.css">

            <!-- jQuery library -->
            <script src="https://code.jquery.com/jquery-3.3.1.js" type="text/javascript"></script>
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
            <script type="text/javascript" async src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/MathJax.js?config=default"></script>

            <!-- Popper JS -->
            <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"></script>
		    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
		    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
		    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>

            <!-- Latest compiled JavaScript -->
            <script src="js/bootstrap.min.js"></script>

            <!--- FONT AWESOME --->
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.1/css/all.css" integrity="sha384-gfdkjb5BdAXd+lj+gudLWI+BXq4IuLW5IT+brZEZsLFm++aCMlF1V92rMkPaX4PP" crossorigin="anonymous">

            <link href="https://fonts.googleapis.com/css?family=Alegreya+SC|Great+Vibes|Noto+Sans+KR" rel="stylesheet">

            <!--- ENTERNAL CSS --->
            <link rel="stylesheet" href="css/testseries.css">
            <style>
            .que_btn{
                cursor:pointer;
            }
            .btnsection{
			    padding: 4px;
			    border:1px solid green;
			    border-radius: 5px;
			    cursor:pointer;
			}
			.btnsection:hover{
			    background: green;
			    color:white;
			}
			 @font-face{
                font-family:Devlys;
                src: url(\'font/mfdev010.ttf\');
            }
            .devlys-hindi{
                font-family: Devlys;
                font-size:18px !important;
            }
            @font-face{
                font-family:Roboto;
                src: url(\'font/Roboto-Regular.ttf\');
            }
            .roboto-eng{
                font-family: Roboto !important;
                font-size:14px !important;
            }
            .MathJax_Display{
                text-align:left !important;
                font-size:14px !important;
                margin:0px !important;
                font-weight:none !important;
                font-family:Roboto !important;
            }
            </style>
        </head>
    <body>';
}//End of function
function dashFoot(){
	echo'
		    </body>
        <script>
        	setInterval(function(){timer();},1000);
        	function timer(){
        		var chk="chck";
        		$.ajax({
        			url: \'time.php\',
        			type: \'post\',
        			data: {chk:chk},
        			error: function(data)
        			{
        				alert("error"+data);
        			},
        			success: function(data){
        				$("#time_show").html(data);
        			} 
        		});
        	}
        </script>
        <script>
        $("#next_btn").click(function(){
          var t=document.getElementsByClassName("ques_all_num").length;
          var crnt=document.querySelector(\'.ques_all_num.d-block\').id;
          var nxt = +crnt +1;
          if(crnt==t) nxt=\'1\';
          //alert("#"+crnt);
          //alert(crnt +"-"+nxt);
          $("#"+crnt).removeClass("d-block");
          $("#"+crnt).addClass("d-none");
          $("#"+nxt).removeClass("d-none");
          $("#"+nxt).addClass("d-block");
          check_opt(crnt);
          check_opt(nxt);

        });
        $("#prev_btn").click(function(){
          var t=document.getElementsByClassName("ques_all_num").length;
          var crnt=document.querySelector(\'.ques_all_num.d-block\').id;
          var prev = +crnt -1;
          if(crnt==\'1\') prev=t;
          //alert("#"+crnt);
          //alert(crnt +"-"+nxt);
          $("#"+crnt).removeClass("d-block");
          $("#"+crnt).addClass("d-none");
          $("#"+prev).removeClass("d-none");
          $("#"+prev).addClass("d-block");
          check_opt(crnt);
          check_opt(prev);

        });
        $(".que_btn").click(function(){
          var id=$(this).text();
          //alert(id);
          var crnt=document.querySelector(\'.ques_all_num.d-block\').id;
          $("#"+crnt).removeClass("d-block");
          $("#"+crnt).addClass("d-none");
          $("#"+id).removeClass("d-none");
          $("#"+id).addClass("d-block");
          check_opt(id);
          check_opt(crnt);
        });
        // $("#clear_btn").click(function(){
        //   var crnt=document.querySelector(\'.ques_all_num.d-block\').id;
        //   var opt = document.getElementsByName("ans"+crnt);
        //   var t=0;
        //   for(t;t<4;t++)
        //   {
        //     opt[t].checked=false;
        //   } 
        //   if($("#qcode-"+crnt).hasClass("bg-success")) $("#qcode-"+crnt).switchClass("bg-success","bg-warning");
        //   else $("#qcode-"+crnt).addClass("bg-warning");
        // });
        // function check_opt(id){
        //   var opt = document.getElementsByName("ans"+id);
        //   var t=0;
        //   for(t;t<4;t++)
        //   {
        //     if(opt[t].checked)
        //     {
        //       if($("#qcode-"+id).hasClass("bg-warning")) $("#qcode-"+id).switchClass("bg-warning","bg-success");
        //       else $("#qcode-"+id).addClass("bg-success");
        //       return;
        //     }
        //   }
        //   if(!$("#qcode-"+id).hasClass("bg-warning")) $("#qcode-"+id).addClass("bg-warning");
        // }
        $("#clear_btn").click(function(){
          var crnt=document.querySelector(\'.ques_all_num.d-block\').id;
          var opt = document.getElementsByClassName("ans-"+crnt);
          var t=0;
          for(t;t<4;t++)
          {
            opt[t].checked=false;
          } 
          if($("#qcode-"+crnt).hasClass("bg-success")) {$("#qcode-"+crnt).removeClass("bg-success"); $("#qcode-"+crnt).addClass("bg-warning");}
          else $("#qcode-"+crnt).addClass("bg-warning");
        });
        function check_opt(id){
          var opt = document.getElementsByClassName("ans-"+id);
          var t=0;
          for(t;t<4;t++)
          {
            if(opt[t].checked)
            {
              if($("#qcode-"+id).hasClass("bg-warning")) {$("#qcode-"+id).removeClass("bg-warning"); $("#qcode-"+id).addClass("bg-success");}
              else $("#qcode-"+id).addClass("bg-success");
              return;
            }
          }
          if(!$("#qcode-"+id).hasClass("bg-warning")) $("#qcode-"+id).addClass("bg-warning");
        }
        
        function disableF5(e) { if ((e.which || e.keyCode) == 116) e.preventDefault(); };
            $(document).on("keydown", disableF5);
            
            // simply visual, let\'s you know when the correct iframe is selected
            $(window).on("focus", function(e) {
                $("html, body").css({ background: "#FFF", color: "#000" })
                .find("h2").html("THIS BOX NOW HAS FOCUS<br />F5 should not work.");
            })
            .on("blur", function(e) {
                $("html, body").css({ background: "", color: "" })
                .find("h2").html("CLICK HERE TO GIVE THIS BOX FOCUS BEFORE PRESSING F5");
            });
        
        document.addEventListener(\'contextmenu\', event => event.preventDefault());
    </script>
    </html>
	';?>
	<style>
	.goog-te-banner-frame.skiptranslate {
	    display: none !important;
	    } 
	body {
	    top: 0px !important; 
	    }
</style>

<script type="text/javascript">

$('body').prepend('<div class="container-fluid bg-info">\n<div class="row">\n<div class="col-md-6"><div id="google_translate_element"></div></div>\n<div class="col-md-6 text-white"><marquee behavior="" direction="left">Only in Beta Version.</marquee></div>\n</div>\n</div>');

function googleTranslateElementInit() {
  new google.translate.TranslateElement({pageLanguage: "en", layout: google.translate.TranslateElement.InlineLayout.SIMPLE}, "google_translate_element");
      var removePopup = document.getElementById("goog-gt-tt");
    removePopup.parentNode.removeChild(removePopup);
}
</script>

<script type="text/javascript" src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>
	<?php
}//End of function
	function dashFoot2()
	{
	echo'
		    </body>
        <script>
        $("#next_btn").click(function(){
          var min=$(".btn_sec_time.d-block").attr("sec-min");
          var max=$(".btn_sec_time.d-block").attr("sec-max");
          //alert(min+max);
          var crnt=document.querySelector(\'.ques_all_num.d-block\').id;
          var nxt = +crnt +1;
          if(crnt==max) nxt=min;
          //alert("#"+crnt);
          //alert(crnt +"-"+nxt);
          $("#"+crnt).removeClass("d-block");
          $("#"+crnt).addClass("d-none");
          $("#"+nxt).removeClass("d-none");
          $("#"+nxt).addClass("d-block");
          check_opt(crnt);
          check_opt(nxt);

        });
        $("#prev_btn").click(function(){
          var min=$(\'.btn_sec_time.d-block\').attr("sec-min");
          var max=$(\'.btn_sec_time.d-block\').attr("sec-max");
          var crnt=document.querySelector(\'.ques_all_num.d-block\').id;
          var prev = +crnt -1;
          if(crnt==min) prev=max;
          //alert("#"+crnt);
          //alert(crnt +"-"+nxt);
          $("#"+crnt).removeClass("d-block");
          $("#"+crnt).addClass("d-none");
          $("#"+prev).removeClass("d-none");
          $("#"+prev).addClass("d-block");
          check_opt(crnt);
          check_opt(prev);

        });
        $(".que_btn").click(function(){
          var id=$(this).text();
          //alert(id);
          var crnt=document.querySelector(\'.ques_all_num.d-block\').id;
          $("#"+crnt).removeClass("d-block");
          $("#"+crnt).addClass("d-none");
          $("#"+id).removeClass("d-none");
          $("#"+id).addClass("d-block");
          check_opt(id);
          check_opt(crnt);
        });
        // $("#clear_btn").click(function(){
        //   var crnt=document.querySelector(\'.ques_all_num.d-block\').id;
        //   var opt = document.getElementsByName("ans"+crnt);
        //   var t=0;
        //   for(t;t<4;t++)
        //   {
        //     opt[t].checked=false;
        //   } 
        //   if($("#qcode-"+crnt).hasClass("bg-success")) $("#qcode-"+crnt).switchClass("bg-success","bg-warning");
        //   else $("#qcode-"+crnt).addClass("bg-warning");
        // });
        // function check_opt(id){
        //   var opt = document.getElementsByName("ans"+id);
        //   var t=0;
        //   for(t;t<4;t++)
        //   {
        //     if(opt[t].checked)
        //     {
        //       if($("#qcode-"+id).hasClass("bg-warning")) $("#qcode-"+id).switchClass("bg-warning","bg-success");
        //       else $("#qcode-"+id).addClass("bg-success");
        //       return;
        //     }
        //   }
        //   if(!$("#qcode-"+id).hasClass("bg-warning")) $("#qcode-"+id).addClass("bg-warning");
        // }
        $("#clear_btn").click(function(){
          var crnt=document.querySelector(\'.ques_all_num.d-block\').id;
          var opt = document.getElementsByClassName("ans-"+crnt);
          var t=0;
          for(t;t<4;t++)
          {
            opt[t].checked=false;
          } 
          if($("#qcode-"+crnt).hasClass("bg-success")) {$("#qcode-"+crnt).removeClass("bg-success"); $("#qcode-"+crnt).addClass("bg-warning");}
          else $("#qcode-"+crnt).addClass("bg-warning");
        });
        function check_opt(id){
          var opt = document.getElementsByClassName("ans-"+id);
          var t=0;
          for(t;t<4;t++)
          {
            if(opt[t].checked)
            {
              if($("#qcode-"+id).hasClass("bg-warning")) {$("#qcode-"+id).removeClass("bg-warning"); $("#qcode-"+id).addClass("bg-success");}
              else $("#qcode-"+id).addClass("bg-success");
              return;
            }
          }
          if(!$("#qcode-"+id).hasClass("bg-warning")) $("#qcode-"+id).addClass("bg-warning");
        }
        
        function disableF5(e) { if ((e.which || e.keyCode) == 116) e.preventDefault(); };
            $(document).on("keydown", disableF5);
            
            // simply visual, let\'s you know when the correct iframe is selected
            $(window).on("focus", function(e) {
                $("html, body").css({ background: "#FFF", color: "#000" })
                .find("h2").html("THIS BOX NOW HAS FOCUS<br />F5 should not work.");
            })
            .on("blur", function(e) {
                $("html, body").css({ background: "", color: "" })
                .find("h2").html("CLICK HERE TO GIVE THIS BOX FOCUS BEFORE PRESSING F5");
            });
        
        document.addEventListener(\'contextmenu\', event => event.preventDefault());
    </script>
    </html>
	';?>
	
<style>
	.goog-te-banner-frame.skiptranslate {
	    display: none !important;
	    } 
	body {
	    top: 0px !important; 
	    }
</style>

<script type="text/javascript">

$('body').prepend('<div class="container-fluid bg-info">\n<div class="row">\n<div class="col-md-6"><div id="google_translate_element"></div></div>\n<div class="col-md-6 text-white"><marquee behavior="" direction="left">Only in Beta Version.</marquee></div>\n</div>\n</div>');

function googleTranslateElementInit() {
  new google.translate.TranslateElement({pageLanguage: "en", layout: google.translate.TranslateElement.InlineLayout.SIMPLE}, "google_translate_element");
      var removePopup = document.getElementById("goog-gt-tt");
    removePopup.parentNode.removeChild(removePopup);
}
</script>

<script type="text/javascript" src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>
	<?php
}//End of function
function fetch_sec(){
	include 'db.php';
	$tcode=$_GET['sudo'];
	$qry="SELECT `name`, `secid` FROM `section` WHERE `tcode`='$tcode'";
	$rslt=$con->prepare($qry);
	if($rslt->execute()){
		if($rslt->rowCount()>0)
		{	
			$i=0;
			$tmp=1;
			while($rt=$rslt->fetch())
			{
				$secid=$rt['secid'];
				$q="SELECT COUNT(*) AS 'ttl' FROM `questions` WHERE `tcode`='$tcode' AND `secid`='$secid'";
				$r=$con->prepare($q);
				$r->execute();
				$t=$r->fetch();
				if($t['ttl']>0)
				{
					if($tmp===1)
						echo '<div class="col-sm-2"><span class="btnsection btn btn-block text-center" onclick="jump_on(1)">'.$rt['name'].'</span></div>';
					else
						echo '<div class="col-sm-2"><span class="btnsection btn btn-block text-center" onclick="jump_on('.($i+1).')">'.$rt['name'].'</span></div>';
					$tmp++;
					$i+=$t['ttl'];

				}
				else echo "";
			}
		}
		else echo "";

	}
}//End of function
function fetch_sec_with_time(){
	include 'db.php';
	$tcode=$_GET['sudo'];
	$qry="SELECT `name`, `secid` FROM `section` WHERE `tcode`='$tcode'";
	$rslt=$con->prepare($qry);
	if($rslt->execute()){
		if($rslt->rowCount()>0)
		{	
			$i=0;
			$tmp=1;
			while($rt=$rslt->fetch())
			{
				$secid=$rt['secid'];
				$q="SELECT COUNT(*) AS 'ttl' FROM `questions` WHERE `tcode`='$tcode' AND `secid`='$secid'";
				$r=$con->prepare($q);
				$r->execute();
				$t=$r->fetch();
				if($t['ttl']>0)
				{
					if($tmp===1)
						echo '<div class="col-sm-2 btn_sec_time d-block" id="btn_sec_time'.$tmp.'" sec-min="1" sec-max="'.$t['ttl'].'"><span class="btnsection btn btn-block text-center">'.$rt['name'].'</span></div>';
					else
						echo '<div class="col-sm-2 btn_sec_time d-none" id="btn_sec_time'.$tmp.'" sec-min="'.($i+1).'" sec-max="'.($i+$t['ttl']).'"><span class="btnsection btn btn-block text-center">'.$rt['name'].'</span></div>';
					$tmp++;
					$i+=$t['ttl'];

				}
				else echo "";
			}
		}
		else echo "";

	}
}//End of function
function term_page($tcode){
    include 'db.php';
    $qry = "SELECT * FROM `exams` WHERE `tcode`='$tcode';";
    $rs=$con->prepare($qry);
    $rs->execute();
    if($rt=$rs->fetch()){
        $tname=$rt['tname'];
        $ttime=$rt['ttime'];
        $sql3 = "SELECT * FROM `questions` WHERE `tcode`='$tcode';";
        $foster3=$con->prepare($sql3);
        $foster3->execute();
        $totm = 0;
        $totq = 0;
        while($dataset3 = $foster3->fetch(PDO::FETCH_ASSOC)){ $totq++; $totm=$totm+$dataset3['pm']; }
        echo '<td>'.$tname.'</td>
                <td>'.$totq.'</td>
                <td>'.$ttime.'Minutes</td>
                <td>'.$totm.'</td>';
    }
}//end of function
function demo_sub(){
    include 'in/db.php';
    $tcode="test2demo";
	$opmk = 0;
	$onmk = 0;
	$noa= 0;
	$ttl=0;
	$pa = 0;
	$na = 0;
	$ttlq=0;
	$sql="SELECT * FROM `exams` WHERE `tcode`='$tcode' and `state`='1' LIMIT 1;";
	$result = $con->prepare($sql); 
    $result->execute(); 
    $examres = $result->fetch(PDO::FETCH_ASSOC);

    $tid=$examres['uid'];
    $sql1="SELECT * FROM `questions` WHERE `tcode`='$tcode';";
	$result1 = $con->prepare($sql1); 
    $result1->execute(); 
    while($quesres = $result1->fetch(PDO::FETCH_ASSOC))
    {
    		
    	$pm=$quesres['pm'];
    	$nm=$quesres['nm'];
    	$qid=$quesres['qid'];
	    $qcode=$quesres['qcode'];
	    $sql2="SELECT * FROM `answers` WHERE `qcode`='$qcode';";
		$result2 = $con->prepare($sql2); 
	    $result2->execute(); 
	    $ansres = $result2->fetch(PDO::FETCH_ASSOC);
	    $ans=$ansres['ans'];
	    if(!(empty($_POST[$qcode])) and $_POST[$qcode]!=='0'){
	    	$sans = $_POST[$qcode];
	    	if($sans == $ans){
	    	 $opmk = $pm+$opmk;
	    	 $pa++;
	    	}
	    	else
	    	{
	    	 $onmk = $onmk - $nm;
	    	 $na++;
	    	}
	    }
	    else { $noa++; }
    }
		$ttl=$opmk + $onmk;
		$ttlq=$pa+$na+$noa;
		$hgh=$pa+$na;
    echo '<td>'.$ttlq.'</td>
		  <td>'.$hgh.'</td>
		  <td>'.$pa.'</td>
		  <td>'.$na.'</td>
		  <td>'.$ttl.'</td>';
}
function test_name($tcode)
{
	include 'db.php';
	$qry="SELECT `tname` FROM `exams` WHERE `tcode`='$tcode';";
	$rslt=$con->prepare($qry);
	$rslt->execute();
	if($rt=$rslt->fetch(PDO::FETCH_ASSOC))
		echo $rt['tname'];
	else echo "NO TEST NAME";
}
?>