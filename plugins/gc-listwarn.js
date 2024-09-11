const handler = async (m, {conn, isOwner}) => {
  const adv = Object.entries(global.db.data.users).filter((user) => user[1].warn);
  const warns = global.db.data.users.warn;
  const user = global.db.data.users;
  const imagewarn = './src/warn.jpg';
  const caption = `⚠️ Warned Users\n 
╭─────────────────❮
│ *Total : ${adv.length} Users* ${adv ? '\n' + adv.map(([jid, user], i) => `
│
│ 1.- ${isOwner ? '@' + jid.split`@`[0] : jid} *(${user.warn}/3)*\n│\n│ - - - - - - - - -`.trim()).join('\n') : ''}
╰──────────────────⦁`;
  await conn.sendMessage(m.chat, {text: caption}, {quoted: m}, {mentions: await conn.parseMention(caption)});
};
handler.command = /^(listwarn)$/i;
handler.group = true;
handler.admin = true;
export default handler;
