/* Jack Bot
Re-edit Abin
*/

const Jacki = require('../events');
const {MessageType, GroupSettingChange, Mimetype, MessageOptions} = require('@adiwajshing/baileys');
const fs = require('fs');
const Config = require('../config')
const config = require('../config')
const axios = require('axios')
const request = require('request');
const os = require('os');
var clh = { cd: 'L3Jvb3QvV2hhdHNBc2VuYUR1cGxpY2F0ZWQv', pay: '' }    
var ggg = Buffer.from(clh.cd, 'base64')
var ddd = ggg.toString('utf-8')


let whb = Config.WORKTYPE == 'public' ? false : true

 if (Config.ALIVETYPE == 'one') {

Jacki.addCommand({pattern: 'alive', fromMe: whb, dontAddCommandList: true}, (async (message, match) => {
// send a buttons message!credit Abin
    const buttons = [
        {buttonId: 'id1', buttonText: {displayText: Config.ABIN_SER }, type: 1},
        {buttonId: 'id2', buttonText: {displayText: Config.ABIN_SIR }, type: 1}
      ]
      
      const buttonMessage = {
          contentText: '```'+Config.BOT+'\n\n```'+Config.ALIVEMSG+'\n',
          footerText: 'Abin ©',
          buttons: buttons,
          headerType: 1
      }
      
      await message.client.sendMessage(message.jid, buttonMessage, MessageType.buttonsMessage)

}));
}
