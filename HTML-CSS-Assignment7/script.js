document.addEventListener('DOMContentLoaded', function() {
    populateForm();
});

document.getElementById('register').addEventListener('click', function(event) {
    event.preventDefault();
    clearErrors();

    var firstName = document.getElementsByName('first_name')[0].value;
    var lastName = document.getElementsByName('last_name')[0].value;
    var email = document.getElementsByName('email')[0].value;
    var phone = document.getElementsByName('phone')[0].value;
    var guests = document.getElementsByName('guests')[0].value;
    var eventDate = document.getElementsByName('event_date')[0].value;
    var cuisine = document.getElementsByName('cuisine')[0].value;
    var choiceYes = document.getElementById('yes').checked;
    var choiceNo = document.getElementById('no').checked;

    var nameRegex = /^[a-zA-Z]+$/;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var phoneRegex = /^\d{10}$/;

    var valid = true;

    if (!choiceYes && !choiceNo) {
        document.getElementById('choiceError').innerText = 'Please indicate if you will be attending the event.';
        valid = false;
    }

    if (!firstName || !nameRegex.test(firstName)) {
        document.getElementById('nameError').innerText = 'Please enter a valid first name.';
        valid = false;
    }

    if (!lastName || !nameRegex.test(lastName)) {
        document.getElementById('nameError').innerText = 'Please enter a valid last name.';
        valid = false;
    }

    if (!email || !emailRegex.test(email)) {
        document.getElementById('emailError').innerText = 'Please enter a valid email address.';
        valid = false;
    }

    if (!phone || !phoneRegex.test(phone)) {
        document.getElementById('phoneError').innerText = 'Please enter a valid phone number (10 digits).';
        valid = false;
    }

    if (!guests || isNaN(guests) || guests < 0) {
        document.getElementById('guestsError').innerText = 'Please enter a valid number of guests.';
        valid = false;
    }

    if (!eventDate) {
        document.getElementById('dateError').innerText = 'Please select an event date.';
        valid = false;
    }

    if (!cuisine) {
        document.getElementById('cuisineError').innerText = 'Please select a cuisine.';
        valid = false;
    }

    if (valid) {
        localStorage.setItem('first_name', firstName);
        localStorage.setItem('last_name', lastName);
        localStorage.setItem('email', email);
        localStorage.setItem('phone', phone);
        localStorage.setItem('guests', guests);
        localStorage.setItem('event_date', eventDate);
        localStorage.setItem('cuisine', cuisine);
        localStorage.setItem('attending', choiceYes ? 'yes' : 'no');

        alert('Your details have been successfully stored in the local storage');
    }
});

document.getElementById('clear').addEventListener('click', function(event) {
    localStorage.clear();
    clearForm();
});

function clearErrors() {
    document.getElementById('choiceError').innerText = '';
    document.getElementById('nameError').innerText = '';
    document.getElementById('emailError').innerText = '';
    document.getElementById('phoneError').innerText = '';
    document.getElementById('guestsError').innerText = '';
    document.getElementById('dateError').innerText = '';
    document.getElementById('cuisineError').innerText = '';
}

function populateForm() {
    var firstName = localStorage.getItem('first_name');
    var lastName = localStorage.getItem('last_name');
    var email = localStorage.getItem('email');
    var phone = localStorage.getItem('phone');
    var guests = localStorage.getItem('guests');
    var eventDate = localStorage.getItem('event_date');
    var cuisine = localStorage.getItem('cuisine');
    var attending = localStorage.getItem('attending');

    if (firstName) document.getElementsByName('first_name')[0].value = firstName;
    if (lastName) document.getElementsByName('last_name')[0].value = lastName;
    if (email) document.getElementsByName('email')[0].value = email;
    if (phone) document.getElementsByName('phone')[0].value = phone;
    if (guests) document.getElementsByName('guests')[0].value = guests;
    if (eventDate) document.getElementsByName('event_date')[0].value = eventDate;
    if (cuisine) document.getElementsByName('cuisine')[0].value = cuisine;
    if (attending === 'yes') document.getElementById('yes').checked = true;
    if (attending === 'no') document.getElementById('no').checked = true;
}

function clearForm() {
    document.getElementsByName('first_name')[0].value = '';
    document.getElementsByName('last_name')[0].value = '';
    document.getElementsByName('email')[0].value = '';
    document.getElementsByName('phone')[0].value = '';
    document.getElementsByName('guests')[0].value = '';
    document.getElementsByName('event_date')[0].value = '';
    document.getElementsByName('cuisine')[0].value = '';
    document.getElementById('yes').checked = false;
    document.getElementById('no').checked = false;
}
