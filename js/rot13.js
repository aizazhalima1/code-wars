//ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

//Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".





//Solution
function rot13(message){
    //your code here
    let newStr=''
    let alph='abcdefghijklmnopqrstuvwxyz'
    let ALPH='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  for(let i=0;i<message.length;i++){
    if(alph.includes(message[i])){
      if(!alph[(alph.indexOf(message[i])+13)]){
         newStr=newStr+alph[(alph.indexOf(message[i])-13)]
      }
      else{
      newStr=newStr+alph[(alph.indexOf(message[i])+13)]}
    }
    else if(ALPH.includes(message[i])){
        if(!ALPH[(ALPH.indexOf(message[i])+13)]){
         newStr=newStr+ALPH[(ALPH.indexOf(message[i])-13)]
      }
      else{
      newStr=newStr+ALPH[(ALPH.indexOf(message[i])+13)]}
    }
    else{
      newStr=newStr+message[i]
    }
  }
    return newStr
  
  }