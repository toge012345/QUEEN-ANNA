let handler = async (m, { conn, usedPrefix, command }) => {
  let who = m.quoted
    ? m.quoted.sender
    : m.mentionedJid && m.mentionedJid[0]
      ? m.mentionedJid[0]
      : m.fromMe
        ? conn.user.jid
        : m.sender
  if (!(who in global.db.data.users)) throw `✳️ The user is not found in my database`

  let pp = './ANNA.jpg'
  let more = String.fromCharCode(8206)
  let readMore = more.repeat(850)

  let lkr
  switch (command) {
    case 'list':
      lkr =
        '*Get ready for the ride, here are your ticket options:*\n\n' +
        '🤖 *' +
        usedPrefix +
        "botmenu* - The Bot's secret control panel. What's your command, oh great one?\n\n" +
        '👑 *' +
        usedPrefix +
        "ownermenu* - The sacred scroll only for the chosen one. Yep, that's you, Boss!\n\n" +
        '🧑‍🤝‍🧑 *' +
        usedPrefix +
        'groupmenu* - Group shenanigans central! Unite, chat, conquer!\n\n' +
        '📥 *' +
        usedPrefix +
        "dlmenu* - 'DL' stands for 'Delicious Loot'. Come grab your goodies!\n\n" +
        '🎉 *' +
        usedPrefix +
        "funmenu* - The bot's party hat. Games, jokes and instant ROFLs. Let's get this party started!\n\n" +
        '💰 *' +
        usedPrefix +
        'economymenu* - Bling bling! Your personal vault of virtual economy. Spend or save? Choose wisely!\n\n' +
        '🎮 *' +
        usedPrefix +
        'gamemenu* - Enter the gaming arena. May the odds be ever in your favor!\n\n' +
        '🎨 *' +
        usedPrefix +
        'stickermenu* - A rainbow of stickers for your inner artist. Make your chats pop!\n\n' +
        '🧰 *' +
        usedPrefix +
        "toolmenu* - Your handy-dandy toolkit. What's your pick, genius?\n\n" +
        '🎩 *' +
        usedPrefix +
        'logomenu* - Create a logo that screams YOU. Or whispers. You choose the volume.\n\n' +
        '🌙 *' +
        usedPrefix +
        'nsfwmenu* - The After Dark menu. But remember, sharing adult secrets must be consent-based.'
      break

    case 'botmenu':
      lkr = `
╭───❮ *𝙱𝙾𝚃 𝙼𝙴𝙽𝚄* ❯    
│_${usedPrefix}gita_
│_${usedPrefix}ping_
│_${usedPrefix}uptime_
│_${usedPrefix}bot_
│_${usedPrefix}owner_
│_${usedPrefix}script_
│_${usedPrefix}runtime_
│_${usedPrefix}infobot_
│_${usedPrefix}donate_
│_${usedPrefix}groups_
│_${usedPrefix}blocklist_
│_${usedPrefix}listprem_
╰─────────────⦁` // Your bot menu message here
      break
    case 'ownermenu':
      lkr = `     
╭───❮ *𝙾𝚆𝙽𝙴𝚁 𝙼𝙴𝙽𝚄* ❯
│_${usedPrefix}banchat_
│_${usedPrefix}unbanchat_
│_${usedPrefix}banuser_
│_${usedPrefix}unbanuser_
│_${usedPrefix}Broadcast_
│_${usedPrefix}Broadcastgc_
│_${usedPrefix}join_
│_${usedPrefix}setppbot_
│_${usedPrefix}setprefix_
│_${usedPrefix}resetprefix_
│_${usedPrefix}getfile_
│_${usedPrefix}getplugin_
╰─────────────⦁` //
      break
    case 'groupmenu':
      lkr = `
╭───❮ *𝙶𝚁𝙾𝚄𝙿 𝙼𝙴𝙽𝚄* ❯
│_${usedPrefix}kick *<@tag>*_
│_${usedPrefix}promote *<@tag>*_
│_${usedPrefix}demote *<@tag>*_
│_${usedPrefix}infogroup_
│_${usedPrefix}resetlink_
│_${usedPrefix}link_
│_${usedPrefix}setpp *<image>*_
│_${usedPrefix}setname *<text>*_
│_${usedPrefix}setdesc *<text>*_
│_${usedPrefix}setwelcome *<text>*_
│_${usedPrefix}setbye *<text>*_
│_${usedPrefix}hidetag *<text/image/audio/vid>*_
│_${usedPrefix}warn *<@tag>*_
│_${usedPrefix}unwarn *<@tag>*_
│_${usedPrefix}group *<open/close>*_
│_${usedPrefix}enable
╰─────────────⦁` //
      break
    case 'downloadermenu':
    case 'dlmenu':
      lkr = `
╭───❮ *𝙳𝙻 𝙼𝙴𝙽𝚄* ❯
│_${usedPrefix}play_
│_${usedPrefix}song_
│_${usedPrefix}yta <link>_
│_${usedPrefix}ytv <link>_
│_${usedPrefix}ytmp3 <link>_
│_${usedPrefix}ytmp4 <link>_
│_${usedPrefix}gimage_
│_${usedPrefix}pinterest_
│_${usedPrefix}mediafire <link>_
│_${usedPrefix}gdrive <link>_
│_${usedPrefix}gitclone <link>_
│_${usedPrefix}twitter <link>_
│_${usedPrefix}tiktok <link>_
│_${usedPrefix}tiktokstalk_
│_${usedPrefix}instagram <link>_
│_${usedPrefix}spotify_
│_${usedPrefix}facebook <link>_
╰─────────────⦁` //
      break
    case 'economymenu':
      lkr = `
╭───❮ *𝙴𝙲𝙾𝙽𝙾𝙼𝚈 𝙼𝙴𝙽𝚄* ❯
│_${usedPrefix}claim/daily_
│_${usedPrefix}weekly_
│_${usedPrefix}monthly_
│_${usedPrefix}leaderboard_
│_${usedPrefix}bet_
│_${usedPrefix}heal_
│_${usedPrefix}craft_
│_${usedPrefix}balance_
│_${usedPrefix}shop_
│_${usedPrefix}sell_
│_${usedPrefix}adventure_
│_${usedPrefix}opencrate_
│_${usedPrefix}mine_
│_${usedPrefix}work_
│_${usedPrefix}transfer_
│_${usedPrefix}todiamond_
│_${usedPrefix}tomoney_
╰─────────────⦁` //
      break
    case 'funmenu':
      lkr = `
╭───❮ *𝙵𝚄𝙽 𝙼𝙴𝙽𝚄* ❯
│_${usedPrefix}character_
│_${usedPrefix}truth_
│_${usedPrefix}dare_
│_${usedPrefix}flirt_
│_${usedPrefix}gay_
│_${usedPrefix}shayeri_
│_${usedPrefix}ship_
│_${usedPrefix}waste_
│_${usedPrefix}simpcard_
│_${usedPrefix}hornycard_
│_${usedPrefix}ytcomment_
│_${usedPrefix}stupid_
│_${usedPrefix}lolicon_
╰─────────────⦁` //
      break
    case 'animemenu':
      lkr = `
╭───❮ *𝙰𝙽𝙸𝙼𝙴 𝙼𝙴𝙽𝚄* ❯
│_${usedPrefix}waifu_
│_${usedPrefix}neko_
│_${usedPrefix}loli_
│_${usedPrefix}couplepp_
│_${usedPrefix}toanime_
│_${usedPrefix}naruto_
│_${usedPrefix}itachi_
│_${usedPrefix}akira_
│_${usedPrefix}asuna_
│_${usedPrefix}akiyama_
│_${usedPrefix}boruto_
│_${usedPrefix}hornycard_
│_${usedPrefix}ayuzawa_
│_${usedPrefix}anna_
│_${usedPrefix}chiho_
│_${usedPrefix}chitoge_
│_${usedPrefix}deidara_
│_${usedPrefix}erza_
│_${usedPrefix}elaina_
│_${usedPrefix}emilia_
│_${usedPrefix}hestia_
│_${usedPrefix}hinata_
│_${usedPrefix}inori_
│_${usedPrefix}isuzu_
│_${usedPrefix}kagura_
│_${usedPrefix}kaori_
│_${usedPrefix}keneki_
│_${usedPrefix}kurumi_
│_${usedPrefix}madara_
│_${usedPrefix}mikasa_
│_${usedPrefix}miku_
│_${usedPrefix}minato_
│_${usedPrefix}nezuko_
│_${usedPrefix}sagiri_
│_${usedPrefix}sasuke_
│_${usedPrefix}sakura_
│_${usedPrefix}kotori_
╰─────────────⦁`
      break
    case 'gamemenu':
      lkr = `
╭───❮ *𝙶𝙰𝙼𝙴 𝙼𝙴𝙽𝚄* ❯
│_${usedPrefix}tictactoe_
│_${usedPrefix}delttt_
│_${usedPrefix}math_
│_${usedPrefix}math answer_
│_${usedPrefix}ppt_
│_${usedPrefix}slot_
│_${usedPrefix}casino_
│_${usedPrefix}yourmom_
│_${usedPrefix}teri mummy_
╰─────────────⦁` //
      break
    case 'stickermenu':
      lkr = `
╭───❮ *𝚂𝚃𝙸𝙲𝙺𝙴𝚁 𝙼𝙴𝙽𝚄* ❯
│_${usedPrefix}sticker_
│_${usedPrefix}take_
│_${usedPrefix}scircle_
│_${usedPrefix}smaker_
│_${usedPrefix}sremovebg_
│_${usedPrefix}getsticker_
│_${usedPrefix}emojimix_
│_${usedPrefix}toimg_
│_${usedPrefix}tovid_
│_${usedPrefix}ttp_
│_${usedPrefix}telesticker_
│_${usedPrefix}attp_
│_${usedPrefix}attp2_
│_${usedPrefix}attp3_
╰─────────────⦁`
      break
    case 'toolmenu':
      lkr = `
╭───❮ *𝚃𝙾𝙾𝙻𝚂 𝙼𝙴𝙽𝚄* ❯
│_${usedPrefix}autosticker_
│_${usedPrefix}pdf_
│_${usedPrefix}whatmusic_
│_${usedPrefix}calc_
│_${usedPrefix}google_
│_${usedPrefix}lyrics_
│_${usedPrefix}readmore_
│_${usedPrefix}ssweb_
│_${usedPrefix}tts_
│_${usedPrefix}translate_
│_${usedPrefix}tourl_
│_${usedPrefix}wikipedia_
│_${usedPrefix}nowa_
│_${usedPrefix}qrmaker_
│_${usedPrefix}readqr_
│_${usedPrefix}fancy_
│_${usedPrefix}weather_
│_${usedPrefix}siri_
│_${usedPrefix}alexa_
│_${usedPrefix}dalle_
│_${usedPrefix}tocartoon_
│_${usedPrefix}quote_
│_${usedPrefix}technews_
│_${usedPrefix}define_
│_${usedPrefix}pokedex_
│_${usedPrefix}removebg_
│_${usedPrefix}apk_
│_${usedPrefix}tinyurl/shorturl_
│_${usedPrefix}readvo_
│_${usedPrefix}true_
╰─────────────⦁` //
      break
    case 'nsfwmenu': 
      lkr = `
  ✦ ───『 *nsfw* 』─── ⚝
  ◈ .genshin
  ◈ .swimsuit
  ◈ .schoolswimsuit
  ◈ .white
  ◈ .barefoot
  ◈ .touhou
  ◈ .gamecg
  ◈ .hololive
  ◈ .uncensored
  ◈ .sunglasses
  ◈ .glasses
  ◈ .weapon
  ◈ .shirtlift
  ◈ .chain
  ◈ .fingering
  ◈ .flatchest
  ◈ .torncloth
  ◈ .bondage
  ◈ .demon
  ◈ .wet
  ◈ .pantypull
  ◈ .headdress
  ◈ .headphone
  ◈ .tie
  ◈ .anusview
  ◈ .shorts
  ◈ .stokings
  ◈ .topless
  ◈ .beach
  ◈ .bunnygirl
  ◈ .bunnyear
  ◈ .idol
  ◈ .vampire
  ◈ .gun
  ◈ .maid
  ◈ .bra
  ◈ .nobra
  ◈ .bikini
  ◈ .whitehair
  ◈ .blonde
  ◈ .pinkhair
  ◈ .bed
  ◈ .ponytail
  ◈ .nude
  ◈ .dress
  ◈ .underwear
  ◈ .foxgirl
  ◈ .uniform
  ◈ .skirt
  ◈ .sex
  ◈ .sex2
  ◈ .sex3
  ◈ .breast
  ◈ .twintail
  ◈ .spreadpussy
  ◈ .tears
  ◈ .seethrough
  ◈ .breasthold
  ◈ .drunk
  ◈ .fateseries
  ◈ .spreadlegs
  ◈ .openshirt
  ◈ .headband
  ◈ .food
  ◈ .close
  ◈ .tree
  ◈ .nipples
  ◈ .erectnipples
  ◈ .horns
  ◈ .greenhair
  ◈ .wolfgirl
  ◈ .catgirl
  ◈ .nsfw
  ◈ .ass
  ◈ .boobs
  ◈ .lesbian
  ◈ .pussy
  ◈ .pack
  ◈ .xvid
  ◈ .xnxx
  ╰──────────⳹` //
      break
    case 'logomenu':
      lkr = `
  ✦ ───『 *maker* 』─── ⚝
  ◈ .blur
  ◈ .difuminar2
  ◈ .hornycard
  ◈ .hornylicense
  ◈ .gfx1
  ◈ .gfx2
  ◈ .gfx3
  ◈ .gfx4
  ◈ .gfx5
  ◈ .gfx6
  ◈ .gfx7
  ◈ .gfx8
  ◈ .gfx9
  ◈ .gfx10
  ◈ .gfx11
  ◈ .gfx12
  ◈ .simpcard
  ◈ .itssostupid
  ◈ .iss
  ◈ .stupid
  ◈ .tweet <comment>
  ◈ .lolicon
  ◈ .ytcomment <comment>
  ╰──────────` //
      break
    default:
      lkr = `Invalid command. Type ${usedPrefix}list to see available options.`
  }

  conn.sendFile(m.chat, pp, 'perfil.jpg', lkr, m, false, { mentions: [who] })

  let done = '👍'
  m.react(done)
}

handler.help = [
  'list',
  'botmenu',
  'ownermenu',
  'groupmenu',
  'dlmenu',
  'downloadermenu',
  'economymenu',
  'funmenu',
  'gamemenu',
  'stickermenu',
  'nsfwmenu',
  'logomenu',
  'toolmenu',
]
handler.tags = ['main']
handler.command = [
  'list',
  'botmenu',
  'ownermenu',
  'groupmenu',
  'dlmenu',
  'downloadermenu',
  'economymenu',
  'funmenu',
  'gamemenu',
  'stickermenu',
  'nsfwmenu',
  'logomenu',
  'toolmenu',
]

export default handler
