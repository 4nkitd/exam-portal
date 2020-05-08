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
                <div class="content-viewport">
                    <?php headset(); ?>
                </div>
                <div class="row">
                    <?php servSpaceCard(); ?>
                </div>
            </div>
        </div>
            
            <?php foot(); ?>

    </div>
    
    <!--page body ends -->
<?php injs(); ?>

</body>
</html>