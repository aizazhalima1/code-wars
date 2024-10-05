//create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.





//Solution
function gimme (triplet) {
    let minValue=Math.min(...triplet);
    let maxValue = Math.max(...triplet);
    let filtered=triplet.filter((x)=>x!=minValue && x!=maxValue)
    return triplet.indexOf(filtered[0])
    }