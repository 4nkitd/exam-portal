<?php include('in/fun.php'); head(); promsg(); newmsg(); ?>
<body class="header-fixed">
<?php topnav(); ?>

    <div class="page-body">
        <!-- SLider sidebar -->
        <?php sidenav(); ?>
        <!-- slider sidebar end -->

        <div class="page-content-wrapper">
            <div class="page-content-wrapper-inner">
              
                <div class="content-viewport">
                    <div class="email-header">
                        <button class="btn email-aside-list-toggler">
                            <i class="mdi mdi-menu"></i>
                        </button> 
                        <button class="btn btn-primary has-icon email-composer">
                            <i class="mdi mdi-plus"></i>Compose
                        </button>
                    </div>
                    <div class="email-wrapper grid">
                        <div class="email-aside-list" id="people">
                            
                        </div>
                        <div class="email-preview-wrapper">

                          <div id="rest">
                              
                          </div>

                      </div>
                    </div>

                    <div class="email-compose-wrapper">
                        <div class="email-compose-header">
                            <p class="header-title">Contact Student</p>
                            <div class="header-controls"><a href="#" class="compose-minimize"><i class="mdi mdi-close"></i></a></div>
                        </div>
                        <div class="email-compose-body">
                            <form action="" method="post" id="email-compose">
                                <div class="form-group input-recipient"><label class="label">To</label> <input type="text" class="form-control" placeholder="Enter Student ID" name="sid"></div>
                                <div class="form-group"><input name="subject" type="text" class="form-control" placeholder="Subject"></div>
                                <div class="form-group"><textarea name="msg" class="form-control" rows="10" placeholder="Message"></textarea></div>
                                <div class="email-compose-toolbar">
                                  <!--   <ul class="toolbar-menu">
                                        <li class="action-buttons"><a href="#"><i class="mdi mdi-paperclip"></i></a></li>
                                        <li class="action-buttons"><a href="#"><i class="mdi mdi-image-multiple"></i></a></li>
                                        <li class="action-buttons"><a href="#"><i class="mdi mdi-link-variant"></i></a></li>
                                        <li class="action-buttons delete-draft"><a href="#"><i class="mdi mdi-delete"></i></a></li>
                                    </ul> -->
                                    <button type="submit" name="send" class="btn btn-block btn-primary btn-sm component-flat send-button">Send</button>
                                </div>

                            </form>
                        </div>
                    </div>

                </div>
            </div>
             
            <?php foot(); ?>

    </div>
    
    <!--page body ends -->
    <?php injs(); ?>
    <script type="text/javascript">
        
        $(document).ready(function(){
            $.ajax({
                type: "POST",
                url: "ajax.php", 
                data: {msg: 'true'},            
                dataType: "html",                
                success: function(response){                    
                    $("#people").html(response); 
                    // alert(response);
                }

            });

        });

        function load(user) {                

              $.ajax({    
                type: "POST",
                url: "msg.php",
                data: {
                    data: user,
                    datamsg: 'test',
                },             
                dataType: "html",                 
                success: function(response){                    
                    $("#rest").html(response); 
                    // alert(response);
                }

            });
        };

    </script>
</body>
</html>