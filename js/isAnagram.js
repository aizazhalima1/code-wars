//An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

//Note: anagrams are case insensitive

//Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise//





//Solution
var isAnagram = function(test, original) {
    test=test.toLowerCase().split('').sort()
    original=original.toLowerCase().split('').sort()
    console.log(test)
    console.log(original)
    return test.join('')==original.join('')? true : false
  };