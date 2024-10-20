//Take a list of ages when each of your great-grandparent died.
//Multiply each number by itself.
//Add them all together.
//Take the square root of the result.
//Divide by two.





//Solution
function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
    let arr=new Array(age1,age2,age3,age4,age5,age6,age7,age8)
    arr=arr.map((x)=>x*x)
    let ac=arr.reduce((acc,c)=> acc+ c, 0)
    return Math.floor(Math.pow(ac,0.5)/2)
  }