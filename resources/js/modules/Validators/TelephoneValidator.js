function validate(input) {
    // Regex taken from http://regexlib.com/(X(1)A(CnTku_dhxFAb2Ain_TgGrhEBW56Fzb_iMYGHVV9wXBbFEcsOKJFZD06iuKpfBEj7OOXprcgm3yjKORA-hCsL__EidjJkaUWLzG9g8rIqtNonJ8uJ6lkB9otCBlntaNDpnokAoSvCa9snIB9aE3nC8Kame0owsXUnbtP4t-UVftAp17pvclyVPTfTnhihXPYy0))/REDetails.aspx?regexp_id=589
    var regex = /^((\(?0\d{4}\)?\s?\d{3}\s?\d{3})|(\(?0\d{3}\)?\s?\d{3}\s?\d{4})|(\(?0\d{2}\)?\s?\d{4}\s?\d{4}))(\s?\#(\d{4}|\d{3}))?$/
    return regex.test(input);
}

const errorMessage = "Please provide a valid, UK telephone number";

module.exports = {
    validate,
    errorMessage
};