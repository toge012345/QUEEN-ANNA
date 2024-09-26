const handler = async (m, {conn, args, groupMetadata, participants, usedPrefix, command, isBotAdmin, isSuperAdmin}) => {
  if (!args[0]) return m.reply(`⚠️Enter The ContryCode You Want To Kick Numbers *📌Example: ${usedPrefix + command} 91*`);
  if (isNaN(args[0])) return m.reply(`⚠️Enter The ContryCode You Want To Kick Numbers *📌Example: ${usedPrefix + command} 91*`);
  const lol = args[0].replace(/[+]/g, '');
  const ps = participants.map((u) => u.id).filter((v) => v !== conn.user.jid && v.startsWith(lol || lol));
  const bot = global.db.data.settings[conn.user.jid] || {};
  if (ps == '') return m.reply(`*❌In This Group There Is No Number With The ContryCode +${lol}*`);
  const numeros = ps.map((v)=> '⭔ @' + v.replace(/@.+/, ''));
  const delay = (time) => new Promise((res)=>setTimeout(res, time));
  switch (command) {
    case 'listanum':
      conn.reply(m.chat, `*🎯List Of Pepoles With ContryCode +${lol} In This Group:*\n\n` + numeros.join`\n`, m, {mentions: ps});
      break;
    case 'kicknum':
      if (!bot.restrict) return m.reply('*⚠️The Owner Of The Bot Has Not Enabled The Restrict To Enable Type ${usedPrefix}*on restrict* Contact Him To Enable*');
      if (!isBotAdmin) return m.reply('*❌I Am Not An Admin Make Is Admin To Use This!*');
      conn.reply(m.chat, `*✅Kicking Numbers With The ContryCode +${lol}, In Each 10 Second 1 User Will Be Kicked Out From This Group*`, m);
      const ownerGroup = m.chat.split`-`[0] + '@s.whatsapp.net';
      const users = participants.map((u) => u.id).filter((v) => v !== conn.user.jid && v.startsWith(lol || lol));
      for (const user of users) {
        const error = `@${user.split('@')[0]} It has already been eliminated or abandoned the group*`;
        if (user !== ownerGroup + '@s.whatsapp.net' && user !== global.conn.user.jid && user !== global.owner + '@s.whatsapp.net' && user.startsWith(lol || lol) && user !== isSuperAdmin && isBotAdmin && bot.restrict) {
          await delay(2000);
          const responseb = await conn.groupParticipantsUpdate(m.chat, [user], 'remove');
          if (responseb[0].status === '404') m.reply(error, m.chat, {mentions: conn.parseMention(error)});
          await delay(10000);
        } else return m.reply('*❌ERROR*');
      }
      break;
  }
};
handler.command = /^(listnum|kicknum)$/i;
handler.group = handler.botAdmin = handler.admin = true;
handler.fail = null;
export default handler;
