//Given a string str, reverse it and omit all non-alphabetic characters.





//Solution
function reverseLetter(str) {
    str=str.split('').filter((x)=> 'abcdefghijklmnopqrstuvwxyz'.includes(x)).reverse().join('')
    return str
    }