//Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

//Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

//If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.





//Solution
function order(words){
    let wordsArr=words.split(' ')
    let newp=[]
    for(let i=0;i<wordsArr.length;i++){
      let filtered=wordsArr.filter((x)=>x.includes(i+1))
      newp.push(filtered[0])
    }
    return newp.join(' ')
  }