<?php include('in/fun.php'); head(); s_logcheck(); cpass(); ?>
           
            <!----- DASHBOARD ----->
            <div class="myexam pt-2 pb-2">
                <div class="container">
                    <div class="card p-4 mb-5">
                        <div class="row">
                            <div class="col">
                                <h6>My Exam</h6>
                                <p>Set New Password</p>
                            </div>
                        </div>
                        
                        <div class="dropdown-divider"></div>
                        <form action="" method="post" accept-charset="utf-8">
                        <div class="chngpsd pt-3">
                            <div class="form-group">
                                <label>Current Password</label>
                                <input  name="opass"type="text" class="form-control" placeholder="Current Password">
                            </div>
                            
                            <div class="form-group">
                                <label>New Password</label>
                                <input name="npass" type="text" class="form-control" placeholder="New Password">
                            </div>
                            
                            <div class="form-group">
                                <label>Confirm Password</label>
                                <input name="ncpass" type="text" class="form-control" placeholder="Confirm Password">
                            </div>
                            
                            <input type="submit" name="cha" class="btn btn-primary rounded-0" value="Change Password">
                        </div>
                    </form>
                    </div>
                </div>
            </div>
            <!----- END DASHBOARD -----> 
        
            
            <?php foot(); ?>
        