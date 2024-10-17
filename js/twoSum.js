//Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).





//Solution
function twoSum(numbers, target) {
    let ans=numbers.filter((x)=>numbers.includes(target-x))
    return [numbers.indexOf(ans[0]),numbers.lastIndexOf(target-ans[0])]
 }