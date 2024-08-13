//Write a function that accepts a sequence of unique integers between 0 and 9 (inclusive), and returns the missing element





//Solution
function getMissingElement(superImportantArray){
    //TODO
    for(let i=0;i<=9;i++){
      if(!superImportantArray.includes(i)){
        return i
      }
    }
  }