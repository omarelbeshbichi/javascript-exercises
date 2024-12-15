const getTheTitles = function(arr) {

    return arr.reduce((finalArray, obj) => {
        finalArray.push(obj.title);
        return finalArray
    }, [])

};

// Do not edit below this line
module.exports = getTheTitles;
