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
    echo "<h2 style= " font-size: 50px; color: blueviolet; font-family: 'Garamond', serif; " >Form Submitted Successfully!</h2>";
    echo "<p style=" font-size: 50px; color: blueviolet; font-family: 'Garamond', serif; ">Thank you for your submission.</p>";
} else {
    echo "<h2>Error: " . $sql . "<br>" . $conn->error . "</h2>";
}

$stmt->close();
$conn->close();
?>
