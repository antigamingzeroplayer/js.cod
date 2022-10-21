import shuffle from './helpers/randomHelpers.js'

import insertHobiit from './helpers/shuffleHelpers.js'

function fAlert() {
  alert('hello')
}

const interval = 10


const sizeHobitsArr = 15

let insertedArray = Array(sizeHobitsArr)

insertedArray.fill().forEach((el, index) => {
  insertedArray[index] = 'hobit'+(index+1)
})


insertedArray = shuffle(insertedArray)

const sizeNumenoresArr = 155
const arrayIntoWhichToInsert = Array(sizeNumenoresArr)
arrayIntoWhichToInsert.fill('numenores')


console.log(insertHobiit(insertedArray,arrayIntoWhichToInsert, interval));