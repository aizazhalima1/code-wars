//You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up. 





//Solution
function wave(str){
    let arr=[]
    for(let i=0;i<str.length;i++){
      if(str[i]!=' '){
        str=str.toLowerCase()
        str=str.split('')
        str[i]=str[i].toUpperCase()
        str=str.join('')
          arr.push(str)
      }
      
    }
      return arr
    }