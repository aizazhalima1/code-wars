//Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string):





//Solution
function sumStr(a,b) {
    return a!='' && b!=''? String(Number(a)+Number(b)) : a=='' && b=='' ? '0':a=='' && b!=''?b: a
    }