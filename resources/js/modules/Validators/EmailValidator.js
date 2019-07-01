function validate(input) {
    // Email validation regex taken from the Chromium project.
    var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(input);
}

const errorMessage = "Please provide a valid email address";

module.exports = {
    validate,
    errorMessage
};