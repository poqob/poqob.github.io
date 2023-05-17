<?php
$name = $_GET['name'];
$surname = $_GET['surname'];
$email = $_GET['email'];
$age = $_GET['age'];
$gender = $_GET['gender'];
$message = $_GET['message'];
?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Form Submitted</title>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
</head>

<body>
  <div class="container mt-5">
    <h1>Form Submitted</h1>
    <div class="alert alert-success">
      <p>Yes, your form has been successfully submitted!</p>
      <p>Your form inputs:</p>
      <ul>
        <li><strong>Name:</strong> <?php echo $name; ?></li>
        <li><strong>Surname:</strong> <?php echo $surname; ?></li>
        <li><strong>Email:</strong> <?php echo $email; ?></li>
        <li><strong>Age:</strong> <?php echo $age; ?></li>
        <li><strong>Gender:</strong> <?php echo $gender; ?></li>
        <li><strong>Message:</strong> <?php echo $message; ?></li>
      </ul>
    </div>
  </div>
</body>

</html>
