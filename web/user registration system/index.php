<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        body {
            background-color: #f5f5f5;
        }

        #form_page {
            max-width: 450px;
            margin: 50px auto;
            padding: 30px;
            background-color: #ffffff;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        #heading {
            font-size: 30px;
            margin-bottom: 20px;
            color: #333333;
        }

        .input {
            margin-bottom: 20px;
        }

        input[type="text"],
        input[type="email"],
        input[type="password"] {
            width: 100%;
            padding: 15px;
            border: 1px solid #cccccc;
            border-radius: 8px;
            background-color: #f8f8f8;
            color: #333333;
        }

        input[type="text"]:focus,
        input[type="email"]:focus,
        input[type="password"]:focus {
            outline: none;
            border-color: #4CAF50;
        }

        button {
            background-color: #4CAF50;
            color: #ffffff;
            padding: 15px 20px;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            font-weight: bold;
            text-transform: uppercase;
        }

        button:hover {
            background-color: #45a049;
        }
    </style>

</head>
<body>
    <form method="post" action="register.php">
        <div id="form_page">
            <div id="form-body">
                <div>
                    <h1 id="heading">Form</h1>
                </div>
            </div>
            <br>
            <div class="input">
                <input type="text" placeholder="Name" name="name" required>
            </div><br>
            <div class="input">
                <input type="Email" placeholder="Email" name="email" required id='email'>
            </div><br>
            <div class="input">
                <input type="password" placeholder="Password" name="password" required>
            </div><br>
            <div class="input">
                <input type="password" placeholder="Confirm Password" name="cpassword" required>
            </div><br>
            <div class="id-input">
                <button type="submit">Submit</button>
            </div><br>
        </div>
    </form>
</body>
</html>
