function validateForm() {
    // Validate Names
    let firstName = document.forms["myForm"]["firstName"].value;
    let lastName = document.forms["myForm"]["lastName"].value;
    let validName = /^[A-Z]+[a-zA-Z]+$/

    if (!firstName.match(validName)) {
        alert("Incorrect first name given");
        return false;
    }

    if (!lastName.match(validName)) {
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