function validate(input) {
    if (input) return true;
    return false;
}

const errorMessage = "Please complete this field";

module.exports = {
    validate,
    errorMessage
};