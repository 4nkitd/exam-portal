<?php include('in/fun.php'); head(); del_tst_sec(); ?>
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
                    <div class="col-sm-12 col-md-12">
                        <div class="grid">
                            <div class="grid-body">
                                <div class="item-wrapper">
                                    <div class="table-responsive">
                                        <table id="sample-data-table" class="data-table table table-striped">
                                            <thead>
                                                <tr>
                                                    <th>Exam</th>
                                                    <th>Section Id</th>
                                                    <th>Section</th>
                                                    <th>Questions</th>
                                                    <th>Marks</th>
                                                    <th>Add.Q</th>
                                                    <th>Delete</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                    <?php sect_tab(); ?>
                                            </tbody>
                                            <tfoot>
                                                <tr>
                                                    <th>Exam</th>
                                                    <th>Section Id</th>
                                                    <th>Section</th>
                                                    <th>Questions</th>
                                                    <th>Marks</th>
                                                    <th>Add.Q</th>
                                                    <th>Delete</th>
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