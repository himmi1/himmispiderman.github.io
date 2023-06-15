<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $name = $_POST["name"];
    $email = $_POST["email"];
    $subject = $_POST["subject"];
    $message = $_POST["message"];

    // Process the form data (you can customize this based on your requirements)
    // For example, you might send an email or store the data in a database

    // Redirect to a thank you page or display a success message
    exit;
}
?>