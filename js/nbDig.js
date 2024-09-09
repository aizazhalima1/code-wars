//Take an integer n (n >= 0) and a digit d (0 <= d <= 9) as an integer.

//Square all numbers k (0 <= k <= n) between 0 and n.

//Count the numbers of digits d used in the writing of all the k**2.





//Solution
function nbDig(n, d) {
    let arr=[]
     for(let i=0;i<=n;i++){
       arr.push(i*i)
     }
    return arr.join('').split('').filter((x)=>x==d).length
  }