<?php include("in/fun.php"); s_logcheck(); subtest(); testattande(); 
get_time(); 
dashHead(); ?>
<link href="https://fonts.googleapis.com/css?family=Hind&display=swap" rel="stylesheet">
        <form action="" method="post" accept-charset="utf-8" name="test_submit" id="Test_Submit">
        <input type="hidden" name="test" value="<?php echo $_GET['sudo']; ?>">
    
            
            <!----- HEADER ----->
            <div class="header">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-6" id="left">
                            <img src="img/<?php echo viewlogo();?>" class="img-fluid" alt="" height="50" width="50">
                        <a href="index.php?out" class="btn btn-danger" id="right"> Logout </a>
                            
                        </div>
                        <div class="col-md-3 text-white pt-2" id="middle">
                            <h4 id="time_show"></h4>
                        </div>

                        <div class="col-md-3" id="right">
                            <div class="form-row">
                                <div class="col">
                                    <h6><?php echo $_SESSION["sna"]; ?></h6>
                                    <span>ID: <?php echo $_SESSION["sid"]; ?></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!----- HEADER ----->
            
            <!----- QUESTION PART ----->
            <div class="question-part">
                <div class="container-fluid">
                    <div class="row py-3">
                        <div class="col-md-9 mt-2">
                            <div class="card">
                                <div class="card card-header">
                                    <h5><?php !empty($_GET['sudo']) ? test_name($_GET['sudo']) : "Wrong Inputs";  ?></h5>
                                </div>
                                <div class="row my-2">
                                    <?php fetch_sec_with_time(); ?>
                                </div>
                                <?php questsatmp(); ?>

                                 <div class="navbar card-header navbar-default navbar-fixed-bottom pl-1  border-top" >
                                    <div class="row">
                                        <div class="col">
                                            <span class="btn btn-info btn-block"  id="prev_btn">Previous</span>
                                        </div>
                                        
                                        <div class="col">
                                            <span class="btn btn-danger btn-block"  id="clear_btn">Clear Response</span>
                                        </div>
                                        
                                        <div class="col">
                                            <span class="btn btn-info btn-block"  id="next_btn">Next</span>
                                        </div>
                                    </div>
                                </div>
                                

                            </div>

                                
                                
                        </div>
                        
                        <div class="col-md-3 mt-1 mb-4">
                            <div class="card" style="height: 600px;">
                                <div class="card-header" style="max-height: 25%;">
                                    <div class="form-row">
                                        <div class="col">
                                            <i class="fas fa-circle border border-success rounded text-success m-2" style="font-size: 11px;"></i><span class="text-success"> Attempted</span>
                                        </div>
                                        <div class="col">
                                            <i class="fas fa-circle border border-warning rounded text-warning m-2" style="font-size: 11px;"></i><span class="text-warning"> Visited</span>
                                        </div>
                                    </div>
                                    
                                    <div class="form-row">
                                        <div class="col">
                                            <i class="fas fa-circle border border-dark rounded text-dark m-2" style="font-size: 11px;"></i><span class="text-dark"> Unseen</span>
                                        </div>
                                    </div>
                                </div>
                                
                                
                                <div class="card-body" style="max-height: 65%; overflow-y: scroll;">
                                    <div class="numbers">
                                        <div class="form-row">
                                           <?php questsno_with_time(); get_time();?>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="card-footer" style="max-height: 10%;">
                                    <input type="hidden" name="subtest" value="1">
                                    <input type="submit" class="btn btn-primary w-100" name="subtest" value="Submit Exam">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!----- QUESTION PART END ------>
          </form>
          <script>
              function jump_on(id){
                    var crnt=document.querySelector('.ques_all_num.d-block').id;
                    $("#"+crnt).removeClass("d-block");
                    $("#"+crnt).addClass("d-none");
                    $("#"+id).removeClass("d-none");
                    $("#"+id).addClass("d-block");
                    check_opt(id);
                    check_opt(crnt);
                }
                function change_section(ttl,crnt)
                {
                    //alert("change_section");
                    var prv = crnt-1;
                    //alert(prv+"+"+crnt);
                    $("#btn_sec_time"+prv).removeClass("d-block");
                    $("#btn_sec_time"+prv).addClass("d-none");
                    $("#btn_sec_time"+crnt).removeClass("d-none");
                    $("#btn_sec_time"+crnt).addClass("d-block");
                    var btn_num_pre=$(".btn_sec_num"+prv+".d-block");
                    var btn_num_crt=$(".btn_sec_num"+crnt+".d-none");
                    btn_num_pre.removeClass("d-block");
                    btn_num_pre.addClass("d-none");
                    btn_num_crt.removeClass("d-none");
                    btn_num_crt.addClass("d-block");
                    jump_on($(".btn_sec_time.d-block").attr("sec-min"));
                }
          </script>
          <script>
            setInterval(function(){timer();},1000);
            function timer(){
                var chk="chck";
                //alert("Time show");
                $.ajax({
                    url: "set_time.php",
                    type: "post",
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
<?php  dashFoot2(); ?>    