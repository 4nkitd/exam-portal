<?php include('in/fun.php'); head(); del_cou(); add_course(); ?>
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
                
                <div class="grid col-md-5 col-sm-12">
                    <p class="grid-header">Add Course</p>
                    <div class="grid-body">
                        <div class="item-wrapper">
                            <form action="" method="post">
                                <div class="form-group row showcase_row_area">
                                    <div class="col-md-3 showcase_text_area">
                                        <label for="courseName">Course Name</label>
                                    </div>
                                    <div class="col-md-9 showcase_content_area">
                                        <input name="cname" type="text" class="form-control" id="courseName" placeholder="Enter Course name">
                                    </div>
                                </div>
                                <div class="form-group row showcase_row_area">
                                    <div class="col-md-3 showcase_text_area">
                                        <label for="courseDisc">Course Discription</label>
                                    </div>
                                    <div class="col-md-9 showcase_content_area">
                                        <textarea name="cdis" class="form-control" id="courseDisc" placeholder="Enter Course Discription" value="Discription" ></textarea>
                                    </div>
                                </div>
                                <button name="addcou" type="submit" class="btn btn-sm btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>

                    <div class="col-sm-12 col-md-7">
                        <div class="grid">
                            <div class="grid-body">
                                <div class="item-wrapper">
                                    <div class="table-responsive">
                                        <table id="complex-header-table" class="data-table table table-striped">
                                            <thead>
                                                <tr>
                                                    <th>S No.</th>
                                                    <th>Name</th>
                                                    <th>Discription</th>
                                                    <th>Action / Status</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                    <?php tab_cou(); ?>
                                            </tbody>
                                            <tfoot>
                                                <tr>
                                                    <th>S No.</th>
                                                    <th>Name</th>
                                                    <th>Discription</th>
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
    
    <!--page body ends -->
    
<?php injs(); ?>

</body>
</html>