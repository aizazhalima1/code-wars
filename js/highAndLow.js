//In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.





//Solution
function highAndLow(numbers){
    numbers=numbers.split(' ')
    numbers=numbers.map((x)=>Number(x)).sort((a,b)=>a-b)
    return numbers[numbers.length-1] + ' ' + numbers[0]
     }