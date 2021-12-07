const fs = require('fs')

const data = `Nama,Hobby
Rafli,Menonton film`

fs.writeFileSync('out.csv', data, 'utf8' )