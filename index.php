<?php include('in/fun.php'); head(); s_logcheck(); ?>
    
           
            <!----- DASHBOARD ----->
            <div class="dashboard pt-3 pb-3">
                <div class="container">
                    <div class="card p-4">
                        <h3>Welcome : <strong><?php echo $_SESSION['sna']; ?></strong></h3>
                        <span>Course:- <strong><?php cou_name(); ?></strong></span>
                    </div>
                </div>
            </div>
            <!----- END DASHBOARD -----> 
            
            
            <!----- DETAIL-CARD ------>
            <div class="detail-card pb-5">
                <div class="container">
                    <div class="row">
                        <div class="col-md-4 mt-3">
                            <div class="card p-4 shadow-5" id="first-card">
                                 <h6><strong>Total Exams</strong></h6><hr>
                                 <h3 class="text-bold text-light text-center"><?php echo total_exams(); ?></h3>
                                
                            </div>
                        </div>
                        
                        <div class="col-md-4 mt-3">
                            <div class="card p-4" id="sec-card">
                                
                                <h6><strong>Attempted Exam</strong></h6><hr>
                                <h3 class="text-light text-center text-bold"><?php echo total_atms(); ?></h3>
                                
                            </div>
                        </div>
                        
                        <div class="col-md-4 mt-3">
                            <div class="card p-4" id="third-card">
                                
                                <h6><strong>Unattempted Exam</strong></h6><hr>
                                <h3 class="text-light text-center text-bold"><?php echo not_atmt(); ?></h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!----- DETAIL-CARD ------>
            
 <?php foot(); ?>       