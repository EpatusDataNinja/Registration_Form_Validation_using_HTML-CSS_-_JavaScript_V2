function validation() {
    var form = document.forms['Formfill'];
    var email = form['Email'].value.trim();
    var password = form['Password'].value;

    document.getElementById('result').innerHTML = '';

    if (email === '') {
        document.getElementById('result').innerHTML = 'Enter your Email*';
        return false;
    }

    if (password === '') {
        document.getElementById('result').innerHTML = 'Enter your Password*';
        return false;
    }

    let users = JSON.parse(localStorage.getItem('users')) || [];
    let user = users.find(user => user.email === email && user.password === password);

    if (user) {
        window.location.href = 'content/content1.html';
        return false; // Prevent form submission
    } else {
        document.getElementById('result').innerHTML = 'Invalid email or password*';
        return false; // Prevent form submission
    }
}
