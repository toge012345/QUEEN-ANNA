import fetch from 'node-fetch'
import uploadImage from '../lib/uploadImage.js'

let handler = async m => {
  const imageBuffer = await (await fetch('https://raw.githubusercontent.com/toge012345/QUEEN-ANNA/main/ANNA.jpg?token=GHSAT0AAAAAACWTLQTAVWV2LX3HTJIDUGEEZXHPR4A')).buffer()
  let imgurl = await uploadImage(imageBuffer)
  
  const messageContent = `
  ╭⭑⭑⭑★✪ 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙽𝙰 ✪★⭑⭑⭑
  │ 📂 *BOT Name:* 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙽𝙰
  │ 📝 *Description:* _I'm 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙽𝙰. A MultiDevice WhatsApp bot with rich features Created By 𝚃𝙾𝙶𝙴 𝙸𝙽𝚄𝙼𝙰𝙺𝙸._
  │ 👤 *Owner:* 𝚃𝙾𝙶𝙴 𝙸𝙽𝚄𝙼𝙰𝙺𝙸
  │ 🌐 *Channel:* https://whatsapp.com/channel/0029VaE8GbCDzgTILE7OtC3e
  ╰━━━━━━━━━━━━━━━━╯
  `.trim()
  const imageBuffer = await response.buffer()
      let imgurl = await uploadImage(imageBuffer)
      await conn.sendButton(m.chat,'Here is your Result', author, imgurl, [['MENU', `${usedPrefix}menu`]], null, [['WATCH ANIME', `https://ab-streamer.vercel.app`]], m)
}
handler.help = ['bchannel']
handler.tags = ['main']
handler.command = ['Achannel', 'bchannel']
export default handler
