//This function takes two numbers as parameters, the first number being the coefficient, and the second number being the exponent.







//Solution
function derive(coefficient,exponent) {
    let prod=coefficient * exponent
    let num=exponent-1
    return`${prod}x^${num}`
   }