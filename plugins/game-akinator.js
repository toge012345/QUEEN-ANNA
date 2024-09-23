import fetch from 'node-fetch';
import translate from '@vitalets/google-translate-api';
const handler = async (m, {conn, usedPrefix, command, text}) => {
  if (m.isGroup) return;
  const aki = global.db.data.users[m.sender].akinator;
  if (text == 'end') {
    if (!aki.sesi) return m.reply('*You Are Currently Not In A Akinator Game*');
    aki.sesi = false;
    aki.soal = null;
    m.reply('*Akinator Game Was Successfully Eliminated*');
  } else {
    if (aki.sesi) return conn.reply(m.chat, '*You Are Still In A Akinator Game*', aki.soal);
    try {
      const res = await fetch(`https://api.lolhuman.xyz/api/akinator/start?apikey=${lolkeysapi}`);
      const anu = await res.json();
      if (anu.status !== 200) throw '*Error, Intental But Late*';
      const {server, frontaddr, session, signature, question, progression, step} = anu.result;
      aki.sesi = true;
      aki.server = server;
      aki.frontaddr = frontaddr;
      aki.session = session;
      aki.signature = signature;
      aki.question = question;
      aki.progression = progression;
      aki.step = step;
      const resultes2 = await translate(question, {to: 'es', autoCorrect: false});
      let txt = `🎮 *AKINATOR* 🎮\n\n*PLAYER: @${m.sender.split('@')[0]}*\n*ASK: ${resultes2.text}*\n\n`;
      txt += '*0 - Yes*\n';
      txt += '*1 - No*\n';
      txt += '*2 - Dont Know*\n';
      txt += '*3 - Probably Yes*\n';
      txt += '*4 - Probably No*\n\n';
      txt += `*Use The Command ${usedPrefix + command} end To End Akinator Game*`;
      const soal = await conn.sendMessage(m.chat, {text: txt, mentions: [m.sender]}, {quoted: m});
      aki.soal = soal;
    } catch {
      m.reply('*Error, Intental But Late*');
    }
  }
};
handler.menu = ['akinator'];
handler.tags = ['game'];
handler.command = /^(akinator)$/i;
export default handler;
