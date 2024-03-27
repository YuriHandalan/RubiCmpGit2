const fs = require("fs")
const data = fs.readFileSync("todo.json", "utf-8")
const json = JSON.parse(data)
const write = data => fs.writeFileSync('todo.json', JSON.stringify(data), "utf-8");
// console.log(write)


const help = () => {
    console.log(
        ">>> TODO LIST <<< \n",
        "$ node c13.js <command> \n",
        "$ node c13.js list \n",
        "$ node c13.js task <task_id> \n",
        "$ node c13.js add <task_content> \n",
        "$ node c13.js delete <task_id> \n",
        "$ node c13.js complete <task_id> \n",
        "$ node c13.js uncomplete <task_id> \n",
        "$ node c13.js list:outstanding asc|desc \n",
        "$ node c13.js list:completed asc|desc \n",
        "$ node c13.js tag <task_id> <tag_name_1> <tag_name_2> ... <tag_name_N> \n",
        "$ node c13.js filter:<tag_name>"
    )
}

if (process.argv[2] == "help") {
    help()
}

else if (process.argv[2] == "list") {
    console.log("daftar pekerjaan : ")
    for (let i = 0; i < json.length; i++) {
        console.log(`${i + 1}. [${json[i].complete ? "x" : " "}] ${json[i].title}`)
    }
}

else if (process.argv[2] === "task") {
    console.log("daftar task : ")
    for (let x in json[process.argv[3]]) {
        console.log(`${x} ke ${process.argv[3]} : ${json[process.argv[3] - 1][x]}`)
    }
}

else if (process.argv[2] == "add") {

    let a = process.argv.slice(3).join(" ")
    json.push({
        title: a,
        complete: false,
        tags: []
    })
    write(json)

    console.log(`${a} telah ditambahkan`);
}

else if (process.argv[2] == "delete") {
    const del = process.argv[3] - 1
    console.log(`${json[del].title} telah di hapus dari daftar`)
    json.splice(del, 1)
    write(json)
}

else if (process.argv[2] == "complete") {
    console.log(`${json[process.argv[3] - 1].title} telah di complete`);
    json[process.argv[3] - 1].complete = true;
    write(json)
}

else if (process.argv[2] == "uncomplete") {
    json[process.argv[3] - 1].complete = false;
    console.log(`${json[process.argv[3] - 1].title} telah di uncomplete`);
    write(json)

}

else if (process.argv[2] === "list:outstanding") {
    if (process.argv[3] == "asc") {

        for (let i = 0; i < json.length; i++) {
            if (json[i].complete === false) {

                console.log(`${i + 1}. [${json[i].complete ? "x" : " "}] ${json[i].title}`)
            }
        }
    }

    if (process.argv[3] == "desc") {

        for (let i = json.length - 1; i >= 0; i--) {
            if (json[i].complete === false) {

                console.log(`${i + 1}. [${json[i].complete ? "x" : " "}] ${json[i].title}`)
            }
        }
    }

}


else if (process.argv[2] === "list:completed") {
    if (process.argv[3] == "asc") {

        for (let i = 0; i < json.length; i++) {
            if (json[i].complete === true) {

                console.log(`${i + 1}. [${json[i].complete ? "x" : " "}] ${json[i].title}`)
            }
        }
    }

    if (process.argv[3] == "desc") {

        for (let i = json.length - 1; i >= 0; i--) {
            if (json[i].complete === true) {

                console.log(`${i + 1}. [${json[i].complete ? "x" : " "}] ${json[i].title}`)
            }
        }
    }
}

else if (process.argv[2] === "tag") {
    const index = process.argv[3] - 1
    const arr = process.argv.slice(4)
    console.log("daftar pekerjaan")

   
    arr.forEach(i => {
        if(!json[index].tags.includes(i)) json[index].tags.push(i)
    })

    write(json)
    console.log(`Tag ${arr} telah di tambahkan ke daftar '${json[index].title}'`)
}

else if (process.argv[2]?.startsWith(`filter:`)) {
    console.log('daftar pekerjaan:')
    split = process.argv[2].split(":");
 
    json.forEach((i, index) => {

        if (i.tags.includes(split[1])) {

            console.log(`${index + 1}. [${i.complete ? 'X' : ''}] ${i.title}`);
        }
    })
}
else {
    help()
}



