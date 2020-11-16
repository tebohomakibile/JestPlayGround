function validateIdNumberDigit(idNumber) {
    let regExpTest = /^\d+$/.test(idNumber);
    let regExpTestResult = false;

    if(regExpTest === true) {
        regExpTestResult = true;
    } else {
        regExpTestResult = false;
    }

    return regExpTestResult;
}
module.exports = validateIdNumberDigit;    
