var popup = document.getElementById('popup');

function validation() {
    var form = document.forms['Formfill'];
    var username = form['Username'].value.trim();
    var email = form['Email'].value.trim();
    var password = form['Password'].value;
    var confirmPassword = form['Confirm_Password'].value;

    document.getElementById('result').innerHTML = '';

    if (username === '') {
        document.getElementById('result').innerHTML = 'Enter Username*';
        return false;
    } else if (username.length < 6) {
        document.getElementById('result').innerHTML = 'At least six letters*';
        return false;
    }

    if (email === '') {
        document.getElementById('result').innerHTML = 'Enter your Email*';
        return false;
    }

    if (password === '') {
        document.getElementById('result').innerHTML = 'Enter your Password*';
        return false;
    } else if (password.length < 6) {
        document.getElementById('result').innerHTML = 'Password must be 6-digits*';
        return false;
    }

    if (confirmPassword === '') {
        document.getElementById('result').innerHTML = 'Enter Confirm Password*';
        return false;
    } else if (password !== confirmPassword) {
        document.getElementById('result').innerHTML = "Password doesn't match*";
        return false;
    }

    let users = JSON.parse(localStorage.getItem('users')) || [];
    if (users.some(user => user.email === email)) {
        document.getElementById('result').innerHTML = 'Email is already registered.';
        return false;
    }

    users.push({ username, email, password });
    localStorage.setItem('users', JSON.stringify(users));

    popup.classList.add('open-slide');
    return false;
}

function CloseSlide() {
    popup.classList.remove('open-slide');
}
