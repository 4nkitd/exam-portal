<?php 
@ob_start();
session_start();
logout();
check_ses();
date_default_timezone_set("Asia/Calcutta");
if(isset($_SESSION['locked'])){
  if($_SESSION['locked']=='true'){
    header('Location: lock.php');
    die();
  }
}

if (isset($_GET['lock'])) {
  $_SESSION['locked']="true";
  header('Location: lock.php');
      die();
}
function create_dir($add)
{
    date_default_timezone_set('Asia/Calcutta');
    
    $path="../img";
    if(!file_exists($path)) mkdir($path);
    $path.="/".$add;
    if(!file_exists($path)) mkdir($path);
    $p1=$path;
    $p2=$path;
    $path.="/"."que/";
    if(!file_exists($path)) mkdir($path);
    $p2.="/ans/";
    if(!file_exists($p2)) mkdir($p2);
    return $p1;
}

    function check_ses(){

        if (!isset($_SESSION['loged'])) {
            if (!isset($_SESSION['admin'])) {
                if (!(empty($_SESSION['loged'])&&empty($_SESSION['admin']))) {
                    header('Location: login.php?1');
                }
                    header('Location: login.php?2');
            }
                    header('Location: login.php?3');
        }

    }

    function logout(){
        if (isset($_GET['out'])) {
          $_SESSION['loged']="";
          unset($_SESSION['loged']);
          session_unset();
          session_destroy();
          setcookie('user', null, -1, "/");
          header('Location: login.php');
              die();
        }
    }
function alert($msg="error"){
 echo"<script>alert('".$msg."');</script>";
}//end of funciton 
function tot_stu(){
    include('db.php');
    $sql = "SELECT count(*) FROM `students` WHERE `state` = '1';"; 
    $result = $con->prepare($sql); 
    $result->execute(); 
    $number_of_rows = $result->fetchColumn(); 
    return $number_of_rows;
}

function tot_exm(){
    include('db.php');
    $sql = "SELECT count(*) FROM `exams` WHERE `state` = '1';"; 
    $result = $con->prepare($sql); 
    $result->execute(); 
    $number_of_rows = $result->fetchColumn(); 
    return $number_of_rows;
}

function head(){

	echo '<!DOCTYPE html>
			<html lang="en">

			<head>
			    <meta http-equiv="content-type" content="text/html:charset=UTF-8">
			    <meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no">
			    <title>Test-Series</title>

                <script src="http://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.js"></script> 
			    <!-- plugins:css -->
			    <link rel="stylesheet" href="vendors/iconfonts/mdi/css/materialdesignicons.css">
			    <link rel="stylesheet" href="vendors/css/vendor.addons.css"><!-- endinject -->
                <link rel="stylesheet" href="vendors/summernote/dist/summernote-lite.css">
			    <!-- vendor css for this page -->
			    <link rel="stylesheet" href="vendors/iconfonts/flag-icon-css/css/flag-icon.min.css"><!-- End vendor css for this page -->
			    <!-- inject:css -->
                <link href="https://fonts.googleapis.com/css?family=Hind&display=swap" rel="stylesheet">

			    <link rel="stylesheet" href="css/style.css"><!-- endinject -->
			    <link rel="shortcut icon" href="images/favicon.ico">
			    <!-- Summernote-Math -->
			    <link href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.9.0/katex.min.css" rel="stylesheet">
                <link href="datatable/dataTables.bootstrap4.css" rel="stylesheet">
                <script src="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.9.0/katex.min.js"></script>

			</head>
			';

}
//end of function

function topnav(){
	echo'<nav class="t-header">
        <div class="t-header-brand-wrapper">
          <a href="#">
            <img class="logo" src="images/logo.png" alt=""> 
            <img class="logo-mini" src="images/logo_mini.png" alt=""> 
          </a>
          <button class="t-header-toggler t-header-desk-toggler d-none d-lg-block">
            <svg class="logo" viewBox="0 0 200 200">
              <path class="top" d="
                M 40, 80
                C 40, 80 120, 80 140, 80
                C180, 80 180, 20  90, 80
                C 60,100  30,120  30,120
              "></path>
              <path class="middle" d="
                M 40,100
                L140,100
              "></path>
               <path class="bottom" d="
                M 40,120
                C 40,120 120,120 140,120
                C180,120 180,180  90,120
                C 60,100  30, 80  30, 80
              "></path>
            </svg>
          </button>
        </div>
        <div class="t-header-content-wrapper">
            <div class="t-header-content">
              <button class="t-header-toggler t-header-mobile-toggler d-block d-lg-none"><i class="mdi mdi-menu"></i></button>
                <form action="#" class="t-header-search-box">
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <div class="input-group-text"><i class="mdi mdi-magnify"></i></div>
                        </div><input type="text" class="form-control" id="inlineFormInputGroup" placeholder="Search" autocomplete="off">
                    </div>
                </form>
                <ul class="nav ml-auto">
                    <li class="nav-item dropdown">
                      <a class="nav-link" href="#" id="notificationDropdown" data-toggle="dropdown" aria-expanded="false"><i class="mdi mdi-bell-outline mdi-1x"></i><span class="notification-indicator notification-indicator-primary notification-indicator-ripple"></span></a>
                        <div class="dropdown-menu navbar-dropdown dropdown-menu-right" aria-labelledby="notificationDropdown">
                            <div class="dropdown-header">
                                <h6 class="dropdown-title">Notifications</h6>
                                <p class="dropdown-title-text">You have 1 notification</p>
                            </div>
                            <a href="http://aerro.in/" >
                            <div class="dropdown-body">
                                <div class="dropdown-list">
                                    <div class="icon-wrapper rounded-circle bg-inverse-primary text-primary"><i class="mdi mdi-alert"></i></div>
                                    <div class="content-wrapper"><small class="name">Aerro</small> </div>
                                    
                                </div>
                            </div></a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </nav><!-- partial -->';
}
//end of function

function sidenav(){
	echo '<div class="sidebar">
            <ul class="navigation-menu">
                <li class="nav-category-divider">MAIN</li>
                <li><a href="index.php"><span class="link-title">Dashboard</span> <i class="mdi mdi-gauge link-icon"></i></a></li>
                <li><a href="course.php"><span class="link-title">Courses</span> <i class="mdi mdi-gauge link-icon"></i></a></li>
                <li><a href="subject.php"><span class="link-title">Subjects</span> <i class="mdi mdi-gauge link-icon"></i></a></li>
                <li><a href="#sample-pages" data-toggle="collapse" aria-expanded="false"><span class="link-title">Tests</span> <i class="mdi mdi-flask link-icon"></i></a>
                    <ul class="collapse navigation-submenu" id="sample-pages">                          
                                <li><a href="test.php" >Create Exam</a></li>
                                <li><a href="teste.php" >Upload by EXCEL</a></li>
                                <li><a href="uploadbyexcel.php" >Upload by EXCEL in Old Exam</a></li>
                            </li>                        
                    </ul>
                </li>
                <li><a href="messages.php"><span class="link-title">Messages</span> <i class="mdi mdi-gauge link-icon"></i></a></li>
                <li><a href="testrecord.php"><span class="link-title">Test Result</span> <i class="mdi mdi-gauge link-icon"></i></a></li>
                <li><a href="students.php"><span class="link-title">Students</span> <i class="mdi mdi-gauge link-icon"></i></a></li>
                <li><a href="update.php"><span class="link-title">Update</span> <i class="mdi mdi-gauge link-icon"></i></a></li>
              </ul>
            <div class="sidebar_footer">
                <div class="user-account">
                    <div class="user-profile-item-tittle">Advanced Options</div> 
                    <a class="user-profile-item" href="account.php"><i class="mdi mdi-settings"></i> Account Settings</a> 
                    <a class="user-profile-item" href="index.php?lock"><i class="mdi mdi-lock"></i> Lock</a> 
                    <a class="btn btn-danger btn-logout" href="index.php?out">Logout</a>
                </div>
                <div class="btn-group admin-access-level">
                    <div class="avatar"><img class="profile-img" src="images/profile/male/image_1.png" alt=""></div>
                    <div class="user-type-wrapper">
                        <p class="user_name">Toppers Adda</p>
                        <div class="d-flex align-items-center">
                            <div class="status-indicator small rounded-indicator bg-success"></div><small class="user_access_level">Admin</small>
                        </div>
                    </div>
                    <i class="admin mdi mdi-24px mdi-chevron-right pl-5"></i>
                </div>
            </div>
        </div>';
}

function pager($file){

    $file = ucfirst(pathinfo($file, PATHINFO_FILENAME));
	echo '<div class="viewport-header">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb has-arrow">
                            <li class="breadcrumb-item"><a href="#">Dashboard</a></li>
                            <li class="breadcrumb-item active" aria-current="page">'.$file.'</li>
                        </ol>
                    </nav>
                </div>';
}
//end of functoin

function areachart(){

	$d = '<div class="col-md-7 pb-1 equel-grid order-md-2">
                            <div class="grid d-flex flex-column justify-content-between overflow-hidden">
                                <div class="grid-body">
                                    <div class="d-flex justify-content-between">
                                        <p class="card-title">Sales Revenue</p>
                                        <div class="chartjs-legend" id="sales-revenue-chart-legend"></div>
                                    </div>
                                    <div class="d-flex">
                                        <p class="d-none d-xl-block">12.5% Growth compared to the last week</p>
                                        <div class="ml-auto">
                                            <h2 class="font-weight-medium text-gray"><i class="mdi mdi-menu-up text-success"></i><span class="animated-count">25.04</span>%</h2>
                                        </div>
                                    </div>
                                </div><canvas class="mt-4" id="sales-revenue-chart" height="245"></canvas>
                            </div>
                        </div>';

 }
 //end of function

 function card($class,$value,$valc,$sub,$color = primary,$subval,$subvalc){
 	return '<div class="col-6 equel-grid">
                                    <div class="grid d-flex flex-column align-items-center justify-content-center">
                                        <div class="grid-body text-center">
                                            <div class="profile-img img-rounded bg-inverse-'.$color.' no-avatar component-flat mx-auto mb-4"><i class="'.$class.'"></i></div>
                                            <h2 class="font-weight-medium"><span class="animated-count">'.$value.'</span>'.$valc.'</h2><small class="text-gray d-block mt-3">'.$sub.'</small> <small class="font-weight-medium text-'.$color.'"><i class="mdi mdi-menu-up"></i><span class="animated-count">'.$subval.'</span>'.$subvalc.'</small>
                                        </div>
                                    </div>
                                </div>';
 }
//end of function


 function headset(){

 	echo '<div class="row">

                        '.areachart().'

                        <div class="col-md-12 order-md-0">

                            <div class="row">

                        '. card("mdi mdi-account-multiple-outline mdi-2x",tot_stu(),"","Total Students","success","","").'
                        '.card("mdi mdi-note-text mdi-2x",tot_exm(),"","Total Exams","primary","","").'


                            </div>

                       

                        </div>
                    </div>';

 }//end of function

function servSpaceCard(){

$ds = disk_total_space("/");
(int)$ds = $ds/(1024 * 1204 * 1024);
$df = disk_free_space("/");
(int)$df = $df/(1024 * 1204 * 1024);
$du = round($ds)-round($df);
$dp = ($du/$ds)*100;
$dp = round($dp);
	echo ' <div class="col-md-12">
                            <div class="col-12 equel-grid">
                                    <div class="grid widget-revenue-card">
                                        <div class="grid-body d-flex flex-column h-100">
                                            <div class="split-header">
                                                <p class="card-title">Server Load</p>
                                                <div class="content-wrapper v-centered"><span onclick="location.reload();" class="btn btn-xs component-flat"><i class="mdi mdi-autorenew"></i></span></div>
                                            </div>
                                            <div class="mt-auto">
                                                <h3 class="font-weight-medium mt-2">'.$dp.'%</h3>
                                                <p class="text-gray">Storage is getting full</p>
                                                <div class="d-flex justify-content-between text-muted mt-3"><small>Usage</small> <small>'.round($du).' GB / '.round($ds).' GB</small></div>
                                                <div class="progress progress-slim mt-2">
                                                    <div class="progress-bar-animated progress-bar-striped bg-primary" role="progressbar" style="width: '.$dp.'%" aria-valuenow="68" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>';

}
//end of functino

function foot(){
	echo '<footer class="footer">
                <div class="row">
                    <div class="col-sm-6 text-center text-sm-right order-sm-1">
                        <ul class="text-gray">
                            <li><a href="#">Terms of use</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                        </ul>
                    </div>
                    <div class="col-sm-6 text-center text-sm-left mt-3 mt-sm-0"><small class="text-muted d-block">Copyright © '.date("Y").' Aerro. All rights reserved</small> <small class="text-gray mt-2">Handcrafted With <i class="mdi mdi-heart text-danger"></i></small></div>
                </div>
            </footer>';
}
//end of function

function injs(){
	echo '<!-- plugins:js -->
    <script src="vendors/js/core.js"></script>
    <script src="vendors/js/vendor.addons.js"></script>

    <!-- Vendor Js For This Page Ends-->
    <!-- <script src="https://cdn.datatables.net/1.10.19/js/jquery.dataTables.min.js"></script> -->
    <!-- Vendor Js For This Page Ends-->
    <!-- <script src="vendors/summernote/dist/summernote-lite.min.js"></script> -->
    <!-- <script src="http://cdnjs.cloudflare.com/ajax/libs/summernote/0.8.12/summernote.js"></script> -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/summernote/0.8.12/summernote-lite.js"></script>
    <script src="js/summernote-math.js"></script>
    <script src="js/main.js"></script>
    <script src="js/script.js"></script>';
    

}
//end of function

function gern_code($pre = "",$size) {
    $alpha_key = $pre;
    $keys = range('a', 'z');
    for ($i = 0; $i < 2; $i++) {
     
    }
    $length = $size - 2;
    $key = '';
    $keys = range(0, 9);
    for ($i = 0; $i < $length; $i++) {
      $key .= $keys[array_rand($keys)];
    }
    return $alpha_key . $key;
}

function make_exceltest(){

    if(isset($_POST['import_exle'])){
    

        $ttime = $_POST['ttime'];
        $tname = $_POST['tname'];
        $cid = $_POST['cid'];
        $sub = $_POST['sub'];

            if(!( $cid=="0" and $sub=="0" and empty($tname) and is_int(empty($ttime)) ) )
            {
                 $tcode = gern_code("test",19);
                
                 include('db.php');
                $u_test = "INSERT INTO `exams` (`sub`, `cid`, `tcode`, `tname`, `ttime`) VALUES ( '$sub', '$cid', '$tcode', '$tname', '$ttime' )";

                $test_res=$con->prepare($u_test);

                if($test_res->execute()){  
                
                $get_qid = "SELECT * FROM `exams` WHERE `tcode`='$tcode' LIMIT 1;";
                $get_q_id=$con->prepare($get_qid);
                if($get_q_id->execute()){
                $rest = $get_q_id->fetch(PDO::FETCH_ASSOC);
                $tid = $rest['uid'];
                    if(!empty($_POST['selv'])){
                        $temp=$_POST['selv'];
                        for($j=1; $j<=$temp; $j++){
                         $secn=$_POST['sec'.$j];   
                         $sec="INSERT INTO `section`(`name`,`tcode`,`tid`,`secid`) VALUES('$secn','$tcode','$tid','$j');";
                         $res=$con->prepare($sec);
                         $res->execute();
                        }
                    }
                    add_test_by_excel($tid,$tcode); 
                }
                
                }
            
            } 

    } 

}//end of function

function add_test_by_excel($tid,$tcode){

          $scode = "unknown";
          $sid = $_POST['sub'];

    try {    

      $output = '';

      if(isset($_POST["import_exle"]))
      {

        $file_exel = $_FILES["excel"]["name"];
        $tmp1 = explode(".", $file_exel);
        $extension = end($tmp1);

       $allowed_extension = array("xls", "xlsx", "csv"); 
       if(in_array($extension, $allowed_extension)) 
       {
        $file = $_FILES["excel"]["tmp_name"]; 
        include("vendor/excel/PHPExcel/IOFactory.php"); 
        $objPHPExcel = PHPExcel_IOFactory::load($file); 

        include('db.php');

        $output .= "<label class='text-success'>Data Inserted</label><br /><table class='table table-bordered'>";
        foreach ($objPHPExcel->getWorksheetIterator() as $worksheet)
        {
         $highestRow = $worksheet->getHighestRow();

         for($row=2; $row<=$highestRow; $row++)
         {
          
          $quest = urlencode(base64_encode($worksheet->getCellByColumnAndRow(0, $row)->getValue()));
          $hquest = urlencode(base64_encode($worksheet->getCellByColumnAndRow(1, $row)->getValue()));

          $pans['1'] = urlencode(base64_encode($worksheet->getCellByColumnAndRow(2, $row)->getValue()));
          $hans['1'] = urlencode(base64_encode($worksheet->getCellByColumnAndRow(3, $row)->getValue()));
          $pans['2'] = urlencode(base64_encode($worksheet->getCellByColumnAndRow(4, $row)->getValue()));
          $hans['2'] = urlencode(base64_encode($worksheet->getCellByColumnAndRow(5, $row)->getValue()));
          $pans['3'] = urlencode(base64_encode($worksheet->getCellByColumnAndRow(6, $row)->getValue()));
          $hans['3'] = urlencode(base64_encode($worksheet->getCellByColumnAndRow(7, $row)->getValue()));
          $pans['4'] = urlencode(base64_encode($worksheet->getCellByColumnAndRow(8, $row)->getValue()));
          $hans['4'] = urlencode(base64_encode($worksheet->getCellByColumnAndRow(9, $row)->getValue()));
          
          $ans = $worksheet->getCellByColumnAndRow(10, $row)->getValue();
          $pm = $worksheet->getCellByColumnAndRow(11, $row)->getValue();
          $nm = $worksheet->getCellByColumnAndRow(12, $row)->getValue();
          $secid = $worksheet->getCellByColumnAndRow(13, $row)->getValue();

          $qcode = gern_code("quest",30);
          $text = $quest;

          try {


          $q_sql = "INSERT INTO `questions`(`tid`, `tcode`, `qcode`, `scode`, `sid`, `text`, `htext`, `pm` ,`nm`, `secid`) VALUES ( '$tid', '$tcode', '$qcode', '$scode', '$sid', '$text','$hquest', '$pm' ,'$nm','$secid' )";

          $i_quest=$con->prepare($q_sql);
          $i_quest->execute();

          $get_qid = "SELECT `uid` FROM `questions` WHERE `qcode`='$qcode' LIMIT 1;";
          $get_q_id=$con->prepare($get_qid);
          $get_q_id->execute();
          $rest = $get_q_id->fetch(PDO::FETCH_ASSOC);
          $qid = $rest['uid'];
          $x=1;
          foreach ($pans as $anss) {

          $hanss=$hans[$x];
          $pa_sql = "INSERT INTO `p_answers`( `qid`,`qcode`, `pans`,`hans`, `tid`) VALUES ( '$qid' ,'$qcode', '$anss','$hanss', '$tid' );";
          $pa_quest=$con->prepare($pa_sql);
          $pa_quest->execute();
          $x++;
         }

          $a_sql = "INSERT INTO `answers`( `qid`, `qcode`, `ans`, `tid`) VALUES ( '$qid' ,'$qcode', '$ans', '$tid' );";

          $a_quest=$con->prepare($a_sql);
          $a_quest->execute();

          } catch (Exception $e) {   print "Error!: " . $e->getMessage() . "<br/>"; die();    }

         }
        
        }

        $output .= 'Done';

       }
       else { $output = '<label class="text-danger">Invalid File</label>';   }

      }

    } catch (PDOException $e) {  print "Error!: " . $e->getMessage() . "<br/>"; die();   }
 
 }
 //end of function

function add_course(){

    if(isset($_POST['addcou'])){

        if(!empty($_POST['cname'])){

            $cname = $_POST['cname'];
            $cdis = $_POST['cdis'];

            include('db.php');
            
            $sql = "INSERT INTO `courses` ( `cname`, `cids` ) VALUES ( '$cname', '$cdis' )";
            
            $frost=$con->prepare($sql);
            
            if($frost->execute()){ echo "<script>alert('done')</script>"; }
            else {  echo "<script>alert('error')</script>";  }

        }

    }//end of if

}//end of function
function send_Email(){
if(isset($_POST['sendEmail']) OR isset($_POST['addstu'])){
    
    require_once("PHPMailer/class.phpmailer.php");
    require_once("PHPMailer/class.smtp.php");

    $semail = $_POST['semail'];
    $sname = $_POST['sname'];
    $stid   = $_POST['sid'];
    $spass  = $_POST['spass'];
    $body   = 'Your Registration is Successfully Your Student Id : '.$stid.' and Password : '.$spass.' Here. Do not share your studentid and password with others.';

//Start mail
     $mail = new PHPMailer();
         $sbj='Registration Completed';            

         $mail->isSMTP();         // Set mailer to use SMTP
         //$mail->SMTPDebug = 1; // debugging: 1 = errors and messages, 2 = messages only
         $mail->From = "testseries@aunico.in";
         $mail->FromName = "Do not Reply";
         $mail->setFrom('testseries@aunico.in','Toppers Adda');                                  
         $mail->Host = "bh-76.webhostbox.net"; 
         $mail->SMTPSecure="ssl";    // for ssl port =465 and tls=587
         $mail->Port=465;
         $mail->SMTPAuth = true;     // turn on SMTP authentication
         $mail->Username = "testseries@aunico.in";  // SMTP username
         $mail->Password = "aunico.in"; // SMTP password
         $mail->WordWrap = 10000;      // set word wrap to 1000 characters
         $mail->isHTML(true);//Send HTML or Plain Text email
            
         $mail->addAddress($semail, $sname);

         $mail->Subject = $sbj;
         $mail->Body    = $body;
         $mail->AltBody = 'Thank you for your interest. Test-Series Powered by https://aerro.in';
                //  if(!$mail->send()) 
                //  {
                //      alert("Mailer Error: " . $mail->ErrorInfo);
                //  } 
                //  else 
                //  {
                //      alert('Email has been sent Successfully.');
                //  }
    }//end mail
}//End of function
function add_sub(){

    if(isset($_POST['addsub'])){
        if(!empty($_POST['subname'] and $_POST['pid']!="0")){

            $pid = $_POST['pid'];
            $subname = $_POST['subname'];

            include('db.php');
            
            $sql = "INSERT INTO `subject`( `pid`, `subname` ) VALUES ( '$pid', '$subname' )";
            
            $frost=$con->prepare($sql);
            
            if($frost->execute()){ 
                echo "<script>alert('DONE')</script>";
            }
            else {  echo "<script>alert('error')</script>";  }

        } else {    echo "<script>alert('All Entities Required')</script>";  }

    }//end of if

}//end of function

function add_exam(){

    if(isset($_POST['addcou'])){

        if(!empty($_POST['cname'])){

            $cname = $_POST['cname'];
            $cdis = $_POST['cdis'];

            include('db.php');
            
            $sql = "INSERT INTO `exams`( `tcode`, `sub`, `cid`, `tname`, `ttime` )  VALUES ( '$cname', '$cdis' )";
            
            $frost=$con->prepare($sql);
            
            if($frost->execute()){ echo "<script>swal('DONE')</script>"; }
            else {  echo "<script>swal('error')</script>";  }

        }

    }//end of if

}//end of function

function upload_by_excel(){

    if (isset($_POST['import_exle'])) {
                // echo "<script>alert('test')</script>";

        include('db.php');
        $uid=$_POST['exam'];
           $sql = "SELECT * FROM `exams` WHERE `uid`='$uid' LIMIT 1;";
          $rister=$con->prepare($sql);
          $rister->execute();
          $res = "";
          while($rest = $rister->fetch(PDO::FETCH_ASSOC)){
            $res++;
                echo "<script>alert('test')</script>";

            if ($res==1) {

                // echo "<script>alert('test')</script>";
                 $tid = $rest['uid'];
                 $tcode = $rest['tcode'];
                 $_POST['sub']= $rest['sid'];
                add_test_by_excel($tid,$tcode);
            }
          }
        
    }

} //end of function 

function opt_exams(){

          include('db.php');
          $sql = "SELECT * FROM `exams`;";
          $rister=$con->prepare($sql);
          $rister->execute();
          $res = "";
          while($rest = $rister->fetch(PDO::FETCH_ASSOC)){

            $res.= '<option value="'.$rest['uid'].'">'.$rest['tname'].'</option>';
          
          }

          echo $res;

}//end of function

function opt_cou(){

          include('db.php');
          $sql = "SELECT * FROM `courses`;";
          $rister=$con->prepare($sql);
          $rister->execute();
          $res = "";
          while($rest = $rister->fetch(PDO::FETCH_ASSOC)){

            $res.= '<option value="'.$rest['uid'].'">'.$rest['cname'].'</option>';
          
          }

          echo $res;

}//end of function

function opt_sub(){

          include('db.php');
          $sql = "SELECT * FROM `subject`;";
          $rister=$con->prepare($sql);
          $rister->execute();
          $res = "";
          while($rest = $rister->fetch(PDO::FETCH_ASSOC)){

            $res.= '<option value="'.$rest['uid'].'">'.$rest['subname'].'</option>';
          
          }

          echo $res;

}//end of function

function tst_tab_hold(){

          include('db.php');
          $sql = "SELECT * FROM `exams`;";
          $rister=$con->prepare($sql);
          $rister->execute();
          $res = "";
          $k=0;
          while($rest = $rister->fetch(PDO::FETCH_ASSOC)){
            $k++;
        echo '<tr>
            <td><a href="student-attemp?tcode='.$rest['tcode'].'">'.$rest['tname'].'</td>
            <td>'.$rest['ttime'].'</td>';

          $search = $rest['cid'];
          $sql1 = "SELECT * FROM `courses` WHERE `uid`='$search' LIMIT 1;";
          $foster1=$con->prepare($sql1);
          $foster1->execute();
          $dataset1 = $foster1->fetch(PDO::FETCH_ASSOC);

           echo '<td>'.$dataset1['cname'].'</td>';

          $search = $rest['sub'];
          $sql2 = "SELECT * FROM `subject` WHERE `uid`='$search' LIMIT 1;";
          $foster2=$con->prepare($sql2);
          $foster2->execute();
          $dataset2 = $foster2->fetch(PDO::FETCH_ASSOC);

            echo '<td>'.$dataset2['subname'].'</td>';

            if($rest['state']=='1'){ $class = "btn-success"; $btnnam = 'Actived'; }
            elseif($rest['state']=='0'){ $class = "btn-danger"; $btnnam = 'Deactivated'; }
            else{ $class = "btn-info"; $btnnam = 'Error'; }
            $butn = '';
            $butn.= '<form action="" method="post" accept-charset="utf-8">
            <input type="hidden" name="who" value="'.$rest['uid'].'">
            <input type="hidden" name="state" value="'.$rest['state'].'">
            <input type="submit" name="cstate" class="btn btn-xs '.$class.'" value="'.$btnnam.'"></form>';

            $results = '';
            $results.= '<a href="?code='.urlencode(base64_encode($rest['tcode'])).'&do='.urlencode($rest['uid']).'" class="btn btn-xs btn-primary">Results</a>';

            $addq = '';
            $addq.= '<a href="section.php?code='.urlencode(base64_encode($rest['tcode'])).'&do='.urlencode($rest['uid']).'" class="btn btn-xs btn-warning" >Add Q.</a>';
            
          $search = $rest['uid'];
          $sql3 = "SELECT * FROM `questions` WHERE `tid`='$search';";
          $foster3=$con->prepare($sql3);
          $foster3->execute();
          $totm = 0;
          $totq = 0;
          while($dataset3 = $foster3->fetch(PDO::FETCH_ASSOC)){ $totq++; $totm=$totm+$dataset3['pm']; }

            echo '<td>'.$totq.'</td>
                  <td>'.$totm.'</td>
                  <td>'.$addq.'</td>
                  <td>'.$butn.'</td>';
            echo '<td>
                    <form action="" method="post" accept-charset="utf-8">
                    <input type="hidden" name="uid" value="'.$rest['uid'].'">
                    <input type="submit" class="btn btn-xs btn-danger" value="Delete" name="dstate">    
                    </form>
                  </td>';
            echo'<td><a href="qprint.php?code='.urlencode(base64_encode($rest['tcode'])).'&do='.urlencode($rest['uid']).'" class="btn btn-xs btn-primary">
                        Print </a>
                    </td>';
            echo '<tr>';

          }
          
          $search = null;


} //end of function

function cstates(){

    if(isset($_POST['who']) and isset($_POST['cstates']) and isset($_POST['state'])){
            if(!empty($_POST['who'])){

                if($_POST['state']=="1"){ $do = "0"; }
                elseif($_POST['state']=="0"){ $do = "1"; }
                else { $do = "0"; }

                include('db.php');
                $uid = $_POST['who'];
                $sql = "UPDATE `students` SET `state`='$do' WHERE `uid`='$uid' ;";
                $rister=$con->prepare($sql);
                if($rister->execute()){
                    echo "<script>alert('Done')</script>";
                } else { 
                    echo "<script>alert('error')</script>";
                }
            }
        }

}//end of function

function cstate(){

    if(isset($_POST['who']) and isset($_POST['cstate']) and isset($_POST['state'])){
            if(!empty($_POST['who'])){

                if($_POST['state']=="1"){ $do = "0"; }
                elseif($_POST['state']=="0"){ $do = "1"; }
                else { $do = "0"; }

                include('db.php');
                $uid = $_POST['who'];
                $sql = "UPDATE `exams` SET `state`='$do' WHERE `uid`='$uid' ;";
                $rister=$con->prepare($sql);
                if($rister->execute()){
                    echo "<script>alert('Done')</script>";
                } else { 
                    echo "<script>alert('error')</script>";
                }
            }
        }

}//end of function

function tab_cou(){

          include('db.php');
          $sql = "SELECT * FROM `courses`;";
          $rister=$con->prepare($sql);
          $rister->execute();
          $i=1;
          while($rest = $rister->fetch(PDO::FETCH_ASSOC)){

            echo '<tr>
                    <td>'.$i++.'</td>
                    <td>'.$rest['cname'].'</td>
                    <td>'.$rest['cids'].'</td>
                    <td>';

            echo '<form action="" method="post" accept-charset="utf-8">
                    <input type="hidden" name="uid" value="'.$rest['uid'].'">
                    <input type="submit" class="btn btn-sm btn-danger" value="Delete" name="dstate">    
                    </form>';
            echo'</td>
                    </tr>';
          
          }

}//end of function

function del_tst(){

        if(isset($_POST['uid']) and isset($_POST['dstate'])){
            if(!empty($_POST['uid'])){
                  include('db.php');
                  $uid = $_POST['uid'];
                  $sql = "DELETE FROM `exams` WHERE uid = '$uid';";
                  $rister=$con->prepare($sql);
                  if($rister->execute()){
                    echo "<script>alert('Done')</script>";
                } else { 
                    echo "<script>alert('error')</script>";
                }
            }
        }

}//end of function

function del_cou(){

        if(isset($_POST['uid']) and isset($_POST['dstate'])){
            if(!empty($_POST['uid'])){
                  include('db.php');
                  $uid = $_POST['uid'];
                  $sql = "DELETE FROM `courses` WHERE `uid` = '$uid';";
                  $rister=$con->prepare($sql);
                  if($rister->execute()){
                    echo "<script>alert('Done')</script>";
                   } else { 
                        echo "<script>alert('error')</script>";
                    }
                }
        }

}//end of function

function del_sub(){

        if(isset($_POST['uid']) and isset($_POST['dstate'])){
            if(!empty($_POST['uid'])){
                  include('db.php');
                  $uid = $_POST['uid'];
                  $sql = "DELETE FROM `subject` WHERE `uid` = '$uid';";
                  $rister=$con->prepare($sql);
                  if($rister->execute()){
                    echo "<script>alert('Done')</script>";
                } else { 
                    echo "<script>alert('error')</script>";
                }
            }
        }

}//end of function

function del_que(){

        if(isset($_POST['uid']) and isset($_POST['dstate'])){
            if(!empty($_POST['uid'])){ 
                  include('db.php');
                  $uid = $_POST['uid'];
                  $sql = "DELETE FROM `questions` WHERE `uid` = '$uid';";
                  $rister=$con->prepare($sql);
                  if($rister->execute()){
                    $qry="DELETE FROM `answers` WHERE `qid` = '$uid';";
                    $rs=$con->prepare($qry);
                    $rs->execute();
                    
                    echo "<script>alert('Done')</script>"; 
                
                } else { 
                    echo "<script>alert('error')</script>";
                }
            }
        }

}//end of function
function tab_trecord(){
    include'db.php';
    $sql="SELECT * FROM exams;";
    $res=$con->prepare($sql);
    $res->execute();
    $i=0;
    while($row=$res->fetch()){
        $i++;
        echo'<tr>
                <td>'.$i.'</td>
                <td>'.$row['tname'].'</td>'; 
                $cid=$row['cid'];
         
         $que="SELECT * FROM courses WHERE uid='$cid';";
         $result=$con->prepare($que);
         $result->execute();
         while($rw=$result->fetch()){
                echo'<td>'.$rw['cname'].'</td>';
                $subid=$rw['uid'];

                $q="SELECT * FROM subject WHERE pid='$subid' LIMIT 1;";
                $r=$con->prepare($q);
                $r->execute();
                while($ro=$r->fetch()){
                    echo '<td>'.$ro['subname'].'</td>';
                }
            }
            echo'<td><a href="tresult.php?code='.urlencode(base64_encode($row['tcode'])).'&tid='.urlencode(base64_encode($row['uid'])).'" class="btn btn-primary btn-xs" >Results</a></td>
                </tr>';
        }
}//End of function

function tab_tresult(){

    include'db.php';
    if(isset($_GET['code']) AND isset($_GET['tid'])){
    // 	echo "<script>alert('step 1');</script>";
    $tcode=base64_decode(urldecode($_GET['code']));
    $tid=(int)base64_decode(urldecode($_GET['tid']));
    
    $exid=0;
    $que="SELECT * FROM `exams` WHERE `tcode`='$tcode'LIMIT 1;";
    $result=$con->prepare($que);
    $result->execute();
    if($rw=$result->fetch()){
                
      $todst = '<td>'.$rw['tname'].'</td>';
      $subid=$rw['sub'];

      $exid=$rw['uid'];

      $q="SELECT * FROM subject WHERE uid='$subid' LIMIT 1;";
      $r=$con->prepare($q);
      $r->execute();
        if($ro=$r->fetch()){
           $todst1 = '<td>'.$ro['subname'].'</td>';
        }
    }
           
    
    $tq="SELECT * FROM `trecord` WHERE `tcode`='$tcode' AND `tid`='$tid';";
    $tr=$con->prepare($tq);
    $tr->execute();
    $k=0;
    $i=0;
    while($tmp=$tr->fetch()){
     $sid=$tmp['sid'];
     $sql="SELECT * FROM `students` WHERE `uid`='$sid';";
     $res=$con->prepare($sql);
     $res->execute();    
     $k++; 
     if($row=$res->fetch(PDO::FETCH_BOTH)){
        $i++;
        echo'<tr>
                <td>'.$i.'</td>
                <td>'.$row['sname'].'</td>'; 
                
         
        }
            echo $todst;
            echo $todst1;
            $sql1 = "SELECT * FROM `questions` WHERE `tid`='$exid';";
            $foster1=$con->prepare($sql1);
            $foster1->execute();
            $tq=0;
            $tm=0;
            while($dataset1 = $foster1->fetch(PDO::FETCH_ASSOC)){$tm=$dataset1['pm']+$tm; $tq++; }

           echo'<td>';   
            $obtn=$tmp['pm']+$tmp['nm'];
                echo'<!--Modal-->
                    <button type="button" class="btn btn-primary btn-xs rounded-0 " data-toggle="modal" data-target="#resultModal_'.$k.'">
                        View Result
                    </button>
                    <div class="modal fade" id="resultModal_'.$k.'" tabindex="-1" role="dialog" aria- labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                                <div class="modal-header border-bottom border-secondary mb-0 pb-3">
                                    <h5>Exam Summary</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria- label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body mt-1 pt-1">
                                    <div class="form-row">
                                        <div class="col mt-2">
                                            <div class="card bg-success text-center text-white" id="one">
                                                <p class="px-3 h5 pt-3">Total Marks</p>
                                                <h6 class="pb-3" >'.$tm.'</h6>
                                            </div>
                                        </div>
                                        <div class="col mt-2">
                                            <div class="card bg-danger text-center text-white" id="two">
                                                <p class="px-3 h5 pt-3">Your Marks</p>
                                                <h6 class="pb-3" >'.$obtn.'</h6>
                                            </div>
                                        </div>           
                                        <div class="col mt-2">
                                            <div class="card bg-secondary text-center text-white" id="three">
                                                <p class="px-3 h5 pt-3">Total Question</p>
                                                <h6 class="pb-3" >'.$tq.'</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="col mt-2">
                                            <div class="card bg-primary text-center text-white" id="four">
                                                <p class="px-3 h5 pt-3">Attempted / Correct <br>Question</p>
                                                <h6 class="pb-3" >'.$tmp["pa"].'</h6>
                                            </div>
                                        </div>
                                        <div class="col mt-2">
                                            <div class="card bg-danger text-center text-white" id="five">
                                                <p class="px-3 h5 pt-3">Attempted / Wrong<br> Question</p>
                                                <h6 class="pb-3" >'.$tmp["na"].'</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </td>';

              echo'<td>
                    <a href="detailresult.php?code='.urlencode(base64_encode($tcode)).'&sudo='.$sid.'&do='.$tid.'" class="btn btn-primary btn-xs rounded-0">
                        Detail Result
                    </a>
                    </td>
                    </tr>';  

        }
    }
}//End of function

function tab_sub(){

          include('db.php');
          $sql = "SELECT * FROM `subject`;";
          $rister=$con->prepare($sql);
          $rister->execute();
          $j=1;
          while($rest = $rister->fetch(PDO::FETCH_ASSOC)){

            echo '<tr>
                    <td>'.$j++.'</td>
                    <td>'.$rest['subname'].'</td>';

          $search = $rest['pid'];
          $sql1 = "SELECT * FROM `courses` WHERE `uid`='$search' LIMIT 1;";
          $foster1=$con->prepare($sql1);
          $foster1->execute();
          $dataset1 = $foster1->fetch(PDO::FETCH_ASSOC);

                  echo '<td>'.$dataset1['cname'].'</td>';

          $search = $rest['uid'];
          $sql2 = "SELECT * FROM `exams` WHERE `sub`='$search' LIMIT 1;";
          $foster2=$con->prepare($sql2);
          $foster2->execute();
          $i = 0;
          while($dataset2 = $foster2->fetch(PDO::FETCH_ASSOC)){ $i++; }

                  echo '<td>'.$i.'</td>';

                   echo ' <td>';

                     echo '<form action="" method="post" accept-charset="utf-8">
                    <input type="hidden" name="uid" value="'.$rest['uid'].'">
                    <input type="submit" class="btn btn-sm btn-danger" value="Delete" name="dstate">    
                    </form>';

                   echo '</td>
                    </tr>';
          
          }

}//end of function


function tab_msg(){

          include('db.php');
          $sql = "SELECT * FROM `messages`;";
          $rister=$con->prepare($sql);
          $rister->execute();
          $i=1;
          while($rest = $rister->fetch(PDO::FETCH_ASSOC)){

            echo '<tr>
                    <td>'.$i++.'</td>
                    <td>'.$rest['sid'].'</td>
                    <td>'.$rest['subject'].'</td>
                    <td>'.$rest['msg'].'</td>
                    <td>Action</td>
                    </tr>';
          
          }

}//end of function

function tab_stu(){

          include('db.php');
          $sql = "SELECT * FROM `students`;";
          $rister=$con->prepare($sql);
          $rister->execute();
          $i=1;
          while($rest = $rister->fetch(PDO::FETCH_ASSOC)){

            $search = $rest['uid'];
            $sql1 = "SELECT * FROM `adminsion` WHERE `pid`='$search' ;";
              $rister1=$con->prepare($sql1);
              $rister1->execute();
              
              while($rest1 = $rister1->fetch(PDO::FETCH_ASSOC)){ $search2=$rest1['cid'];}

              $sql2 = "SELECT * FROM `courses` WHERE `uid`='$search2' ;";
              $rister2=$con->prepare($sql2);
              $rister2->execute();
              
              while($rest2 = $rister2->fetch(PDO::FETCH_ASSOC)){ $course=$rest2['cname'];}

            echo '<tr>
                    <td>'.$i++.'</td>
                    <td>'.$rest['studentid'].'</td>
                    <td>'.$rest['sname'].'</td>
                    <td>'.$course.'</td>';

            if($rest['state']=='1'){ $class = "btn-success"; $btnnam = 'Actived'; }
            elseif($rest['state']=='0'){ $class = "btn-danger"; $btnnam = 'Deactivated'; }
            else{ $class = "btn-info"; $btnnam = 'Error'; }
            $butn = '';
            $butn.= '<form action="" method="post" accept-charset="utf-8">
            <input type="hidden" name="who" value="'.$rest['uid'].'">
            <input type="hidden" name="state" value="'.$rest['state'].'">
            <input type="submit" name="cstates" class="btn btn-sm '.$class.'" value="'.$btnnam.'"></form>';

             echo '<td>'.$butn.'</td>';

             echo'<td>
                    <form method="POST">
                        <input type="hidden" name="semail" value="'.$rest['semail'].'">
                        <input type="hidden" name="sid" value="'.$rest['studentid'].'">
                        <input type="hidden" name="spass" value="'.$rest['spass'].'">
                        <input type="submit" class="btn btn-sm btn-success" name="sendEmail" value="Send">
                    </form>
                </td>';
                
                    echo '</tr>';
          
          }

}//end of function
function stu_test_attemps($tcode){
    include 'db.php';
    $qry="SELECT `students`.`sname` AS 'name',`students`.`uid` AS 'sid',`students`.`studentid` AS 'stid',`trecord`.`start_time` AS 'start',`trecord`.`end_time` AS 'end' FROM `students`
          INNER JOIN `trecord`
          ON `students`.`uid`=`trecord`.`sid` AND `trecord`.`tcode`='$tcode'";
    $rslt=$con->prepare($qry);
    $rslt->execute();
    $i=1;
    if($rslt->rowCount()>0)
    {
        while($rt=$rslt->fetch(PDO::FETCH_ASSOC))
        {
            echo '<tr>
                    <td>'.$i.'</td>
                    <td>'.$rt['stid'].'</td>
                    <td>'.$rt['name'].'</td>
                    <td>'.$rt['start'].'</td>
                    <td>'.$rt['end'].'</td>
                    <td><button class="btn-danger rounded shadow btn-remove" data-for="'.$rt['sid'].'">remove</button></td>
                  </tr>';
                  $i++;
        }
    }

}//end of function
function stu_test_remove(){
    if(!empty($_POST['tcode']) AND !empty($_POST['sid']))
    {
        include 'db.php';
        $tcode=$_POST['tcode'];
        $sid=$_POST['sid'];
        $con->beginTransaction();
        $qry="DELETE FROM `trecord` WHERE `tcode`='$tcode' AND `sid`='$sid';";
        $rslt=$con->prepare($qry);
        $rslt->execute();
        if ($rslt->rowCount()) {
            $qry1="DELETE FROM `gnas` WHERE `tcode`='$tcode' AND `stu`='$sid';";
            $rslt1=$con->prepare($qry1);
            if($rslt1->execute())
            {
                $con->commit();
                echo '<script>alert("Student removed.");</script>'; 
            }
            else
            {
                $con->rollBack();
                echo '<script>alert("Failed. Error occured.");</script>';
            }
            
        }
        else echo '<script>alert("Student not Found! or Already removed.");</script>';
    }
}
function stuname(){
    if(!empty($_GET['upsid'])){
        include'db.php';
        $id=(int)$_GET['upsid'];
        $slq="SELECT * FROM `students` WHERE uid='$id';";
        $result=$con->prepare($slq);
        $result->execute();
        $row=$result->fetch();
        echo $row['sname'];
    }
}//end of function
function stsid(){
    if(!empty($_GET['upsid'])){
        include'db.php';
        $id=(int)$_GET['upsid'];
        $slq="SELECT * FROM `students` WHERE uid='$id';";
        $result=$con->prepare($slq);
        $result->execute();
        $row=$result->fetch();
        echo $row['studentid'];
    }
}//end of function
function stpassword(){
    if(!empty($_GET['upsid'])){
        include'db.php';
        $id=(int)$_GET['upsid'];
        $slq="SELECT * FROM `students` WHERE uid='$id';";
        $result=$con->prepare($slq);
        $result->execute();
        $row=$result->fetch();
        echo $row['spass'];
    }
}//end of function

function update_stu(){
    include'db.php';
    if(!empty($_GET['upsid'])){
        
        $upsid=(int)$_GET['upsid'];

        if(isset($_POST['updata'])){
           /*if(!(empty($_POST['stname']) && empty($_POST['stid'])) && (empty($_POST['stpass']) && empty($_POST['stcour']))){*/ 
            $stname=$_POST['stname'];
            $stid=$_POST['stid'];
            $stpas=$_POST['stpass'];
            $stcour=$_POST['stcour'];

            $sql="UPDATE `students` SET sname='$stname', studentid='$stid', spass='$stpas' WHERE uid='$upsid';";
            $res=$con->prepare($sql);
                if($res->execute()){
                   $que="UPDATE `adminsion` SET cid='$stcour' WHERE pid='$upsid';";
                   $r=$con->prepare($que);
                   if($r->execute()){
                        echo'<script>alert("Update Successfully.")</script>';
                   } 
                }

            //}else{echo'<script>alert("Fill all data.");</script>';}
        }
    }
}//End of function
function del_stu(){
    if(isset($_POST['delst'])){
        include'db.php';
        $dsid=$_POST['delid'];
        $sql="DELETE  FROM `students` WHERE uid='$dsid';";
        $result=$con->prepare($sql);
        if($result->execute()){
            $dque="DELETE  FROM `adminsion` WHERE pid='$dsid';";
            $res=$con->prepare($dque);
            if($res->execute()){
                echo'<script>alert("Delete Permanently");</script>';
            }
        }
    }
}//end of funciton
function tab_updatestu(){

          include('db.php');
          $sql = "SELECT * FROM `students`;";
          $rister=$con->prepare($sql);
          $rister->execute();
          $i=1;
          while($rest = $rister->fetch(PDO::FETCH_ASSOC)){

            echo '<tr>
                    <td>'.$i++.'</td>
                    <td>'.$rest['studentid'].'</td>
                    <td>'.$rest['sname'].'</td>';
            
            $search = $rest['uid'];
            $sql1 = "SELECT * FROM `adminsion` WHERE `pid`='$search' ;";
              $rister1=$con->prepare($sql1);
              $rister1->execute();
              $i=1;
              while($rest1 = $rister1->fetch(PDO::FETCH_ASSOC)){ $search2=$rest1['cid'];}

              $sql2 = "SELECT * FROM `courses` WHERE `uid`='$search2' ;";
              $rister2=$con->prepare($sql2);
              $rister2->execute();
              $i=1;
              while($rest2 = $rister2->fetch(PDO::FETCH_ASSOC)){ $course=$rest2['cname'];}

            echo'<td>'.$course.'</td>';

             echo '<td><a href="?upsid='.$rest['uid'].'" class="btn btn-sm btn-primary" >Edit</a></td>';

            echo  '<td><form method="POST">
                            <input type="hidden" name="delid" value="'.$rest['uid'].'">
                            <input type="submit" name="delst" class="btn btn-sm btn-danger" value="Delete">
                        </form>
                    </td>';
                    echo '</tr>';
          
          }

}//end of function
function add_stu(){

    if(isset($_POST['addstu'])){

        if(!(empty($_POST['sname']) && empty($_POST['sid'] && empty($_POST['semail']) && empty($_POST['spass']) && $_POST['cid']=="0" ))){

            $sname = $_POST['sname'];
            $sid = $_POST['sid'];
            $spass = $_POST['spass'];
            $cid = $_POST['cid'];
            $semail = $_POST['semail'];
            $simg="img/profile/default.png";

            include('db.php');
            try{
            $sql = "INSERT INTO `students`( `studentid`, `sname`, `semail`, `spass` , `simg`) VALUES ( '$sid', '$sname','$semail','$spass','$simg');";
            
            $frost=$con->prepare($sql);
            
            if($frost->execute()){ 

                 $search = $sid;
                 $sql2 = "SELECT * FROM `students` WHERE `studentid`='$search' LIMIT 1;";
                  $foster1=$con->prepare($sql2);
                  $foster1->execute();
                  $dataset1 = $foster1->fetch(PDO::FETCH_ASSOC);
                $pid = $dataset1['uid'];
                $sql1 = "INSERT INTO `adminsion`( `pid`, `cid`) VALUES ( '$pid', '$cid');";
                $frost1=$con->prepare($sql1);
                if($frost1->execute()){
                    if($frost1->rowCount() === 1){ 
                        alert('done');
                        send_Email();
                        echo"<script>window.location.reload();</script>";
                    } 
                } 
                else {  echo "<script>alert('error')</script>";  }

            } else {  echo "<script>alert('error')</script>";  }
        }catch(Exception $e){

        }

        }

    }//end of if

}//end of function

function uplogo(){
if(isset($_POST['addinfo'])){
    include'db.php';
    if (!empty($_FILES['logo']['tmp_name'])) {

        $limg=$_FILES['logo']['tmp_name'];
        $logo=gern_code("img_",15).".png";
        $target="../img/".$logo;
        move_uploaded_file($limg , $target);

        $wname=$_POST['wname'];

        $sql="UPDATE `users` SET webname='$wname', u_logo='$logo' WHERE uid='1';";
        $res=$con->prepare($sql);
        if($res->execute()){
            echo'<script>alert("Changed Successfully.");</script>';
         }
        }
    }
}//end of function

function chechurl(){
    if (isset($_GET['code']) && isset($_GET['do'])) {
        if (!(empty($_GET['code']) && empty($_GET['do']))) {
            $dest = (int)$_GET['do'];
        } else { header('Location: test.php?2'); }
    } else { header('Location: test.php?3'); }
}//end of function

function addqueimg(){

    if (isset($_POST['addimg'])) {
        if (!empty($_FILES['qimg']['tmp_name'])) {
            if (!empty($_FILES['ans1']['tmp_name']) and !empty($_FILES['ans2']['tmp_name']) and !empty($_FILES['ans3']['tmp_name']) and !empty($_FILES['ans4']['tmp_name']) ) {
                if (!empty($_POST['rans']) and !empty($_POST['pm']) and !empty($_POST['nm'])) {
                    
                    $quest = $_FILES['qimg']['tmp_name'];
                        $qimg = gern_code("img_",15).".png";
                        $qtarget =  $qimg;
                        move_uploaded_file($quest,$qtarget);

                    $pans1 = $_FILES['ans1']['tmp_name'];
                        $aimg['1'] = gern_code("img_",15).".png";
                        $a1target =  $aimg['1'];
                        move_uploaded_file($pans1,$a1target);

                    $pans2 = $_FILES['ans2']['tmp_name'];
                        $aimg['2'] = gern_code("img_",15).".png";
                        $a2target =  $aimg['2'];
                        move_uploaded_file($pans2,$a2target);

                    $pans3 = $_FILES['ans3']['tmp_name'];
                        $aimg['3'] = gern_code("img_",15).".png";
                        $a3target =  $aimg['3'];
                        move_uploaded_file($pans3,$a3target);

                    $pans4 = $_FILES['ans4']['tmp_name'];
                        $aimg['4'] = gern_code("img_",15).".png";
                        $a4target =  $aimg['4'];
                        move_uploaded_file($pans4,$a4target);

                    $rans=$_POST['rans'];
                    $pm = $_POST['pm'];
                    $nm = $_POST['nm'];
                    $tid = (int)$_GET['do'];
                    $secid=(int)$_GET['sudo'];
                    $tcode = base64_decode(urldecode($_GET['code']));
                    $qcode = gern_code("qimg",30);
                    $scode = "unknown";

     try {

          include('db.php');

          $fsql = "SELECT * FROM `exams` WHERE `uid`='$tid' LIMIT 1;";
          $holper=$con->prepare($fsql);
          $holper->execute();
          $frest = $holper->fetch(PDO::FETCH_ASSOC);
          $sid = $frest['sub'];

          $q_sql = "INSERT INTO `questions`(`tid`, `tcode`, `qcode`, `scode`, `sid`, `text`, `pm` ,`nm` ,`type`,`secid`) VALUES ( '$tid', '$tcode', '$qcode', '$scode', '$sid', '$qimg', '$pm' ,'$nm' ,'1','$secid' )";

          $i_quest=$con->prepare($q_sql);
          $i_quest->execute();

          $get_qid = "SELECT `uid` FROM `questions` WHERE `qcode`='$qcode' AND `secid`='$secid' LIMIT 1;";
          $get_q_id=$con->prepare($get_qid);
          $get_q_id->execute();
          $rest = $get_q_id->fetch(PDO::FETCH_ASSOC);
          $qid = $rest['uid'];

          foreach ($aimg as $anss ) {
          
          $pa_sql = "INSERT INTO `p_answers`( `qid`,`qcode`, `pans`, `tid`) VALUES ( '$qid' ,'$qcode', '$anss', '$tid' );";
          $pa_quest=$con->prepare($pa_sql);
          $pa_quest->execute();

         }

          $a_sql = "INSERT INTO `answers`( `qid`, `qcode`, `ans`, `tid`,`tcode`) VALUES ( '$qid' ,'$qcode', '$rans', '$tid','$tcode');";

          $a_quest=$con->prepare($a_sql);
          $a_quest->execute();

          } catch (Exception $e) {   print "Error!: " . $e->getMessage() . "<br/>"; die();    }

                }else { header('Location: test.php?1'); }
            }else { header('Location: test.php?2'); }
        }else { header('Location: test.php?3'); }
    }

}//end of question Image
function random_rep_num($size) {
  $alpha_key = 'q';
  $keys = range('A', 'Z');

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

// function addque()
// {
//     $err=0;
//     if (isset($_POST['addque']))
//     {
//         // print_r($_POST); die();
//         if (isset($_POST['quest']))
//         {
//             if (isset($_POST['pans1']) and isset($_POST['pans2']) and isset($_POST['pans3']) and isset($_POST['pans4']) )
//             {
//                 if (!empty($_POST['wans']) and !empty($_POST['pm']) and !empty($_POST['nm']))
//                 {
//                     $quest = urlencode(base64_encode($_POST['quest']));
//                     $pans['1'] = urlencode(base64_encode($_POST['pans1']));
//                     $pans['2'] = urlencode(base64_encode($_POST['pans2']));
//                     $pans['3'] = urlencode(base64_encode($_POST['pans3']));
//                     $pans['4'] = urlencode(base64_encode($_POST['pans4']));
//                     $ans = $_POST['wans'];
//                     $pm = $_POST['pm'];
//                     $nm = $_POST['nm'];
//                     $tid = (int)$_GET['do'];
//                     $secid=(int)$_GET['sudo'];
//                     $tcode = base64_decode(urldecode($_GET['code']));
//                     $qcode = gern_code("quest",30);
//                     $scode = "unknown";
//                     $tmpnm="";
//                     $tmps = array("qimg"=>$_FILES["qimg"]["tmp_name"],"ans1"=>$_FILES["ans1"]["tmp_name"],"ans2"=>$_FILES["ans2"]["tmp_name"],"ans3"=>$_FILES["ans3"]["tmp_name"],"ans4"=>$_FILES["ans4"]["tmp_name"]);
//                     $imgs=array("qimg"=>"no-image","ans1"=>"no-image","ans2"=>"no-image","ans3"=>"no-image","ans4"=>"no-image");
//                     $code=base64_decode(urldecode($_GET['code']));
//                     $path=create_dir($code);
//                     foreach($imgs as $key=>$vl)
//                     {
//                         if($_FILES[$key]['size']!=0)
//                         {
//                             if($key!="qimg")
//                             {
//                                 $filetype = strtolower(pathinfo(basename($_FILES[$key]["name"]),PATHINFO_EXTENSION));
//                                 if($filetype=="bmp" OR $filetype=="png" OR $filetype=="jpg" OR $filetype=="jpeg" OR $filetype=="svg")
//                                 {
//                                     if($_FILES[$key]["type"]=="image/bmp" OR $_FILES[$key]["type"]=="image/png" OR $_FILES[$key]["type"]=="image/jpeg" OR $_FILES[$key]["type"]=="image/svg+xml")
//                                     {
//                                         $img_tcose = gern_code("img_",15);
//                                         $tmpnm=$path."/ans/".$img_tcose.".".$filetype;
//                                         if(move_uploaded_file($_FILES[$key]["tmp_name"], $tmpnm))
//                                         {
//                                             $imgs[$key]=$code."/ans/".$img_tcose.".".$filetype;
//                                         }
//                                         else {echo '<script> alert("Error a104"); </script>'; $err=1;}
//                                     }
//                                     else {echo '<script> alert("Error a103"); </script>'; $err=1;}
//                                 }
//                                 else {echo '<script> alert("Error a102"); </script>'; $err=1;}
//                             }
//                             else
//                             {
//                                 $filetype = strtolower(pathinfo(basename($_FILES[$key]["name"]),PATHINFO_EXTENSION));
//                                 if($filetype=="bmp" OR $filetype=="png" OR $filetype=="jpg" OR $filetype=="jpeg" OR $filetype=="svg")
//                                 {
//                                     if($_FILES[$key]["type"]=="image/bmp" OR $_FILES[$key]["type"]=="image/png" OR $_FILES[$key]["type"]=="image/jpeg" OR $_FILES[$key]["type"]=="image/svg+xml")
//                                     {
//                                         $img_tcose = gern_code("img_",15);
//                                         $tmpnm=$path."/que/".$img_tcose.".".$filetype;
//                                         if(move_uploaded_file($_FILES[$key]["tmp_name"], $tmpnm))
//                                         {
//                                             $imgs[$key]=$code."/que/".$img_tcose.".".$filetype;
//                                         }
//                                         else {echo '<script> alert("Error q104"); </script>'; $err=1;}
//                                     }
//                                     else {echo '<script> alert("Error q103"); </script>'; $err=1;}
//                                 }
//                                 else {echo '<script> alert("Error q102"); </script>'; $err=1;}
//                             }
//                         }
//                         //else {echo '<script> alert("Error 101"); </script>'; $err=1;}
//                     }

//                     if(!$err)
//                     {
//                         try
//                         {
//                             include('db.php');
//                             $fsql = "SELECT * FROM `exams` WHERE `uid`='$tid' LIMIT 1;";
//                             $holper=$con->prepare($fsql);
//                             $holper->execute();
//                             $frest = $holper->fetch(PDO::FETCH_ASSOC);
//                             $sid = $frest['sub'];
//                             $qimg=$imgs["qimg"];
//                             $q_sql = "INSERT INTO `questions`(`tid`, `tcode`, `qcode`, `scode`, `sid`, `text`, `qimg`, `pm` ,`nm`,`secid`) VALUES ( '$tid', '$tcode', '$qcode', '$scode', '$sid', '$quest', '$qimg', '$pm' ,'$nm','$secid' )";

//                             $i_quest=$con->prepare($q_sql);
//                             $i_quest->execute();

//                             $get_qid = "SELECT `uid` FROM `questions` WHERE `qcode`='$qcode' AND `secid`='$secid' LIMIT 1;";
//                             $get_q_id=$con->prepare($get_qid);
//                             $get_q_id->execute();
//                             $rest = $get_q_id->fetch(PDO::FETCH_ASSOC);
//                             $qid = $rest['uid'];
//                             //$a1=1;
//                             foreach ($pans as $k => $anss ) 
//                             {
//                                 $pimg=$imgs["ans".$k];
//                                 $pa_sql = "INSERT INTO `p_answers`( `qid`,`qcode`, `pans`, `pimg`, `tid`) VALUES ( '$qid' ,'$qcode', '$anss', '$pimg', '$tid' );";
//                                 $pa_quest=$con->prepare($pa_sql);
//                                 $pa_quest->execute();
//                                 //$a1++;

//                             }

//                             $a_sql = "INSERT INTO `answers`( `qid`, `qcode`, `ans`, `tid`) VALUES ( '$qid' ,'$qcode', '$ans', '$tid' );";

//                             $a_quest=$con->prepare($a_sql);
//                             $a_quest->execute();

//                         } 
//                         catch (Exception $e) {   print "Error!: " . $e->getMessage() . "<br/>"; die();    }
//                     }
//                 }
//                 else { header('Location: test.php?1'); }
//             }
//             else { header('Location: test.php?2'); }
//         }
//         else { header('Location: test.php?3'); }
//     }
// }//end of question
function addque()
{
    $err=0;
    if (isset($_POST['addque']))
    {
        // print_r($_POST); die();
        if (isset($_POST['quest']))
        {
            if (isset($_POST['pans1']) and isset($_POST['pans2']) and isset($_POST['pans3']) and isset($_POST['pans4']) )
            {
                if (!empty($_POST['wans']) and !empty($_POST['pm']) and !empty($_POST['nm']))
                {
                    $quest = urlencode(base64_encode($_POST['quest']));
                    $hquest = urlencode(base64_encode($_POST['hquest']));
                    $pans['1'] = urlencode(base64_encode($_POST['pans1']));
                    $pans['2'] = urlencode(base64_encode($_POST['pans2']));
                    $pans['3'] = urlencode(base64_encode($_POST['pans3']));
                    $pans['4'] = urlencode(base64_encode($_POST['pans4']));
                    $hans['1'] = urlencode(base64_encode($_POST['hans1']));
                    $hans['2'] = urlencode(base64_encode($_POST['hans2']));
                    $hans['3'] = urlencode(base64_encode($_POST['hans3']));
                    $hans['4'] = urlencode(base64_encode($_POST['hans4']));
                    $ans = $_POST['wans'];
                    $pm = $_POST['pm'];
                    $nm = $_POST['nm'];
                    $tid = (int)$_GET['do'];
                    $secid=(int)$_GET['sudo'];
                    $tcode = base64_decode(urldecode($_GET['code']));
                    $qcode = gern_code("quest",30);
                    $scode = "unknown";
                    $tmpnm="";
                    $tmps = array("qimg"=>$_FILES["qimg"]["tmp_name"],"ans1"=>$_FILES["ans1"]["tmp_name"],"ans2"=>$_FILES["ans2"]["tmp_name"],"ans3"=>$_FILES["ans3"]["tmp_name"],"ans4"=>$_FILES["ans4"]["tmp_name"]);
                    $imgs=array("qimg"=>"no-image","ans1"=>"no-image","ans2"=>"no-image","ans3"=>"no-image","ans4"=>"no-image");
                    $code=base64_decode(urldecode($_GET['code']));
                    $path=create_dir($code);
                    foreach($imgs as $key=>$vl)
                    {
                        if($_FILES[$key]['size']!=0)
                        {
                            if($key!="qimg")
                            {
                                $filetype = strtolower(pathinfo(basename($_FILES[$key]["name"]),PATHINFO_EXTENSION));
                                if($filetype=="bmp" OR $filetype=="png" OR $filetype=="jpg" OR $filetype=="jpeg" OR $filetype=="svg")
                                {
                                    if($_FILES[$key]["type"]=="image/bmp" OR $_FILES[$key]["type"]=="image/png" OR $_FILES[$key]["type"]=="image/jpeg" OR $_FILES[$key]["type"]=="image/svg+xml")
                                    {
                                        $img_tcose = gern_code("img_",15);
                                        $tmpnm=$path."/ans/".$img_tcose.".".$filetype;
                                        if(move_uploaded_file($_FILES[$key]["tmp_name"], $tmpnm))
                                        {
                                            $imgs[$key]=$code."/ans/".$img_tcose.".".$filetype;
                                        }
                                        else {echo '<script> alert("Error a104"); </script>'; $err=1;}
                                    }
                                    else {echo '<script> alert("Error a103"); </script>'; $err=1;}
                                }
                                else {echo '<script> alert("Error a102"); </script>'; $err=1;}
                            }
                            else
                            {
                                $filetype = strtolower(pathinfo(basename($_FILES[$key]["name"]),PATHINFO_EXTENSION));
                                if($filetype=="bmp" OR $filetype=="png" OR $filetype=="jpg" OR $filetype=="jpeg" OR $filetype=="svg")
                                {
                                    if($_FILES[$key]["type"]=="image/bmp" OR $_FILES[$key]["type"]=="image/png" OR $_FILES[$key]["type"]=="image/jpeg" OR $_FILES[$key]["type"]=="image/svg+xml")
                                    {
                                        $img_tcose = gern_code("img_",15);
                                        $tmpnm=$path."/que/".$img_tcose.".".$filetype;
                                        if(move_uploaded_file($_FILES[$key]["tmp_name"], $tmpnm))
                                        {
                                            $imgs[$key]=$code."/que/".$img_tcose.".".$filetype;
                                        }
                                        else {echo '<script> alert("Error q104"); </script>'; $err=1;}
                                    }
                                    else {echo '<script> alert("Error q103"); </script>'; $err=1;}
                                }
                                else {echo '<script> alert("Error q102"); </script>'; $err=1;}
                            }
                        }
                        //else {echo '<script> alert("Error 101"); </script>'; $err=1;}
                    }

                    if(!$err)
                    {
                        try
                        {
                            include('db.php');
                            $fsql = "SELECT * FROM `exams` WHERE `uid`='$tid' LIMIT 1;";
                            $holper=$con->prepare($fsql);
                            $holper->execute();
                            $frest = $holper->fetch(PDO::FETCH_ASSOC);
                            $sid = $frest['sub'];
                            $qimg=$imgs["qimg"];
                            $q_sql = "INSERT INTO `questions`(`tid`, `tcode`, `qcode`, `scode`, `sid`, `text`,`htext`, `qimg`, `pm` ,`nm`,`secid`) VALUES ( '$tid', '$tcode', '$qcode', '$scode', '$sid', '$quest', '$hquest', '$qimg', '$pm' ,'$nm','$secid' )";

                            $i_quest=$con->prepare($q_sql);
                            $i_quest->execute();

                            $get_qid = "SELECT `uid` FROM `questions` WHERE `qcode`='$qcode' AND `secid`='$secid' LIMIT 1;";
                            $get_q_id=$con->prepare($get_qid);
                            $get_q_id->execute();
                            $rest = $get_q_id->fetch(PDO::FETCH_ASSOC);
                            $qid = $rest['uid'];
                            //$a1=1;
                            foreach ($pans as $k => $anss ) 
                            {
                                $pimg=$imgs["ans".$k];
                                $hns=$hans[$k];
                                $pa_sql = "INSERT INTO `p_answers`( `qid`,`qcode`, `pans`,`hans`, `pimg`, `tid`) VALUES ( '$qid' ,'$qcode', '$anss','$hns', '$pimg', '$tid' );";
                                $pa_quest=$con->prepare($pa_sql);
                                $pa_quest->execute();
                                //$a1++;

                            }

                            $a_sql = "INSERT INTO `answers`( `qid`, `qcode`, `ans`, `tid`) VALUES ( '$qid' ,'$qcode', '$ans', '$tid' );";

                            $a_quest=$con->prepare($a_sql);
                            $a_quest->execute();

                        } 
                        catch (Exception $e) {   print "Error!: " . $e->getMessage() . "<br/>"; die();    }
                    }
                }
                else { header('Location: test.php?1'); }
            }
            else { header('Location: test.php?2'); }
        }
        else { header('Location: test.php?3'); }
    }
}//end of question

function lst_tab_que(){

    include('db.php');
    $secid = (int)$_GET['sudo'];
    $tcode=base64_decode(urldecode($_GET['code']));
    $tid=(int)$_GET['do'];
          $sql = "SELECT * FROM `questions` WHERE `secid` = '$secid' AND `tcode`='$tcode' AND `tid`='$tid';";
          $rister=$con->prepare($sql);
          $rister->execute();
          $i=1;
          while($rest = $rister->fetch(PDO::FETCH_ASSOC)){
            $aid=$rest['uid'];
                echo '<tr>
                    <td>'.$i++.'</td>';
                    if($rest['qimg']!='no-image'){
                        echo ' <td><img class="" src="/img/'.$rest['qimg'].'" >'.base64_decode(urldecode($rest['text'])).'</td>';
                    } else {
                         echo ' <td>'.base64_decode(urldecode($rest['text'])).'<br><span class="devlys-hindi">'.base64_decode(urldecode($rest['htext'])).'</span></td>';
                    }
                    echo '<td>'.$rest['pm'].'</td>
                    <td>'.$rest['nm'].'</td>';
                 $sq="SELECT * FROM `answers` WHERE uid='$aid';";
                 $rw=$con->prepare($sq);
                 $rw->execute();
                 while($row=$rw->fetch()){   
                    echo'<td>'.$row['ans'].'</td>';
                }
                    echo '<td>
                    <form action="" method="post" accept-charset="utf-8">
                    <input type="hidden" name="uid" value="'.$rest['uid'].'">
                    <input type="submit" class="btn btn-sm btn-danger" value="Delete" name="dstate">    
                    </form>
                  </td>
                    </tr>';    
        }

}
//end of function
function del_tst_sec(){

        if(isset($_POST['uid']) and isset($_POST['delsec'])){
            if(!empty($_POST['uid'])){
                  include('db.php');
                  $uid = $_POST['uid'];
                  $sql = "DELETE FROM `section` WHERE uid = '$uid';";
                  $rister=$con->prepare($sql);
                  if($rister->execute()){
                    echo "<script>alert('Done')</script>";
                } else { 
                    echo "<script>alert('error')</script>";
                }
            }
        }

}//end of function

function sect_tab(){
    include'db.php';
    $eid=(int)$_GET['do'];
    $code=base64_decode(urldecode($_GET['code']));
    $sql="SELECT * FROM `exams` WHERE tcode='$code' AND uid='$eid';";
    $res=$con->prepare($sql);
    $res->execute();
    while($row=$res->fetch()){
        $s="SELECT * FROM `section` WHERE tid='$eid' AND `tcode`='$code';";
        $tmp=$con->prepare($s);
        $tmp->execute();
        $secid=0;
        $k =0;
        while($r=$tmp->fetch()){
                $k++;
            echo'<tr>
                    <td>'.$row['tname'].'</td>
                    <td>'.$r['secid'].'</td>
                    ';
            
            echo'<td>'.$r['name'].'</td>';
            $secid=$r['secid'];
          $qry="SELECT * FROM `questions` WHERE  secid='$secid' AND `tcode`='$code'; ";
          $result=$con->prepare($qry);
          $result->execute();
          $totalq=0;
          $totm=0;
          while($rw=$result->fetch()){$totalq++; $totm=$totm+$rw['pm'];}
                echo'
                    <td>'.$totalq.'</td>
                    <td>'.$totm.'</td>
                ';
          
          $addq = '';
            $addq.= '<a href="questions.php?code='.urlencode(base64_encode($r['tcode'])).'&do='.urlencode($row['uid']).'&sudo='.urlencode($secid).'" class="btn btn-xs btn-warning" >Add Q.</a>';  
                echo'<td>'.$addq.'</td>';
                echo'<td>
                        <form action="" method="post" accept-charset="utf-8">
                        <input type="hidden" name="uid" value="'. $secid.'">
                        <input type="submit" class="btn btn-xs btn-danger" value="Delete" name="delsec">    
                        </form>
                      </td>';
                echo'</tr>';      
    }
  }
}//End of function
function make_test(){

    if(isset($_POST['import_exam'])){
    

        $ttime = $_POST['ttime'];
        $tname = $_POST['tname'];
        $cid = $_POST['cid'];
        $sub = $_POST['sub'];
        if(isset($_POST['is_sec_time']) AND $_POST['is_sec_time']=='on') $is_sec_time=1;
        else $is_sec_time=0;

            if(!( $cid=="0" and $sub=="0" and empty($tname) and is_int(empty($ttime)) ) )
            {
                 $tcode = gern_code("test",19);
                 include('db.php');
                $u_test = "INSERT INTO `exams` (`sub`, `cid`, `tcode`, `tname`, `ttime`, `is_sec_time`) VALUES ( '$sub', '$cid', '$tcode', '$tname', '$ttime', '$is_sec_time' )";

                $test_res=$con->prepare($u_test);

                if($test_res->execute()){  

                $sql="SELECT * FROM `exams` WHERE tcode='$tcode';";
                $result=$con->prepare($sql);
                if($result->execute()){
                    $r=$result->fetch();
                    $tid=$r['uid'];
                    if(!empty($_POST['selv'])){
                        $temp=$_POST['selv'];
                        for($j=1; $j<=$temp; $j++){
                         $secn=$_POST['sec'.$j];
                         if($is_sec_time)
                         {
                            $sectime=$_POST['sectime'.$j];
                            $sec="INSERT INTO `section`(`name`,`tcode`,`tid`,`secid`,`sectime`) VALUES('$secn','$tcode','$tid','$j','$sectime');";
                         }
                         else   
                            $sec="INSERT INTO `section`(`name`,`tcode`,`tid`,`secid`) VALUES('$secn','$tcode','$tid','$j');";
                         $res=$con->prepare($sec);
                         $res->execute();
                        }
                    }
                }
                     echo "<script>alert('done')</script>"; 
                
                } else { echo "<script>alert('error')</script>"; } 
            
            } 

    } 

}//end of function

function messanger(){

    if (isset($_POST['msg'])) {
        include('in/db.php'); 

    $sql = "SELECT * FROM `messages` WHERE `state` = '0' AND `send`='0';"; 
    $result = $con->prepare($sql); 
    $result->execute(); 
    while($data = $result->fetch(PDO::FETCH_ASSOC)){ 

        $sql1 = "SELECT * FROM `students` ;"; 
        $result1 = $con->prepare($sql1); 
        $result1->execute(); 
        $data1 = $result1->fetch(PDO::FETCH_ASSOC);
        $simg = $data1['simg'];
        $sname = $data1['sname'];
        // $simg = "images/profile/male/image_1.png";
        echo ' 
            <div class="email-list-item" onclick="load('.$data['uid'].')">
                <a href="#" class="email-list-item-inner">
                    <img class="profile-img" src="../'.$simg.'" alt="profile image">
                    <div class="date">'.$data['tstemp'].'</div>
                    <p class="user_name">'.$sname.'</p>
                    <p class="mail-text">'.$data['subject'].'</p>
                </a>
            </div>
            ';
    }
    }

}//end of function

function loadmsg(){
    if (isset($_POST['datamsg'])) {
        if (!empty($_POST['data'])) {
            include('in/db.php'); 

$uid = $_POST['data'];

$sql = "SELECT * FROM `messages` WHERE `uid` = '$uid' AND `send`='0';"; 
    $result = $con->prepare($sql); 
    $result->execute(); 
    while($data = $result->fetch(PDO::FETCH_ASSOC)){ 

        $sql1 = "SELECT * FROM `students` ;"; 
        $result1 = $con->prepare($sql1); 
        $result1->execute(); 
        $data1 = $result1->fetch(PDO::FETCH_ASSOC);
        $simg = $data1['simg'];
        $sname = $data1['sname'];
        $semail = $data1['semail'];
        // $semail = 'dumey@email.in';
        $sid = $data1['studentid'];
        // $simg = "images/profile/male/image_1.png";

echo ' 
    <div class="preview-header"><img class="profile-img" src="../'.$simg.'" alt="profile image">
                    <p class="user_name">Name: '.$sname.'  ( '.$sid.' )</p><a class="user-email" href="mailto:'.$semail.'">'.$semail.'</a>
                    <p class="date">'.$data['tstemp'].'</p>
                </div>
                <div class="email-container">
                    <div class="email-content">
                        <p><b>'.$data['subject'].'</b></p>
                        <p>'.$data['msg'].'</p>
                    </div>
                    <form action="" method="post">
                    <input type="hidden" name="mid" value="'.$data['uid'].'">
                    <input type="hidden" name="sid" value="'.$data1['uid'].'">
                        <div class="email-reply">
                            <p>Reply</p>
                            <div class="btn-group email-actions mr-n0 mr-md-n4" data-toggle="buttons">
                                <button class="btn btn-white btn-xs component-flat p-0">
                                    <i class="mdi mdi-reply"></i>
                                </button>
                                <button class="btn btn-white btn-xs component-flat p-0">
                                    <i class="mdi mdi-reply-all"></i>
                                </button>
                                <button class="btn btn-white btn-xs component-flat p-0">
                                    <i class="mdi mdi-forward"></i>
                                </button>
                                <button class="btn btn-white btn-xs component-flat p-0"><i class="mdi mdi-delete"></i>
                                </button>
                            </div>
                            <div class="textarea-wrapper">
                                <div class="d-block">
                                    <textarea name="msg" class="form-control" rows="3"></textarea>
                                </div>
                            </div>
                        </div>
                        <button class="btn btn-primary btn-block mt-2" type="submit" name="umsg">SEND<i class="ml-4 mdi mdi-send"></i>
                        </button>
                    </form>
                </div> ';
            }
        }
    }
}//end of function

function promsg(){

    if (isset($_POST['umsg'])) {
        if ( !empty($_POST['mid']) && !empty($_POST['msg']) && $_POST['sid']) {
            include('db.php');
            $uid = $_POST['mid'];
            $sid = $_POST['sid'];
            $sql = "UPDATE `messages` SET `state`='1' WHERE `uid` = '$uid';"; 
            $result = $con->prepare($sql); 
            if($result->execute()){
                $msg = $_POST['msg'];
                $sub = 'Reply from Admin';
                $sql = "INSERT INTO `messages` (`sid`, `send`, `subject`, `msg` ) 
                            VALUES ('$sid', '1', '$sub', '$msg' );";
                $result = $con->prepare($sql); 
                if($result->execute()){   echo '<script>alert("hol");</script>';         }
            }

        }
    }

}//end of function


function newmsg(){

    if (isset($_POST['send'])) {
        if ( !empty($_POST['subject']) && !empty($_POST['msg']) && !empty($_POST['sid'])) {
            include('db.php');

            $sid = $_POST['sid'];
            $msg = $_POST['msg'];
            $sub = $_POST['subject'];

            $uid = $_POST['sid'];

            $sql = "SELECT * FROM `students` WHERE `studentid` = '$uid' LIMIT 1;"; 
            $result = $con->prepare($sql); 
            $result->execute(); 
            if($data = $result->fetch(PDO::FETCH_ASSOC)){
                $sid = $data['uid'];
                $sql1 = "INSERT INTO `messages` (`sid`, `send`, `subject`, `msg` ) 
                            VALUES ('$sid', '1', '$sub', '$msg' );";
                $result1 = $con->prepare($sql1); 
                if($result1->execute()){   echo '<script>alert("SENT");</script>';  }
            } else {  echo '<script>alert("Student Not FOund");</script>'; }
            
        }
    }

}//end of function

?>