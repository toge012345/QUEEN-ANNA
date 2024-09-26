let handler = async (m, { conn, usedPrefix }) => {
    if (!global.db.data.chats[m.chat].nsfw) throw `🚫 This Group Doesnt Supprt nsfw \n\n Enable It By \n*${usedPrefix}enable* nsfw`
    let user = global.db.data.users[m.sender].age
    if (user < 17) throw m.reply(`❎ You Need To Be Atleast 18 Years`) 
   
m.react(rwait)
    let nsfwCommands = ['xnxx', 'xvid',  'genshin', 'swimsuit', 'schoolswimsuit', 'white', 'barefoot', 'touhou', 'gamecg', 'hololive', 'uncensored', 'sunglasses', 'glasses', 'weapon', 'shirtlift', 'chain', 'fingering', 'flatchest', 'torncloth', 'bondage', 'demon', 'wet', 'pantypull', 'headdress', 'headphone', 'tie', 'anusview', 'shorts', 'stockings', 'topless', 'beach', 'bunnygirl', 'bunnyear', 'idol', 'vampire', 'gun', 'maid', 'bra', 'nobra', 'bikini', 'whitehair', 'blonde', 'pinkhair', 'bed', 'ponytail', 'nude', 'dress', 'underwear', 'foxgirl', 'uniform', 'skirt', 'sex', 'sex2', 'sex3', 'breast', 'twintail', 'spreadpussy', 'tears', 'seethrough', 'breasthold', 'drunk', 'fateseries', 'spreadlegs', 'openshirt', 'headband', 'food', 'close', 'tree', 'nipples', 'erectnipples', 'horns', 'greenhair', 'wolfgirl', 'catgirl'];
  
    let message = `
  *Nsfw Commands Menu* 
  
  Here Is The List Of Available Commands For *nsfw* Content. Use The Prefix "${usedPrefix}" Followed By The Command Name:
  
  ${nsfwCommands.map(command => `${usedPrefix}${command}`).join('\n')}
  
  Note: These Commands Are Only For Those Who Are 18+.
  `;
  
    console.log("Sending message...");
    await conn.reply(m.chat, message, m);
    console.log("Message sent.");
  };
  
  handler.help = ['nsfw'];
  handler.tags = ['nsfw'];
  handler.command = ['nsfw'];
  handler.group = true
  handler.register = false;

  export default handler;
  
