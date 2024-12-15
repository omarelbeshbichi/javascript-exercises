const fibonacci = function(num) {
   


if (num >= 0) {
    if (num >= 3) {
        let fibonacci = [1, 1];
    for(let i=2; i <=num; i++) {
        fibonacci[i] = fibonacci[i-1] + fibonacci[i-2];   
    }
    return fibonacci[num-1]
    } 
        else if (num == 0) {
            return 0
        }
        else {    
            return 1
        }
}
else {
    return "OOPS"
}
    


};

// Do not edit below this line
module.exports = fibonacci;
