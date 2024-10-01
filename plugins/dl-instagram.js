import fetch from 'node-fetch';

let handler = async (m, { conn, usedPrefix, args, command, text }) => {
  if (!text) throw `*🎯Give Me A Link*`;
  m.reply(wait);

  let res;
  try {
    res = await fetch(`https://inrl-web.onrender.com/api/insta?url=${text}`);
  } catch (error) {
    throw `*An Error Occurred: ${error.message}*`;
  }

  let api_response = await res.json();
  if (!api_response || !api_response.result || api_response.result.length === 0) {
    throw `*❌No Video Found Or Invalid Response From API.`;
  }

  let cap = `_©ABHISHEK-SER_`;

  conn.sendFile(m.chat, api_response.result[0], 'instagram.mp4', cap, m);
}

handler.help = ['instagram']
handler.tags = ['downloader']
handler.command = /^(instagram|igdl|ig|insta)$/i

export default handler
