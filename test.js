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

// 10 5 2  no if 

// 8 5 2 no if 

// 8 5 3 nn h nn h nn h nn h if -1

// 5 3 2 no if

// 5 3 3 nn h nn h n if 

// 8 5 3 nn h nn h nn h nn h if -1

// 9 5 3 nn h nn h nn h nn h n if -1


// 5 3 3 nn h nn h n -1

// 4 3 3 nn h nn h - 1

// 9 4 4 nnn h nnn h nnn h  - 1
// 10 4 4 nnn h nnn h nnn h n - 1


// arr3.splice((index+1*interval)*interval-1,0,el)})



// ЗАВДАННЯ 1) Позбутися delete 2) Позбутися for на початку 3) Назвати абсолютно все 4) Заімпортувати функції в індекс джс
// 5) цсс


