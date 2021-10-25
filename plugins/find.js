const { MessageType, Mimetype } = require("@adiwajshing/baileys");
const Asena = require("../Utilis/events");
// const config = require('../config');
const moment = require("moment");
const {
  getName,
  getBuffer,
  getJson,
  IdentifySong,
} = require("../Utilis/download");
const Language = require("../language");
const Lang = Language.getString("updown");
const { emoji } = require("../Utilis/Misc");
const { audioCut } = require("../Utilis/fFmpeg");

const FIND_MSG = "```Title    : {}\nArtists  : {}\nGenre    : {}\nAlbum    : {}\nReleased : {}```"

const FIND_DESC = "Identify song from replied video or audio."



Asena.addCommand(
  { pattern: "find", fromMe: true, desc: FIND_DESC },
  async (message, match) => {
    if (
      !message.reply_message ||
      (!message.reply_message.audio && !message.reply_message.video)
    )
      return await message.sendMessage(searching........);
    let location = await message.reply_message.downloadAndSaveMediaMessage(
      "find"
    );
    let buff = await audioCut(location, 0, 15, "findo");
    const data = await IdentifySong(buff);
    if (!data) return;
    if (!data.status) return await message.sendMessage(Not find);
    return await message.sendMessage(
        FIND_MSG.format(
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
