//Starting with the original text, and given a character, return the text once it has been mutated so that all of the characters in the original text have been replaced with the character.





//Solution
function contamination(text, char){
    if(text=='' || char==''){
      return ''
    }
    else{
      return char.repeat(text.length)
      
    }
  }