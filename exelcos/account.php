<?php include('in/fun.php'); head(); uplogo();?>
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
                    <p class="grid-header">Information</p>
                    <div class="grid-body">
                        <div class="item-wrapper">
                            <form action="" method="post" enctype="multipart/form-data">
                                <div class="form-group row showcase_row_area">
                                    <div class="col-md-3 showcase_text_area">
                                        <label>Website Name</label>
                                    </div>
                                    <div class="col-md-9 showcase_content_area">
                                        <input type="text" class="form-control" name="wname" placeholder="Enter name">
                                    </div>
                                </div>
                                <div class="form-group row showcase_row_area">
                                    <div class="col-md-3 showcase_text_area">
                                        <label>Logo</label>
                                    </div>
                                    <div class="col-md-9 showcase_content_area">
                                        <input type="file" class="form-control" name="logo">
                                    </div>
                                </div>
                                <button type="submit" name="addinfo" class="btn btn-md btn-success">Submit</button>
                            </form>
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