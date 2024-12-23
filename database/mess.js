require("./global")

const mess = {
   wait: "<!> ` Patiently again processed`",
   success: "☠️ `𝘿𝙊𝙉𝙀`",
   on: "*`[ On Feature ]` - Sudah Aktif*", 
   off: "*`[ Off Feature ]` - Sudah Off*",
   query: {
       text: "<!> `Teks Nya Mana Kak?`",
       link: "<!> `Link Nya Mana Kak?`",
   },
   error: {
       fitur: "<!> `𝙀𝙍𝙍𝙊𝙍`",
   },
   only: {
       group: "☠️ `𝙁𝙊𝙍 𝙂𝙍𝙊𝙐𝙋`",
       private: "☠️ `𝙋𝙍𝙄𝙑𝘼𝙏𝙀`",
       owner: "☠️ `𝙮𝙤𝙪 𝙖𝙧𝙚 𝙣𝙤𝙩 𝙤𝙬𝙣𝙚𝙧 𝙘𝙤𝙣𝙩𝙖𝙘𝙩 𝙪𝙨 +923418361758 `",
       admin: "☠️ `ADMIN T𝙤𝙡𝙡`",
       badmin: "☠️ `𝙮𝙤𝙪 𝙖𝙧𝙚 𝙣𝙤𝙩 𝙖𝙙𝙢𝙞𝙣 𝙘𝙤𝙣𝙩𝙖𝙘𝙩 𝙪𝙨 +923418361758 `",
       premium: "☠️ ` You are not a Premium User yet! 𝙘𝙤𝙣𝙩𝙖𝙘𝙩 𝙪𝙨 +923418361758 Type (.addprem 628xxx)`",
   }
}

global.mess = mess

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})