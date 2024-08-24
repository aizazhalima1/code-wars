





//Solution
function bingo(ticket, win){
    let count=0
    for(let i=0;i<ticket.length;i++){
      let subStr=ticket[i][0]
      for(let j=0;j<subStr.length;j++){
        if(subStr.charCodeAt(j)==ticket[i][1]){
          count ++
        }
      }
    }
    if(count>=win){
      return 'Winner!'
    }
    else{
      return 'Loser!'
    }
  
  }