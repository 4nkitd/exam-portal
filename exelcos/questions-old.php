<?php include('in/fun.php'); chechurl(); head(); del_que(); addque(); ?>
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
                                    <div class="col-md-2 showcase_text_area">
                                        <label for="wuestion">Question</label>
                                    </div>
                                    <div class="col-md-10 showcase_content_area">
                                        <input type="file" name="qimg">
                                        <textarea name="quest" class="form-control" id="question" placeholder="Enter Question"></textarea>
                                    </div>
                                </div>
                                <div class="form-group row showcase_row_area">
                                    <div class="col-md-2 showcase_text_area">
                                        <label for="answer1">Answer 1</label>
                                    </div>
                                    <div class="col-md-10 showcase_content_area">
                                        <input type="file" name="ans1">
                                        <textarea name="pans1" class="form-control" id="answer1" placeholder="Enter Answer" value="" ></textarea>
                                    </div>
                                </div>
                                <div class="form-group row showcase_row_area">
                                    <div class="col-md-2 showcase_text_area">
                                        <label for="answer2">Answer 2</label>
                                    </div>
                                    <div class="col-md-10 showcase_content_area">
                                        <input type="file" name="ans2">
                                        <textarea  name="pans2" class="form-control" id="answer2" placeholder="Enter Answer" value="" ></textarea>
                                    </div>
                                </div>
                                <div class="form-group row showcase_row_area">
                                    <div class="col-md-2 showcase_text_area">
                                        <label for="answer3">Answer 3</label>
                                    </div>
                                    <div class="col-md-10 showcase_content_area">
                                        <input type="file" name="ans3">
                                        <textarea  name="pans3" class="form-control" id="answer3" placeholder="Enter Answer" value="" ></textarea>
                                    </div>
                                </div>
                                <div class="form-group row showcase_row_area">
                                    <div class="col-md-2 showcase_text_area">
                                        <label for="answer4">Answer 4</label>
                                    </div>
                                    <div class="col-md-10 showcase_content_area">
                                        <input type="file" name="ans4">
                                        <textarea name="pans4" class="form-control" id="answer4" placeholder="Enter Answer" value="" ></textarea>
                                    </div>
                                </div>
                                <div class="form-group row showcase_row_area">
                                    <div class="col-md-2 showcase_text_area">
                                        <label for="answer">Right Answer</label>
                                    </div>
                                    <div class="col-md-10 showcase_content_area">
                                        <input name="wans" type="number" class="form-control" id="answer" placeholder="Enter Right Answer">
                                    </div>
                                </div>
                                <div class="form-group row showcase_row_area">
                                    <div class="col-md-2 showcase_text_area">
                                        <label for="pmrk">Positive Marks</label>
                                    </div>
                                    <div class="col-md-10 showcase_content_area">
                                        <input name="pm" type="number" class="form-control" id="pmrk" placeholder="Enter Positive Marks">
                                    </div>
                                </div>
                                <div class="form-group row showcase_row_area">
                                    <div class="col-md-2 showcase_text_area">
                                        <label for="nmrk">Negtive Marks</label>
                                    </div>
                                    <div class="col-md-10 showcase_content_area">
                                        <input name="nm" type="number" step=".01" class="form-control" id="nmrk" placeholder="Enter Write Answer">
                                    </div>
                                </div>
                                <div class="form-group row showcase_row_area">
                                <button name="addque" type="submit" class="ml-4 btn btn-sm btn-block btn-primary">Submit</button>
                            </div>
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
    <!--<script type="text/javascript">-->
    <!--        var newCss = {};-->
    <!--        newCss.backgroundColor = '#f9fcff';-->
    <!--        $('.note-editable').css(newCss);-->
    <!--</script>-->
    <!--page body ends -->
<?php injs(); ?>
  <!-- KaTeX -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.9.0/katex.min.css" rel="stylesheet">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.9.0/katex.min.js"></script>
<script type="text/javascript">
            $(document).ready(function() {
                height: 400,
                $('#question').summernote({
                    toolbar: [
                        ['insert', ['picture', 'link', 'math']]
                    ]
                });
            });
            var newCss = {};
            newCss.backgroundColor = '#f9fcff';
            $('.note-editable').css(newCss);
</script>
</body>
</html>