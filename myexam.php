<?php include('in/fun.php'); head(); s_logcheck(); ?>

            <!----- DASHBOARD ----->
            <div class="myexam pt-3 pb-3">
                <div class="container">
                    <div class="card p-4">
                        <div class="row">
                            <div class="col">
                                <h6>My Exam</h6>
                            </div>
                        </div>
                        
                        <div class="dropdown-divider"></div>
                        
                        
                        <div class="table-responsive">
                            <table class="table table-striped table-bordered">
                                <thead>
                                    <tr>
                                        <th>Available Test</th>
                                        <th>Duration(Min.)</th>
                                        <th>Status/Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                   <?php 
                                            stutestlist();
                                      ?>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <!----- END DASHBOARD -----> 
        
            
<?php foot(); ?>
      