const fs = require('fs')

const chalk = require('chalk')

// Website Api

global.APIs = {

	alfa: 'https://api-alphabot.herokuapp.com',

}

// Free apikey

global.APIKeys = {

	'https://api-alphabot.herokuapp.com': 'Alphabot',

}

// setting 

global.autoread = false // auto read pesan / message

global.autorecording = true //status auto merekam ( auto record )

global.autoketik = false //status auto mengetik (auto typing)

global.available = false //status online (online)

// Other

global.botname = "kingsley 𝙱𝙾𝚃 𝚅.1" //namabot kalian

global.ownername= "kingsley" //nama kalian

global.myweb ="https://google.com/" //bebas asal jan hapus

global.youtube = "https://youtube.com/c/alltracker" //bebas asal jan hapus

global.github = "https://github.com/ife250/" //bebas

global.email = "ifekingsley09@gmail.com" //bebas

global.region = "Malawi" //bebas

global.ownernomer = "265889976968" // nomor wa kalian

global.ownernomerr = "+265889976968" //nmr wa kalian

global.thumbnail = "./image/lol.jpg" // ini lol.jpg adalah nama foto di folder image. untuk foto bot

global.donasi = "./image/donasi.jpg" // foto donasi di folder image

global.background_welcome="https://telegra.ph/file/62343526f5de4fb048476.jpg" // maks size 30kb, agar welcome image nya tdk delay

global.owner = ["265889976968","265981678617"] //ganti agar fitur owner bisa di gunakan

global.packname = '© kingsley 𝙱𝙾𝚃 𝚅.1' //sticker wm ubah

global.author = '𝐵𝑦 Kíñgsléy' //sticker wm ganti nama kalian

global.sessionName = '𝐿𝑖𝑣𝑒 𝑛𝑜𝑤'

global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

global.prefa = ['','!','.','🐦','🐤','🗿']

global.sp = '⭔'

global.mess = {

    sukses: 'kingsley 🤗Done',

    admin: 'Perintah Ini Hanya Bisa Digunakan Oleh Admin !',

    botAdmin: 'Perintah Ini Hanya Bisa Digunakan Ketika kingsley Bot Menjadi Admin !',

    owner: 'Perintah Ini Hanya Bisa Digunakan Oleh Owner !',

    group: 'Perintah Ini Hanya Bisa Digunakan Di Group !',

    private: 'Perintah Ini Hanya Bisa Digunakan Di Private !',

	bot: 'Fitur Khusus Pengguna Nomor Bot',

    errtoimg: 'Maaf Saat Ini Belum Support Sticker Gif !',

    wait: 'kingsley ⏳ Sedang in ☠️ Proses',

	lockCmd: 'Fitur Tidak Diaktifkan Oleh kingsley!',

	example1: 'Selamat Datang @user Di Group @subject Jangan Lupa Baca Rules @desc\n\nNote :\n1. @user (Mention User Join)\n2. @bio (Get Bio User Join)\n3. @tanggal (Date Now)\n4. @desc (Get Description Group)\n5. @subject (Group Name)'

}

let file = require.resolve(__filename)

fs.watchFile(file, () => {

	fs.unwatchFile(file)

	console.log(chalk.redBright(`Update'${__filename}'`))

	delete require.cache[file]

	require(file)

})
