//Your task is to write a function that takes two parameters: the year of birth and the year to count years in relation to. As Philip is getting more curious every day he may soon want to know how many years it was until he would be born, so your function needs to work with both dates in the future and in the past.





//Solution
function  calculateAge(by,cy) {
    return cy==by? 'You were born this very year!':cy-by==1?'You are 1 year old.':by-cy==1?'You will be born in 1 year.':by-cy>1?`You will be born in ${by-cy} years.`:`You are ${cy-by} years old.`
    
    }
    