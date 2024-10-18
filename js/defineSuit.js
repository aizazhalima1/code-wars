//You get any card as an argument. Your task is to return the suit of this card (in lowercase).





//Solution
function defineSuit(card) {
    return card.includes('♣')? 'clubs' : card.includes('♦')? 'diamonds' : card.includes('♥')? 'hearts':'spades'
  }