//Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.





//Solution
function XO(str) {
    let arr=str.split('')
    let zero=arr.filter((x)=>x=='o' || x=='O')
    let cross=arr.filter((y)=>y=='x' || y=='X')
    return zero.length==cross.length? true : false
}