





//Solution
var isAnagram = function(test, original) {
    test=test.toLowerCase().split('').sort()
    original=original.toLowerCase().split('').sort()
    console.log(test)
    console.log(original)
    return test.join('')==original.join('')? true : false
  };