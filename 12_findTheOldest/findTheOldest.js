const findTheOldest = function(arr) {

    const currentYear = new Date().getFullYear();

    //arrFiltered = arr.filter((obj) => obj.hasOwnProperty("yearOfDeath"));
    
    let arrSorted = arr.sort((objA, objB) => {
        
        const bDeath = objB.yearOfDeath || currentYear;
        const aDeath = objA.yearOfDeath || currentYear;

        const bAge = bDeath - objB.yearOfBirth;
        const aAge = aDeath - objA.yearOfBirth;
        
        return bAge - aAge
    });
    
    return arrSorted[0]

};

// Do not edit below this line
module.exports = findTheOldest;
