//Write a function that accepts fight string consists of only small letters and return who wins the fight. When the left side wins return Left side wins!, when the right side wins return Right side wins!, in other case return Let's fight again!





//Solution
function alphabetWar(fight)
{
  let cr=0
  let cl=0
  let right={'m':4,'q':3,'d':2,'z':1}
  let left={'w':4,'p':3,'b':2,'s':1}
  for(let i=0;i<fight.length;i++){
    if(right[fight[i]]){
      cr+= right[fight[i]]
    }
    else if(left[fight[i]]){
      cl+= left[fight[i]]
    }
    else{
      cl=cl
      cr=cr
    }
  }
   return cr>cl? "Right side wins!" : cl>cr? "Left side wins!" :  "Let's fight again!"
}