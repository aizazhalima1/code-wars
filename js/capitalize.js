//iven a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.


//The input will be a lowercase string with no spaces.





//Solution
function capitalize(s){
    let arr=[]
    s=s.split('')
    let first= s.map((x,i)=> i%2==0 ? x.toUpperCase() : x )
     let second= s.map((x,i)=> i%2!=0 ? x.toUpperCase() : x ) 
     arr.push(first.join(''))
    arr.push(second.join(''))
    return arr
    }