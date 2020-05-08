<?php include("in/fun.php"); s_logcheck(); headerlink(); ?>
  <body class="bg-color-781515">
    <div class="container-fluid">
      <div class="caption text-center py-3 header-text-white">
        <h3><?php echo webname(); ?>:Online Test Series</h3>
      </div>
      <div class="row">
        <div class="col-md-12">
          <div class="card rounded-0 main-card-css-start">
            <div class="card-body rounded-0">
              <div class="row">
                <div class="col-md-12">
                  <div class="table-responsive">
                    <table class="table table-bordered">
                      <thead class="bg-dark text-white">
                        <tr class="text-center">
                          <td>Exam Code</td>
                          <td>Total Questions</td>
                          <td>Total Time</td>
                          <td>Maximum Marks</td>
                        </tr>
                      </thead>
                      <tbody>
                        <tr class="text-center">
                        <?php term_page($_GET['sudo']); ?>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              
          <div class="text-center">
            <?php if(is_sec_time($_GET['sudo'])) { ?>
             <a href="<?php echo'examm_dash.php?sudo='.$_GET['sudo']; ?>" > <button type="submit" class="btn btn-lg btn-outline-danger">START TEST</button></a>
           <?php } else { ?>
            <a href="<?php echo'dash.php?sudo='.$_GET['sudo']; ?>" > <button type="submit" class="btn btn-lg btn-outline-danger">START TEST</button></a>
           <?php }?>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

</body>
</html>