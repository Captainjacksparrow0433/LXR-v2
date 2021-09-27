const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();
    
    
   
  r_text[0] = "https://www.linkpicture.com/q/20210926_184641.jpg";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `*creater Abin🤗*
*owner number wa.me/919061103727*

*Bot making video : https://youtu.be/2tek7Y5CEF4*

*githublink : https://github.com/Captainjacksparrow0433/LXR-v2*

*audio commads : https://github.com/cyberchekuthan/Amalser_v2/tree/master/uploads*
`}) 

}));
