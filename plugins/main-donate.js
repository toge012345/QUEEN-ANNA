
let handler = async(m, { conn, usedPrefix, command }) => {

    let don = `
≡ *DONATION*
Share 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙽𝙰 Bot Link And Support. Git Link https://github.com/toge012345/QUEEN-ANNA`
let img = 'https://raw.githubusercontent.com/toge012345/QUEEN-ANNA/main/ANNA.jpg?token=GHSAT0AAAAAACWTLQTA3HTSTXW2SAI4LQGCZXG4LCA'
conn.sendFile(m.chat, img, 'img.jpg', don, m)
}

handler.help = ['donate']
handler.tags = ['main']
handler.command = ['apoyar', 'donate', 'donar'] 

export default handler
