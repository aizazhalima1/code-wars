//Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.





//Solution
function removeEveryOther(arr){
    //your code here
    let x=arr.filter((x,i)=>i%2==0)
   return x 
  }
