<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "form";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "INSERT INTO results (first_name, last_name, email, subject, message, hiring, subscribe)
        VALUES (?, ?, ?, ?, ?, ?, ?)";

$stmt = $conn->prepare($sql);
$stmt->bind_param("sssssss", $fname, $lname, $email, $subject, $message, $hiring, $subscribe);

$fname = $_POST['fname'];
$lname = $_POST['lname'];
$email = $_POST['mail'];
$subject = $_POST['subject'];
$message = $_POST['mess'];
$hiring = isset($_POST['hiring']) ? "Yes" : "No";
$subscribe = isset($_POST['subscribe']) ? "Yes" : "No";

if ($stmt->execute()) {
    header("Location: submited.html");
    exit; 
} else {
    echo "<h2>Error: " . $sql . "<br>" . $conn->error . "</h2>";
}


$stmt->close();
$conn->close();
?>
