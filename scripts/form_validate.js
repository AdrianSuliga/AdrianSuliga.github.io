function validateForm() {
    // Validate First Name
    let firstName = document.forms["myForm"]["firstName"].value;
    let validFirstName = /^[A-Z]+[a-zA-Z]+$/

    if (!firstName.match(validFirstName)) {
        alert("Incorrect first name given");
        return false;
    }

    // Validate Last Name
    let lastName = document.forms["myForm"]["lastName"].value;
    let validLastName = /^[A-Z]+[a-zA-Z]+$/

    if (!lastName.match(validLastName)) {
        alert("Incorrect last name given");
        return false;
    }

    // Validate E-Mail
    let emailAddr = document.forms["myForm"]["emailInput"].value;
    let validEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

    if (!emailAddr.match(validEmail)) {
        alert("Incorrect email address");
        return false;
    }
}