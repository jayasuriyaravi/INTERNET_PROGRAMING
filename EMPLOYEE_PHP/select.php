<?php
$conn = new mysqli("localhost", "root", "", "iplab");

$sql = "SELECT * FROM employee";

$retval = mysqli_query($conn, $sql);

if (mysqli_num_rows($retval) > 0) {

    while ($row = mysqli_fetch_assoc($retval)) {

        echo "Emp ID: " . $row["emp_id"] . "<br>";
        echo "Emp Name: " . $row["emp_name"] . "<br>";
        echo "Designation: " . $row["desig"] . "<br>";
        echo "Department: " . $row["dept"] . "<br>";
        echo "Date of Joining: " . $row["doj"] . "<br>";
        echo "Salary: " . $row["salary"] . "<br>";
        echo "--------------------------------<br>";
    }
} else {
    echo "0 results";
}

$conn->close();
?>