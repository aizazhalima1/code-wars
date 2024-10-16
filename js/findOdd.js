//Given an array of integers, find the one that appears an odd number of times.

//There will always be only one integer that appears an odd number of times.





//Solution
function findOdd(A) {
    let p=[]
    let t=[]
    for(let i=0;i<A.length;i++){
      if(!p.includes(A[i])){
        p.push(A[i])
      }}
     console.log(p)
      for(let j=0;j<p.length;j++){
        let s=A.filter((x)=>x==p[j])
        t.push(s.length)
      }
   let num= t.filter((y)=>y%2!=0)[0]
   let ind=t.indexOf(num)
   return p[ind]
   }