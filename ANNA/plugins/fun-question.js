import fetch from 'node-fetch';

let handler = async (m, { text, usedPrefix, command }) => {
  if (!text) throw `🎯Give Me A Question *📌Example:*\n\n*${usedPrefix + command}* Am I Smart?`;

  m.react('❓');
  conn.sendPresenceUpdate('composing', m.chat);

  let res = await fetch(`https://gurugpt.cyclic.app/gpt4?prompt=${encodeURIComponent(text)}&model=llama`);
  let json = await res.json();

  if (json && json.data) {
    const answer = json.data;

    m.reply(`╭────❮  *🎯ANSWER* ❯
│     
│  *Question:* ${text}
│  *Answer:* ${answer}
│ 
╰────────────⦁`);
  } else {
    throw '🎯No Valid Response Received From The API.';
  }
};

handler.help = ['question'];
handler.tags = ['fun'];
handler.command = ['question', 'q'];

export default handler;
