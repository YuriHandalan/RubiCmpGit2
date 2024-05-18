var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout)

var realPerson = {
    name: '',
    saying: []
}


rl.question("nama lengkap : ", (answer)=> {
realPerson.name = answer;
rl.setPrompt(`what would ${realPerson.name} say : `);
rl.prompt();

rl.on('line',(saying)=>{

    realPerson.saying.push(saying.trim())
    if(saying.toLowerCase().trim() === 'exit'){
    rl.close()
    }

    else{
        rl.setPrompt(`what else would ${realPerson.name} say? ('exit to leave'): `)
        rl.prompt();
    }

})
})

rl.on('close',()=>{
    console.log("%s is a real person that say %j", realPerson.name, realPerson.saying)
process.exit()
})