<!-- connection -->
<?php 
    
    include "connection.php";
?>

<?php
    //insert student
    if(isset($_POST['btnSave'])){
        $checkcode = $_POST['checkcode'];
        $scode = $_POST['subcode'];
        $pcode = $_POST['pcCode'];
        $yr = $_POST['yr'];
        $sem = $_POST['sem'];
        

        $insert_data = mysqli_query($conn, "INSERT INTO checklist (checklistCode,subjectCode,programCurriculumCode,yearLevel,semester)
            VALUES ('$checkcode','$scode','$pcode','$yr','$sem')");

        if($insert_data){
            header('Location:checklist.php?message=successadd');
        }
        else{
            echo "Failed to Save Student Details" .mysqli_connect_error();
        }
    }
?>

<?php
    //update student
    if(isset($_POST['btnUpdate'])){
        $id = $_POST['id'];
        $checkcode = $_POST['checkcode'];
        $scode = $_POST['subcode'];
        $pcode = $_POST['pcCode'];
        $yr = $_POST['yr'];
        $sem = $_POST['sem'];

        mysqli_query($conn, "UPDATE checklist SET checklistCode='$checkcode', subjectCode='$scode', programCurriculumCode='$pcode', yearLevel='$yr', semester='$sem'
            WHERE checklistID =$id");

        header('location: checklist.php?message=successupdate');
    }
?>

<?php
    //delete student
    if(isset($_GET['delete'])){
        $id = $_GET['delete'];

        mysqli_query($conn, "DELETE FROM checklist WHERE checklistID=$id");
        header('location: checklist.php?message=successdelete');
    }
?>

<!DOCTYPE html>
<html>

    <head>
    <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Checklist</title>
        <!-- online links -->
        <script src="https://kit.fontawesome.com/973a9341e6.js" crossorigin="anonymous"></script>
        <script src="https://kit.fontawesome.com/973a9341e6.js" crossorigin="anonymous"></script>
        <link href="https://fonts.googleapis.com/css2?family=Manrope&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-wEmeIV1mKuiNpC+IOBjI7aAzPcEZeedi5yW5f2yOq55WWLwNGmvvx4Um1vskeMj0" crossorigin="anonymous">
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-p34f1UUtsS3wqzfto5wAAmdvj+osOnFyQFpp4Ua3gs/ZVWx6oOypYoCJhGGScy+8" crossorigin="anonymous"></script>
        <link rel="stylesheet" type="text/css" href="style.css">
        <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
        <script src="main.js"></script>
        
    </head>

    <body>
    <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">C I E</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <i class="fas fa-bars"></i>
    </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="index.html">Home</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Management
          </a> 
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown" >
                            <li><a class="dropdown-item" href="program.php">Program</a></li>
                            <li><a class="dropdown-item" href="programOutcome.php">Program Outcomes</a></li>
                            <li><a class="dropdown-item" href="subject.php">Subjects</a></li>
                            <li><a class="dropdown-item" href="curriculumyr.php">Curriculum Year</a></li>
                            <li><a class="dropdown-item" href="progcurassignment.php">Program Curriculum Assignment</a></li>
                            <li><a class="dropdown-item" href="copomap.php">CO-PO Map</a></li>
                            <li><a class="dropdown-item" href="courseoutcome.php">Course Outcome</a></li>
                            <li><a class="dropdown-item" href="learningoutcome.php">Learning Outcome</a></li>
                            <li><a class="dropdown-item active" href="checklist.php">Checklist</a></li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Gallery(coming soon...)</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        View Data
          </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a class="dropdown-item" href="program.php">Program</a></li>
                            <li><a class="dropdown-item" href="programOutcome.php">Program Outcomes</a></li>
                            <li><a class="dropdown-item" href="subject.php">Subjects</a></li>
                            <li><a class="dropdown-item" href="curriculumyr.php">Curriculum Year</a></li>
                            <li><a class="dropdown-item" href="progcurassignment.php">Program Curriculum Assignment</a></li>
                            <li><a class="dropdown-item" href="copomap.php">CO-PO Map</a></li>
                            <li><a class="dropdown-item" href="courseoutcome.php">Course Outcome</a></li>
                            <li><a class="dropdown-item" href="learningoutcome.php">Learning Outcome</a></li>
                            <li><a class="dropdown-item" href="checklist.php">Checklist</a></li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </li>
                </ul>
                <form class="d-flex">
                    
                    <input id="myInput" class="form-control me-2" type="search" placeholder="Search" aria-label="Search" onkeyup="myFunction()">
</input>
                </form>
            </div>
        </div>
    </nav>
        <!-- GET MESSAGE IF SUCCESS -->
        <div class="fixed-top">
            <?php if(isset($_GET['message'])):?>
                <div class="alert alert-success text-center" role="alert" id="alert">
                    <?php 
                        if($_GET['message'] == "successadd"){
                            echo "Succesfully Added Program Curriculum Checklist";
                        }
                        elseif($_GET['message'] == "successupdate"){
                            echo "Successfully Updated Program Curriculum Checklist";
                        }
                        elseif($_GET['message'] == "successdelete") {
                            echo "Succesfully Deleted Program Curriculum Checklist";
                        }
                    ?>
                </div>
            <?php endif ?>
        </div>
        

        <!-- Header -->
        <div class="container-fluid" style="margin-top:60px">
            <div class="row-header">
                    <a href="#addModal" data-toggle="modal" style="text-decoration:none;color:white;border-radius:20px;background:red;padding:8px"><span><i class="fas fa-plus-circle"></i>      Add item</span></a>
            </div>

            
        </div> 
        <!-- CONTENT -->                
        <div class="container-fluid">
            <div class="table-wrapper">
                <div class="table-title">
                    <div class="col-sm-6">
                        <h2><b>Program Curriculum Checklist<b><h2>
                    </div>
                </div>
                <div id="table" class="table-wrapper-scroll-y my-custom-scrollbar scrollbar scrollbar-primary ">
                    <table class="table table-borderless table-hover table-fixed">
                        <thead>
                            <tr style="width:100%">
                                <th style="display:none;" style="width:1%"></th>
                                <th style="width:20%">Checklist Code</th>
                                <th style="width:36%">Subject Code</th>
                                <th style="width:40%">Program Curriculum Code</th>
                                <th style="width:40%">Year Level</th>
                                <th style="width:40%">Semester</th>
                                <th style="width:4%">Actions</th>
                            </tr>
                        </thead>
                        <?php
                            $select_data = mysqli_query($conn, "SELECT * FROM checklist");
                            while($program = mysqli_fetch_array($select_data)){
                        ?>
                        <tbody style="text-align:center;" class="table-primary">
                            <tr style="width:100%">
                                <td style="display:none;" class="id"><?php echo $program['checklistID']?></td>
                                <td class="clcode"><?php echo $program['checklistCode']?></td>
                                <td class="subcode"><?php echo $program['subjectCode']?></td>
                                <td class="pccode"><?php echo $program['programCurriculumCode']?></td>
                                <td class="yr"><?php echo $program['yearLevel']?></td>
                                <td class="sem"><?php echo $program['semester']?></td>
                                <td>
                                    <a href="#editModal" class="edit" id="btnEditModal" name="btnEditModal" data-toggle="modal" style="text-decoration:none;">
                                    <i class="far fa-edit"></i>
                                    </a>
                                    <a href="checklist.php?delete=<?php echo $program['checklistID']?>" class="delete" name="btnDelete">
                                    <i class="far fa-trash-alt"></i>
                                    </a>
                                </td>
                            </tr>
                        </tbody>
                        <?php }; ?>
                    </table>
                </div>
            </div>
        </div>

        <!-- add student modal-->
        <div id="addModal" class="modal fade">
            <div class="modal-dialog">
                <div class="modal-content">
                    <form method="POST" action="#">
                        <div class="modal-header">
                            <h4 class="modal-title">Add Program Curriculum Checklist</h4>
                            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">Close</button>
                        </div>
                        <div class="modal-body">
                            <div class="form-group">
                                <label>Course Curriculum Checklist Code</label>
                                <input type="text" name="checkcode" class="form-control" required>
                            </div>
                            <div class="form-group">
                                <label>Subject Code</label>
                                <select name="subcode" class="form-control" required>
                                <?php
                            $select_data = mysqli_query($conn, "SELECT * FROM subjecttbl");
                            while($Subject = mysqli_fetch_array($select_data)){
                        ?>
                                
                                <option value="<?php echo $Subject['subjectCode']?>"><?php echo $Subject['subjectCode']?></option>
                                <?php }; ?>
                                </select>
                            </div>
                            <div class="form-group">
                                <label>Program Curriculum Code</label>
                                <select name="pcCode" class="form-control" required>
                                <?php
                            $select_data = mysqli_query($conn, "SELECT * FROM progcurasstbl");
                            while($Subject = mysqli_fetch_array($select_data)){
                        ?>
                                
                                <option value="<?php echo $Subject['programCurriculumCode']?>"><?php echo $Subject['programCurriculumCode']?></option>
                                <?php }; ?>
                                </select>
                            </div>
                            <div class="form-group">
                                <label>Year Level</label>
                                <select name="yr" class="form-control" required>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label>Semester</label>
                                <select name="sem" class="form-control" required>
                                <option value="1st sem">1st sem</option>
                                <option value="2nd sem">2nd sem</option>
                                <option value="3rd sem">3rd sem</option>
                                <option value="Summer">Summer</option>
                                </select>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="submit" class="btn btn-default" data-dismiss="modal">Cancel</button>
                            <button type="submit" class="btn btn-success" name="btnSave">Save</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

        <!-- edit student modal-->
        <div id="editModal" class="modal fade">
            <div class="modal-dialog">
                <div class="modal-content">
                    <form method="POST" action="#">
                        <div class="modal-header">
                            <h4 class="modal-title">Edit Program Curriculum Checklist</h4>
                            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">Close</button>
                        </div>
                        <div class="modal-body">
                            <div class="form-group">
                                <label>Course Curriculum Checklist Code</label>
                                <input type="hidden" id="id" name="id" class="form-control" required>
                                <input type="text" id="clcode" name="checkcode" class="form-control" required>
                            </div>
                            <div class="form-group">
                                <label>Subject Code</label>
                                <select id="subcode" name="subcode" class="form-control" required>
                                <?php
                            $select_data = mysqli_query($conn, "SELECT * FROM subjecttbl");
                            while($Subject = mysqli_fetch_array($select_data)){
                        ?>
                                
                                <option value="<?php echo $Subject['subjectCode']?>"><?php echo $Subject['subjectCode']?></option>
                                <?php }; ?>
                                </select>
                            </div>
                            <div class="form-group">
                                <label>Program Curriculum Code</label>
                                <select id="pccode" name="pcCode" class="form-control" required>
                                <?php
                            $select_data = mysqli_query($conn, "SELECT * FROM progcurasstbl");
                            while($Subject = mysqli_fetch_array($select_data)){
                        ?>
                                
                                <option value="<?php echo $Subject['programCurriculumCode']?>"><?php echo $Subject['programCurriculumCode']?></option>
                                <?php }; ?>
                                </select>
                            </div>
                            <div class="form-group">
                                <label>Year Level</label>
                                <select id="yr" name="yr" class="form-control" required>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label>Semester</label>
                                <select id="sem" name="sem" class="form-control" required>
                                <option value="1st sem">1st sem</option>
                                <option value="2nd sem">2nd sem</option>
                                <option value="3rd sem">3rd sem</option>
                                <option value="Summer">Summer</option>
                                </select>
                            </div>
                            
                        </div>
                        <div class="modal-footer">
                            <button type="submit" class="btn btn-default" data-dismiss="modal">Cancel</button>
                            <button type="submit" class="btn btn-success" name="btnUpdate">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

        <!-- script of alert -->
        <script type="text/javascript">  
function myFunction() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("table");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[1];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}

            setTimeout(function(){
                document.getElementById("alert").style.display = "none";

            }, 3000);
        </script>
        <!-- script of edit button -->
        <script type="text/javascript">
            $('.edit').click(function(){
                var $row = $(this).closest('tr');
                var id_num = $row.find('.id').text();
                var student_id = $row.find('.clcode').text();
                var name = $row.find('.subcode').text();
                var address = $row.find('.pccode').text();
                var yr = $row.find('.yr').text();
                var sem = $row.find('.sem').text();


                $('#id').val(id_num);
                $('#clcode').val(student_id);
                $('#subcode').val(name);
                $('#pccode').val(address);
                $('#yr').val(yr);
                $('#sem').val(sem);

                $('#editModal').modal('show');
            });
        </script>
        
    </body>

</html>