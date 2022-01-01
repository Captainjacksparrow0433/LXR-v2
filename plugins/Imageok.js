const Asena = require('../events');
const { getBuffer } = require('get-buffer');
const { ePhotoDownload } = require('download');
const thiccysapi = require('textmaker-thiccy'); // Import NPM Package

const {MessageType, GroupSettingChange, Mimetype, MessageOptions} = require('@adiwajshing/baileys');
const fs = require('fs');
const Config = require('../config')
const axios = require('axios')
const request = require('request');
const os = require('os');
var clh = { cd: 'L3Jvb3QvV2hhdHNBc2VuYUR1cGxpY2F0ZWQv', pay: '' }    
var ggg = Buffer.from(clh.cd, 'base64')
var ddd = ggg.toString('utf-8')
clh.pay = ddd

  let wk = Config.WORKTYPE == 'public' ? false : true

Asena.addCommand({pattern: 'bear ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.textpro("https://en.ephoto360.com/write-text-on-wet-glass-online-589.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/bear.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/bear.jpg'), MessageType.image, { caption: Config.AFN })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
   
   Asena.addCommand({ pattern: 'minion ?(.*)', fromMe: true, desc: "Funny minions text effect" }, async (message, match) => {
        if (match == '') return await message.sendMessage("Give me text")
        const effect_url = "https://en.ephoto360.com/funny-minion-text-effect-online-544.html"
        const {status, url} = await ePhotoDownload(effect_url, match)
        if(!status)return
        const { buffer } = await getBuffer(url)
        if (buffer !== false) return await message.sendMessage(buffer, {}, MessageType.image)
    });
   
Asena.addCommand({ pattern: 'redwing ?(.*)', fromMe: true, desc: "Wing text effect" }, async (message, match) => {
        if (match == '') return await message.sendMessage("Give me text")
        const effect_url = "https://en.ephoto360.com/flame-lettering-effect-372.html"
        const {status, url} = await ePhotoDownload(effect_url, match)
        if(!status)return
        const { buffer } = await getBuffer(url)
        if (buffer !== false) return await message.sendMessage(buffer, {}, MessageType.image)
    });
   
   Asena.addCommand({ pattern: 'premium ?(.*)', fromMe: true, desc: "premium text effect" }, async (message, match) => {
        if (match == '') return await message.sendMessage("Give me text")
        const effect_url = "https://en.ephoto360.com/modern-gold-3-212.html"
        const {status, url} = await ePhotoDownload(effect_url, match)
        if(!status)return
        const { buffer } = await getBuffer(url)
        if (buffer !== false) return await message.sendMessage(buffer, {}, MessageType.image)
    });
   
   Asena.addCommand({ pattern: 'halloween ?(.*)', fromMe: true, desc: "halloween text effect" }, async (message, match) => {
        if (match == '') return await message.sendMessage("Give me text")
        const effect_url = "https://en.ephoto360.com/halloween-fire-text-effect-online-369.html"
        const {status, url} = await ePhotoDownload(effect_url, match)
        if(!status)return
        const { buffer } = await getBuffer(url)
        if (buffer !== false) return await message.sendMessage(buffer, {}, MessageType.image)
    });
   
Asena.addCommand({ pattern: 'neon ?(.*)', fromMe: true, desc: "neon text effect" }, async (message, match) => {
        if (match == '') return await message.sendMessage("Give me text")
        const effect_url = "https://en.ephoto360.com/blue-neon-text-effect-117.html"
        const {status, url} = await ePhotoDownload(effect_url, match)
        if(!status)return
        const { buffer } = await getBuffer(url)
        if (buffer !== false) return await message.sendMessage(buffer, {}, MessageType.image)
    });
   
   Asena.addCommand({ pattern: 'thunder ?(.*)', fromMe: true, desc: "thunder text effect" }, async (message, match) => {
        if (match == '') return await message.sendMessage("Give me text")
        const effect_url = "https://en.ephoto360.com/thunder-text-effect-online-97.html"
        const {status, url} = await ePhotoDownload(effect_url, match)
        if(!status)return
        const { buffer } = await getBuffer(url)
        if (buffer !== false) return await message.sendMessage(buffer, {}, MessageType.image)
    });
   
   Asena.addCommand({ pattern: 'rain ?(.*)', fromMe: true, desc: "Rain text effect" }, async (message, match) => {
        if (match == '') return await message.sendMessage("Give me text")
        const effect_url = "https://en.ephoto360.com/foggy-rainy-text-effect-75.html"
        const {status, url} = await ePhotoDownload(effect_url, match)
        if(!status)return
        const { buffer } = await getBuffer(url)
        if (buffer !== false) return await message.sendMessage(buffer, {}, MessageType.image)
    });
   
Asena.addCommand({ pattern: 'water ?(.*)', fromMe: true, desc: "water text effect" }, async (message, match) => {
        if (match == '') return await message.sendMessage("Give me text")
        const effect_url = "https://en.ephoto360.com/create-water-effect-text-online-295.html"
        const {status, url} = await ePhotoDownload(effect_url, match)
        if(!status)return
        const { buffer } = await getBuffer(url)
        if (buffer !== false) return await message.sendMessage(buffer, {}, MessageType.image)
    });
   
   Asena.addCommand({ pattern: 'dance ?(.*)', fromMe: true, desc: "Dance text effect" }, async (message, match) => {
        if (match == '') return await message.sendMessage("Give me text")
        const effect_url = "https://en.ephoto360.com/dance-text-effects-312.html"
        const {status, url} = await ePhotoDownload(effect_url, match)
        if(!status)return
        const { buffer } = await getBuffer(url)
        if (buffer !== false) return await message.sendMessage(buffer, {}, MessageType.image)
    });
   
   Asena.addCommand({ pattern: 'filament ?(.*)', fromMe: true, desc: "Filament bulb text effect" }, async (message, match) => {
        if (match == '') return await message.sendMessage("Give me text")
        const effect_url = "https://en.ephoto360.com/text-effects-incandescent-bulbs-219.html"
        const {status, url} = await ePhotoDownload(effect_url, match)
        if(!status)return
        const { buffer } = await getBuffer(url)
        if (buffer !== false) return await message.sendMessage(buffer, {}, MessageType.image)
    });
   
Asena.addCommand({ pattern: 'lava ?(.*)', fromMe: true, desc: "Lava text effect" }, async (message, match) => {
        if (match == '') return await message.sendMessage("Give me text")
        const effect_url = "https://en.ephoto360.com/online-hot-metallic-effect-341.html"
        const {status, url} = await ePhotoDownload(effect_url, match)
        if(!status)return
        const { buffer } = await getBuffer(url)
        if (buffer !== false) return await message.sendMessage(buffer, {}, MessageType.image)
    });
   
   Asena.addCommand({ pattern: '2neon ?(.*)', fromMe: true, desc: "Neon 2 text effect" }, async (message, match) => {
        if (match == '') return await message.sendMessage("Give me text")
        const effect_url = "https://en.ephoto360.com/neon-text-effect-171.html"
        const {status, url} = await ePhotoDownload(effect_url, match)
        if(!status)return
        const { buffer } = await getBuffer(url)
        if (buffer !== false) return await message.sendMessage(buffer, {}, MessageType.image)
    });
   
   Asena.addCommand({ pattern: 'avatar ?(.*)', fromMe: true, desc: "Avatar logo  text effect" }, async (message, match) => {
        if (match == '') return await message.sendMessage("Give me text")
        const effect_url = "https://en.ephoto360.com/mastery-avatar-lol-246.html"
        const {status, url} = await ePhotoDownload(effect_url, match)
        if(!status)return
        const { buffer } = await getBuffer(url)
        if (buffer !== false) return await message.sendMessage(buffer, {}, MessageType.image)
    });
   
Asena.addCommand({ pattern: 'bigmetal ?(.*)', fromMe: true, desc: "Big metal text effect" }, async (message, match) => {
        if (match == '') return await message.sendMessage("Give me text")
        const effect_url = "https://en.ephoto360.com/create-metal-border-294.html"
        const {status, url} = await ePhotoDownload(effect_url, match)
        if(!status)return
        const { buffer } = await getBuffer(url)
        if (buffer !== false) return await message.sendMessage(buffer, {}, MessageType.image)
    });
   
   Asena.addCommand({ pattern: '3neon ?(.*)', fromMe: true, desc: "Neon 3 text effect" }, async (message, match) => {
        if (match == '') return await message.sendMessage("Give me text")
        const effect_url = "https://en.ephoto360.com/text-light-galaxy-effectt-345.html"
        const {status, url} = await ePhotoDownload(effect_url, match)
        if(!status)return
        const { buffer } = await getBuffer(url)
        if (buffer !== false) return await message.sendMessage(buffer, {}, MessageType.image)
    });
   
   Asena.addCommand({ pattern: 'christmas ?(.*)', fromMe: true, desc: "Christmas snow text effect" }, async (message, match) => {
        if (match == '') return await message.sendMessage("Give me text")
        const effect_url = "https://en.ephoto360.com/christmas-snow-text-effect-online-631.html"
        const {status, url} = await ePhotoDownload(effect_url, match)
        if(!status)return
        const { buffer } = await getBuffer(url)
        if (buffer !== false) return await message.sendMessage(buffer, {}, MessageType.image)
    });
   
Asena.addCommand({ pattern: 'djparty ?(.*)', fromMe: true, desc: "Dj party text effect" }, async (message, match) => {
        if (match == '') return await message.sendMessage("Give me text")
        const effect_url = "https://en.ephoto360.com/create-light-effects-green-neon-online-429.html"
        const {status, url} = await ePhotoDownload(effect_url, match)
        if(!status)return
        const { buffer } = await getBuffer(url)
        if (buffer !== false) return await message.sendMessage(buffer, {}, MessageType.image)
    });
   
   Asena.addCommand({ pattern: 'phub ?(.*)', fromMe: true, desc: "phub text effect" }, async (message, match) => {
        if (match == '') return await message.sendMessage("Give me text")
        const effect_url = "https://en.ephoto360.com/create-pornhub-style-logos-online-free-549.html"
        const {status, url} = await ePhotoDownload(effect_url, match)
        if(!status)return
        const { buffer } = await getBuffer(url)
        if (buffer !== false) return await message.sendMessage(buffer, {}, MessageType.image)
    });
   
   Asena.addCommand({ pattern: 'crack ?(.*)', fromMe: true, desc: "Crack text effect" }, async (message, match) => {
        if (match == '') return await message.sendMessage("Give me text")
        const effect_url = "https://en.ephoto360.com/create-3d-crack-text-effect-online-704.html"
        const {status, url} = await ePhotoDownload(effect_url, match)
        if(!status)return
        const { buffer } = await getBuffer(url)
        if (buffer !== false) return await message.sendMessage(buffer, {}, MessageType.image)
    });
   
Asena.addCommand({ pattern: 'cloth ?(.*)', fromMe: true, desc: "cloth text effect" }, async (message, match) => {
        if (match == '') return await message.sendMessage("Give me text")
        const effect_url = "https://en.ephoto360.com/text-on-cloth-effect-62.html"
        const {status, url} = await ePhotoDownload(effect_url, match)
        if(!status)return
        const { buffer } = await getBuffer(url)
        if (buffer !== false) return await message.sendMessage(buffer, {}, MessageType.image)
    });
   
   Asena.addCommand({ pattern: 'hacker ?(.*)', fromMe: true, desc: "Hacker text effect" }, async (message, match) => {
        if (match == '') return await message.sendMessage("Give me text")
        const effect_url = "https://en.ephoto360.com/create-anonymous-hacker-avatars-cyan-neon-677.html"
        const {status, url} = await ePhotoDownload(effect_url, match)
        if(!status)return
        const { buffer } = await getBuffer(url)
        if (buffer !== false) return await message.sendMessage(buffer, {}, MessageType.image)
    });
   
   Asena.addCommand({ pattern: 'dragon ?(.*)', fromMe: true, desc: "dragon text effect" }, async (message, match) => {
        if (match == '') return await message.sendMessage("Give me text")
        const effect_url = "https://en.ephoto360.com/dragon-steel-text-effect-online-347.html"
        const {status, url} = await ePhotoDownload(effect_url, match)
        if(!status)return
        const { buffer } = await getBuffer(url)
        if (buffer !== false) return await message.sendMessage(buffer, {}, MessageType.image)
    });
   
Asena.addCommand({ pattern: 'metalic ?(.*)', fromMe: true, desc: "Metalik text effect" }, async (message, match) => {
        if (match == '') return await message.sendMessage("Give me text")
        const effect_url = "https://en.ephoto360.com/metallic-text-effect-with-impressive-font-307.html"
        const {status, url} = await ePhotoDownload(effect_url, match)
        if(!status)return
        const { buffer } = await getBuffer(url)
        if (buffer !== false) return await message.sendMessage(buffer, {}, MessageType.image)
    });
   

//Example for text effect with two input
Asena.addCommand({ pattern: 'steel ?(.*)', fromMe: true, desc: "Steel text effect" }, async (message, match) => {
        if (match == '') return await message.sendMessage("Give me text\nExample .steel steel;effect")
        const [text1, text2] = match.split(';')
        if (!text1 || !text2) return await message.sendMessage("Give me text\nExample .steel steel;effect")
        const effect_url = "https://en.ephoto360.com/steel-text-effect-66.html"
        const {status, url} = await ePhotoDownload(effect_url, match)
        if(!status)return
        const { buffer } = await getBuffer(url)
        if (buffer !== false) return await message.sendMessage(buffer, {}, MessageType.image)
    });
   
