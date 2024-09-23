const handler = async (m, {conn, isAdmin}) => {
  if (m.fromMe) return;
  if (isAdmin) throw '*You Are Aldready An Admin✅*';
  try {
    await conn.groupParticipantsUpdate(m.chat, [m.sender], 'promote');
  } catch {
    await m.reply('*Error, It Was Not Possible To  Make You Admin❌*');
  }
};
handler.command = /^autoadmin$/i;
handler.rowner = true;
handler.group = true;
handler.botAdmin = true;
export default handler;
