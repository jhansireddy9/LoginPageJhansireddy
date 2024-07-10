document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const messageDiv = document.getElementById('message');
    const spinner = document.getElementById('spinner');
    
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        clearMessage();
        showSpinner();
        
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        if (email === '' || password === '') {
            displayMessage('Email and password should not be empty', 'error');
            hideSpinner();
            return;
        }

        if (!validateEmail(email)) {
            displayMessage('Invalid email format', 'error');
            hideSpinner();
            return;
        }

        if (!validatePassword(password)) {
            displayMessage('Password must be at least 6 characters long', 'error');
            hideSpinner();
            return;
        }

        loginUser(email, password);
    });

    function validateEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }

    function validatePassword(password) {
        return password.length >= 6;
    }

    function displayMessage(message, type) {
        const messageType = type === 'error' ? 'red' : 'green';
        messageDiv.innerHTML = `<p style="color: ${messageType};">${message}</p>`;
    }

    function clearMessage() {
        messageDiv.innerHTML = '';
    }

    function showSpinner() {
        spinner.style.display = 'inline-block';
    }

    function hideSpinner() {
        spinner.style.display = 'none';
    }

    function loginUser(email, password) {
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: email,
                password: password
            }),
        })
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            hideSpinner();
            displayMessage('Login successful!', 'success');
        })
        .catch(function(error) {
            hideSpinner();
            displayMessage('Login failed. Please try again.', 'error');
        });
    }
});
