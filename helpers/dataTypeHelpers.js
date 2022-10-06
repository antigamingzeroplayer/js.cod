

export function in_array(array, el) {
    for(var i = 0 ; i < array.length; i++) 
        if(array[i] == el) return true;
    return false;
 }