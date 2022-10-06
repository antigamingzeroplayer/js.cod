let arr1 = ["Frodo", "Sam"] 
 
const szArr = 30 
const arr2 = Array(szArr) 
 
arr2.fill('numenores')

const randomShuffle = (array) => {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

  const insert = (arr, index,item) => {
     arr.splice( index, 0,item );
     return arr
    };

const repeat = (arr, n) => Array(n).fill(arr).flat();

const shuffleWithOrder = (results, order) => {
    if(results && results.length !== 0 && arr1 && arr1.length !== 0) {
         
        let indexOflenght = Math.trunc(results.length / order)
        if(arr1.length < indexOflenght) {
            arr1 = repeat(arr1,indexOflenght)
        }

        const arr1ForFeed = arr1.slice(0,indexOflenght)

        results = arr1ForFeed.map((el, index ) => {
           return insert(results,(index + 1)  * order - 1,el)
       })
       return results
    }
  return  results
}


console.log(shuffleWithOrder(arr2,3))