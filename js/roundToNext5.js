//Given an integer as input, can you round it to the next (meaning, "greater than or equal") multiple of 5?





//Solution
function roundToNext5(n){
    if(n%5==0){
      return n
    }
    else{
    do{
      n++
    }while( n%5!=0)
    return n}
  }