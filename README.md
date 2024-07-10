# LoginPageJhansireddy
# Login Page
This project is a simple login page with client-side validation for email and password fields. It includes functionality to display error messages for invalid or empty inputs and provides a mock API request upon form submission.

## Features
- *Email and Password Validation*: Ensures that the email is in the correct format and the password is at least 6 characters long.
- *Error Messages*: Displays error messages for empty or invalid email and password fields.
- *Mock API Request*: Simulates a login request using [jsonplaceholder.typicode.com](https://jsonplaceholder.typicode.com) for demonstration purposes.

## Technologies Used
- HTML
- CSS
- JavaScript

## Setup
1. Clone the repository: bash git clone https://github.com/your-username/login-page.git    
2. Navigate to the project directory:bashcd login-page    
3. Open index.html in your preferred web browser.

## Usage
1. Enter your email and password in the login form.
2. Click the "Login" button.
3. If the email or password fields are empty or invalid, an error message will be displayed.
4. If the inputs are valid, a mock API request will be made, and a success message will be displayed.

## Code Explanation
### HTML
The HTML file contains the structure of the login page:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login Page</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="login-container">
        <form id="loginForm">
            <h2>Login</h2>
            <label for="username">Username:</label>
            <input type="text" id="username" name="username">
            <label for="password">Password:</label>
            <input type="password" id="password" name="password">
            <label for="email">Email:</label>
            <input type="email" id="email" name="email">
            <div id="message" class="error-message"></div>
            <button type="submit">Login</button>
        </form>
    </div>
    <script src="script.js"></script>
</body>
</html>
