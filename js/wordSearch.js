//Write a method that will search an array of strings for all strings that contain another string. Then return an array of the found strings.

//The method takes two parameters, the query string and the array of strings to search, and returns an array.





//Solution
function wordSearch(query, seq){
    let p=seq.filter((x)=>x.toLowerCase().includes(query.toLowerCase()))
    return p.length!=0? p : ['Empty']
    }
  