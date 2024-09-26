
let handler = async (m, { conn, text, usedPrefix, command, args, participants, isOwner }) => {
	
   if (!isOwner) return conn.sendButton(m.chat, `*Invite Bot To A Group*\n\nHello @${m.sender.split('@')[0]}\nYou Can Rent The Bot To Join A roup\n\n_More Info Click On The Button_`.trim(), igfg, null, [
       ['Alquilar', `${usedPrefix}buyprem`]] , m, { mentions: [m.sender] })
	
  let time = global.db.data.users[m.sender].lastjoin + 86400000
  let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i
  let delay = time => new Promise(res => setTimeout(res, time))
 
  let name = m.sender 
  let [_, code] = text.match(linkRegex) || []
  if (!args[0]) throw `🎯 Send The Group Link\n\n 📌 Example:\n *${usedPrefix + command}* <linkwa> <dias>\n\n_The Number Is The Days The Bot Will Be In The Group_` 
  if (!code) throw `🎯 Link Invalid`
  if (!args[1]) throw `🎯 Missing Number Of Fays\n\n 📌 Example:\n *${usedPrefix + command}* <linkwa> 2`
  if (isNaN(args[1])) throw `🎯 Number Only, Representing The Days The Bot Will Be In The Group!`
  let owbot = global.owner[1] 
  m.reply(`⏱️ Wait 3 Seconds, I Will Join The Group`)
  await delay(3000)
  try {
  let res = await conn.groupAcceptInvite(code)
  let b = await conn.groupMetadata(res)
  let d = b.participants.map(v => v.id)
  let member = d.toString()
  let e = await d.filter(v => v.endsWith(owbot + '@s.whatsapp.net'))
  let nDays = 86400000 * args[1]  
  let now = new Date() * 1
  if (now < global.db.data.chats[res].expired) global.db.data.chats[res].expired += nDays
  else global.db.data.chats[res].expired = now + nDays
  if (e.length) await m.reply(`✅ I Successfully Joined The Group \n\n≡ *Group Info* \n\n *Name :* ${await conn.getName(res)}\n\nThe Bot Will Exit Automatically After \n\n${msToDate(global.db.data.chats[res].expired - now)}`)
 
 if (e.length) await conn.reply(res, `*🎯 Hello Guys ABHISHEK-SER Bot Here!*

@919074692450 He Is My Creator If You Have Any Doubt
I Was Invited By *${m.name}*`, m, {
    mentions: d
     }).then(async () => {
     await delay(7000)
     }).then( async () => {
     await conn.reply(res, `Type .menu To Get My *Menu 📃*`, 0)
     await conn.reply(global.owner[1]+'@s.whatsapp.net', `≡ *GROUP INVITATION*\n\n@${m.sender.split('@')[0]} ha invitado a *${conn.user.name}* al grupo\n\n*${await conn.getName(res)}*\n\n*ID* : ${res}\n\n📌 Link : ${args[0]}\n\nThe Bot Will Exit Automatically After \n\n${msToDate(global.db.data.chats[res].expired - now)}`, null, {mentions: [m.sender]})
     })
     if (!e.length) await conn.reply(global.owner[1]+'@s.whatsapp.net', `≡ *INVITACIÓN A GRUPO*\n\n@${m.sender.split('@')[0]} has invited *${conn.user.name}* to group\n\n*${await conn.getName(res)}*\n\n*ID* : ${res}\n\n📌 link : ${args[0]}\n\nThe Bot Will Exit Automatically After\n\n ${msToDate(global.db.data.chats[res].expired - now)}`, null, {mentions: [m.sender]})
     if (!e.length) await m.reply(`🎯 Successfully Invite Bot To Group\n\n${await conn.getName(res)}\n\nThe Bot Will Exit Automatically After *${msToDate(global.db.data.chats[res].expired - now)}*`).then(async () => {
     let mes = `Hii 👋🏻
     
*${conn.user.name}* Is One Of The Multi-Device WhatsApp Bots Built With Node.js, *${conn.user.name}* Just Invited By *${m.name}*

To See The Menu Of The Bot Write

${usedPrefix}help
@${conn.user.jid.split('@')[0]} Will Exit Automatically After \n\n${msToDate(global.db.data.chats[res].expired - now)}`
  await conn.sendButton(res, mes, igfg, null, [[`✆ Owner`, `${usedPrefix}fgowner`], [`⦙☰ Menu`, `${usedPrefix}help`]], m, {
        mentions: d
         })
     })
    } catch (e) {
      conn.reply(global.owner[1]+'@s.whatsapp.net', e)
      throw `⚠️ Dont Spam Commands. Bot Number Will Get Ban`
      }
}
handler.help = ['join <chat.whatsapp.com> <dias>']
handler.tags = ['owner']
handler.command = ['join', 'invite'] 

//handler.owner = true

export default handler

function msToDate(ms) {
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [d, ' *Days*\n ', h, ' *Hours*\n ', m, ' *Minutes*\n ', s, ' *Seconds* '].map(v => v.toString().padStart(2, 0)).join('')
}
