//You ask a small girl,"How old are you?" She always says, "x years old", where x is a random number between 0 and 9.

//Write a program that returns the girl's age (0-9) as an integer.





//Solution
function getAge(inputString){
    // return the girl's correct age as an integer. Happy coding :) 
      return Number(inputString.split(' ')[0])
    }