<?php include('in/fun.php'); head();  s_logcheck(); inotify(); ?>
   
            <!----- DASHBOARD ----->
            <div class="myexam pt-3 pb-3">
                <div class="container">
                    <div class="card p-4">
                        <div class="row">
                            <div class="col">
                                <h6>My Inbox</h6>
                                <p>Get notifications about exams, latest updates</p>
                            </div>
                            
                            <div id="btn-right">
                                <!-- Button trigger modal -->
                                <button type="button" class="btn btn-default" data-toggle="modal" data-target="#exampleModal" style="background-color: #094477; color: #fff;"><i class="fas fa-paper-plane"></i> 
                                  Write Message
                                </button>

                                <!-- Modal -->
                                <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria- labelledby="exampleModalLabel" aria-hidden="true">
                                    <div class="modal-dialog" role="document">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h5>Send Message</h5>
                                                <button type="button" class="close" data-dismiss="modal" aria-  label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <form action="" method="post" accept-charset="utf-8">
                                            <div class="modal-body text-left">
                                                <div class="form-group">
                                                    <label>Subject</label>
                                                    <input name="sub" type="text" class="form-control" placeholder="Subject">
                                                </div>
                                                
                                                <div class="form-group">
                                                    <label>Message</label>
                                                    <textarea name="mestxt" class="form-control" rows="3" placeholder="Message"></textarea>
                                                </div>
                                            </div>
                                            <div class="modal-footer">
                                                <button name="msg" type="submit" class="btn btn-primary">Submit</button  >
                                            </div>
                                        </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="dropdown-divider"></div>
                        
                        <div class="table-responsive">
                            <table class="table table-striped table-bordered">
                                <thead>
                                    <tr>
                                        <th>Serial No.</th>
                                        <th>Subject</th>
                                        <th>Message</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <?php lstmsgs(); ?>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <!----- END DASHBOARD -----> 
        
            
<?php foot(); ?>