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

  const cat = `*_QUEEN ANNA_*

*_—🔰 𝐀𝐍𝐍𝐀 𝐃𝐄𝐕 wa.me/+24105114159 %dont_contact_me%_*

*---------------------*

*_ᴛʜᴇ ᴍᴏᴅᴇʀᴀᴛᴏʀ_*
*${owners}*`;

  await conn.sendFile(m.chat, pp, 'https://i.ibb.co/Btk5dcq/ANNA.jpg', cat, fkontak);
};

handler.help = ['devi', 'toge'];
handler.tags = ['info'];
handler.command = /^(toge|devi)$/i;

export default handler;
    
