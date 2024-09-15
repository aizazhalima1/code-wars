//The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

//Task
//Given a year, return the century it is in.





//Solution
function century(year) {
    year=String(year)
    let first=year.slice(0,year.length-2)
    let second=year.slice(year.length-2,year.length)
    return second.split('').every((x)=>x=='0') ? Number(first) : Number(first)+1
    }