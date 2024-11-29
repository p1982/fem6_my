
const getMaxValue2 = function(value1, value2, value3 = 5) {
    // return (value1>value2 && value1>value3) ? value1 : ((value2>value1 && value2>value3) ? value2 : value3);
    if (value1>value2 && value1>value3){
        return value1;
    }
    else if(value2>value1 && value2>value3){
        return value2;
    }
    else{
        return value3;
    }
}
getMaxValue2(1, 2, 3)