<?php
$db_server = "localhost";
$db_user = "root";
$db_pass = "";
$db_name = "triage";
$conn = mysqli_connect($db_server, $db_user, $db_pass, $db_name);

if (!$conn) {
    die("Could not connect: " . mysqli_connect_error());
}

$message = '';

if (isset($_POST['username']) && isset($_POST['password'])) {
    $username = mysqli_real_escape_string($conn, $_POST['username']);
    $password = mysqli_real_escape_string($conn, $_POST['password']);

    // Using prepared statements to prevent SQL injection
    $stmt = mysqli_prepare($conn, "SELECT * FROM patient WHERE username = ? AND password = ?");
    mysqli_stmt_bind_param($stmt, 'ss', $username, $password);
    mysqli_stmt_execute($stmt);
    $result = mysqli_stmt_get_result($stmt);
    //check if user and password match an existing row in the db
    if (mysqli_num_rows($result) > 0) {
        $message = "Login successful";
        //redirect to home page
        header("Location: home.php");
    } else {
        $message = "Invalid username or password";
    }

    mysqli_stmt_close($stmt);
}

mysqli_close($conn);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Login Page</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <nav class="top-navbar">
        <div class="navbar-container">
            <h1>Emergency Room Triage</h1>
            <a href="signup.php" class="home-button">Sign up</a>
        </div>
    </nav>
    <h1>Log in </h1>
    <form method="POST">
        <label for="username">Username:</label>
        <input type="text" id="username" name="username" required>
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required>
        <input type="submit" value="submit" id="submit">
    </form>
    
    <?php if ($message != ''): ?>
        <p><?= $message ?></p>
    <?php endif; ?>
</body>
</html>