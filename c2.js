// function deretKaskus(n) {
//     const temp = [];
//     for (let i = 1; i <= n; i++) {
//       let kali_3 = i * 3;
 

//       if(kali_3 %5===0 && kali_3 % 6===0){
//         temp.push('kaskus');
//         }
//       else if (kali_3 % 5 === 0) {
//         temp.push('kas');
//       } 
//       else if(kali_3 % 6 === 0){
//         temp.push('kus');
//       }
//       else {
//         temp.push(kali_3);
//       }
//     }
//     return temp;
//   }
  
//   console.log(deretKaskus(10));



function deretKaskus(n){
    var arr=[]
      for(let i=1; i<=n; i++){
        arr.push(i*3)  
        }

        for(let i=1; i<=n; i++){
            if(arr[i] %5===0 && arr[i] % 6===0){
                arr[i] = "kaskus"
            }
                 
            else if (arr[i] % 5 === 0) {
                arr[i] = 'kas'
            }

            else if(arr[i] % 6 === 0){
                        arr[i] = 'kus'
                      }

            else {
                (arr[i]);
            }       
    }
    return arr
}
    console.log(deretKaskus(10))