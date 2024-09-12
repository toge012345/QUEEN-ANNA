import cheerio from 'cheerio';
import axios from 'axios';
const handler = async (m, {conn, text, __dirname, usedPrefix, command}) => {
  if (!global.db.data.chats[m.chat].nsfw && m.isGroup) throw '⚠️This Group Doesnt Supprt Nsfw Enable It By *.on nsfw*';
  if (!text) throw '⚠️Enter The Type Name *📌Example: .hentais hot*';
  const searchResults = await searchHentai(text);
  let teks = searchResults.result.map((v, i) => `
${i+1}. *_${v.title}_*
↳ 📺 *_Views:_* ${v.views}
↳ 🖇️ *_Link:_* ${v.url}`).join('\n\n');
  let randomThumbnail;
  if (searchResults.result.length > 0) {
    const randomIndex = Math.floor(Math.random() * searchResults.result.length);
    randomThumbnail = searchResults.result[randomIndex].thumbnail;
  } else {
    randomThumbnail = 'https://pictures.hentai-foundry.com/e/Error-Dot/577798/Error-Dot-577798-Zero_Two.png';
    teks = '*❌No Results Found*';
  }
  conn.sendFile(m.chat, randomThumbnail, 'error.jpg', teks, m);
};
handler.command = /^(hentaisearch|hentais)$/i;
export default handler;
async function searchHentai(search) {
  return new Promise((resolve, reject) => {
    axios.get('https://hentai.tv/?s=' + search).then(async ({data}) => {
      const $ = cheerio.load(data);
      const result = {};
      const res = [];
      result.coder = 'rem-comp';
      result.result = res;
      result.warning = 'It is strictly forbidden to reupload this code, copyright © 2022 by rem-comp';
      $('div.flex > div.crsl-slde').each(function(a, b) {
        const _thumbnail = $(b).find('img').attr('src');
        const _title = $(b).find('a').text().trim();
        const _views = $(b).find('p').text().trim();
        const _url = $(b).find('a').attr('href');
        const hasil = {thumbnail: _thumbnail, title: _title, views: _views, url: _url};
        res.push(hasil);
      });
      resolve(result);
    }).catch((err) => {
      console.log(err);
    });
  });
}
