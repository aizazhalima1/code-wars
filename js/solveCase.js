//Given a lowercase string that has alphabetic characters only and no spaces, return the highest value of consonant substrings. Consonants are any letters of the alphabet except "aeiou".





//Solution
function solve(s) {
    let alp='abcdefghijklmnopqrstuvwxyz'
    alp=alp.split('')
   s=s.replace(/[aeiou]/g,' ')
    s=s.split(' ')
    let len=[]
    for(let i=0;i<s.length;i++){
   len.push(s[i].split('').map((x)=>alp.indexOf(x)+1).reduce((acc,c)=> acc + c, 0))
    }
    return Math.max(...len) 
  }
  