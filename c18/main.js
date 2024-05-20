const readline = require('node:readline')
var rl = readline.createInterface({
    input : process.stdin, 
    output: process.stdout
})

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('university.db');

db.all('select * from users', function(err, rows){
    if(err){
        return console.log('kontak admin',err)
    }

    console.log(rows)
})

const lines = () => {
console.log("=============================================")
}

const welcome = () {
    lines()
    console.log(`Welcome to Universitas Pendidikan Indonesia \n Jl. Setiabudhi No.25 `)
    lines()

}

const username(){
    
}

welcome()




lines()
console.log(`
silahkan pilih opsi dibawah ini :
[1] Mahasiswa 
[2] Jurusan
[3] Dosen
[4] Mata Kuliah
[5] Kontrak
[6] Keluar
`)
lines()

rl.question("Masukan salah satu nomor dari opsi diatas : ", (index) => {
    switch (index) {
        case "1":
            
            break;
        case "2":
            break;
        case "3":
            break;
        case "4":
            break;
        case "5":
            break;
        case "6":
            
            break;
        default:
            console.log(`Nomor yang anda masukan tidak sesuai , silahkan coba lagi`)
            
            break;
    }
})
