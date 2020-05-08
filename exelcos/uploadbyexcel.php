<?php include('in/fun.php'); upload_by_excel(); head();  del_tst(); cstate(); ?>

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
                            <p class="grid-header">Add Test Using Excel</p>
                            <div class="grid-body">
                                <div class="item-wrapper">
                                    <form method="post" action=""  enctype="multipart/form-data">
                                        <div class="row">
                                            <div class="form-group col-sm-12 col-md-12" >
                                                <label for="inCourse">Select Section</label> 
                                                <select class="form-control" name="exam" onchange="myfun()"  id="mySelect" required>
                                                    <option value="0" selected="selected">Select Paper</option>
                                                        <?php opt_exams() ?>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="form-group col-sm-12 col-md-6 ">
                                                <input class="custom-file" type="file" name="excel"  placeholder="Test Name">
                                            </div>
                                            <div class="form-group col-sm-12 col-md-6">
                                                <button type="submit" name="import_exle" class="btn btn-sm btn-primary">Upload</button>
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
                                        <table id="sample-data-table" class="data-table table table-striped">
                                            
                                                <thead>
                                                     <tr>
                                                        <th>Exam</th>
                                                        <th>Duration</th>
                                                        <th>Course</th>
                                                        <th>Subject</th>
                                                        <th>Questions</th>
                                                        <th>Marks</th>
                                                        <th>Add Q.</th>
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
    <script type="text/javascript">

        function myfun(){
          var x = document.getElementById("mySelect").value;
          var inputbox='';
          for(var i=1; i<=x; i++){

                inputbox += "<div class='form-group col-sm-12 col-md-6'><input type='text' class='form-control my-auto' name='sec"+i+"' placeholder='Section-"+i+"' required></div>";
          }
            document.getElementById("viewSection").innerHTML='<div class="row">'+inputbox+'</div>';
        }//end of funtion

    </script>
    <!--page body ends -->
    <?php injs(); ?>
</body>

</html>