let handler = async (m, { conn, text, usedPrefix, command, customPrefix }) => {
let stikerwelgc = "./src/welgc.webp"
let stikerbyegc = "./src/byegc.webp"
if (command == 'welcomegc') {
conn.sendFile(m.chat, stikerwelgc, 'sticker.webp', null, m, false, { 
contextInfo: { externalAdReply: { title: ''𝙰𝙱𝙷𝙸𝚂𝙷𝙴𝙺-𝚂𝙴𝚁🎯', body: '𝙰𝙱𝙷𝙸𝚂𝙷𝙴𝙺-𝚂𝚄𝚁𝙴𝚂𝙷☘️', sourceUrl: `https://github.com/AbhishekSuresh2/ABHISHEK-SER`, thumbnail: imagen1}}})  
}
if (command == 'byegc') {
conn.sendFile(m.chat, stikerbyegc, 'sticker.webp', null, m, false, { 
contextInfo: { externalAdReply: { title: ''𝙰𝙱𝙷𝙸𝚂𝙷𝙴𝙺-𝚂𝙴𝚁🎯', body: '𝙰𝙱𝙷𝙸𝚂𝙷𝙴𝙺-𝚂𝚄𝚁𝙴𝚂𝙷☘️', sourceUrl: `https://github.com/AbhishekSuresh2/ABHISHEK-SER`, thumbnail: imagen1}}})
}}
handler.command = ['welcomegc', 'byegc']
export default handler
function pickRandom(list) {
return list[Math.floor(list.length * Math.random())]}
