function validateIdLength(idNumber){
    let idNumberLength = false;
    if(idNumber.length === 13) {
        idNumberLength = true;
    } else {
        idNumberLength = false;
    }
    return idNumberLength;
}

module.exports = validateIdLength;
