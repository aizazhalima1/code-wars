//Time to win the lottery!

//Given a lottery ticket (ticket), represented by an array of 2-value arrays, you must find out if you've won the jackpot.





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