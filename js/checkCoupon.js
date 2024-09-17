//Your online store likes to give out coupons for special occasions. Some customers try to cheat the system by entering invalid codes or using expired coupons.
//Write a function called checkCoupon which verifies that a coupon code is valid and not expired.





//Solution
function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
    let curr = Date.parse(currentDate)
      let expi= Date.parse(expirationDate)
    if(enteredCode === correctCode){
      return curr <= expi ? true : false
    }
    else{
      return false
    }
  }