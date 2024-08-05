//Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.





//Solution
var uniqueInOrder=function(iterable){
    let p=[]
    for(let i=0;i<=iterable.length-1;i++){
      if(iterable[i-1]!==iterable[i]){
        p.push(iterable[i])
      }
    }
     return p
   
   }