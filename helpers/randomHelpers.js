
// import { in_array } from "./dataTypeHelpers";
export default function shuffle(array) {
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


// let gen_nums = [] 


 
//  function get_rand(array) {
    
//     var rand = array[Math.floor(Math.random()*array.length)];
//      if(!in_array(gen_nums, rand)) {
//         gen_nums.push(rand); 
//         return rand;
//      }
//      return get_rand(array);
//     }


// export function shuffle() {}