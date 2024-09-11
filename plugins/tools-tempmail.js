//thanks to inrl:https://github.com/inrl-official
import fetch from 'node-fetch';

let handler = async (m, { text, usedPrefix, command }) => {
  if (command === 'tempmail') {
    try {
      const response = await fetch('https://inrl-web.onrender.com/api/getmail?apikey=inrl');
      const data = await response.json();

      if (data.status && data.result && data.result.length > 0) {
        const tempMails = data.result.join('\n');
        const replyMessage = `*🎯Temporary Email Addresses:*\n\n${tempMails}\n\n Use \`\`\`\.checkmail <mail-address>\`\`\`\ If You Want To Check Inbox Of Any Temp Mail Used From Above`;
        m.reply(replyMessage);
      } else {
        m.reply('*❌No Temporary Email Addresses Found.*');
      }
    } catch (error) {
      console.error('Error:', error);
      m.reply('*⚠️Failed To Fetch Temporary Email Addresses.*');
    }
  } else if (command === 'checkmail') {
    if (!text && !(m.quoted && m.quoted.text)) {
      m.reply('🎯Please Provide Some Text Or Quote A Message To Get A Response.');
      return;
    }

    if (!text && m.quoted && m.quoted.text) {
      text = m.quoted.text;
    } else if (text && m.quoted && m.quoted.text) {
      text = `${text} ${m.quoted.text}`;
    }

    try {
      const response = await fetch(`https://inrl-web.onrender.com/api/getmailinfo?email=${encodeURIComponent(text)}&apikey=inrl`);
      const data = await response.json();

      if (data.status && data.result && data.result.length > 0) {
        const messages = data.result.map((message) => {
          return `
*From:* ${message.from}
*Subject:* ${message.subject}
*Date:* ${message.date}
*Body:*
${message.text}
          `;
        }).join('\n\n---\n\n');
        const replyMessage = `*Messages In* ${text}:\n\n${messages}`;
        m.reply(replyMessage);
      } else {
        m.reply(`*❌No Messages Found In ${text}.*`);
      }
    } catch (error) {
      console.error('Error:', error);
      m.reply(`*❌Failed To Check Messages In ${text}.*`);
    }
  }
};

handler.command = ['tempmail', 'checkmail'];
handler.diamond = false;

export default handler;
