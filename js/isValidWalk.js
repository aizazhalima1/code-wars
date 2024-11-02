//create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise





//Solution
function isValidWalk(walk) {
    let n=walk.filter((x)=>x=='n')
    let s=walk.filter((x)=>x=='s')
    let w=walk.filter((x)=>x=='w')
    let e=walk.filter((x)=>x=='e')
  if(walk.length==10){
    if(n.length==s.length && w.length==e.length){
      return true
    }
    else{
      return false
    }
    
  }
    else{
      return false
    }
    
    
  }