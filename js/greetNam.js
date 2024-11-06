//Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.





//Solution

var greet = function(name) {
    name=name.split('')
    name[0]=name[0].toUpperCase()
    for(let i=1;i<name.length;i++){
      name[i]=name[i].toLowerCase()
    }
    name=name.join('')
    return `Hello ${name}!`
    };