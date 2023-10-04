<!DOCTYPE html>
<html>

<head>
    <title>Add Data to Database</title>
</head>

<body>
    <h1>Add Data to Database</h1>

    <?php
    $conn = new mysqli("localhost", "root", "", "iplab");

    if ($_SERVER["REQUEST_METHOD"] === "POST") {
        $id = $_POST['emp_id'];
        $emp_name = $_POST["emp_name"];
        $desig = $_POST["desig"];
        $dept = $_POST["dept"];
        $doj = $_POST["doj"];
        $salary = $_POST["salary"];

        $sql = "UPDATE employee SET emp_name = '$emp_name', desig = '$desig', dept = '$dept', doj = '$doj', salary = '$salary' WHERE emp_id = '$id'";

        $result = $conn->query($sql);

        if ($result === TRUE) {
            echo "UPDATE SUCCESSFULLY";
        } else {
            echo "UPDATE UNSUCCESSFULLY: " . $conn->error;
        }
    }

    $conn->close();
    ?>

    <form method="post" action="<?php echo $_SERVER["PHP_SELF"]; ?>">
        <label for="emp_id">EmpId:</label>
        <input type="number" name="emp_id" required><br><br>

        <label for="emp_name">EmpName:</label>
        <input type="text" name="emp_name" required><br><br>

        <label for="emp_des">Designation:</label>
        <input type="text" name="desig" required><br><br>

        <label for="dept">Department:</label>
        <input type="text" name="dept" required><br><br>

        <label for="doj">DOJ:</label>
        <input type="date" name="doj" required><br><br>

        <label for="salary">Salary:</label>
        <input type="number" name="salary" required><br><br>

        <input type="submit" value="Add Data">
    </form>
</body>

</html>