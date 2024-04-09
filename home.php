<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Home Page</title>
    <link rel="stylesheet" href="style.css">
    <script src="patient.js"></script>
</head>
<body>
    <nav class="top-navbar">
        <div class="navbar-container">
            <h1>Emergency Room Triage</h1>
            <a href="login.php" class="home-button">Logout</a>
        </div>
    </nav>
    <h1>Home page </h1>
    <form method="POST">
        <label for="injure">Enter the severity of your injure: </label>
        <input type="text" id="injure" name="injure" required>
        <input type="submit" value="submit" id="submit">
    </form>
    <div id="time">30:00</div> 
</body>
</html>