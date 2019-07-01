function validate(input) {
    if (isNaN(Date.parse(input))) return false;
    return true;
}

const errorMessage = "Please provide a date in the format dd/mm/yyyy";

module.exports = {
    validate,
    errorMessage
}