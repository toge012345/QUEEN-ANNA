
export async function all(m) {
    if (!m.isGroup)
        return
    let chats = global.db.data.chats[m.chat]
    if (!chats.expired)
        return !0
    if (+new Date() > chats.expired) {
        await this.reply(m.chat, `🔴 Bye Bye *${this.user.name}* Will Leave The Group \n\nUour Rent Ended`)
        await this.groupLeave(m.chat)
        chats.expired = null
    }
}
