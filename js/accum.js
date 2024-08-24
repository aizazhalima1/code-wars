//This time no story, no theory. The examples below show you how to write function accum:

//Examples:
//accum("abcd") -> "A-Bb-Ccc-Dddd"
//accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
//accum("cwAt") -> "C-Ww-Aaa-Tttt"





//Solution
function accum(s) {
    let newStr=s[0].toUpperCase()
    for(let i=1;i<s.length;i++){
      newStr=newStr + '-' + s[i].toUpperCase() + (s[i].toLowerCase()).repeat(i)
    }
      return newStr
  }