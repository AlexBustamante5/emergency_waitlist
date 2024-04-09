

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Signup Page</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <nav class="top-navbar">
        <div class="navbar-container">
            <h1>Emergency Room Triage</h1>
            <a href="login.php" class="home-button">Login</a>
        </div>
    </nav>
    <h1>Sign up  </h1>
    <form action="database/database.php" method="POST">
        <label for="username">Username:</label>
        <input type="text" id="username" name="username" required>
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required>
        <input type="submit" value="submit" id="submit">
    </form>
</body>
</html>

