function migratoryBirds(arr = [2,4,3,2,3,1,2,1,3,3]) {
  // Write your code here
  let birdSet = {};
  for(let i = 0; i < arr.length; i++){
      if(birdSet[arr[i]] === undefined){
          birdSet[arr[i]] = 1
      }else{
          birdSet[arr[i]]++
      }
  }
  let mostBirds = birdSet[1];
  let birdType = 5;
  for(let bird in birdSet){
      console.log({bird})
      console.log("Most birds before change----->", mostBirds)
      if (birdSet[bird] > mostBirds){
          console.log("Most birds changed ---->", mostBirds)
          mostBirds = birdSet[bird]
          birdType = bird
      }
  }
  console.log({birdType})
  console.log({birdSet})
  return birdType

}
migratoryBirds()
