<?php
require_once "db.php";

$fullName = $_POST["full_name"];
$studentId = $_POST["student_id"];
$email = $_POST["email"];
$department = $_POST["department"];
$workshop = $_POST["workshop"];
$expectations = $_POST["expectations"];

$sql = "INSERT INTO registrations
        (full_name, student_id, email, department, workshop, expectations)
        VALUES (?, ?, ?, ?, ?, ?)";

$stmt = $pdo->prepare($sql);

$stmt->execute([
    $fullName,
    $studentId,
    $email,
    $department,
    $workshop,
    $expectations
]);

echo "Registration successful!<br>";
echo "<a href='index.php'>Back to Registration Form</a>";
?>