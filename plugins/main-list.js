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
│ _${usedPrefix}gita_
│ _${usedPrefix}ping_
│ _${usedPrefix}uptime_
│ _${usedPrefix}bot_
│ _${usedPrefix}owner_
│ _${usedPrefix}script_
│ _${usedPrefix}runtime_
│ _${usedPrefix}infobot_
│ _${usedPrefix}donate_
│ _${usedPrefix}groups_
│ _${usedPrefix}blocklist_
│ _${usedPrefix}listprem_
╰─────────────⦁` // Your bot menu message here
      break
    case 'ownermenu':
      lkr = `     
╭───❮ *𝙾𝚆𝙽𝙴𝚁 𝙼𝙴𝙽𝚄* ❯
│ _${usedPrefix}banchat_
│ _${usedPrefix}unbanchat_
│ _${usedPrefix}banuser_
│ _${usedPrefix}unbanuser_
│ _${usedPrefix}Broadcast_
│ _${usedPrefix}Broadcastgc_
│ _${usedPrefix}join_
│ _${usedPrefix}setppbot_
│ _${usedPrefix}setprefix_
│ _${usedPrefix}resetprefix_
│ _${usedPrefix}getfile_
│ _${usedPrefix}getplugin_
╰─────────────⦁` //
      break
    case 'groupmenu':
      lkr = `
╭───❮ *𝙶𝚁𝙾𝚄𝙿 𝙼𝙴𝙽𝚄* ❯
│ _${usedPrefix}kick *<@tag>*_
│ _${usedPrefix}promote *<@tag>*_
│ _${usedPrefix}demote *<@tag>*_
│ _${usedPrefix}infogroup_
│ _${usedPrefix}resetlink_
│ _${usedPrefix}link_
│ _${usedPrefix}setpp *<image>*_
│ _${usedPrefix}setname *<text>*_
│ _${usedPrefix}setdesc *<text>*_
│ _${usedPrefix}setwelcome *<text>*_
│ _${usedPrefix}setbye *<text>*_
│ _${usedPrefix}hidetag *<text/image/audio/vid>*_
│ _${usedPrefix}warn *<@tag>*_
│ _${usedPrefix}unwarn *<@tag>*_
│ _${usedPrefix}group *<open/close>*_
│ _${usedPrefix}enable
╰─────────────⦁` //
      break
    case 'downloadermenu':
    case 'dlmenu':
      lkr = `
╭───❮ *𝙳𝙻 𝙼𝙴𝙽𝚄* ❯
│ _${usedPrefix}play_
│ _${usedPrefix}song_
│ _${usedPrefix}yta <link>_
│ _${usedPrefix}ytv <link>_
│ _${usedPrefix}ytmp3 <link>_
│ _${usedPrefix}ytmp4 <link>_
│ _${usedPrefix}gimage_
│ _${usedPrefix}pinterest_
│ _${usedPrefix}mediafire <link>_
│ _${usedPrefix}gdrive <link>_
│ _${usedPrefix}gitclone <link>_
│ _${usedPrefix}twitter <link>_
│ _${usedPrefix}tiktok <link>_
│ _${usedPrefix}tiktokstalk_
│ _${usedPrefix}instagram <link>_
│ _${usedPrefix}spotify_
│ _${usedPrefix}facebook <link>_
╰─────────────⦁` //
      break
    case 'economymenu':
      lkr = `
╭───❮ *𝙴𝙲𝙾𝙽𝙾𝙼𝚈 𝙼𝙴𝙽𝚄* ❯
│ _${usedPrefix}claim/daily_
│ _${usedPrefix}weekly_
│ _${usedPrefix}monthly_
│ _${usedPrefix}leaderboard_
│ _${usedPrefix}bet_
│ _${usedPrefix}heal_
│ _${usedPrefix}craft_
│ _${usedPrefix}balance_
│ _${usedPrefix}shop_
│ _${usedPrefix}sell_
│ _${usedPrefix}adventure_
│ _${usedPrefix}opencrate_
│ _${usedPrefix}mine_
│ _${usedPrefix}work_
│ _${usedPrefix}transfer_
│ _${usedPrefix}todiamond_
│ _${usedPrefix}tomoney_
╰─────────────⦁` //
      break
    case 'funmenu':
      lkr = `
╭───❮ *𝙵𝚄𝙽 𝙼𝙴𝙽𝚄* ❯
│ _${usedPrefix}character_
│ _${usedPrefix}truth_
│ _${usedPrefix}dare_
│ _${usedPrefix}flirt_
│ _${usedPrefix}gay_
│ _${usedPrefix}shayeri_
│ _${usedPrefix}ship_
│ _${usedPrefix}waste_
│ _${usedPrefix}simpcard_
│ _${usedPrefix}hornycard_
│ _${usedPrefix}ytcomment_
│ _${usedPrefix}stupid_
│ _${usedPrefix}lolicon_
╰─────────────⦁` //
      break
    case 'animemenu':
      lkr = `
╭───❮ *𝙰𝙽𝙸𝙼𝙴 𝙼𝙴𝙽𝚄* ❯
│ _${usedPrefix}waifu_
│ _${usedPrefix}neko_
│ _${usedPrefix}loli_
│ _${usedPrefix}couplepp_
│ _${usedPrefix}toanime_
│ _${usedPrefix}naruto_
│ _${usedPrefix}itachi_
│ _${usedPrefix}akira_
│ _${usedPrefix}asuna_
│ _${usedPrefix}akiyama_
│ _${usedPrefix}boruto_
│ _${usedPrefix}hornycard_
│ _${usedPrefix}ayuzawa_
│ _${usedPrefix}anna_
│ _${usedPrefix}chiho_
│ _${usedPrefix}chitoge_
│ _${usedPrefix}deidara_
│ _${usedPrefix}erza_
│ _${usedPrefix}elaina_
│ _${usedPrefix}emilia_
│ _${usedPrefix}hestia_
│ _${usedPrefix}hinata_
│ _${usedPrefix}inori_
│ _${usedPrefix}isuzu_
│ _${usedPrefix}kagura_
│ _${usedPrefix}kaori_
│ _${usedPrefix}keneki_
│ _${usedPrefix}kurumi_
│ _${usedPrefix}madara_
│ _${usedPrefix}mikasa_
│ _${usedPrefix}miku_
│ _${usedPrefix}minato_
│ _${usedPrefix}nezuko_
│ _${usedPrefix}sagiri_
│ _${usedPrefix}sasuke_
│ _${usedPrefix}sakura_
│ _${usedPrefix}kotori_
╰─────────────⦁`
      break
    case 'gamemenu':
      lkr = `
╭───❮ *𝙶𝙰𝙼𝙴 𝙼𝙴𝙽𝚄* ❯
│ _${usedPrefix}tictactoe_
│ _${usedPrefix}delttt_
│ _${usedPrefix}math_
│ _${usedPrefix}math answer_
│ _${usedPrefix}ppt_
│ _${usedPrefix}slot_
│ _${usedPrefix}casino_
│ _${usedPrefix}yourmom_
│ _${usedPrefix}teri mummy_
╰─────────────⦁` //
      break
    case 'stickermenu':
      lkr = `
╭───❮ *𝚂𝚃𝙸𝙲𝙺𝙴𝚁 𝙼𝙴𝙽𝚄* ❯
│ _${usedPrefix}sticker_
│ _${usedPrefix}take_
│ _${usedPrefix}scircle_
│ _${usedPrefix}smaker_
│ _${usedPrefix}sremovebg_
│ _${usedPrefix}getsticker_
│ _${usedPrefix}emojimix_
│ _${usedPrefix}toimg_
│ _${usedPrefix}tovid_
│ _${usedPrefix}ttp_
│ _${usedPrefix}telesticker_
│ _${usedPrefix}attp_
│ _${usedPrefix}attp2_
│ _${usedPrefix}attp3_
╰─────────────⦁`
      break
    case 'toolmenu':
      lkr =. ` 
╭───❮ *𝚃𝙾𝙾𝙻𝚂 𝙼𝙴𝙽𝚄* ❯
│ _${usedPrefix}autosticker_
│ _${usedPrefix}pdf_
│ _${usedPrefix}whatmusic_
│ _${usedPrefix}tempmail_
│ _${usedPrefix}checkmail_
│ _${usedPrefix}pokedex_
│ _${usedPrefix}calc_
│ _${usedPrefix}google_
│ _${usedPrefix}lyrics_
│ _${usedPrefix}readmore_
│ _${usedPrefix}ssweb_
│ _${usedPrefix}tts_
│ _${usedPrefix}trt_
│ _${usedPrefix}wiki_
│ _${usedPrefix}nowa_
│ _${usedPrefix}qrmaker_
│ _${usedPrefix}true_
│ _${usedPrefix}fancy_
│ _${usedPrefix}weather_
│ _${usedPrefix}alexa_
│ _${usedPrefix}itunes_
│ _${usedPrefix}technews_
╰─────────────⦁` //
      break
    case 'nsfwmenu': 
      lkr = `
╭───❮ *𝙽𝚂𝙵𝚆* ❯
│ _${usedPrefix}genshin_
│ _${usedPrefix}swimsuit_
│ _${usedPrefix}schoolswimsuit_
│ _${usedPrefix}white_
│ _${usedPrefix}barefoot_
│ _${usedPrefix}touhou_
│ _${usedPrefix}gamecg_
│ _${usedPrefix}hololive_
│ _${usedPrefix}uncensored_
│ _${usedPrefix}sunglasses_
│ _${usedPrefix}glasses_
│ _${usedPrefix}weapon_
│ _${usedPrefix}shirtlift_
│ _${usedPrefix}chain_
│ _${usedPrefix}fingering_
│ _${usedPrefix}flatchest_
│ _${usedPrefix}torncloth_
│ _${usedPrefix}bondage_
│ _${usedPrefix}demon_
│ _${usedPrefix}wet_
│ _${usedPrefix}pantypull_
│ _${usedPrefix}headdress_
│ _${usedPrefix}headphone_
│ _${usedPrefix}tie_
│ _${usedPrefix}anusview_
│ _${usedPrefix}shorts_
│ _${usedPrefix}stokings_
│ _${usedPrefix}topless_
│ _${usedPrefix}beach_
│ _${usedPrefix}bunnygirl_
│ _${usedPrefix}bunnyear_
│ _${usedPrefix}idol_
│ _${usedPrefix}vampire_
│ _${usedPrefix}gun_
│ _${usedPrefix}maid_
│ _${usedPrefix}bra_
│ _${usedPrefix}nobra_
│ _${usedPrefix}bikini_
│ _${usedPrefix}whitehair_
│ _${usedPrefix}blonde_
│ _${usedPrefix}pinkhair_
│ _${usedPrefix}bed_
│ _${usedPrefix}ponytail_
│ _${usedPrefix}nude_
│ _${usedPrefix}dress_
│ _${usedPrefix}underwear_
│ _${usedPrefix}foxgirl_
│ _${usedPrefix}uniform_
│ _${usedPrefix}skirt_
│ _${usedPrefix}sex_
│ _${usedPrefix}sex2_
│ _${usedPrefix}sex3_
│ _${usedPrefix}breast_
│ _${usedPrefix}twintail_
│ _${usedPrefix}spreadpussy_
│ _${usedPrefix}tears_
│ _${usedPrefix}seethrough_
│ _${usedPrefix}breasthold_
│ _${usedPrefix}drunk_
│ _${usedPrefix}fateseries_
│ _${usedPrefix}spreadlegs_
│ _${usedPrefix}openshirt_
│ _${usedPrefix}headband
│ _${usedPrefix}food_
│ _${usedPrefix}close_
│ _${usedPrefix}tree_
│ _${usedPrefix}nipples_
│ _${usedPrefix}erectnipples_
│ _${usedPrefix}horns_
│ _${usedPrefix}greenhair_
│ _${usedPrefix}wolfgirl_
│ _${usedPrefix}catgirl_
│ _${usedPrefix}nsfw_
│ _${usedPrefix}ass_
│ _${usedPrefix}boobs_
│ _${usedPrefix}lesbian_
│ _${usedPrefix}pussy_
│ _${usedPrefix}pack_
│ _${usedPrefix}xvid_
│ _${usedPrefix}xnxx_
╰─────────────⦁` //
      break
    case 'logomenu':
      lkr = `
╭───❮ *𝙼𝙰𝚁𝙺𝙴𝚁* ❯
│ _${usedPrefix}blur_
│ _${usedPrefix}difuminar2_
│ _${usedPrefix}hornycard_
│ _${usedPrefix}hornylicense_
│ _${usedPrefix}gfx1_
│ _${usedPrefix}gfx2_
│ _${usedPrefix}gfx3_
│ _${usedPrefix}gfx4_
│ _${usedPrefix}gfx5_
│ _${usedPrefix}gfx6_
│ _${usedPrefix}gfx7_
│ _${usedPrefix}gfx8_
│ _${usedPrefix}gfx9_
│ _${usedPrefix}gfx10_
│ _${usedPrefix}gfx11_
│ _${usedPrefix}gfx12_
│ _${usedPrefix}simpcard_
│ _${usedPrefix}itssostupid_
│ _${usedPrefix}iss_
│ _${usedPrefix}stupid_
│ _${usedPrefix}tweet <comment>_
│ _${usedPrefix}lolicon_
│ _${usedPrefix}ytcomment <comment>
╰─────────────⦁` //
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
