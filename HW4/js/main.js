function parseNumber(number) {
    let objNumber;
    if (number == NaN) {
        console.log("Error not a number\n");
        return NaN;
    }
    if (number > 999) {
        console.log("Error. Max number is 999\n");
        return NaN;
    }
    let strNumber = number + "";
    strNumber = strNumber.padStart(3, "0");
    objNumber = {
        едениы: strNumber[2],
        десятки: strNumber[1],
        сотни: strNumber[0],
    }
    return objNumber;




}

onsole.log(parseNumber(142));
