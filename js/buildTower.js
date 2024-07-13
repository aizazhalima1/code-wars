//Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

//For example, a tower with 3 floors looks like this:





//Solution
function towerBuilder(nFloors) {
    // build here
    arr=[]
    for(i=1;i<=nFloors;i++){
      arr.push('*')
    }
   let b=' '
     
    
  for(i=0;i<=arr.length-1;i++){
    b=' '
    arr[i]=arr[i].repeat(2*i+2-1)
    b=b.repeat((((2*(arr.length)-1)-(2*i+1)))/2)
    console.log(b)
    arr[i]=b+arr[i]+b
    
     
  }
        return arr
    
    }