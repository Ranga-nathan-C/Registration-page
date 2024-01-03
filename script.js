var Username = document.getElementById('Username');
var Email = document.getElementById('Email');
var password = document.getElementById("password");
var confirmPassword = document.getElementById("Confirmpassword");

function validateEmail(Email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(Email).toLowerCase());
}
function validateForm() {

    if (Username.value == "" || Email.value == "" || password.value == "" || confirmPassword.value == "") {
        alert("Please fill out all fields");
        return false;
    }

    if (password.value !== confirmPassword.value) {
        alert("Passwords do not match");
        return false;
    }

    if (!validateEmail(Email.value)) {
        alert("Please enter a valid email address");
        return false;
    }
    
    

    return true;
}




