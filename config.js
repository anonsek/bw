//my secript by 𝙃𝙐𝙕𝙄𝙄𝘽𝘼𝙇𝙊𝘾𝙃_3.0
//not sale this script

require("./database/module")

//GLOBAL PAYMENT
global.storename = "𝘽𝙇𝘼𝘾𝙆-𝙒𝙊𝙍𝙇𝘿3.0"
global.dana = "chat admin"
global.qris = "kosong"


// GLOBAL SETTING
global.owner = "923470019309"
global.namabot = "𝘽𝙇𝘼𝘾𝙆-𝙒𝙊𝙍𝙇𝘿3.0"
global.nomorbot = "923470019309"
global.nameCreator = "𝘽𝙇𝘼𝘾𝙆-𝙒𝙊𝙍𝙇𝘿3.0"
global.linkwp = "https://whatsapp.com/channel/0029VaqyldOC6ZvZ6uSVmg2q"
global.autoJoin = false
global.antilink = true
global.versisc = '30'

// DELAY JPM
global.delayjpm = 5500



//GLOBAL THUMB

global.codeInvite = ""
global.imageurl = 'pomf2.lain.la/f/wglisc6o.jpg'
global.isLink = "https://whatsapp.com/channel/0029VaqyldOC6ZvZ6uSVmg2q"
global.packname = "𝘽𝙇𝘼𝘾𝙆-𝙒𝙊𝙍𝙇𝘿3.0"
global.author = "✰ 𝐁𝐋𝐀𝐂𝐊 𝐖𝐎𝐑𝐋𝐃 3.0"
global.jumlah = "5"


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})