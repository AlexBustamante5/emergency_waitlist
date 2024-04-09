<?php
    $db_server = "localhost";
    $db_user = "root";
    $db_pass = "";
    $db_name = "triage";
    $conn = mysqli_connect($db_server, $db_user, $db_pass, $db_name);

    if (!$conn) {
        echo "Could not connect: " . mysqli_connect_error();
        exit;
    }

    if (isset($_POST['username']) && isset($_POST['password'])) {
        $user = $_POST['username'];
        $pass = $_POST['password'];
    
        // Using prepared statements to prevent SQL injection
        $stmt = mysqli_prepare($conn, "INSERT INTO patient (username, password) VALUES (?, ?)");
        mysqli_stmt_bind_param($stmt, 'ss', $user, $pass);
    
        if (mysqli_stmt_execute($stmt)) {
            echo "Record added successfully";
        } else {
            echo "Error: " . mysqli_error($conn);
        }
    
        mysqli_stmt_close($stmt);
    }

    mysqli_close($conn);

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Database Page</title>
    <link rel="stylesheet" href="../style.css">
</head>
<body>
    <nav class="top-navbar">
        <div class="navbar-container">
            <h1>Emergency Room Triage</h1>
            <a href="../home.php" class="home-button">Home</a>
        </div>
    </nav>
</body>
</html>
