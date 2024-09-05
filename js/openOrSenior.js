//Output will consist of a list of string values stating whether the respective member is to be placed in the senior or open category.





//Solution
function openOrSenior(data){
    return data.map((x)=>(x[0]>=55 && x[1]>7)?'Senior':'Open')
  }