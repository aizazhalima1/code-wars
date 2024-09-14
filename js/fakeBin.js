//Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.





//Solution
function fakeBin(x){
    let p= x.split('').map((y)=>  Number(y)<5? '0':'1')
    return p.join('')
   }