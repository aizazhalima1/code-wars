//Complete function saleHotdogs/SaleHotDogs/sale_hotdogs, function accepts 1 parameter:n, n is the number of hotdogs a customer will buy, different numbers have different prices (refer to the following table), return how much money will the customer spend to buy that number of hotdogs.







//Solution
function saleHotdogs(n){
    return n<5 ? 100*n : n>=5 && n<10 ? n*95 : n*90
  }