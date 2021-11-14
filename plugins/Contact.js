/*codded by Abin
Work only with Jack QR*/

const Jacki = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const exec = require('child_process').exec;
const os = require("os");
const fs = require('fs');
const Config = require('../config')
Jacki.addCommand({ pattern: 'boss ?(.*)', fromMe: false, desc: 'owner number' }, (async (message, match) => {

//coded by Abin
const vcard = 'BEGIN:VCARD\n' // metadata of the contact card
            + 'VERSION:3.0\n' 
            + 'FN:Akku [꧁Boss࿐]\n' // full name
            + 'ORG:꧁Boss࿐;\n' // 
            + 'TEL;type=CELL;type=VOICE;waid=918590403955:+91 8590403955\n' // WhatsApp ID + phone number
            + 'END:VCARD'
await message.client.sendMessage(message.jid,{displayname: "Akku [꧁Boss࿐]", vcard: vcard}, MessageType.contact)

}));

Jacki.addCommand({ pattern: 'owner ?(.*)', fromMe: false, desc: 'owner number' }, (async (message, match) => {
const vcard = 'BEGIN:VCARD\n' // metadata of the contact card
            + 'VERSION:3.0\n' 
            + 'FN:Abin [꧁Boss࿐]\n' // full name
            + 'ORG:꧁Boss࿐;\n' // 
            + 'TEL;type=CELL;type=VOICE;waid=919061103727:+91 9061103727\n' // WhatsApp ID + phone number
            + 'END:VCARD'
await message.client.sendMessage(message.jid,{displayname: "Abin [꧁Boss࿐]", vcard: vcard}, MessageType.contact)
}))

Jacki.addCommand({ pattern: 'boss ?(.*)', fromMe: false, desc: 'owner number' }, (async (message, match) => {

//coded by Abin
const vcard = 'BEGIN:VCARD\n' // metadata of the contact card
            + 'VERSION:3.0\n' 
            + 'FN:Arjun [꧁Boss࿐]\n' // full name
            + 'ORG:꧁Boss࿐;\n' // 
            + 'TEL;type=CELL;type=VOICE;waid=919567716422:+91 9567716422\n' // WhatsApp ID + phone number
            + 'END:VCARD'
await message.client.sendMessage(message.jid,{displayname: "Arjun [꧁Boss࿐]", vcard: vcard}, MessageType.contact)

}));
