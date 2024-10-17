//For a given quantity and price (per mango), calculate the total cost of the mangoes.





//Solution
function mango(quantity, price){
    return quantity%3==0? quantity/3 * price * 2 :( Math.floor(quantity/3) * price *2) + (quantity%3*price)
    }