let handler = async (m, { conn, text, usedPrefix, command, customPrefix }) => {
let stikerwelgc = "./src/welgc.webp"
let stikerbyegc = "./src/byegc.webp"
if (command == 'welcomegc') {
conn.sendFile(m.chat, stikerwelgc, 'sticker.webp', null, m, false, { 
contextInfo: { externalAdReply: { title: ''𝚃𝙾𝙶𝙴 𝙸𝙽𝚄𝙼𝙰𝙺𝙸', body: '𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙽𝙰', sourceUrl: `https://github.com/toge012345/QUEEN-ANNA`, thumbnail: imagen1}}})  
}
if (command == 'byegc') {
conn.sendFile(m.chat, stikerbyegc, 'sticker.webp', null, m, false, { 
contextInfo: { externalAdReply: { title: ''𝚃𝙾𝙶𝙴 𝙸𝙽𝚄𝙼𝙰𝙺𝙸', body: '𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙽𝙰', sourceUrl: `https://github.com/toge012345/QUEEN-ANNA`, thumbnail: imagen1}}})
}}
handler.command = ['welcomegc', 'byegc']
export default handler
function pickRandom(list) {
return list[Math.floor(list.length * Math.random())]}
