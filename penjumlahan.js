const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("masukkan angka 1: ", angka1 => {
   rl.question("masukkan angka 2:", angka2 =>{
    let a = []
    for(let i = angka1; i < angka2; i++){
        if(i % 3 === 0){
            let val = parseInt(i)
            a.push(val)
        }
    }
    console.log(`Semua angka kelipatan 3 antara ${angka1} dan ${angka2} adalah ${a}`)
    let total = a.reduce((prev, curr) => prev + curr)
    console.log(`Jumlah semua angka kelipatan 3 antara ${angka1} dan ${angka2} adalah ${total}`)
    rl.close()
   })
})

