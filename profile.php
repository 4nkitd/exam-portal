<?php include("in/fun.php"); s_logcheck(); updateProfile(); head(); ?>
           
            <!----- DASHBOARD ----->
            <div class="myexam pt-3 pb-3">
                <div class="container">
                  <form method="post" enctype="multipart/form-data">
                    <div class="card p-4 mb-5">
                        <div class="row">
                            <div class="col">
                                <h6>Student Profile Overview</h6>
                                <p>Here you can update basic information, profile image, <a href="chngpsd.php?67h"> password</a>.</p>
                            </div>
                        </div>
                        
                        <div class="dropdown-divider"></div>
                        
                        <div class="row">
                            <div class="col-md-5 pt-4">
                                <center><img src="<?php echo simg(); ?>" class="img-fluid" alt="profile" width="200"></center>
                                <center><input type="file" name='simg' required="required" class="pt-2"></center>
                                
                                
                                <div class="info pt-5">
                                    <h4>Enrollment Information</h4>
                                    <br>
                                    <div class="form-row">
                                        <div class="col">
                                            <h6>Course</h6>
                                        </div>
                                        <div class="col">
                                            <p><?php echo $_SESSION['course']; ?></p>
                                        </div>
                                    </div>
                                    <div class="dropdown-divider"></div>
                                </div>
                            </div>
                            
                            
                            <div class="col-md-7 pt-3">
                                <h4>PERSONAL DETAILS</h4>
                                
                                <div class="form-group">
                                    <label>Student Id</label>
                                    <input type="text" disabled="disabled" required="required" class="form-control rounded-0" placeholder="Student Id" value="<?php echo $_SESSION['stu']; ?>">
                                </div>
                                
                                
                                <div class="from-group">
                                    <div class="form-row">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label>Name</label>
                                                <input type="text" name="sName" required="required" class="form-control rounded-0" placeholder="Name" value='<?php echo sname(); ?>'>
                                            </div>
                                        </div>
                                        
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label>Mobile</label>
                                                <input type="text" name="sPhone" required="required" class="form-control rounded-0" placeholder="Mobile" value="<?php echo smobile(); ?>">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                
                                <div class="from-group">
                                    <div class="form-row">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label>Email Id</label>
                                                <input type="email" name="sEmail" required="required" class="form-control rounded-0" placeholder="Email" value='<?php echo semail(); ?>'>
                                            </div>
                                        </div>
                                        
                                        <div class="col-md-6">
                                            <div class="form-group">                                             
                                                <label>Gender</label>
                                                <select class="form-control" name="sGen" required="required" >
                                                    <?php echo sgen(); ?>
                                                    <option value="Male">Male</option>
                                                    <option value="Female" >Female</option>
                                                    <option value="Other">Other</option>
                                                </select>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <h4>ADDRESS DETAILS</h4>
                                
                                <div class="form-group">
                                    <label>Address</label>
                                    <textarea class="form-control rounded-0" name="sAdd" required="required" rows="3" placeholder="Address"><?php echo sadd(); ?></textarea>
                                </div>
                                
                                <div class="form-group">
                                    <label>State</label>
                                    <select class="form-control rounded-0" required="required" name="sState">
                                        <?php echo sstate(); ?>
                                        <option value="Rajasthan">Rajasthan</option>
                                    </select>
                                </div>
                                
                                <div class="from-group">
                                    <div class="form-row">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label>City</label>
                                                <input type="text" name="sCity" class="form-control rounded-0" placeholder="City" value='<?php echo scity(); ?>' required="required">
                                            </div>
                                        </div>
                                        
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label>Pin Code</label>
                                                <input type="text" name="sPinC" class="form-control rounded-0" placeholder="Pin Code" value='<?php echo spin(); ?>' required="required">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <button type="submit" name="UpdatePro" class="btn btn-success">Update</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
            </div>
            <!----- END DASHBOARD -----> 
        
<?php foot();?>