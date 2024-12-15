const palindromes = function (string) {

    const stringClean = string.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

    let  palindromeString = stringClean.split("").reverse().join("");
    if (palindromeString === stringClean) {
        return true
    }
    else {
        return false
    }

};

// Do not edit below this line
module.exports = palindromes;
