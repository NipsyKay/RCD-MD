//#ENJOY
/**
**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "";
global.location = "Sri lanka .";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "94789958225@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "lusaka/zambia";
global.github = process.env.GITHUB || "https://github.com/DEXTER-BOTS/RCD-MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vag1WQFJf05dF0pQeU3u";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vag1WQFJf05dF0pQeU3u";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "94789958225,94757660788,94770730717,94785274495";
global.owner = process.env.OWNER_NUMBER || "260776642930"
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "typing ";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "";
global.scan = "";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkMxT0pJZU1QdHlQU2J0OGNXd1dPaGN1QWdxUE9HTFBLQytsUXM5SXoxMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQit0V0JIRVdmWXhmZWlldTI3SGdGSXBFYWpGWTgySVZsMCtuWDZ2RzAxZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjTUhwb2FzV2gzTFdsM1hVRExGczRSTEdzMmtpc1VFQTRZSTJHSi8vSjE0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlaW12Qis3eTUyTFpEV0Rtcnp1VUNjb2RCb21QSEFUSkJBTG9HT2ZBS0dvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVFVUpXY1l5b1VnS25nRm5SdWR3LytVSWJVUjRoVS9hSjJQTjBvWFVCRmM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImYzNWRWaE5vc2QwcUNDWEpJTkhheURBRlhYZnVzUkxDUSswYzVpa0NMMXc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUswOXE4WmN2RTlJRElmbWJDcXBKakZRRDNXRUUwS3dwNFVyb1g2ZkNXdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiemxQaExOcGpOb08xS1lsWFVwUjBJSzllK0pPMzFFbWlYa0U0THhMdnMzMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InZHNTY3VzM4TFk3cUw2eXdhMi9LY3BNU2xaSmFGSWdON1VRcXhMT0pUbi9rbUtZaVlLaEVDKzgxaVJwUmhYWmFYWHpZcDYzUFlqZlRLOGJIYmx0dmpRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTYwLCJhZHZTZWNyZXRLZXkiOiJqYUlLSC8xdG5ZTEY3dCtRVkNEc0RodDZWUi93K3VmZEgrNjRNR2JGMGRJPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJCU0wtM2RaYVNnaVNLSFVXUWdkR2NRIiwicGhvbmVJZCI6IjBhMTg0Mjc2LTVjMGMtNDJjMS1iODZjLTVjZTFkNjUxZGY1ZSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDUjYvSC9SbWE2ZTRHNTNDUG5HWmZJTHhCUzg9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSU01MFRuK1BCbVFiRXRCS21SQjNZWUQrSEh3PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkxXQlM5WEVDIiwibWUiOnsiaWQiOiIyNjA3NzY2NDI5MzA6NDhAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0ppeDFjUUZFSWVZczdRR0dBSWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InJGVVJuaFVKSnN3VXhkcE1nQUU1UklGOE9HMTNQUkFtQnVFc2RVS0plQkE9IiwiYWNjb3VudFNpZ25hdHVyZSI6IloyMDl2YlZOTUwxT0NTb2dNNnZhYlIvTUV4YUxWR0JXdVd6VDJlM1M2ZmgrUHFEYXM4VXlYNldwMXZVNHdQSFBiUHRmMnp2Vlk0dmNNUDdBaDJGV0RBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiIzRWlCSHRHb1lxbHhHMFA5ZUFXcEMya29iZXZjdFErRWJJR2VmRTJ4VzY0SjBGeGtZRVNiWGhqS3JMaVkrWTEyNlNSZmJ6Y25QaG1tdkdBTjVBa2dpZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI2MDc3NjY0MjkzMDo0OEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJheFZFWjRWQ1NiTUZNWGFUSUFCT1VTQmZEaHRkejBRSmdiaExIVkNpWGdRIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIwNTAzMzIxfQ=="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-Nipsy-𝐌𝐃-🏛️",
  author: process.env.PACK_AUTHER || "Nipsy",
  packname: process.env.PACK_NAME || "created by",
  botname: process.env.BOT_NAME || "La Flame🔥 ",
  ownername: process.env.OWNER_NAME || "Johnson,Carl💋",
  errorChat: process.env.ERROR_CHAT || "94789958225",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "0d868c92b5f947b2c97df0f941b45a8b",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
