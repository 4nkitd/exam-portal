<?php include('in/fun.php'); head(); ?>
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

                    <div class="col-sm-12">
                        <div class="grid">
                            <div class="grid-body">
                                <div class="item-wrapper">
                                    <div class="table-responsive">
                                        <table id="sample-data-table" class="data-table table table-striped">
                                            <thead>
                                                <tr>
                                                    <th>S No.</th>
                                                    <th>Student Name</th>
                                                    <th>Exam</th>
                                                    <th>Subject</th>
                                                    <th>Results</th>
                                                    <th>Detail Result</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                    <?php  tab_tresult($_GET['code'],$_GET['tid']); ?>
                                            </tbody>
                                            <tfoot>
                                                <tr>
                                                    <th>S No.</th>
                                                    <th>Student Name</th>
                                                    <th>Exam</th>
                                                    <th>Subject</th>
                                                    <th>Results</th>
                                                    <th>Detail Result</th>
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