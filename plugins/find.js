const Asena = require('../events');

const {MessageType,Mimetype} = require('@adiwajshing/baileys');

const fs = require('fs');

const axios = require('axios');

const FormData = require('form-data');

const ffmpeg = require('fluent-ffmpeg');

const FIND_DESC = "Finds the Song"

Asena.addCommand(
  { pattern: "find", fromMe: true, desc: Lang.FIND_DESC },
  async (message, match) => {
    if (
      !message.reply_message ||
      (!message.reply_message.audio && !message.reply_message.video)
    )
      return await message.sendMessage(Lang.FIND_NEED_REPLY);
    let location = await message.reply_message.downloadAndSaveMediaMessage(
      "find"
    );
    let buff = await audioCut(location, 0, 15, "findo");
    const data = await IdentifySong(buff);
    if (!data) return;
    if (!data.status) return await message.sendMessage(Lang.NOT_FOUND);
    return await message.sendMessage(
      Lang.FIND_MSG.format(
        data.data.title,
        data.data.artists,
        data.data.genre,
        data.data.album,
        data.data.release_date
      ),
      { quoted: message.quoted }
    );
  }
);
