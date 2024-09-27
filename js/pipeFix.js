//Given a list of unique numbers sorted in ascending order, return a new list so that the values increment by 1 for each index from the minimum value up to the maximum value (both included).





//Solution
function pipeFix(numbers){
    let p=[]
    for(i=numbers[0];i<=numbers[numbers.length-1];i++){
      p.push(i)
    }
    return p
  }