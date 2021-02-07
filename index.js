function getArray(row,col) {
    let result = []
    let vokal = 'AIUEO'
    let kons = 'BCDFGHJKLMNPQRSTVWXYZ'
      for (let i = 0; i < row; i++) {
           let row = []  
        for (let j = 0; j < col; j++) {
            let random = Math.ceil(Math.random()*8)
            if(random % 2 !== 0){
                row.push(kons[Math.floor(Math.random() * kons.length)])
        
            }else{
                row.push(vokal[Math.floor(Math.random() * vokal.length)])
            }
        }
        result.push(row) 
      }
      return result
    }
    
    function cekVokal(row,col) {
        let target = getArray(row,col) 
        console.log(target);
        for (let i = 0; i < target.length-1; i++) {
            for (let j = 0; j < target[i].length-1; j++) {
                var counter = 0
                let temp = target[i][j] + target[i][j+1] + target[i+1][j] + target[i+1][j+1]
                let output = result(temp)
                if(output === true) counter++
            }
        }
      if(counter > 0){
        return `YESSS ADA,,jumlah vokal 2x2 adalah ${counter}`
      }else{
        return `tidak ada vokal 2x2`
      }
     }
     
     function result(temp) {
        let vokal = 'AIUEO'
        let counter = 0
        for (let i = 0; i < temp.length; i++) {
            for (let j = 0; j < vokal.length; j++) {
                if  (temp[i]===vokal[j]){
                         counter++
                         // console.log(counter);
                }
            }
         }
         if(counter === 4){
             return true
         }else{
             return false
         }
     }
     
     console.log(cekVokal(5,3));
