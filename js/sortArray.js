//You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.





//Solution
function sortArray(array) {
    let odd= array.filter((x)=>x%2!=0).sort((a,b)=>a-b)
    for(let i=0;i<=array.length-1;i++){
      array[i]%2!=0?array[i]=odd.shift():array[i]=array[i] 
    }
    return array
  }