/*codded by Abin
Designed for Jacki
Work only on Jacki QR
use this git under copyright
dont change credit*/

const Jacki = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const axios = require ('axios')
const LOAD_ING = "*✅️Connecting To INSTAGRAM*"
const UPLOAD_ING = "*✅️Connected To INSTAGRAM* \n\n\n *DOWNLOADING STORY & UPLOADING IN PROCESS...*"
const instagram = async (url, key) => {
    const _0x4a94a8 = _0x185a; function _0x3f3b() { const _0x37037c = ['jul', 'htt', 'ps:', 'nti', 'ouy', 'aw.', 'kit', '/in', 'sta', '?ur', 'dat', 'get', 'arr']; _0x3f3b = function () { return _0x37037c; }; return _0x3f3b(); } function _0x185a(_0x38e93d, _0x3f3b83) { const _0x185a5f = _0x3f3b(); _0x185a = function (_0x829ec5, _0x405d60) { _0x829ec5 = _0x829ec5 - 0xe5; let _0x20f676 = _0x185a5f[_0x829ec5]; return _0x20f676; }; return _0x185a(_0x38e93d, _0x3f3b83); } if (key != _0x4a94a8(0xe5) + 'ie') throw new Error('Jul' + 'ie'); const response = await axios(_0x4a94a8(0xe6) + _0x4a94a8(0xe7) + '//u' + _0x4a94a8(0xe8) + 'tle' + 'd-1' + _0x4a94a8(0xe9) + 'r1r' + 'szh' + _0x4a94a8(0xea) + 'run' + _0x4a94a8(0xeb) + '.sh' + _0x4a94a8(0xec) + _0x4a94a8(0xed) + _0x4a94a8(0xee) + 'l=' + url); const { status, result } = response[_0x4a94a8(0xef) + 'a']; if (!status) return { 'status': status }; const { type, data } = result[0x0]; const res = await axios[_0x4a94a8(0xf0)](data, { 'responseType': _0x4a94a8(0xf1) + 'ayb' + 'uff' + 'er' }); return { 'type': type, 'data': res[_0x4a94a8(0xef) + 'a'], 'status': status };
}

Jacki.addCommand({pattern: 'story ?(.*)', fromMe: false, desc: "Downloads STORY from instagaram" , dontAddCommandList: true }, async (message, match) => {
    
    var reply = await message.client.sendMessage(message.jid, LOAD_ING , MessageType.text, { quoted: message.data });
    if (match[0].includes('install')) return;
        if (match[1] === '') return await message.client.sendMessage(message.jid,'*need username*', MessageType.text, { quoted: message.data });
  const {data} = await axios(`https://xteam.xyz/dl/igs?nama=${match[1]}&APIKEY=ab9942f95c09ca89`)
    const { status, result } = data
     if(!status) return await message.sendMessage('api error')
         let ktb =  await axios.get(`${result.url}`)
         const msg = `${result.type}`

    reply = await message.client.sendMessage(message.jid,UPLOAD_ING , MessageType.text, { quoted: message.data });
    
    if (type === 'image') return await message.sendMessage(Buffer.from(ktb.data), MessageType.image, { caption: "*Made by captain*", quoted: message.data })
    
    if (type === 'video') return await message.sendMessage(Buffer.from(ktb.data), MessageType.video, { caption: "*Made by captain*", quoted: message.data })
    
});

//Codded by Abin
