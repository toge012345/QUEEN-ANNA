import fetch from 'node-fetch'
import axios from 'axios';
const handler = async (m, {conn, groupMetadata, usedPrefix, text, args, command}) => {
  if (!text) throw `*Enter A Ringtone Name 📌Example: ${usedPrefix + command} Samsung*`;
  const anu = await ringtone(text);
  const result = anu[Math.floor(Math.random() * anu.length)];
  conn.sendMessage(m.chat, {audio: {url: result.audio}, fileName: result.title+'.mp3', mimetype: 'audio/mpeg'}, {quoted: m});
};
handler.command = ['ringtone'];
export default handler;
async function ringtone(title) {
  return new Promise((resolve, reject) => {
    axios.get('https://www.zedge.net/find/ringtones/'+title).then((get) => {
      const $ = cheerio.load(get.data);
      const hasil = [];
      $('#__next > main > section > div.jsx-2244708474.container > div > div > div > div:nth-child(4) > div > div > div > ul > li').each(function(a, b) {
        hasil.push({title: $(b).find('h4').text(), source: 'https://www.zedge.net/'+$(b).find('a').attr('href'), audio: $(b).find('audio').attr('src')});
      });
      resolve(hasil);
    });
  });
}
