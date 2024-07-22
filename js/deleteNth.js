//Alice and Bob were on a holiday. Both of them took many pictures of the places they've been, and now they want to show Charlie their entire collection. However, Charlie doesn't like these sessions, since the motif usually repeats. He isn't fond of seeing the Eiffel tower 40 times.
//He tells them that he will only sit for the session if they show the same motif at most N times. Luckily, Alice and Bob are able to encode the motif as a number. Can you help them to remove numbers such that their list contains each number only up to N times, without changing the order?





//Solution
function deleteNth(arr,n){
    let newArr=[]
    for(i=0;i<=arr.length-1;i++){
      if(!newArr.includes(arr[i])){
        newArr.push(arr[i])
      }
      else{
        let p=newArr.filter((x)=>x==arr[i])
        
        if(p.length<n){
          newArr.push(arr[i])
        }
        else{
          newArr=newArr
        }
        
        }
    
      }
       return newArr
    }