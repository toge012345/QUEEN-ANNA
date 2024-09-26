//import db from '../lib/database.js'

import { createHash } from 'crypto'
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { conn, text, usedPrefix, command }) {
  let user = global.db.data.users[m.sender]
  let name2 = conn.getName(m.sender)
  if (user.registered === true) throw `🎯 You Are Already Registered\n\nDo You Want To Re-Register?\n\n 📌 Use This Command To Remove Your Record \n*${usedPrefix}unreg* <Serial number>`
  if (!Reg.test(text)) throw `⚠️ Format Incorrect\n\n 🎯 Use This Command: *${usedPrefix + command} name.age*\n📌Exemple : *${usedPrefix + command}* ${name2}.15`
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw '🎯 The Name Cannot Be Empty'
  if (!age) throw '🎯 Age Cannot Be Empty'
  if (name.length >= 30) throw '🎯The Name Is Too Long' 
  age = parseInt(age)
  if (age > 100) throw '👴🏻 Wow Grandpa Wants To Play Bot'
  if (age < 5) throw '🚼  There Is A Grandpa Baby jsjsj '
  user.name = name.trim()
  user.age = age
  user.regTime = + new Date
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex')
  m.reply(`
╭─── *REGISTERED* ─
▢ *NUMBER:* ${name}
▢ *AGE* : ${age} years
▢ *SERIEL NUMBER* :
${sn}
╰─────────────⦁

 *${usedPrefix}help* To See Menu
`.trim())
}
handler.help = ['reg'].map(v => v + ' <name.age>')
handler.tags = ['rg']

handler.command = ['verify', 'reg', 'register', 'registrar'] 

export default handler
