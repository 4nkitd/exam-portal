<?php include('in/fun.php'); head(); stu_test_remove();
if(!empty($_GET['tcode'])) $tcode=$_GET['tcode'];
else header("Location: test");
?>
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
                                                    <th>Student ID</th>
                                                    <th>Student Name</th>
                                                    <th>Start Time</th>
                                                    <th>End Time</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                    <?php stu_test_attemps($tcode); ?>
                                            </tbody>
                                            <tfoot>
                                                <tr>
                                                    <th>S No.</th>
                                                    <th>Student ID</th>
                                                    <th>Student Name</th>
                                                    <th>Start Time</th>
                                                    <th>End Time</th>
                                                    <th>Action</th>
                                                </tr>
                                            </tfoot>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

            </div>
            <form name="removeStu" action="" method="POST">
                <input type="hidden" value="<?php echo $tcode; ?>" name="tcode">
                <input type="hidden" name="sid" value="">
            </form>
        </div>
            
            <?php foot(); ?>

    </div>
    
    <!--page body ends -->
<?php injs(); ?>

</body>
<script>
    $(".btn-remove").click(function(){
      $("input[name='sid']").val($(this).attr("data-for"));
      $("form[name='removeStu']").submit();
    });
</script>
</html>