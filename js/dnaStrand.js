//In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell)





//Solution
function dnaStrand(dna){
    let p=dna.split('')
    p.forEach((x,i)=>{
      if(p[i]=='A'){
        p[i]='T'
      }
      else if(p[i]=='T'){
        p[i]='A'
      }
      else if(p[i]=='C'){
        p[i]='G'
      }
      else if(p[i]=='G'){
        p[i]='C'
      }
      else{
      p[i]=p[i]}
  })
   let r=p.join('')
    return r
  }