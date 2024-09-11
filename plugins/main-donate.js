
let handler = async(m, { conn, usedPrefix, command }) => {

    let don = `
≡ *DONATION*
Share ABHISHEK-SER Bot Link And Support. Git Link https://github.com/AbhishekSuresh2/ABHISHEK-SER`
let img = 'https://replicate.delivery/pbxt/QbP6Fh3ZXwKON9SCB70ERGwwgeeSbztwKIOIzhUeXFkwnFHiA/out.png'
conn.sendFile(m.chat, img, 'img.jpg', don, m)
}

handler.help = ['donate']
handler.tags = ['main']
handler.command = ['apoyar', 'donate', 'donar'] 

export default handler
