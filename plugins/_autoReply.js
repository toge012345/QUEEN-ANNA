
export async function all(m) {
	
    // when someone sends a group link to the bot's dm
    if ((m.mtype === 'groupInviteMessage' || m.text.startsWith('https://chat') || m.text.startsWith('open this link')) && !m.isBaileys && !m.isGroup) {
     this.sendButton(m.chat, `*Invite Bot To A Group* 
        
  Hallo @${m.sender.split('@')[0]} 
  You Can Rent The Bot To Join A Group Or Contact Owner 
  M0ore Info Click On The Button
`.trim(), igfg, null, [['Rent', '/buyprem']] , m, { mentions: [m.sender] })
    m.react('🎯')
  } 
  
   return !0
}
