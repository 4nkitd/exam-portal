<?php include('in/fun.php'); head(); cstates(); add_stu();?>
<body class="header-fixed">
<?php topnav(); ?>

    <div class="page-body">
        <!-- SLider sidebar -->
        <?php sidenav(); ?>
        <!-- slider sidebar end -->

        <div class="page-content-wrapper">
            <div class="page-content-wrapper-inner">

                <?php pager(__FILE__); ?>
              
              <div class="row">

                <div class="grid col-md-12 col-sm-12">
                    <p class="grid-header">Add Students</p>
                    <div class="grid-body">
                        <div class="item-wrapper">
                            <form action="" method="post">
                                <div class="form-group row showcase_row_area">
                                    <div class="col-md-3 showcase_text_area">
                                        <label for="studentName">Student Name</label>
                                    </div>
                                    <div class="col-md-9 showcase_content_area">
                                        <input name="sname" type="text" class="form-control" id="studentName" placeholder="Enter Student name">
                                    </div>
                                </div>
                                <div class="form-group row showcase_row_area">
                                    <div class="col-md-3 showcase_text_area">
                                        <label for="studentID">Student ID</label>
                                    </div>
                                    <div class="col-md-9 showcase_content_area">
                                        <input type="text" name="sid" class="form-control" id="studentID" placeholder="Enter Student ID" value="" >
                                    </div>
                                </div>
                                <div class="form-group row showcase_row_area">
                                    <div class="col-md-3 showcase_text_area">
                                        <label for="studentID">Student Email Id</label>
                                    </div>
                                    <div class="col-md-9 showcase_content_area">
                                        <input type="email" name="semail" class="form-control" id="studentEmail" placeholder="Enter Student Email Id" value="">
                                    </div>
                                </div>
                                <div class="form-group row showcase_row_area">
                                    <div class="col-md-3 showcase_text_area">
                                        <label for="studentPass">Student Password</label>
                                    </div>
                                    <div class="col-md-9 showcase_content_area">
                                        <input name="spass" type="text" class="form-control" id="studentPass" placeholder="Enter Student Password" value="">
                                    </div>
                                </div>
                                <div class="form-group row showcase_row_area">
                                    <div class="col-md-3 showcase_text_area">
                                        <label for="inCourse">Select Course</label>
                                    </div>
                                    <div class="col-md-9 showcase_content_area">
                                        <select class="custom-select" id="inCourse" name="cid" >
                                            <option value="0" selected="selected">Select Course</option>
                                            <?php opt_cou(); ?>
                                        </select>
                                    </div>
                                </div>
                                <button name="addstu" type="submit" class="btn btn-sm btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
                <?php  send_Email(); ?>
                    <div class="col-sm-12">
                        <div class="grid">
                            <div class="grid-body">
                                <div class="item-wrapper">
                                    <div class="table-responsive">
                                        <table id="sample-data-table" class="data-table table table-striped">
                                            <thead>
                                                <tr>
                                                    <th>S No.</th>
                                                    <th>Student ID</th>
                                                    <th>Student Name</th>
                                                    <th>Course</th>
                                                    <th>Action / Status</th>
                                                    <th>Send Email</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                    <?php tab_stu(); ?>
                                            </tbody>
                                            <tfoot>
                                                <tr>
                                                    <th>S No.</th>
                                                    <th>Student ID</th>
                                                    <th>Student Name</th>
                                                    <th>Course</th>
                                                    <th>Action / Status</th>
                                                    <th>Send Email</th>
                                                </tr>
                                            </tfoot>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

            </div>
        </div>
            
            <?php foot(); ?>

    </div>
    
    <!--page body ends -->
<?php injs(); ?>

</body>
</html>