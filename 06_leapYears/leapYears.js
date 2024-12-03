const leapYears = function(year) {

    ans = true;

    if (year % 4 === 0 ) {
        ans = true; 
        if (year % 100 === 0) {
            ans = false;
            if (year % 400 === 0) {
                ans = true;
            };
        };       
    }
    else {
        ans = false;
    };

    return ans;

};

// Do not edit below this line
module.exports = leapYears;
