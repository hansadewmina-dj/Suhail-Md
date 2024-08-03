const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://sam:sam@cluster0.u1smxsv.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_44_08_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAxODksXG4gICAgICAgIDEyMixcbiAgICAgICAgMTc0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDQzLFxuICAgICAgICAzNixcbiAgICAgICAgMjM4LFxuICAgICAgICA3MixcbiAgICAgICAgMTU3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgODcsXG4gICAgICAgIDQ4LFxuICAgICAgICAzMCxcbiAgICAgICAgOTAsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMyxcbiAgICAgICAgOTUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMCxcbiAgICAgICAgMjQ2LFxuICAgICAgICA5NCxcbiAgICAgICAgMCxcbiAgICAgICAgNTUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTQwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjA3LFxuICAgICAgICA3NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzgsXG4gICAgICAgIDM0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDIxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDk4LFxuICAgICAgICA1NyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDQwLFxuICAgICAgICA0MixcbiAgICAgICAgMTUwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTMyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDEyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNyxcbiAgICAgICAgMTM4LFxuICAgICAgICAzMSxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDM5LFxuICAgICAgICAyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDM4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMixcbiAgICAgICAgMTM0LFxuICAgICAgICAxODEsXG4gICAgICAgIDIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDg3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTUxLFxuICAgICAgICA0NCxcbiAgICAgICAgOTAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDQ4LFxuICAgICAgICA5NSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDg4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTI1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDgyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDEzLFxuICAgICAgICAxNDAsXG4gICAgICAgIDExNyxcbiAgICAgICAgNjksXG4gICAgICAgIDE0NixcbiAgICAgICAgMjQ0LFxuICAgICAgICA1OCxcbiAgICAgICAgNDIsXG4gICAgICAgIDMwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNzgsXG4gICAgICAgIDE3NixcbiAgICAgICAgODYsXG4gICAgICAgIDgwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNDQsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjIzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDg0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NixcbiAgICAgICAgMTYyLFxuICAgICAgICA4NCxcbiAgICAgICAgMjMyLFxuICAgICAgICA1LFxuICAgICAgICA2OSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxODEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTYwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDI2LFxuICAgICAgICA4NSxcbiAgICAgICAgMjEyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgODksXG4gICAgICAgIDIyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjEzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDY2LFxuICAgICAgICA3NixcbiAgICAgICAgMTYzLFxuICAgICAgICAxODIsXG4gICAgICAgIDEwMixcbiAgICAgICAgODlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDExMCxcbiAgICAgICAgOCxcbiAgICAgICAgMjIwLFxuICAgICAgICA1OSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxODUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxODcsXG4gICAgICAgIDg5LFxuICAgICAgICA4OSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE4LFxuICAgICAgICA4MixcbiAgICAgICAgMTUyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMzUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjI2LFxuICAgICAgICAyOCxcbiAgICAgICAgNzYsXG4gICAgICAgIDExMixcbiAgICAgICAgNDIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTcsXG4gICAgICAgIDI1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDExNFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxMixcbiAgICAgICAgICA3NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg1LFxuICAgICAgICA5OSxcbiAgICAgICAgMTY5LFxuICAgICAgICA4OSxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDUyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDc5LFxuICAgICAgICAxMSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMzksXG4gICAgICAgIDUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgODksXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMzksXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTE4LFxuICAgICAgICA3NCxcbiAgICAgICAgMTEsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjA0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDUxLFxuICAgICAgICAyNTQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTA0LFxuICAgICAgICA3OCxcbiAgICAgICAgMTM4LFxuICAgICAgICAzNCxcbiAgICAgICAgNTIsXG4gICAgICAgIDY5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNzEsXG4gICAgICAgIDMxLFxuICAgICAgICA3NCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTA4LFxuICAgICAgICA2NCxcbiAgICAgICAgMTAwLFxuICAgICAgICAzMyxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMDksXG4gICAgICAgIDEwLFxuICAgICAgICAxODUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNDQsXG4gICAgICAgIDE0MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTgwLFxuICBcImFkdlNlY3JldEtleVwiOiBcIjYyb0ZlNUdOYXZDL09tT3JndUducXBkUHlSYnN1ZFp4STZCR3B0Qm1IUms9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjJYajhaaF9CUXRTOVQzdnhadkZJLXdcIixcbiAgXCJwaG9uZUlkXCI6IFwiNWY3NjBkNjctOTkyOS00NDg2LTk5YmYtZGE0NTI0OTAwOTljXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE1LFxuICAgICAgNTQsXG4gICAgICAxMTAsXG4gICAgICAxNDcsXG4gICAgICAxODcsXG4gICAgICAxNzcsXG4gICAgICAxMzUsXG4gICAgICAxNDQsXG4gICAgICAyMDAsXG4gICAgICAyMzQsXG4gICAgICAxNDMsXG4gICAgICAyOCxcbiAgICAgIDIzMCxcbiAgICAgIDY0LFxuICAgICAgMTA0LFxuICAgICAgNjksXG4gICAgICAxNTYsXG4gICAgICAxNTgsXG4gICAgICAxODAsXG4gICAgICAxMDVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNDEsXG4gICAgICA0MCxcbiAgICAgIDE4OCxcbiAgICAgIDEwNCxcbiAgICAgIDEzMyxcbiAgICAgIDE1LFxuICAgICAgMTAsXG4gICAgICAxNTIsXG4gICAgICAxOCxcbiAgICAgIDIzNSxcbiAgICAgIDExNyxcbiAgICAgIDc4LFxuICAgICAgMzMsXG4gICAgICAyMDYsXG4gICAgICAzNixcbiAgICAgIDIzMyxcbiAgICAgIDg1LFxuICAgICAgMTIsXG4gICAgICAyMjQsXG4gICAgICAzMFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJYNUtNOUFROFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTQ3MDE1MTU2MDk6NDZAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIwOTc1MzYxOTg2OTY5Njo0NkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLdUcxdFVDRUltd3VMVUdHQVlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkZGVU9ReDhXY3pXUVBMVElGV1VZblN3THhaaXhheUs2MmVoZHY4SGx6UlU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiUnN4UFZiKzlzUmpJREp4TTNnMDlBSmVCdU5WVkdVTk9ZbXdSWHZvK3RvUHp3Z0RmMkRLaWxqZHZYdCtIdmQ5NXJHcjI0TW5ZYXBCeVExZmV0ZmVGQWc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiN252Q3lWQlowREpJeURhUkR4YmxCYUJ1Q1JRZURVd2FwclQwQjdUZks3UGJQZFdJQ2hYVjU0TUhHZlBOWHV5elhEQWEzejVhREwzODlrTmtSbElNZ2c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTQ3MDE1MTU2MDk6NDZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDIxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjI2ODU0NTJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
