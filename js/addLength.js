//What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?





//Solution
function addLength(str) {
    let arr=[]
    str.split(' ').forEach((x)=>(arr.push(x + ' ' + x.length)))
    return arr
    }