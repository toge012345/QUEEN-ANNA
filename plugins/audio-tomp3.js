import { toAudio } from '../lib/converter.js'

let handler = async (m, { conn, usedPrefix, command }) => {
    let q = m.quoted ? m.quoted : m
   /* let mime = (m.quoted ? m.quoted : m.msg).mimetype || ''
    if (!/video|audio/.test(mime)) throw `✳️ Reply to the video or voice note you want to convert to mp3 with the command :\n\n*${usedPrefix + command}*`*/
    let media = await q.download?.()
    if (!media) throw '❎ Failed To Download Media'
    let audio = await toAudio(media, 'mp4')
    if (!audio.data) throw '❎ Error Converting'
    conn.sendFile(m.chat, audio.data, 'audio.mp3', '', m, null, { mimetype: 'audio/mp4' })
}
handler.help = ['mp3']
handler.tags = ['fun']
handler.command = /^mp3|tomp3?)$/i

export default handler
