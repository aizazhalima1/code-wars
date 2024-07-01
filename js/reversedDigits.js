//Given a random non-negative number, you have to return the digits of this number within an array in reverse order.





//solution
function digitize(n) {

  let pok=[];
  for(i=String(n).length-1;i>=0;i=i-1){
    pok.push(String(n)[i])};
    pok=pok.map((elemen)=>Number(elemen));
    return pok}