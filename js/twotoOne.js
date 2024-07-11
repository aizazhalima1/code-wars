//Take 2 strings s1 and s2 including only letters from a to z. 
//Return a new sorted string, the longest possible, containing distinct letters - 
//each taken only once - coming from s1 or s2.







//Solution
function longest(s1, s2) {
  // your code
  let joint=s1+s2
  let joinArr=joint.split('').sort()
  let unique=[]
  for(let i=0;i<=joinArr.length-1;i++){
    if(!unique.includes(joinArr[i])){
      unique.push(joinArr[i])
    }
  }
  return (unique.join(''))
  
  
  
}