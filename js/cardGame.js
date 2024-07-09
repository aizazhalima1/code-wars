//Steve and Josh are bored and want to play something. They don't want to think too much, so they come up with a really simple game. Write a function called winner and figure out who is going to win.

//They are dealt the same number of cards. They both flip the card on the top of their deck. Whoever has a card with higher value wins the round and gets one point (if the cards are of the same value, neither of them gets a point). After this, the two cards are discarded and they flip another card from the top of their deck. They do this until they have no cards left.

//deckSteve and deckJosh are arrays representing their decks. They are filled with cards, represented by a single character. 





//Solution
function winner(deckSteve, deckJosh) {
    // TODO
    let stan=['2','3','4','5','6','7','8','9','T','J','Q','K','A']
    let steve=[]
    let josh=[]
  deckSteve.forEach((x,i)=>
  steve.push(stan.indexOf(deckSteve[i]))
   )
    deckJosh.forEach((x,i)=>
  josh.push(stan.indexOf(deckJosh[i]))
   )
    
    let stevepoints=0
    let joshpoints=0
  for(let i=0;i<=steve.length;i++){
  if(steve[i]>josh[i]){
    stevepoints+=1
  }
    else if(steve[i]<josh[i]){
    joshpoints+=1
  }
    else{
      stevepoints=stevepoints
      joshpoints=joshpoints
    }}
   
    if(joshpoints>stevepoints){
      return(`Josh wins ${joshpoints} to ${stevepoints}`)
    }
   else if (stevepoints>joshpoints){
      return(`Steve wins ${stevepoints} to ${joshpoints}`)
    }
    else{
      return('Tie')
    }
  }
      
      
        
      