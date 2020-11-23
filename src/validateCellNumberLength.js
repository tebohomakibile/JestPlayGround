function validateCellNumberLength(cellNumber) {

    let cellNumberLength = false;
    if (cellNumber.length === 10) {
        cellNumberLength = true;
    } else {
        cellNumberLength = false;
    }

    return cellNumberLength;

}

function validateCellNumber(cellNumber){
    let secondDigit = cellNumber.substring(1,2);
    let cellNumberValid = false;

    switch (secondDigit) {
    case '8':
        cellNumberValid = true;
        break;
    case '7':
        cellNumberValid = true;
        break;
    case '6':
        cellNumberValid = true;
    }

    return secondDigit;
    
}

module.exports = {validateCellNumberLength, validateCellNumber};

