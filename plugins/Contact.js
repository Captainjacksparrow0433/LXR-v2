const Ktb = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const exec = require('child_process').exec;
const os = require("os");
const fs = require('fs');
const Config = require('../config')
Ktb.addCommand({ pattern: 'git ?(.*)', fromMe: false, desc: 'owner number' }, (async (message, match) => {

//coded by saidali
const vcard = 'BEGIN:VCARD\n' // metadata of the contact card
            + 'VERSION:3.0\n' 
            + 'FN:Abin [꧁LXR=Jack࿐]\n' // full name
            + 'ORG:꧁LXR=Jack࿐;\n' // 
            + 'TEL;type=CELL;type=VOICE;waid=919061103727:+91 9061103727\n' // WhatsApp ID + phone number
            + 'END:VCARD'
await message.client.sendMessage(message.jid,{displayname: "Abin [꧁LXR=Jack࿐]", vcard: vcard}, MessageType.contact)

}));

Ktb.addCommand({ pattern: 'owner ?(.*)', fromMe: false, desc: 'owner number' }, (async (message, match) => {
const vcard = 'BEGIN:VCARD\n' // metadata of the contact card
            + 'VERSION:3.0\n' 
            + 'FN:Abin [꧁LXR=Jack࿐]\n' // full name
            + 'ORG:꧁LXR=Jack࿐;\n' // 
            + 'TEL;type=CELL;type=VOICE;waid=919061103727:+91 9061103727\n' // WhatsApp ID + phone number
            + 'END:VCARD'
await message.client.sendMessage(message.jid,{displayname: "Abin [꧁LXR=Jack࿐]", vcard: vcard}, MessageType.contact)
}))
