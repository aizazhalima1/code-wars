//In this kata you are required to, given a string, replace every letter with its position in the alphabet.

//If anything in the text isn't a letter, ignore it and don't return it.





//Solution
function alphabetPosition(text) {
    let p=[]
    let alp='abcdefghijklmnopqrstuvwxyz'
    text=text.toLowerCase().split('')
    text=text.filter((x)=>alp.includes(x))
    for(let i=0;i<=text.length-1;i++){
      p.push(alp.indexOf(text[i])+1)
      }
      return p.join(' ')
    }
  