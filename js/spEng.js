//Given a string of arbitrary length with any ascii characters. Write a function to determine whether the string contains the whole word "English".





//Solution
function spEng(sentence){
    let arr=sentence.split(' ')
    return arr[0].search(/english/i)!= -1 ? true :false
    }
    