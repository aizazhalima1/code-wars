//Write a function that takes a list of strings as an argument and returns a filtered list containing the same elements but with the 'geese' removed.





//Solution
function gooseFilter (birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    birds=birds.filter((x)=>!geese.includes(x))
    return birds
   }