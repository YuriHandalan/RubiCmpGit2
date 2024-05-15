const readline = require('readline')
const rl = readline.createInterface({input : process.stdin, output:process.stdout});

let num1 = Math.floor((Math.random()*10)+1)
let num2 = Math.floor((Math.random()*10)+1)
let answer = num1 + num2;



rl.question(`berapa ${num1} + ${num2} ? \n`,
(jawab)=>{
    if(jawab.trim()==answer){
        rl.close();
    }

    else{
        rl.setPrompt('jawaban anda salah\n')
        rl.prompt()


        rl.on('line',(jawab)=>{

            if(jawab.trim() == answer) rl.close();
            else{
                rl.setPrompt('salaahhh, coba lagi\n')
                rl.prompt()

            }
        })
    }
})

rl.on('close',()=>{
console.log(`selesai`)

})