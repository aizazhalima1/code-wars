//Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.
//
//Write a function which takes a list of strings and returns each line prepended by the correct number.



//Solution
var number=function(array){
    //your awesome code here
    for(i=0;i<=array.length-1;i++){
      array[i]=i+1+': '+ array[i] 
    }
    return array
  }