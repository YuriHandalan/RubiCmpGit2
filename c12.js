if (process.argv[2]) {

    const { readFileSync } = require('node:fs')
    const data = readFileSync(`${process.argv[2]}`, "utf-8")
    const json = JSON.parse(data)
    const readline = require("node:readline")

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: 'Tebakan : ',
    });

    console.log("Selamat datang di permainan Tebak-tebakan. Kamu akan diberikan pertanyaan dari file ini 'data.json'. Untuk bermain, jawablah dengan jawaban sesuai",
        "Gunakan 'skip' untuk menangguhkan pertanyaannya , dan di akhir pertanyaan akan di tanya lagi.")

    let repeat = 0
    let wrong = 0

    console.log("Pertanyaan : " + json[repeat].definition)

    rl.prompt();
    rl.on("line", (jawaban) => {
        if (jawaban.toLowerCase() == "skip") {
            json.push(json[repeat])
            repeat++
            // console.log(json)
            wrong = 0
            console.log("Pertanyaan : " + json[repeat].definition)
        } else {

            if (jawaban.toString().toLowerCase() == json[repeat].term) {
                console.log("Selamat Anda Benar!")
                repeat++
                wrong = 0
                if (repeat == json.length) {
                    console.log("Hore , Anda Menang!")
                    rl.close()
                }

                console.log("Pertanyaan : " + json[repeat].definition)
            } else {
                wrong++
                console.log(`Anda Kurang Beruntung!, Anda salah ${wrong} silahkan coba lagi`)
            }
        }
        rl.prompt()
    })

        .on("close", () => {
            process.exit(1)
        })

} else {
    console.log("Tolong serta kan nama file sebagai inputan soal-soalnya , Misalnya 'node c12.js  data.json' . \n")
    process.exit()
}