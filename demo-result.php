<?php
include("in/fun.php");
dashHead();
if(!empty($_POST['subtest']))
{
    ?>
    <!----- HEADER ----->
            <div class="header">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-6" id="left">
                            <img src="img/<?php echo viewlogo();?>" class="img-fluid" alt="" height="50" width="50">
                            
                        </div>
                        <div class="col-md-3 text-white pt-2" id="middle">
                        </div>

                        <div class="col-md-3" id="right">
                            <div class="form-row">
                                <div class="col">
                                    <h6>Demo User Name</h6>
                                    <span>ID:  STUDENT001 </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container py-5">
    		    <div class="table-responsive">
    		        <table class="table table-ordered">
    		            <thead>
    		                <tr>
    		                    <td>Total Question</td>
    		                    <td>Total Attempted</td>
    		                    <td>Total Right</td>
    		                    <td>Total Wrong</td>
    		                    <td>Marks</td>
    		                </tr>
    		            </thead>
    		            <tbody>
    		                <tr>
    		                    <!--<td>hi</td> -->
    		                    <!--<td>ther</td> -->
    		                    <!--<td>Tfh</td> -->
    		                    <!--<td>fd</td> -->
    		                    <!--<td>dfd</td> -->
    		                   <?php demo_sub(); ?> 
    		                </tr>
    		                <tr><span class="text-danger">*For more features Please Join our test-series.</span></tr>
    		                <tr>
    		                    <td>
    		                        <a href="login"><span class="btn btn-sm btn-primary">Back to Home</span></a>
    		                    </td>
    		                    <td></td>
    		                    <td></td>
    		                    <td></td>
    		                    <td></td>
    		                </tr>
    		            </tbody>
        		    <table>
    		    </div>
		    </div>
		   
		<?php
}
else
header("Location:login");

?>