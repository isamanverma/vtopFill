function clickButtonsAndFillInputs() {
    let vtop_registration_number = 'YOUR_REGISTRATION_NUMBER';
    let vtop_password = 'YOUR_PASSWORD';

    var button1 = document.querySelector('.btn.btn-success.pull-right');
    if (button1) {
        button1.click();
    }

    var divWithButton2 = document.querySelector('.input-group.pull-right');
    if (divWithButton2) {
        var button2 = divWithButton2.querySelector('.btn.btn-primary.btn-flat');
        if (button2) {
            button2.click();
        }
    }

    setTimeout(function () {
        var usernameInput = document.getElementById('uname');
        if (usernameInput) {
            usernameInput.value = vtop_registration_number;
        }

        var passwordInput = document.getElementById('passwd');
        if (passwordInput) {
            passwordInput.value = vtop_password;
        }

        var button3 = document.getElementById('captcha');
        if (button3) {
            button3.click();
        }
    }, 1000);
}

window.addEventListener('load', clickButtonsAndFillInputs);
