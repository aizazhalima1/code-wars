//Move every letter in the provided string forward 10 letters through the alphabet.





//Solution
function moveTen(s){
    let alp='abcdefghijklmnopqrstuvwxyzabcdefghij'
    alp=alp.split('')
    s=s.split('')
    let p=s.map((x)=>alp[alp.indexOf(x)+10])
    return p.join('')
    
    
    }