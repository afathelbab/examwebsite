document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting the traditional way
    
    // Get form values
    const email = document.getElementById('signupEmail').value.trim();
    const password = document.getElementById('signupPassword').value.trim();
    
    // Validate form values
    if (email === '' || password === '') {
        displayMessage('All fields are required.', 'red');
        return;
    }

    if (!validateEmail(email)) {
        displayMessage('Invalid email address.', 'red');
        return;
    }
    
    if (password.length < 6) {
        displayMessage('Password must be at least 6 characters long.', 'red');
        return;
    }
    
    // Save sign-up data to localStorage
    localStorage.setItem('signupEmail', email);
    localStorage.setItem('signupPassword', password);
    
    displayMessage('Sign-up successful. You can now log in.', 'green');
    displayLoginLink();
});

function displayMessage(message, color) {
    const messageElement = document.getElementById('signupMessage');
    messageElement.textContent = message;
    messageElement.style.color = color;
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function displayLoginLink() {
    const messageElement = document.getElementById('signupMessage');
    
    // Check if the login link already exists
    if (!document.getElementById('loginLink')) {
        const loginLink = document.createElement('a');
        loginLink.href = 'login.html';
        loginLink.id = 'loginLink';
        loginLink.textContent = ' Go to login page';
        loginLink.style.color = 'blue';
        loginLink.style.textDecoration = 'underline';
        messageElement.appendChild(loginLink);
    }
}
