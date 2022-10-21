import shuffle from './helpers/randomHelpers.js'

const interval = 3
const sizeHobitsArr = 10


let insertedArray = Array(sizeHobitsArr)

insertedArray.fill().forEach((el, index) => {
  insertedArray[index] = 'hobit'+(index+1)
})

console.log(insertedArray);
insertedArray = shuffle(insertedArray)

const sizeNumenoresArr = 12
const arr2 = Array(sizeNumenoresArr)
arr2.fill('numenores')

function insertHobiit(insertedArray, arr2, interval) {
  let arr3 = arr2.slice()

 if (!arr2.length+insertedArray.length < insertedArray.length * interval) {
  let HobName = 0
      for (let HobPos = interval-1; HobPos <= arr3.length; HobPos+=interval) {
      arr3.splice(HobPos, 0, insertedArray[HobName]);
      HobName++ ;
      if (HobName >= insertedArray.length) {
        HobName = 0
        insertedArray = shuffle(insertedArray)
      } } 
      return arr3
 }

     
      for (let insertedArrayMaxIndex = insertedArray.length; arr2.length < insertedArrayMaxIndex * (interval-1); insertedArrayMaxIndex--){ 
        insertedArray.pop()
      }

      insertedArray.map((el, index) => {
  
        let i = 0
        if (index === 0) {
        arr3.splice(interval-1,0,el)


       } else {
        arr3.splice(((index+1)*interval)-1,0,el)
        console.log(index)
      }
      })
    
        

  return arr3 
}

console.log(insertHobiit(insertedArray,arr2, interval));



