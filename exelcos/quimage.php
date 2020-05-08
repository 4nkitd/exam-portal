<?php include('in/fun.php'); chechurl();  head(); del_que();  addqueimg(); ?>
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
                    <p class="grid-header">Add Question's</p>
                    <div class="grid-body">
                        <div class="item-wrapper">
                            <form action="" method="post" enctype="multipart/form-data">
                                <div class="form-group row showcase_row_area">
                                    <div class="col-md-3 showcase_text_area">
                                        <label for="wuestion">Question</label>
                                    </div>
                                    <div class="col-md-9 showcase_content_area">
                                        <input type="file" name="qimg" >
                                    </div>
                                </div>
                                <div class="form-group row showcase_row_area">
                                    <div class="col-md-3 showcase_text_area">
                                        <label for="answer1">Answer 1</label>
                                    </div>
                                    <div class="col-md-9 showcase_content_area ">
                                        <input type="file" name="ans1" >
                                    </div>
                                </div>
                                <div class="form-group row showcase_row_area">
                                    <div class="col-md-3 showcase_text_area">
                                        <label for="answer2">Answer 2</label>
                                    </div>
                                    <div class="col-md-9 showcase_content_area ">
                                        <input type="file" name="ans2" >
                                    </div>
                                </div>
                                <div class="form-group row showcase_row_area">
                                    <div class="col-md-3 showcase_text_area">
                                        <label for="answer3">Answer 3</label>
                                    </div>
                                    <div class="col-md-9 showcase_content_area ">
                                        <input type="file" name="ans3" >
                                    </div>
                                </div>
                                <div class="form-group row showcase_row_area">
                                    <div class="col-md-3 showcase_text_area">
                                        <label for="answer4">Answer 4</label>
                                    </div>
                                    <div class="col-md-9 showcase_content_area ">
                                        <input type="file" name="ans4">
                                    </div>
                                </div>
                                <div class="form-group row showcase_row_area">
                                    <div class="col-md-3 showcase_text_area">
                                        <label for="answer">Right Answer</label>
                                    </div>
                                    <div class="col-md-9 showcase_content_area ">
                                        <input type="number" name="rans" class="form-control" placeholder="Enter Right Answer" >
                                    </div>
                                </div>
                                <div class="form-group row showcase_row_area">
                                    <div class="col-md-3 showcase_text_area">
                                        <label for="pmrk">Positive Marks</label>
                                    </div>
                                    <div class="col-md-9 showcase_content_area">
                                        <input name="pm" type="number" class="form-control" id="pmrk" placeholder="Enter Positive Marks">
                                    </div>
                                </div>
                                <div class="form-group row showcase_row_area">
                                    <div class="col-md-3 showcase_text_area">
                                        <label for="nmrk">Negtive Marks</label>
                                    </div>
                                    <div class="col-md-9 showcase_content_area">
                                        <input name="nm" type="number" class="form-control" id="nmrk" placeholder="Enter Write Answer">
                                    </div>
                                </div>
                                <button name="addimg" type="submit" class="btn btn-sm btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
                    <div class="col-sm-12">
                        <div class="grid">
                            <div class="grid-body">
                                <div class="item-wrapper">
                                    <div class="table-responsive">
                                        <table id="sample-data-table" class="data-table table table-striped">
                                            <thead>
                                                <tr>
                                                    <th>S No.</th>
                                                    <th>Question</th>
                                                    <th>Positive Marks</th>
                                                    <th>Negtive Marks</th>
                                                    <th>Right Answer</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                    <?php lst_tab_que(); ?>
                                            </tbody>
                                            <tfoot>
                                                <tr>
                                                    <th>S No.</th>
                                                    <th>Question</th>
                                                    <th>Positive Marks</th>
                                                    <th>Negtive Marks</th>
                                                    <th>Right Answer</th>
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
        </div>
            
            <?php foot(); ?>

    </div>
    
    <!--page body ends -->
<?php injs(); ?>

</body>
</html>