<?php include('in/fun.php'); head(); del_tst(); cstate(); make_test(); ?>

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
                                    <form action="" method="post">
                                        <div class="row">
                                            <div class="form-group col-sm-12 col-md-6">
                                                <label for="inCourse">Select Course</label> 
                                                <select class="form-control" name="cid" id="inCourse" required="required">
                                                    <option value="0" selected="selected">Select Course</option>
                                                    <?php opt_cou(); ?>
                                                </select>
                                            </div>
                                            <div class="form-group col-sm-12 col-md-6">
                                                <label for="inSubject">Select Subject</label> 
                                                <select class="form-control" name="sub" id="inSubject" required="required">
                                                    <option value="0" selected="selected">Select Subject</option>
                                                    <?php opt_sub(); ?>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="form-group col-sm-12 col-md-6">
                                                <label for="inTest">Write Test Name</label>
                                                <input class="form-control" id="inTest" type="text" name="tname" value="" placeholder="Test Name" required="required">
                                            </div>
                                            <div class="form-group col-sm-12 col-md-6">
                                                <label for="inTime">Test Duration</label>
                                                <input class="form-control" id="inTime" type="number" name="ttime" value="" placeholder="Time in Minutes" required="required">
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="form-group col-sm-6 col-md-6" >
                                                <label for="inCourse">Select Section</label> 
                                                <select class="form-control" name="selv" onchange="myfun()"  id="mySelect" required>
                                                    <option value="0" selected="selected">Select Section</option>
                                                        <option value="1">1</option>
                                                        <option value="2">2</option>
                                                        <option value="3">3</option>
                                                        <option value="4">4</option>
                                                        <option value="5">5</option>
                                                        <option value="6">6</option>
                                                        <option value="7">7</option>
                                                        <option value="8">8</option>
                                                        <option value="9">9</option>
                                                </select>
                                            </div>
                                            <div class="form-group col-sm-4 col-md-4 pt-5">
                                                <span for="is_sec_time" class="text-danger pt-3">Check if every section have specific Time.</span>
                                            </div>
                                            <div class="form-group col-sm-1 col-md-1 pt-4">
                                                <input type="checkbox" name="is_sec_time" id="is_sec_time" class="form-control mt-3">
                                            </div>
                                            <div class="form-group col-sm-1 col-md-1">
                                            </div>

                                        </div>
                                         <span id="viewSection"></span>
                                        <button type="submit" name="import_exam" class="btn btn-sm btn-primary">Submit</button>
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
                                        <table id="all-test" class="data-table table table-striped">
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
          if($("#is_sec_time").is(':checked'))
          {
            //alert("Section Time Present");
            for(var i=1; i<=x; i++)
            {

                inputbox += "<div class='form-group col-sm-12 col-md-6'><input type='text' class='form-control my-auto' name='sec"+i+"' placeholder='Section-"+i+" Name' required></div><div class='form-group col-sm-12 col-md-6'><input type='number' class='form-control my-auto' name='sectime"+i+"' placeholder='Section-"+i+" Time in Minutes' required></div>";
            }
          }
          else
              for(var i=1; i<=x; i++){

                    inputbox += "<div class='form-group col-sm-12 col-md-6'><input type='text' class='form-control my-auto' name='sec"+i+"' placeholder='Section-"+i+" Name' required></div>";
              }
            document.getElementById("viewSection").innerHTML='<div class="row">'+inputbox+'</div>';
        }//end of funtion

    </script>
    <!--page body ends -->
    <?php injs(); ?>

</body>

</html>
 <!-- Modal -->
                        