
// let j = 0
// for (let i = 2; i < 12; i+=2) {
//     console.log('i='+i)
//     j++
//     if (j>3){
//         j=0
//     }
//     console.log('j='+j); }




    // if (arr2.length > 10) {
    //     for (let HobPos = 2; HobPos < arr2.length; HobPos+=2) {
    //       let HobName = 0
    //       arr3.splice(HobPos, 0, arr1[HobName]);
    //       HobName = HobName++ ;
    //       if (HobName > 3) {
    //         HobName = 0
    //       };
    //       }
    //   } else {
    //     arr1.map((el, index) => {
        
    //     arr3.splice((index+1)*3-1,0,el)
    //     })
  
    //     }


    const arr2length = 15

     if (arr2length> 10) {
      let HobName = 0
      for (let HobPos = 2; HobPos < arr2length+arr2length/3-1; HobPos+=3) {
        // arr3.splice(HobPos, 0, arr1[HobName]);
        console.log('hobpos='+ HobPos);
        console.log('HobName='+ HobName);
        HobName++ ;
        if (HobName > 3) {
          HobName = 0
        };
        }}