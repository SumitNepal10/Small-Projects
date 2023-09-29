<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $password = $_POST["password"];
    $cpassword = $_POST["cpassword"];

    // Check if the password and confirm password match
    if ($password === $cpassword) {
        // Hash the password using the default algorithm (bcrypt) and a random salt
        $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

        // Read existing data from JSON file, if it exists
        $dataFile = "data.json";
        $array_data = [];

        if (file_exists($dataFile)) {
            $current_data = file_get_contents($dataFile);
            $array_data = json_decode($current_data, true);
        }

        // Create a new associative array with user data
        $newData = [
            'Name' => $name,
            'Email' => $email,
            'Password' => $hashedPassword,
        ];

        // Add the new data to the existing array
        $array_data[] = $newData;

        // Write the updated data back to the JSON file
        if (file_put_contents($dataFile, json_encode($array_data))) {
            echo "Posted successfully";
        } else {
            echo "Failed to save data. Please try again.";
        }
    } else {
        echo "Passwords do not match";
    }
}
?>
