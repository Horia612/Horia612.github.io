<?php
// Database credentials
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "form";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Prepare SQL statement to insert form data into database
$sql = "INSERT INTO form_data (first_name, last_name, email, subject, message, work_type, contact_option)
        VALUES (?, ?, ?, ?, ?, ?, ?)";

// Prepare and bind parameters
$stmt = $conn->prepare($sql);
$stmt->bind_param("sssssss", $fname, $lname, $email, $subject, $message, $work, $contact);

// Retrieve form data
$fname = $_POST['fname'];
$lname = $_POST['lname'];
$email = $_POST['mail'];
$subject = $_POST['subject'];
$message = $_POST['mess'];
$work = $_POST['work'];
$contact = isset($_POST['check']) ? "Yes" : "No";

// Execute prepared statement
if ($stmt->execute()) {
    echo "<h2>Form Submitted Successfully!</h2>";
    echo "<p>Thank you for your submission.</p>";
} else {
    echo "<h2>Error: " . $sql . "<br>" . $conn->error . "</h2>";
}

// Close statement and connection
$stmt->close();
$conn->close();
?>
