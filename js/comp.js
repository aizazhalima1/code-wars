//Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements, with the same multiplicities (the multiplicity of a member is the number of times it appears). "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.





//Solution
function comp(array1, array2){
    if( array1==null || array2==null)
      {return false}
      else{
        let array3=array1.map((x)=>x*x)
        return array3.sort().join('')===array2.sort().join('')? true : false
      }
      }