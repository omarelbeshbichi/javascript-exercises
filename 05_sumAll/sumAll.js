const sumAll = function(num1, num2) {

    ans = 0;

    if (num1 < 0 || num2 < 0) {
        return "ERROR";
    }
        else if (!Number.isInteger(num1) || !Number.isInteger(num2) ) {
        return "ERROR";
    }
    else if (typeof num1 === String || typeof num2 === String ) {
        return "ERROR";
    }
    else if (typeof num1 !== "number"  || typeof num2 !== "number" ) {
        return "ERROR";
    };

    for (let i = Math.min(num1, num2); i <= Math.max(num1,num2); i++) {

        ans += i;

    };

    return ans;

};

// Do not edit below this line
module.exports = sumAll;
