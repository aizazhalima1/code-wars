//Given a string, you have to return a string in which each character (case-sensitive) is repeated once.





//Solution
function doubleChar(str) {
    let fin=''
    for(i=0;i<str.length;i++){
      fin+=str[i].repeat(2)
    }
    return fin
  }