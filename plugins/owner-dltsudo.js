let handler = async (m, { conn, text }) => {
    let who;
    if (m.isGroup) {
        who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text;
    } else {
        who = m.chat;
    }
    if (!who) throw '🎯Tag The Person You Want To Dissmiss From Sudo';
    
    const ownerId = who.split('@')[0];
    const ownerIndex = global.owner.findIndex(owner => owner[0] === ownerId);
    
    if (ownerIndex === -1) throw 'This Person Is Not A Sudo';
    
    const removedOwner = global.owner.splice(ownerIndex, 1)[0];
    const caption = ` *Now @${removedOwner[0]} Cannot Able To Acess To The Owner Only Commands❌*.`;
    
    await conn.reply(m.chat, caption, m, {
        mentions: conn.parseMention(caption)
    });
}

handler.help = ['dltsudo tag'];
handler.tags = ['owner'];
handler.command = /^(remove|dlt|-)(owner|sudo)$/i;
handler.owner = true;

export default handler;
