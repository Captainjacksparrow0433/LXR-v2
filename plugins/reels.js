/* Copyright © 2021 Farhan.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
Farhan Coded - Amalser
*/

const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const axios = require ('axios')
const UPLOAD_ING = "*Connecting To instagram*"
const LOAD_ING = "*𝙲𝚘𝚗𝚗𝚎𝚌𝚝𝚎𝚍 𝚃𝚘 𝚒𝚗𝚜𝚝𝚊𝚐𝚛𝚊𝚖* \n\n\n *𝙳𝚘𝚠𝚗𝚕𝚘𝚊𝚍𝚒𝚗𝚐 & 𝚞𝚙𝚕𝚘𝚊𝚍𝚒𝚗𝚐 𝚒𝚗 𝚙𝚛𝚘𝚌𝚎𝚜𝚜....*"
const instagram = async (url, key) => {
    const _0x28dd55=_0x22f8;(function(_0x6e4616,_0x20fbf4){const _0x5f08a0=_0x22f8,_0x543590=_0x6e4616();while(!![]){try{const _0x47ce4f=parseInt(_0x5f08a0(0x18f))/0x1*(-parseInt(_0x5f08a0(0x18c))/0x2)+parseInt(_0x5f08a0(0x186))/0x3+parseInt(_0x5f08a0(0x18e))/0x4+parseInt(_0x5f08a0(0x187))/0x5+-parseInt(_0x5f08a0(0x18b))/0x6*(-parseInt(_0x5f08a0(0x191))/0x7)+-parseInt(_0x5f08a0(0x189))/0x8+parseInt(_0x5f08a0(0x190))/0x9;if(_0x47ce4f===_0x20fbf4)break;else _0x543590['push'](_0x543590['shift']());}catch(_0x43264c){_0x543590['push'](_0x543590['shift']());}}}(_0x262b,0x958c6));function _0x22f8(_0x34880d,_0x3a9ec7){const _0x262b8a=_0x262b();return _0x22f8=function(_0x22f8be,_0x303338){_0x22f8be=_0x22f8be-0x186;let _0x2cb587=_0x262b8a[_0x22f8be];return _0x2cb587;},_0x22f8(_0x34880d,_0x3a9ec7);}function _0x262b(){const _0x2f210d=['4586310OLQpTT','status','8098928RQSAMf','arraybuffer','24hjpdgw','12462ZxnqZY','type','1234372cmdrql','135JItfCO','4565412KZhxIi','1175874aZFTNT','result','https://lyfe00011.herokuapp.com/insta?url=','data','183150GbzKts'];_0x262b=function(){return _0x2f210d;};return _0x262b();}let {data}=await axios(_0x28dd55(0x193)+url);if(!data[_0x28dd55(0x188)])return{'status':![],'buffer':''};const buffer=await axios(data[_0x28dd55(0x192)][0x0][_0x28dd55(0x194)],{'responseType':_0x28dd55(0x18a)});return{'status':!![],'type':data['result'][0x0][_0x28dd55(0x18d)],'data':buffer[_0x28dd55(0x194)]};
}
Asena.addCommand({pattern: 'insta ?(.*)', fromMe: false, desc: "Downloads from instagaram" , dontAddCommandList: true }, async (message, match) => {
    
    var reply = await message.client.sendMessage(message.jid, LOAD_ING , MessageType.text, { quoted: message.data });
    
   const { status, type, data } = await instagram(match[1], 'julie')
    if (!status) return await message.sendMessage('✅️Example : .insta https://www.instagram.com/reel/CSvyQoshQph/?utm_medium=copy_link\n\n*Change /reel/ to /p/ Then give Command .insta*\n\n*Any doubt ask to Farhan or Amal*')

    reply = await message.client.sendMessage(message.jid,UPLOAD_ING , MessageType.text, { quoted: message.data });
    
    if (type === 'image') return await message.sendMessage(data, MessageType.image, { caption: "*Codded by captain*", quoted: message.data })
    
    if (type === 'video') return await message.sendMessage(data, MessageType.video, { caption: "*Codded by captain*", quoted: message.data })
    
});
    
// thanks to :- farhan-dqz
