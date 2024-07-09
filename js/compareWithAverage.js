//There was a test in your class and you passed it. Congratulations!
//But you're an ambitious person. You want to know if you're better than the average student in your class.
//You receive an array with your peers' test scores. Now calculate the average and compare your score!
//Return true if you're better, else false!





//Solution
function betterThanAverage(classPoints, yourPoints) {
    // Your code here
    let sumClass=classPoints.reduce((acc,c)=>acc + c,0)
    let totalClass=sumClass+yourPoints
    let avg=totalClass/(classPoints.length+1)
    
    if(yourPoints>avg){
      return true
    }
    else{
      return false
    }
}