//Your task is to construct a building which will be a pile of n cubes. 
//You are given the total volume m of the building. Being given m can you find the number n of cubes you will have to build?





//Solution
function findNb(m) {
  
    let floo=0
    let i=0
    let rem=m
    if(rem>0){
    for(rem=m;rem>0;rem-=Math.pow(i,3)){
      floo++
      i++
  
    }
    }
   
    let sum=0
    for(i=0;i<=floo;i++){
      sum+=Math.pow(i,3)
      
    }
    if(sum==m){
      return floo
    }
    else{
      return -1
    }
  }