import {
    promises,
    readFileSync
   } from "fs"
   import {
    join
   } from "path"
   import {
    xpRange
   } from "../lib/levelling.js"
   import moment from "moment-timezone"
   import os from "os"

  
   let groupmenu = `
╭───❮ *𝙶𝚁𝙾𝚄𝙿 𝙼𝙴𝙽𝚄* ❯
│ _.kick *@tag*_
│ _.promote *@tag*_
│ _.demote *@tag*_
│ _.infogroup_
│ _.getbio *@tag*_
│ _.resetlink_
│ _.link_
│ _.*on/off* antilink_
│ _.*on/off* antidelete_
│ _.invite_
│ _.setppgc *image*_
│ _.setname *text*_
│ _.setdesc *text*_
│ _.setwelcome *text*_
│ _.setbye *text*_
│ _.hidetag *text/image/audio/vid*_
│ _.warn *@tag*_
│ _.unwarn *@tag*_
│ _.listwarn_
│ _.listnum_
│ _.kicknum_
│ _.group *open/close*_
│ _.tagall_
╰─────────────⦁`
  
  let ownermenu = `
╭───❮ *𝙾𝚆𝙽𝙴𝚁 𝙼𝙴𝙽𝚄* ❯
│ _.*on/off* public_
│ _.*on/off* autoreact_
│ _.fullpp_
│ _.update_
│ _.setsudo_
│ _.dltsudo_
│ _.autoadmin_
│ _.left_
│ _.banchat_
│ _.unbanchat_
│ _.ban_
│ _.unban_
│ _.banlist_
│ _.block_
│ _.unblock_
│ _.blocklist_
│ _.bc_
│ _.bcgc_
│ _.join_ 
│ _.restart_
│ _.setpp_
│ _.setprefix_
│ _.resetprefix_
│ _.resetuser_
│ _.getfile_
│ _.getplugin_
╰─────────────⦁ `
  
  let funmenu = `
╭───❮ *𝙵𝚄𝙽 𝙼𝙴𝙽𝚄* ❯
│ _.hearts_
│ _.moon_
│ _.question_
│ _.character_
│ _.truth_
│ _.dare_
│ _.flirt_
│ _.gay_
│ _.meme_
│ _.ship_
│ _.kill_
│ _.kiss_
│ _.pat_
│ _.slap_
│ _.waste_
│ _.simpcard_
│ _.hornycard_
│ _.ytcomment_
│ _.stupid_
│ _.lolicon_
╰─────────────⦁`  
  
  let dlmenu = `
╭───❮ *𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳 𝙼𝙴𝙽𝚄* ❯
│ _.song_
│ _.play_
│ _.apk_
│ _.yts_
│ _.insta *link*_
│ _.img_
│ _.pinterest_
│ _.mediafire *link*_
│ _.gdrive *link*_
│ _.gitclone *link*_
│ _.twitter *link*_
│ _.tiktok *link*_
│ _.tiktokstalk_
│ _.spotify_
│ _.fb *link*_
╰─────────────⦁`
  
  let gamemenu = `
╭───❮ *𝙶𝙰𝙼𝙴 𝙼𝙴𝙽𝚄* ❯
│ _.tictactoe_
│ _.delttt_
│ _.math_
│ _.math answer_
│ _.ppt_
│ _.slot_
│ _.casino_
╰─────────────⦁`
  
  let stickermenu = `
╭───❮ *𝚂𝚃𝙸𝙲𝙺𝙴𝚁  𝙼𝙴𝙽𝚄* ❯
│ _.sticker_
│ _.take_
│ _.smaker_
│ _.getsticker_
│ _.emix_
│ _.attp_
╰─────────────⦁ `
  
  let audiomenu = `
╭───❮ *𝙰𝚄𝙳𝙸𝙾 𝙼𝙴𝙽𝚄* ❯
│ _.bass_
│ _.blown_
│ _.deep_
│ _.earrape_
│ _.fat_
│ _.fast_
│ _.nightcore_
│ _.reverse_
│ _.squrrel_
│ _.slow_
╰─────────────⦁`
 
  let convertermenu = `
╭───❮ *𝙲𝙾𝙽𝚅𝙴𝚁𝚃𝙴𝚁 𝙼𝙴𝙽𝚄* ❯
│ _.toanime_
│ _.tomp3_
│ _.toimg_
│ _.tovid_
╰─────────────⦁`

  let economy = `
╭───❮ *𝙴𝙲𝙾𝙽𝙾𝙼𝚈 𝙼𝙴𝙽𝚄* ❯
│ _.claim/daily_
│ _.weekly_
│ _.monthly_
│ _.leaderboard_
│ _.bet_
│ _.heal_
│ _.craft_
│ _.balance_
│ _.shop_
│ _.sell_
│ _.adventure_
│ _.opencrate_
│ _.mine_
│ _.work_
│ _.transfer_
│ _.todiamond_
│ _.tomoney_
╰─────────────⦁`
  let animemenu = `
╭───❮ *𝙰𝙽𝙸𝙼𝙴 𝙼𝙴𝙽𝚄* ❯
│ _.waifu_
│ _.neko_
│ _.loli_
│ _.naruto_
│ _.itachi_
│ _.akira_
│ _.asuna_
│ _.akiyama_
│ _.boruto_
│ _.hornycard_
│ _.ayuzawa_
│ _.anna_
│ _.chiho_
│ _.chitoge_
│ _.deidara_
│ _.erza_
│ _.elaina_
│ _.emilia_
│ _.hestia_
│ _.hinata_
│ _.inori_
│ _.isuzu_
│ _.kagura_
│ _.kaori_
│ _.keneki_
│ _.kurumi_
│ _.madara_
│ _.mikasa_
│ _.miku_
│ _.minato_
│ _.nezuko_
│ _.sagiri_
│ _.sasuke_
│ _.sakura_
│ _.kotori_
╰─────────────⦁`
  let nsfwmenu = `
╭───❮ *𝙽𝚂𝙵𝚆 𝙼𝙴𝙽𝚄* ❯
│ _.on nsfw_
│ _.off nsfw_
│ _.hentais *text*_
│ _.xnxxdl *link*_
╰────────────⦁`
  
  let toolsmenu = `
╭───❮ *𝚃𝙾𝙾𝙻𝚂 𝙼𝙴𝙽𝚄* ❯
│ _.autosticker_
│ _.pdf_
│ _.whatmusic_
│ _.tempmail_
│ _.checkmail_
│ _.pokedex_
│ _.calc_
│ _.google_
│ _.lyrics_
│ _.readmore_
│ _.ssweb_
│ _.tts_
│ _.trt_
│ _.wiki_
│ _.nowa_
│ _.qrmaker_
│ _.true_
│ _.fancy_
│ _.weather_
│ _.alexa_
│ _.itunes_
│ _.technews_
╰─────────────⦁`
  
  let Randommenu = `
╭───❮ *𝚁𝙰𝙽𝙳𝙾𝙼 𝙼𝙴𝙽𝚄* ❯
│ _.bts_
│ _.cr7_
│ _.cat_
│ _.coffee_
│ _.cartoon_
│ _.cyberspace_
│ _.couplepp_
│ _.dog_
│ _.doraemon_
│ _.ff_
│ _.hacker_
│ _.messi_
│ _.pubg_
│ _.pentol_
│ _.planet_
│ _.tech_
│ _.wpmountain_
│ _.wpgaming_
│ _.wprandom_
╰─────────────⦁`  

  let botmenu = `
╭───❮ *𝙱𝙾𝚃 𝙼𝙴𝙽𝚄* ❯
│ _.ping_
│ _.uptime_
│ _.enable_
│ _.alive_
│ _.owner_
│ _.report_
│ _.bot_
│ _.script_
│ _.runtime_
│ _.infobot_
│ _.donate_
│ _.groups_
│ _.blocklist_
│ _.listprem_
╰─────────────⦁`

  const handler = async (m, {
    conn,
    command,
    text,
    args,
    usedPrefix
  }) => {
    
  
   let glb = global.db.data.users
   let usrs = glb[m.sender]
   let tag = `@${m.sender.split("@")[0]}`
   let mode = global.opts["self"] ? "Private" : "Public"
   
   let {
  age,
  exp,
  limit,
  level,
  role,
  registered,
  credit
   } = glb[m.sender]
   let {
  min,
  xp,
  max
   } = xpRange(level, global.multiplier)
   let name = await conn.getName(m.sender)
   let premium = glb[m.sender].premiumTime
   let prems = `${premium > 0 ? "Premium": "Free"}`
   let platform = os.platform()
  
  
   let ucpn = `${ucapan()}`
  
   let _uptime = process.uptime() * 1000
   let _muptime
   if (process.send) {
  process.send("uptime")
  _muptime = await new Promise(resolve => {
  process.once("message", resolve)
  setTimeout(resolve, 1000)
  }) * 1000
   }
   let muptime = clockString(_muptime)
   let uptime = clockString(_uptime)
  
   
   let totalfeatures = Object.values(global.plugins).filter((v) => v.help && v.tags).length;
   let totalreg = Object.keys(glb).length
  
    conn.gurumenu = conn.gurumenu ? conn.gurumenu : {};
    
   
    global.fcontact = { key: { fromMe: false, participant: `0@s.whatsapp.net`, remoteJid: 'status@broadcast' }, message: { contactMessage: { displayName: `${name}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}
    const infoText = `┏─╴[ *QUEEN ANNA* ] ──┓
│ 𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : *@24105114159*
│ 𝐁𝐨𝐭 : *Qᴜᴇᴇɴ-ᴀɴɴᴀ*
│ 𝐌𝐨𝐝𝐞 : *${mode}* 
│ 𝐓𝐢𝐦𝐞 : *${muptime}*
│ 𝐕𝐞𝐫𝐬𝐢 : *1.0*
┗──────────────────┛${readMore}
  ┏────╴[ *INFO* ] ─────┓ 
   *Rᴇᴘʟʏ ᴡɪᴛʜ ᴛʜᴇ   ɴᴜᴍʙᴇʀ*
  *ᴛᴏ ɢᴇᴛ ᴍᴇɴᴜ*
  ┗───────────────┛  
  ┏──⟬ *ᴀʟʟ ᴍᴇɴᴜs* ⟭
  ││ᯤ   *1.* ʙᴏᴛ ᴍᴇɴᴜ
  ││ᯤ  *2.* ᴏᴡɴᴇʀ ᴍᴇɴᴜ
  ││ᯤ *3.* ɢʀᴏᴜᴘ ᴍᴇɴᴜ
  ││ᯤ  *4.* ғᴜɴ ᴍᴇɴᴜ
  ││ᯤ  *5.* ᴀɴɪᴍᴇ ᴍᴇɴᴜ
  ││ᯤ *6.* ᴅᴏᴡɴʟᴏᴀᴅᴇʀ ᴍᴇɴᴜ
  ││ᯤ  *7.* ɢᴀᴍᴇ ᴍᴇɴᴜ
  ││ᯤ  *8.* sᴛɪᴄᴋᴇʀ ᴍᴇɴᴜ
  ││ᯤ *9.* ᴀᴜᴅɪᴏ ᴍᴇɴᴜ
  ││ᯤ  *10.* ᴄᴏɴᴠᴇʀᴛᴇʀ ᴍᴇɴᴜ
  ││ᯤ  *11.* ᴛᴏᴏʟs ᴍᴇɴᴜ
  ││ᯤ  *12.* ʀᴀɴᴅᴏᴍᴇ ᴍᴇɴᴜ
  ┗───────────────┛
  ${readMore}` 
;

  
  const { result, key, timeout } = await conn.sendMessage(m.chat, { image: { url: "https://raw.githubusercontent.com/toge012345/QUEEN-ANNA/main/Assets/ANNA.jpg" }, caption: infoText.trim(),  gifPlayback: true,
  gifAttribution: 0}, { quoted: fcontact })
  
  // Save the menu options to gurumenu
  conn.gurumenu[m.sender] = {
    result,
    key,
    timeout: setTimeout(() => {
      conn.sendMessage(m.chat, {
          delete: key
      });
      delete conn.gurumenu[m.sender];
  }, 60 * 1000),
  };
  };
  
 
  handler.before = async (m, { conn }) => {
    conn.gurumenu = conn.gurumenu ? conn.gurumenu : {};
    if (m.isBaileys || !(m.sender in conn.gurumenu)) return;
    const { result, key, timeout } = conn.gurumenu[m.sender];
    if (!m.quoted || m.quoted.id !== key.id || !m.text) return;
    const choice = m.text.trim();
    
    if (choice === "1") {
        await conn.sendMessage(m.chat, { image: { url: 'https://raw.githubusercontent.com/toge012345/QUEEN-ANNA/main/Assets/ANNA.jpg' },
        caption: botmenu
      }, { quoted:fcontact });
      } else if (choice === "2") {
        await conn.sendMessage(m.chat, { image: { url: 'https://raw.githubusercontent.com/toge012345/QUEEN-ANNA/main/Assets/ANNA.jpg' },
        caption: ownermenu
      }, { quoted:fcontact });
      } else if (choice === "3") {
        await conn.sendMessage(m.chat, { image: { url: 'https://raw.githubusercontent.com/toge012345/QUEEN-ANNA/main/Assets/ANNA.jpg' },
        caption: groupmenu
      }, { quoted:fcontact });
      } else if (choice === "4") {
        await conn.sendMessage(m.chat, { image: { url: 'https://raw.githubusercontent.com/toge012345/QUEEN-ANNA/main/Assets/ANNA.jpg' },
        caption: funmenu
      }, { quoted:fcontact });
      } else if (choice === "5") {
        await conn.sendMessage(m.chat, { image: { url: 'https://raw.githubusercontent.com/toge012345/QUEEN-ANNA/main/Assets/ANNA.jpg' },
        caption: animemenu
      }, { quoted:fcontact });
      } else if (choice === "6") {
        await conn.sendMessage(m.chat, { image: { url: 'https://raw.githubusercontent.com/toge012345/QUEEN-ANNA/main/Assets/ANNA.jpg' },
        caption: downloadmenu
      }, { quoted:fcontact });
      } else if (choice === "7") {
        await conn.sendMessage(m.chat, { image: { url: 'https://raw.githubusercontent.com/toge012345/QUEEN-ANNA/main/Assets/ANNA.jpg' },
        caption: gamemenu
      }, { quoted:fcontact });
      } else if (choice === "8") {
        await conn.sendMessage(m.chat, { image: { url: 'https://raw.githubusercontent.com/toge012345/QUEEN-ANNA/main/Assets/ANNA.jpg' },
        caption: stickermenu
      }, { quoted:fcontact });
      } else if (choice === "9") {
        await conn.sendMessage(m.chat, { image: { url: 'https://raw.githubusercontent.com/toge012345/QUEEN-ANNA/main/Assets/ANNA.jpg' },
        caption: audiomenu
      }, { quoted:fcontact });
      } else if (choice === "10") {
        await conn.sendMessage(m.chat, { image: { url: 'https://raw.githubusercontent.com/toge012345/QUEEN-ANNA/main/Assets/ANNA.jpg' },
        caption: convertemenu
      }, { quoted:fcontact });
      } else if (choice === "11") {
        await conn.sendMessage(m.chat, { image: { url: 'https://raw.githubusercontent.com/toge012345/QUEEN-ANNA/main/Assets/ANNA.jpg' },
        caption: toolsmenu
      }, { quoted:fcontact });
      } else if (choice === "12") {
        await conn.sendMessage(m.chat, { image: { url: 'https://raw.githubusercontent.com/toge012345/QUEEN-ANNA/main/Assets/ANNA.jpg' },
        caption: randomemenu
      }, { quoted:fcontact });
      } else if (choice === "13") {
        await conn.sendMessage(m.chat, { image: { url: 'https://raw.githubusercontent.com/toge012345/QUEEN-ANNA/main/Assets/ANNA.jpg' },
      } else {
        m.reply('Invalid choice. Please reply with a valid number.');
      }
  
  };
  
  
  handler.help = ["play"];
  handler.tags = ["downloader"];
  handler.command = /^(menu4)$/i;
  handler.limit = true;
  export default handler;
  
  
  
  
  function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
   }
   
   const more = String.fromCharCode(8206)
   const readMore = more.repeat(4001)
   
   function clockString(ms) {
    let h = isNaN(ms) ? "--" : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? "--" : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? "--" : Math.floor(ms / 1000) % 60
    return [h, " H ", m, " M ", s, " S "].map(v => v.toString().padStart(2, 0)).join("")
   }
   
   function clockStringP(ms) {
    let ye = isNaN(ms) ? "--" : Math.floor(ms / 31104000000) % 10
    let mo = isNaN(ms) ? "--" : Math.floor(ms / 2592000000) % 12
    let d = isNaN(ms) ? "--" : Math.floor(ms / 86400000) % 30
    let h = isNaN(ms) ? "--" : Math.floor(ms / 3600000) % 24
    let m = isNaN(ms) ? "--" : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? "--" : Math.floor(ms / 1000) % 60
    return [ye, " *Years 🗓️*\n", mo, " *Month 🌙*\n", d, " *Days ☀️*\n", h, " *Hours 🕐*\n", m, " *Minute ⏰*\n", s, " *Second ⏱️*"].map(v => v.toString().padStart(2, 0)).join("")
   }
   
   function ucapan() {
    const time = moment.tz("Asia/Kolkata").format("HH")
    let res = "Good morning ☀️"
    if (time >= 4) {
     res = "Good Morning 🌄"
    }
    if (time >= 10) {
     res = "Good Afternoon ☀️"
    }
    if (time >= 15) {
     res = "Good Afternoon 🌇"
    }
    if (time >= 18) {
     res = "Good Night 🌙"
    }
    return res
   }
  
