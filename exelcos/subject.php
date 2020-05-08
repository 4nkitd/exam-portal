<?php include('in/fun.php'); head(); del_sub(); add_sub(); ?>
<body class="header-fixed">
<?php topnav(); ?>

    <div class="page-body">
        <!-- SLider sidebar -->
        <?php sidenav(); ?>
        <!-- slider sidebar end -->

        <div class="page-content-wrapper">
            <div class="page-content-wrapper-inner">
                
				<div class="row equel-grid">
                <div class="grid col-md-12 col-sm-12">
                    <p class="grid-header">Add New Subject</p>
                    <div class="grid-body">
                        <div class="item-wrapper">
                            <form action="" method="post">
                                <div class="form-group row showcase_row_area">
                                    <div class="col-md-3 showcase_text_area">
                                        <label for="inCourse">Select Course</label>
                                    </div>
                                    <div class="col-md-9 showcase_content_area">
                                        <select class="custom-select" id="inCourse" name="pid" >
                                        	<option value="0" selected="selected">Select Course</option>
                                        	<?php opt_cou(); ?>
                                        </select>
                                    </div>
                                </div>
                                <div class="form-group row showcase_row_area">
                                    <div class="col-md-3 showcase_text_area">
                                        <label for="inputEmail4">New Subject Name</label>
                                    </div>
                                    <div class="col-md-9 showcase_content_area">
                                        <input name="subname" type="text" class="form-control" id="inCourse2" placeholder="Enter New Subject Name">
                                    </div>
                                </div>
                                <button type="submit" name="addsub" class="btn btn-md btn-success">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

             <div class="row">
                        <div class="col-lg-12">
                            <div class="grid">
                                <div class="grid-body">
                                    <div class="item-wrapper">
                                        <div class="table-responsive">
                                            <table id="json-sample-data-table" class="data-table table table-striped">
                                                <thead>
                                                    <tr>
                                                        <th>S No.</th>
                                                        <th>Name</th>
                                                        <th>Course</th>
                                                        <th>Total Exams</th>
                                                        <th>Action / Status</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <?php tab_sub(); ?>
                                                </tbody>
                                                <tfoot>
                                                    <tr>
                                                        <th>S No.</th>
                                                        <th>Name</th>
                                                        <th>Course</th>
                                                        <th>Total Exams</th>
                                                        <th>Action / Status</th>
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

    </div>
    
    <!--page body ends -->
<?php injs(); ?>

</body>
</html>