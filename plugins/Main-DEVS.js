var handler = async (m, { conn, command, args, usedPrefix, DevMode }) => {
  let owners = '24105114159 - 𝚃𝙾𝙶𝙴 𝙸𝙽𝚄𝙼𝙰𝙺𝙸'; // Define owners variable

  let fkontak = {
    "key": {
      "participants": "0@s.whatsapp.net",
      "remoteJid": "status@broadcast",
      "fromMe": false,
      "id": "hey"
    },
    "message": {
      "contactMessage": {
        "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
      }
    },
    "participant": "0@s.whatsapp.net"
  };

  let pp = './Assets/ANNA.jpg';

  const cat = `𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙽𝙰

🔰 𝐀𝐍𝐍𝐀 𝐃𝐄𝐕 wa.me/+24105114159
*---------------------*

_𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙽𝙰_
*${owners}*`;

  await conn.sendFile(m.chat, pp, 'menuvid', cat, fkontak);
};

handler.help = ['devi', 'maindev'];
handler.tags = ['info'];
handler.command = /^(maindev|devi)$/i;

export default handler;
