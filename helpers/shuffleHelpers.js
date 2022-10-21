import shuffle from './randomHelpers.js'

export default function insertHobiit(insertedArray, arrayIntoWhichToInsert, interval) {
    let finalArray = arrayIntoWhichToInsert
  
   if (!arrayIntoWhichToInsert.length+insertedArray.length < insertedArray.length * interval) {
    let positionInInsertedArray = 0
        for (let insertedArrayPositon = interval-1; insertedArrayPositon <= finalArray.length; insertedArrayPositon+=interval) {
        finalArray.splice(insertedArrayPositon, 0, insertedArray[positionInInsertedArray]);
        positionInInsertedArray++ ;
        console.log(positionInInsertedArray >= insertedArray.length)
        if (positionInInsertedArray >= insertedArray.length) {
          positionInInsertedArray = 0
          insertedArray = shuffle(insertedArray)
        } } 
        return finalArray
   }
  
       
        for (let insertedArrayMaxIndex = insertedArray.length; arrayIntoWhichToInsert.length < insertedArrayMaxIndex * (interval-1); insertedArrayMaxIndex--){ 
          insertedArray.pop()
        }
  
        insertedArray.map((el, index) =>  {
    
            if (index === 0) {
            finalArray.splice(interval-1,0,el)
            return
          } 
            finalArray.splice(((index+1)*interval)-1,0,el)
          
        
          })
      
          
  
    return finalArray 
    }




    // {
    
    //   if (index === 0) {
    //   finalArray.splice(interval-1,0,el)


    //  } else {
    //   finalArray.splice(((index+1)*interval)-1,0,el)
    //   console.log(index)
    // }
    // })