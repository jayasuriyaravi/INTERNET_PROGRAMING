
function valid() {
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var con_pass = document.getElementById("con-password").value;
    var num = document.getElementById("number").value;
    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

    // console.log(email);
    if (username == '') {
        document.getElementById("uname").innerHTML = "Enter Charaters!!!!!";
    }
    else if (!isNaN(username) && username.length <= 6) {
        document.getElementById("uname").innerHTML = "Enter Aleast Six Charater ";
    }
    else if (isNaN(num)) {
        document.getElementById("num").innerHTML = "Enter Numbers ";
    }
    else if (num.length !== 10) {
        document.getElementById("num").innerHTML = "Enter Ten Numbers  ";
    }
    else if (!passwordPattern.test(password)) {
        document.getElementById("pass").innerHTML = "Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters";
        // return false;
    }
    else if (password !== con_pass) {
        document.getElementById("con-pass").innerHTML = "Password doesn't Match";
    }
}