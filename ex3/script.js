
function valid() {
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var phoneNumber = document.getElementById('number').value;

    var usernameRegex = /^[a-zA-Z0-9_]+$/; // Alphanumeric and underscore only
    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2, 4}$/; // Email format
    var phoneRegex = /^\d{10}$/; // 10-digit phone number

    // var isValid = true;

    // Validate Username
    if (!username.match(usernameRegex)) {
        document.getElementById('uname').textContent = 'Invalid username';
        // isValid = false;
    } else {
        document.getElementById('uname').textContent = '';
    }

    // Validate Email
    if (!email.match(emailRegex)) {
        document.getElementById('mail').textContent = 'Invalid email';
        // isValid = false;
    } else {
        document.getElementById('mail').textContent = '';
    }

    // Validate Phone Number
    if (!phoneNumber.match(phoneRegex)) {
        document.getElementById('num').textContent = 'Invalid phone number';
        // isValid = false;
    } else {
        document.getElementById('num').textContent = '';
    }

    // Additional validation for other fields can be added here.

    // return isValid;
}
