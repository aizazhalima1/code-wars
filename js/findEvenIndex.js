//You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N.
//
//If there is no index that would make this happen, return -1.





//Solution
function findEvenIndex(arr)
{
let rhs=0
let lhs=0
let k=[]
for(let i=0;i<arr.length;i++){
      if(arr.slice(0,i)==[]){
        lhs=0
      }
      else{
    lhs=arr.slice(0,i).reduce((acc,c)=> acc + c, 0)}
    if(arr.slice(i+1,arr.length)==[]){
        rhs=0
      }
      else{
    rhs=arr.slice(i+1,arr.length).reduce((acc,c)=> acc + c, 0)}
  if(rhs==lhs){
    k.push(i)
  }
 
}
if(k.length==0){
  return -1
}
  else{return k[0]}


}