//You will be given a number and you will need to return it as a string in Expanded Form.





//Solution
function expandedForm(num) {
    let str=num.toString()
    let po=''
    for(let i=str.length-1;i>=0;i--){
      if(Number(str[i])!=0){
      po=po+' + '+Number(str[i])*Math.pow(10,str.length-1-i)
      }
    else{
      po=po
    }}
    po=po.split(' + ')
    po.shift()
    return po.reverse().join(' + ')
    }