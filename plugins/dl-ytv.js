import ytdl from 'ytdl-core';
import fs from 'fs';
import os from 'os';

let limit = 500;
let handler = async (m, { conn, args, isPrems, isOwner, usedPrefix, command }) => {
  if (!args || !args[0]) throw `📌Example:\n${usedPrefix + command} https://youtu.be/Xb1-Oh1_msQ`;
  if (!args[0].match(/youtu/gi)) throw `🎯 Verify That The YouTube Link`;

  let chat = global.db.data.chats[m.chat];
  m.react(rwait);
  try {
    const info = await ytdl.getInfo(args[0]);
    const format = ytdl.chooseFormat(info.formats, { quality: 'highest' });
    if (!format) {
      throw new Error('No valid formats found');
    }

    if (format.contentLength / (1024 * 1024) >= limit) {
      return m.reply(`≡ *ABHU YTDL*\n\n▢ *⚖️Size*: ${format.contentLength / (1024 * 1024).toFixed(2)}MB\n▢ *🎞️Quality*: ${format.qualityLabel}\n\n▢ The File Exceeds The Download Limit *+${limit} MB*`);
    }

    const tmpDir = os.tmpdir();
    const fileName = `${tmpDir}/${info.videoDetails.videoId}.mp4`;

    const writableStream = fs.createWriteStream(fileName);
    ytdl(args[0], {
      quality: format.itag,
    }).pipe(writableStream);

    writableStream.on('finish', () => {
      conn.sendFile(
        m.chat,
        fs.readFileSync(fileName),
        `${info.videoDetails.videoId}.mp4`,
        ` ╭──── 〔 Y O U T U B E 〕 ─⬣
	  ⬡ Title: ${info.videoDetails.title}
	  ⬡ Duration: ${info.videoDetails.lengthSeconds} seconds
	  ⬡ Views: ${info.videoDetails.viewCount}
	  ⬡ Upload: ${info.videoDetails.publishDate}
	  ⬡ Link: ${args[0]}
	  ╰─────────────────⬣`,
        m,
        false,
        { asDocument: chat.useDocument }
      );

      fs.unlinkSync(fileName); // Delete the temporary file
      m.react(done);
    });

    writableStream.on('error', (error) => {
      console.error(error);
      m.reply('*❌Error While Trying To Download The Video. Please Try Again.*');
    });
  } catch (error) {
    console.error(error);
    m.reply('*❌Error While Trying To Process The Video. Please Try Again.*');
  }
};

handler.help = ['ytmp4 <yt-link>'];
handler.tags = ['dl'];
handler.command = ['ytmp4', 'video'];
handler.diamond = false;

export default handler;
