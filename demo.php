<?php include("in/fun.php"); //$_GET['sudo']='test2demo';
 dashHead();
if(!empty($_GET['sudo']) AND $_GET['sudo']=="test2demo" AND empty($_POST['subtest']))
{
    
?>

        <form action="demo-result" method="post" accept-charset="utf-8" name="test_submit" id="Test_Submit">
        <input type="hidden" name="test" value="<?php echo $_GET['sudo']; ?>">
    
            
            <!----- HEADER ----->
            <div class="header">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-6" id="left">
                            <img src="img/<?php echo viewlogo();?>" class="img-fluid" alt="" height="50" width="50">
                            
                        </div>
                        <div class="col-md-3 text-white pt-2" id="middle">
                            <h4 id="time_show"></h4>
                        </div>

                        <div class="col-md-3" id="right">
                            <div class="form-row">
                                <div class="col">
                                    <h6>Demo User Name</h6>
                                    <span>ID:  STUDENT001 </span>
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
                                    <h5>Test Name</h5>
                                </div>
                                <div class="row my-2">
                                    <?php fetch_sec(); ?>
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
                        
                        <div class="col-md-3 my-1" style="bottom: 2px;">
                            <div class="card">
                                <div class="card-header">
                                    <div class="form-row">
                                        <div class="col">
                                            <i class="fas fa-circle border border-success rounded text-success m-2" style="font-size: 11px;"></i><span class="text-success"> Attempted</span>
                                        </div>
                                        <div class="col">
                                            <i class="fas fa-circle border border-warning rounded text-warning m-2" style="font-size: 11px;"></i><span class="text-warning"> Unattempted</span>
                                        </div>
                                    </div>
                                    
                                    <div class="form-row">
                                        <div class="col">
                                            <i class="fas fa-circle border border-dark rounded text-dark m-2" style="font-size: 11px;"></i><span class="text-dark"> Unseen</span>
                                        </div>
                                    </div>
                                </div>
                                
                                
                                <div class="card-body">
                                    <div class="numbers">
                                        <div class="form-row">
                                           <?php questsno(); get_time();?>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="card-footer">
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
          </script>
<?php
dashFoot();
}
else if(empty($_GET['sudo']) AND empty($_POST['subtest']))
{
    ?>
            <div class="container-fluid">
              <div class="caption text-center py-3 header-text-white">
                <h3>Online Test Series</h3>
              </div>
              <div class="row">
                <div class="col-md-12">
                  <div class="card rounded-0 main-card-css-start">
                    <div class="card-body rounded-0">
                      <div class="row">
                        <div class="col-md-12">
                          <div class="table-responsive">
                            <table class="table table-bordered">
                              <thead class="bg-dark text-white">
                                <tr class="text-center">
                                  <td>Exam Code</td>
                                  <td>Total Questions</td>
                                  <td>Total Time</td>
                                  <td>Maximum Marks</td>
                                </tr>
                              </thead>
                              <tbody>
                                <tr class="text-center"">
                                <?php term_page("test2demo"); ?>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-12">
                          <div class="caption general-text">
                            <h4>General Instructions for RRB-JE Online Test Series:</h4>
                            <div class="mobile-text">
                              <p>मोबाइल में परीक्षा देते समय UC ब्राउसर का उपयोग न करे </p>
                              <p>Please do not use UC Browser in Mobile while using the exam window</p>
                            </div>
                          </div>
                          <div class="caption please-text">
                            <h4>Please read the following instructions carefully.</h4>
                          </div>
                          <div class="caption charts-text">
                            <p>No charts, tables or Calculator will be allowed in the examination hall. Choose the Closest numerical answer among the choices given.</p>
                            <ol class="clock-will-text">
                              <li>The clock will be set at the server. The countdown timer at the right corner of the screen will display the remaining time available for you to complete the examination. When the timer reaches zero the examination ends by itself. You need to terminate the examination or submit the paper.</li>
                              <li>The question palette displayed on the right side of the screen will show the status of each question using one of the following symbols:</li>
                              <div class="caption">
                                <ul class="">
                                  <li><span class="text-success">You have answered the question.</span></li>
                                  <li><span class="text-warning">You have not answered the question.</span> </li>
                                  <li><span class="text-dark"><strong>You have not visited the question till</strong></span> </li>
                                </ul>
                              </div>
                              <div class="caption navigation-text">
                                <p>Navigating to a Questions</p>
                              </div>
                              <li>To answer a question, do the following:</li>
                              <ul class="">
                                <li>Click on the question number in the Question Palette to go to that question directly.</li>
                                <li> Select an answer for a multiple choice type question by clicking on bubble placed before the 4 choices A, B, C, D.</li>
                                <li>Click on Save and Next to save your answer for the current question and then go to the next question.</li>
                                <li><b>Caution:</b> Note that your answer for the current question will be saved, if you navigate to another question directly by clicking on its question number.</li>
                              </ul>
                              <div class="calcilate-text">
                                <p>Calculation of marks for Paper I:</p>
                              </div>
                              <li> To Calculate  Negative marking, do the following.</li>
                              <ul class="correct-answes-text">
                                <li>Eg. Correct answers 100 x 1 = 100 marks.   Each incorrect answer carries a negative marking of eg. o.33 , which means for every wrong answer 0.33marks will be deducted</li>
                                <li>Therefore, in the above example if 25 questions were answered incorrectly then the negative marking for 25 incorrect answers would be 25 x 0.33 = 08.25.</li>
                                <li>As a result, 08.25 marks would be deducted from the correctly answered questions.</li>
                                <li>i.e., Final Score for Paper: 75 - 8.25 = 66.75</li>
                              </ul>
                            </ol>
                          </div>
                          <div class="caption">
                            <ul class="disclaimer">
                              <li><span class="online-text"> Disclaimer:</span>
                            This Online Test Series is designed by studying and surveying the previous platforms of the respective examinations. And efforts are made to replicate the actual exam patterns in all the aspects. However ENGINEER'S HEADWAY will not be responsible for any changes in exam pattern or functionality updates in the actual examinations</li>
                            <li><span class="online-text"> Declaration:</span>
                          I have read and understood all the above mentioned instructions. Also, I confirm that at the start of the examination all the computer hardware and internet connection are in proper working condition.</li>
                        </ul>
                        
                      </div>
                    </div>
                  </div>
                  <div class="text-center">
                     <a href="<?php echo'demo.php?sudo=test2demo'; ?>" > <button type="submit" class="btn btn-lg btn-outline-danger">START TEST</button></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    <?php
}
else header("Location:login");
?>    