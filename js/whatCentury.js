//Return the century of the input year. The input will always be a 4 digit string, so there is no need for validation.





//Solution
function whatCentury(year){
    let yr=''
    let suf=''
    if(year.slice(2,4)=='00'){
     yr = year.slice(0,2)
    }
     else{
    yr = String(Number(year.slice(0,2))+1)
     }
      console.log(yr.slice(2,4))
     
    
    if(yr[1]=='1' && yr[0]!='1'){
      suf='st'
    }
     else if(yr[1]=='2' && yr[0]!='1'){
      suf='nd'
    }
     else if(yr[1]=='3' && yr[0]!='1'){
          suf='rd'
        }
     else{
       suf='th'
     }
    
     return yr + suf
    }
      
     