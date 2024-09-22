//In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:

//make as few changes as possible.
//if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.





//Solution
function solve(s){
    let arr=s.split('')
    let countU=0
    let countL=0
    arr.forEach((x)=>x==x.toLowerCase() ? countL ++ : countU ++)
    return countL >= countU ? s.toLowerCase() : s.toUpperCase() 
  }