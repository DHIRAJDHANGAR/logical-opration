function truthyOrFalsy(input) {
    if(input == 0 || input == null || input == undefined || input == NaN || input == false) {
        return "input is falsy";
    }
    else{
        return "input is truthy";
    }
}