//Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

//The output should be two capital letters with a dot separating them.





//Solution
function abbrevName(name){
    let ind=name.indexOf(' ')
    return(name[0].toUpperCase()+'.'+name[ind+1].toUpperCase())

   }