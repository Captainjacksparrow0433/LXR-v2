const Asena = require("../Utilis/events")
const { MessageType, Mimetype } = require("@adiwajshing/baileys")
const { getBuffer, igStory, downVideo } = require("../Utilis/download")
const { instagram } = require("../Utilis/Misc")
const Language = require("../language")
const Lang = Language.getString("insta")

Asena.addCommand({ pattern: "insta ?(.*)",fromMe: false,desc: Lang.INSTA_DESC,}, async (message, match) => {
    
    match = match || message.reply_message.text
    if (!match || !/instagram.com/.test(match))
      return await message.sendMessage(Lang.NEED_REPLY)
    await message.sendMessage(Lang.DOWNLOADING)
    const urls = await instagram(match)
    if (!urls) return await message.sendMessage(Lang.NOT_FOUND)
    urls.forEach(async (url) => {
      let { buffer, type } = await getBuffer(url)
      if (!buffer) await message.sendMessage(url)
      else if (type == "image")
        await message.sendMessage(
          buffer,
          { mimetype: Mimetype.jpeg },
          MessageType.image
        )
      else
        await message.sendMessage(
          buffer,
          { mimetype: Mimetype.mp4 },
          MessageType.video
        )
    })
  }
)

Asena.addCommand({ pattern: "story ?(.*)", fromMe: true, desc: Lang.STORY_DESC },async (message, match) => {

    match = !message.reply_message ? match : message.reply_message.text
    if (
      match === "" ||
      (!match.includes("/stories/") && match.startsWith("http"))
    )
      return await message.sendMessage(Lang.USERNAME)
    if (match.includes("/stories/")) {
      let s = match.indexOf("/stories/") + 9
      let e = match.lastIndexOf("/")
      match = match.substring(s, e)
    }
    let json = await igStory(match)
    if (json.error) return await message.sendMessage(json.error)
    if (json.medias.length > 0) {
      await message.sendMessage(
        Lang.DOWNLOADING_STORY.format(json.medias.length)
      )
      for (let media of json.medias) {
        let { buffer, type } = await getBuffer(media.url)
        if (type == "video")
          await message.sendMessage(
            buffer,
            { mimetype: Mimetype.mp4 },
            MessageType.video
          )
        else if (type == "image")
          await message.sendMessage(
            buffer,
            { mimetype: Mimetype.jpeg },
            MessageType.image
          )
      }
    }
  }
)
