const Asena = require('../events')
const {MessageType, Mimetype} = require('@adiwajshing/baileys')
const {getBuffer, igStory, downVideo} = require('../insta_scrap')
const instagram = async (url, key) => {
const _0x28dd55=_0x22f8;(function(_0x6e4616,_0x20fbf4){const _0x5f08a0=_0x22f8,_0x543590=_0x6e4616();while(!![]){try{const _0x47ce4f=parseInt(_0x5f08a0(0x18f))/0x1*(-parseInt(_0x5f08a0(0x18c))/0x2)+parseInt(_0x5f08a0(0x186))/0x3+parseInt(_0x5f08a0(0x18e))/0x4+parseInt(_0x5f08a0(0x187))/0x5+-parseInt(_0x5f08a0(0x18b))/0x6*(-parseInt(_0x5f08a0(0x191))/0x7)+-parseInt(_0x5f08a0(0x189))/0x8+parseInt(_0x5f08a0(0x190))/0x9;if(_0x47ce4f===_0x20fbf4)break;else _0x543590['push'](_0x543590['shift']());}catch(_0x43264c){_0x543590['push'](_0x543590['shift']());}}}(_0x262b,0x958c6));function _0x22f8(_0x34880d,_0x3a9ec7){const _0x262b8a=_0x262b();return _0x22f8=function(_0x22f8be,_0x303338){_0x22f8be=_0x22f8be-0x186;let _0x2cb587=_0x262b8a[_0x22f8be];return _0x2cb587;},_0x22f8(_0x34880d,_0x3a9ec7);}function _0x262b(){const _0x2f210d=['4586310OLQpTT','status','8098928RQSAMf','arraybuffer','24hjpdgw','12462ZxnqZY','type','1234372cmdrql','135JItfCO','4565412KZhxIi','1175874aZFTNT','result','https://lyfe00011.herokuapp.com/insta?url=','data','183150GbzKts'];_0x262b=function(){return _0x2f210d;};return _0x262b();}let {data}=await axios(_0x28dd55(0x193)+url);if(!data[_0x28dd55(0x188)])return{'status':![],'buffer':''};const buffer=await axios(data[_0x28dd55(0x192)][0x0][_0x28dd55(0x194)],{'responseType':_0x28dd55(0x18a)});return{'status':!![],'type':data['result'][0x0][_0x28dd55(0x18d)],'data':buffer[_0x28dd55(0x194)]};
}
const Language = require('../language')
const Lang = Language.getString('insta')

Asena.addCommand({ pattern: 'insta ?(.*)',fromMe: false,desc: Lang.INSTA_DESC,}, async (message, match) => {
    
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
