
import fg from 'api-dylux' 
let handler = async (m, { conn, args, usedPrefix, command }) => {

	if (!args[0]) throw `🎯 Enter A Google Drive Link`
	m.react(rwait) 
	try {
	let res = await fg.GDriveDl(args[0])
	 await m.reply(`
≡ *Google Drive DL*

▢ *Number:* ${res.fileName}
▢ *Size:* ${res.fileSize}
▢ *type:* ${res.mimetype}`)
		
	conn.sendMessage(m.chat, { document: { url: res.downloadUrl }, fileName: res.fileName, mimetype: res.mimetype }, { quoted: m })
	m.react(done)
   } catch {
	m.reply('Error: Check The Link Or Try Another Link') 
  }
}
handler.help = ['gdrive']
handler.tags = ['dl', 'prem']
handler.command = ['gdrive']
handler.diamond = false
handler.premium = false

export default handler
