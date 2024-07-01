//In this kata, you are asked to square every digit of a number and concatenate them.





//solution
function squareDigits(num){
    var digits = num.toString().split('');
    var arr=digits.map((ele)=>(Number(ele))**2);
    let sum='';
    for(i=0;i<=arr.length-1;i++){
      sum=sum + `${arr[i]}`;
     
    }
     return Number(sum)
  }