<?php include('in/fun.php'); head();  del_tst(); cstate(); ?>

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
                    <div class="col-lg-12 ">
                        <div class="grid">
                            <p class="grid-header">Sample Elements</p>
                            <div class="grid-body">
                                <div class="item-wrapper">
                                    <form >
                                        <div class="row">
                                            <div class="form-group col-sm-12 col-md-6" >
                                                <label for="inCourse">Select Course</label> 
                                                <select class="form-control" name="inCourse" id="inCourse">
                                                    <option value="0" selected="selected">Select Course</option>
                                                    <?php opt_cou(); ?>
                                                </select>
                                            </div>
                                            <div class="form-group col-sm-12 col-md-6">
                                                <label for="inSubject">Select Subject</label> 
                                                <select class="form-control" name="inSubject" id="inSubject">
                                                    <option value="0" selected="selected">Select Subject</option>
                                                    <?php opt_sub(); ?>                                                </select>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="form-group col-sm-12 col-md-6">
                                                <label for="inTest">Write Test Name</label>
                                                <input class="form-control" id="inTest" type="text" name="" value="" placeholder="Test Name">
                                            </div>
                                            <div class="form-group col-sm-12 col-md-6">
                                                <label for="inTime">Test Duration</label>
                                                <input class="form-control" id="inTime" type="number" name="" value="" placeholder="ime in Minutes">
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="form-group col-sm-12 col-md-6">
                                                <input class="custom-file" type="file" name="" value="" placeholder="Test Name">
                                            </div>
                                            <div class="form-group col-sm-12 col-md-6">
                                                <button type="submit" class="btn btn-sm btn-primary">Sign in</button>
                                            </div>
                                        </div>
                                        
                                    </form>
                                </div>
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
                                                       <th>Exam</th>
                                                        <th>Duration</th>
                                                        <th>Course</th>
                                                        <th>Subject</th>
                                                        <th>Questions</th>
                                                        <th>Marks</th>
                                                        <th>Add Q.</th>
                                                        <th>Results</th>
                                                        <th>Status / Action</th>
                                                        <th>Delete</th>
                                                        <th>Print</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <?php tst_tab_hold(); ?>
                                                </tbody>
                                                <tfoot>
                                                    <tr>
                                                        <th>Exam</th>
                                                        <th>Duration</th>
                                                        <th>Course</th>
                                                        <th>Subject</th>
                                                        <th>Questions</th>
                                                        <th>Marks</th>
                                                        <th>Add Q.</th>
                                                        <th>Results</th>
                                                        <th>Status / Action</th>
                                                        <th>Delete</th>
                                                        <th>Print</th>
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