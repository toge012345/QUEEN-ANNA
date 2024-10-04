

let handler = async(m, { conn, text, usedPrefix, command }) => {

    // Sound
    let name = m.pushName || conn.getName(m.sender)
    var vn = "./Assets/ALIVE.mp3"
    let url = "https://github.com/toge012345"
    let murl = "https://youtube.com/@kenzo3146?si=_v7ZRTjkqmLKt0HK"
    let img = "https://i.ibb.co/Btk5dcq/ANNA.jpg"
    let con = { key: { fromMe: false, participant: `${m.sender.split`@`[0]}@s.whatsapp.net`, ...(m.chat ? { remoteJid: '24105114159@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `${name}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}
    let doc = {
        audio: {
          url: vn
        },
        mimetype: 'audio/mp4',
        ptt: true,
        waveform:  [100, 0, 100, 0, 100, 0, 100],
        fileName: "Guru",
    
        contextInfo: {
          mentionedJid: [m.sender],
          externalAdReply: {
          title: "𝐐𝐔𝐄𝐄𝐍 𝐀𝐍𝐍𝐀 𝐈𝐒 𝐀𝐋𝐈𝐕𝐄 🌟",
          body: "𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙽𝙰",
          thumbnailUrl: img,
          sourceUrl: 'https://chat.whatsapp.com/BASoDcE8VL01jjVaraH1Ol',
          mediaType: 1,
          renderLargerThumbnail: true
          }}
      };
    
      await conn.sendMessage(m.chat, doc, { quoted: con });
    
    }
    
    handler.help = ['alive']
    handler.tags = ['main']
    handler.command = /^(alive)$/i 

    export default handler;
