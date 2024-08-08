//Ben has a very simple idea to make some profit: he buys something and sells it again. Of course, this wouldn't give him any profit at all if he was simply to buy and sell it at the same price. Instead, he's going to buy it for the lowest possible price and sell it at the highest.





//Solution
function minMax(arr){
    let p=[]
     p[0]=arr[0]
    let s=[]
        s[0]=arr[0]
   arr.forEach((x)=>{
     if(x>p[0]){
       p[0]=x
     }
     else if(x<s[0]){
       s[0]=x 
     }
   })
    return [s[0],p[0]]; // fix me!
  }