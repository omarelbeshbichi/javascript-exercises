const removeFromArray = function(array, ...values) {
    
    for (let i = 0; i<values.length; i++) {
        
        array = array.filter(item => item !== values[i]);
    };

    return array;
    
};

// Do not edit below this line
module.exports = removeFromArray;
