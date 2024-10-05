//The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.





//Solution
function duplicateEncode(word){
    word=word.toLowerCase()
     word=word.split('')
     p=[]
   
     for(let i=0;i<word.length;i++){
       let removed=[]
       removed=word.filter((x)=>x==word[i])
      
       if(removed.length>1){
         p.push(')')
       }
       else{
         p.push('(')
       }
     }
     return p.join('')
     
   }