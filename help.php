<?php include('in/fun.php'); head(); s_logcheck(); inotify(); ?>
           
            <!----- DASHBOARD ----->
            <div class="myexam pt-3 pb-3">
                <div class="container">
                    <div class="card p-4">
                        <div class="row">
                            <div class="col">
                                <h6>Send Message</h6>
                                <p>Write any suggestions, feedback to exam cordinator</p>
                            </div>
                            
                            <div class="col" id="btn-right">
                                <a href="index.php" class="btn btn-danger rounded-0">Back</a>
                            </div>
                        </div>
                        
                        <div class="dropdown-divider"></div>
                        <form action="" method="post" accept-charset="utf-8">
                            
                        <div class="chngpsd pt-3">
                            <div class="form-group">
                                <label>Subject</label>
                                <input type="text" class="form-control" name="sub" >
                            </div>
                            
                            <div class="form-group">
                                <label>Explain Briefly</label>
                                <textarea class="form-control" rows="3" name="que"></textarea>
                            </div>
                            
                            <button type="submit" name="msg" class="btn btn-danger holes rounded-0">Submit</button>
                        </div>
                    </form>
                    </div>
                </div>
            </div>
            <!----- END DASHBOARD -----> 
            
            <?php foot(); ?>
        
        </body>
    </html>