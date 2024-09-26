const handler = async (m, {conn, text, usedPrefix, command}) => {
  if (!text) throw `*Enter A Message*\n\n*📌Example:*\n*${usedPrefix + command} The Command ${usedPrefix}Play Not Working*`;
  if (text.length < 10) throw `*⚠️Must Need 10 Characters To Send Report!*`;
  if (text.length > 1000) throw `*❌Too Long Only 1000 Characters Allowed!*`;
  const teks = `*╭───❮ REPORT ❯*\n*│*\n*│ Number:* wa.me/${m.sender.split`@`[0]}\n*│*\n*│*\n*│ Message:* ${text}\n*╰────────────⦁*`;
  conn.reply('24105114159@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, {contextInfo: {mentionedJid: [m.sender]}});
  conn.reply('24105114159@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, {contextInfo: {mentionedJid: [m.sender]}});
  m.reply(`*✅Report Sent To The Developer Of This Bot. If This Is A Joke Or False It Will Be Ignored*`);
};
handler.help = ['reporte', 'request'].map((v) => v + ' <teks>');
handler.tags = ['info'];
handler.command = /^(report|request|reporte|bugs|bug|report-owner|reportes)$/i;
export default handler;
