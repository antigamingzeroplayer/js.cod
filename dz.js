import shuffle from './helpers/randomHelpers.js'

const arr1 = ["Frodo", "Sam", "Pipin", "Marry", 'Gendalf']

const szArr = 5
const arr2 = Array(szArr)

arr2.fill('numenores')

// const arr1 = shuffle(["Frodo", "Sam", "Pipin", "Marry"])

function insertHobiit(arr1, arr2) {
    const arr3 = arr2.slice() 
    // console.log(arr1.length);
    // console.log(arr2.length/3);
    for(let arr1MaxIndex = arr1.length; arr1MaxIndex >= Math.ceil(arr2.length/3); arr1MaxIndex--) {
        console.log(arr1MaxIndex);
        console.log(arr2.length/3);
        if (arr2.length < arr1.length *3-1) {
            delete arr1[arr1MaxIndex]
            console.log('delete'+arr1MaxIndex);
          } else {
            break
          }
    }
    
    // if (arr2.length < 8) {
    //   delete arr1[3]
    // }
    // if (arr2.length < 6) {
    //   delete arr1[2]
    // }
    // if ((arr2.length < 4)) {
    //   delete arr1[1]
    // }
    // if ((arr2.length < 2)) {
    //   delete arr1[0]
    // }
  
    
    if (arr2.length > arr1.length*4-2) {
        console.log('if')
      let HobName = 0
      for (let HobPos = 2; HobPos <= arr3.length; HobPos+=3) {
        arr3.splice(HobPos, 0, arr1[HobName]);
        HobName++ ;
        if (HobName > arr1.length-1) {
          HobName = 0
          arr1 = shuffle(arr1)
  
        }
      }
    } else {
        console.log('arr1'+arr1);
      arr1.map((el, index) => {
      
      arr3.splice((index+1)*(arr1.length-1)-2,0,el)
      })
  
      }
  return arr3
  }


// на будь-яку кількість нумінорців хобітb поспіль
// function insertHobiit(arr1, arr2) {
//     const arr3 = arr2.slice() 
    
//     if (arr2.length < 8) {
//       delete arr1[3]
//     }
//     if (arr2.length < 6) {
//       delete arr1[2]
//     }
//     if ((arr2.length < 4)) {
//       delete arr1[1]
//     }
//     if ((arr2.length < 2)) {
//       delete arr1[0]
//     }

    
//     if (arr2.length > 10) {
//       let HobName = 0
//       for (let HobPos = 2; HobPos <= arr3.length; HobPos+=3) {
//         arr3.splice(HobPos, 0, arr1[HobName]);
//         HobName++ ;
//         if (HobName > 3) {
//           HobName = 0
//         };
//         }
//     } else {
//       arr1.map((el, index) => {
      
//       arr3.splice((index+1)*3-1,0,el)
//       })

//       }
//   return arr3
// }

// На будь-яку кількість нумінорців хобіти кожні 4 рандомно 
// function insertHobiit(arr1, arr2) {
//   const arr3 = arr2.slice() 
  
//   if (arr2.length < 8) {
//     delete arr1[3]
//   }
//   if (arr2.length < 6) {
//     delete arr1[2]
//   }
//   if ((arr2.length < 4)) {
//     delete arr1[1]
//   }
//   if ((arr2.length < 2)) {
//     delete arr1[0]
//   }

  
//   if (arr2.length > 10) {
//     let HobName = 0
//     for (let HobPos = 2; HobPos <= arr3.length; HobPos+=3) {
//       arr3.splice(HobPos, 0, arr1[HobName]);
//       HobName++ ;
//       if (HobName > 3) {
//         HobName = 0
//         arr1 = shuffle(["Frodo", "Sam", "Pipin", "Marry"])

//       }
//     }
//   } else {
//     arr1.map((el, index) => {
    
//     arr3.splice((index+1)*3-1,0,el)
//     })

//     }
// return arr3
// }

// // // Функція рандомні хобіти, але залежно від довжини масиву
// function insertHobiit(arr1, arr2) {
//     const arr3 = arr2.slice() 
    
//     arr1.map((el, index) => {
//         arr3.splice((index+1)*3-1,0,el)
        
//     })
//     return arr3
//   }
    
//     // Перший приклад - хобіти кожен третій поспіль
 
//     // arr3.splice(2,0,arr1[0])
      
//     // arr3.splice(5,0,arr1[1])

//     // arr3.splice(8,0,arr1[2])
    
//     // arr3.splice(11,0,arr1[3])

//     return arr3
// }

// Другий приклад - хотіби кожен третій рандомно 

// function insertHobiit(arr1, arr2) {
//     const arr3 = arr2.slice()
    
//     const Random1HobPos = arr1[Math.floor(Math.random() * arr1.length)]
    
//         arr3.splice(2,0,Random1HobPos)

//     let Random2HobPos = arr1[Math.floor(Math.random() * arr1.length)]
    
//     if (Random2HobPos === Random1HobPos) {
//         do Random2HobPos = arr1[Math.floor(Math.random() * arr1.length)]
//         while (Random2HobPos === Random1HobPos)
       
//     }
    
//     arr3.splice(5,0,Random2HobPos)
    
//     let Random3HobPos = arr1[Math.floor(Math.random() * arr1.length)]

//     if (Random3HobPos === Random1HobPos || Random3HobPos === Random2HobPos) {
//         do Random3HobPos = arr1[Math.floor(Math.random() * arr1.length)]
//         while (Random3HobPos === Random1HobPos || Random3HobPos === Random2HobPos)       
//     }

//     arr3.splice(8,0,Random3HobPos)
    
//     let Random4HobPos = arr1[Math.floor(Math.random() * arr1.length)]

//     if (Random4HobPos === Random1HobPos || Random4HobPos === Random2HobPos || Random4HobPos===Random3HobPos) {
//         do Random4HobPos = arr1[Math.floor(Math.random() * arr1.length)]
//         while (Random4HobPos === Random1HobPos || Random4HobPos===Random2HobPos || Random4HobPos===Random3HobPos)
        
//     }

//     arr3.splice(11,0,Random4HobPos)

//     return arr3
// }

console.log(insertHobiit(arr1,arr2));
