//You have to write a function that accepts three parameters:

//cap is the amount of people the bus can hold excluding the driver.
//on is the number of people on the bus excluding the driver.
//wait is the number of people waiting to get on to the bus excluding the driver.
//If there is enough space, return 0, and if there isn't, return the number of passengers he can't take.





//Solution
function enough(cap, on, wait) {
    if(cap-on==0){
      return wait
    }
    else if(cap-on>0){
      if(cap-on>wait){
        return 0
      }
      else{
      return wait-(cap-on)}
    }
      
    // your code here
  }