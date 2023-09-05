
function valid() {
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var phoneNumber = document.getElementById('number').value;
    var rollno = document.getElementById('RegNo').value;
    var department = document.getElementById('dept').value;
    var year = document.getElementById('year').value;
    var pincode = document.getElementById('pincode').value;

    // var usernameRegex = /^[a-zA-Z0-9_]+$/; 
    var emailvalid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2, 4}$/; // Email format
    var phonevalid = /^\d{10}$/;


    if (username === '' || username === null) {
        document.getElementById("uname").innerHTML = "Enter Charaters!!!!!";
    } else {
        document.getElementById('uname').textContent = '';
    }

    if (rollno === '' || rollno === null) {
        document.getElementById("rollno").innerHTML = "Enter Charaters!!!!!";
    } else {
        document.getElementById('rollno').textContent = '';
    }

    if (!email.match(emailvalid)) {
        document.getElementById('mail').innerHTML = 'Invalid email';
    } else {
        document.getElementById('mail').innerHTML = '';
    }

    if (!phoneNumber.match(phonevalid)) {
        document.getElementById('num').innerHTML = 'Invalid phone number';
    } else {
        document.getElementById('num').innerHTML = '';
    }

    if (department === "") {
        document.getElementById('dept-error').innerHTML = 'Please select a department';
    } else {
        document.getElementById('dept-error').innerHTML = '';
    }

    if (year === "") {
        document.getElementById('year-error').innerHTML = 'Please select a year';
    } else {
        document.getElementById('year-error').innerHTML = '';
    }

    if (pincode.length !==6 ) {
        document.getElementById('pin-error').innerHTML = 'Invalid pincode';
    } else {
        document.getElementById('pin-error').innerHTML = '';
    }

}
