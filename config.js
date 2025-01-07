const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348146441624";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGE || process.env.USER_IMAGES || "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_38_01_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMTE0LFxuICAgICAgICA0MCxcbiAgICAgICAgMjA1LFxuICAgICAgICA0NixcbiAgICAgICAgNjYsXG4gICAgICAgIDgxLFxuICAgICAgICA3MCxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTQwLFxuICAgICAgICA0MSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDg3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDI4LFxuICAgICAgICA2NyxcbiAgICAgICAgMTM4LFxuICAgICAgICA0NSxcbiAgICAgICAgODYsXG4gICAgICAgIDUxLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgOTksXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTI4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDc4LFxuICAgICAgICAxMjgsXG4gICAgICAgIDEwN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1MixcbiAgICAgICAgMTEzLFxuICAgICAgICAyMDksXG4gICAgICAgIDIxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjUsXG4gICAgICAgIDc5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNzIsXG4gICAgICAgIDcsXG4gICAgICAgIDg2LFxuICAgICAgICA1LFxuICAgICAgICAxOTksXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTEsXG4gICAgICAgIDk3LFxuICAgICAgICAxNzUsXG4gICAgICAgIDgwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDY0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNCxcbiAgICAgICAgMTcwLFxuICAgICAgICA4OSxcbiAgICAgICAgOTMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgODksXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxODYsXG4gICAgICAgIDI3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDM0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMzgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNjAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjQxLFxuICAgICAgICAyNCxcbiAgICAgICAgMTA0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTg1LFxuICAgICAgICAzOCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxODQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTkzLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMzMsXG4gICAgICAgIDc4LFxuICAgICAgICAzOSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTM0LFxuICAgICAgICA2OSxcbiAgICAgICAgODUsXG4gICAgICAgIDMwLFxuICAgICAgICAyNyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDM1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDQwLFxuICAgICAgICAxMjksXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTUyLFxuICAgICAgICAzNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMDksXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTI4LFxuICAgICAgICA1MCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgOTksXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjE1LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNDYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMzksXG4gICAgICAgIDYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNTUsXG4gICAgICAgIDMyLFxuICAgICAgICAxODIsXG4gICAgICAgIDU4LFxuICAgICAgICA5NCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTYwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDY1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAzMCxcbiAgICAgICAgNTYsXG4gICAgICAgIDUxLFxuICAgICAgICA4MyxcbiAgICAgICAgNDcsXG4gICAgICAgIDk4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDEwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTE0LFxuICAgICAgICA0MyxcbiAgICAgICAgMzcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgODgsXG4gICAgICAgIDU3LFxuICAgICAgICA2OCxcbiAgICAgICAgNTcsXG4gICAgICAgIDExMixcbiAgICAgICAgMTYwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDU4LFxuICAgICAgICA1NyxcbiAgICAgICAgMTczLFxuICAgICAgICA1OCxcbiAgICAgICAgNjIsXG4gICAgICAgIDk5LFxuICAgICAgICAzMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTE5XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgNixcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDgzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjIxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNTcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTEsXG4gICAgICAgIDU1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE2MixcbiAgICAgICAgODQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjgsXG4gICAgICAgIDE1NixcbiAgICAgICAgMixcbiAgICAgICAgMjA4LFxuICAgICAgICA1MixcbiAgICAgICAgMSxcbiAgICAgICAgMjI1LFxuICAgICAgICAzOSxcbiAgICAgICAgMzgsXG4gICAgICAgIDE3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNTEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNDgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjMwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTk1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDkyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDUwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDIyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDExNixcbiAgICAgICAgMTMsXG4gICAgICAgIDEzLFxuICAgICAgICAyMDksXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTUyLFxuICAgICAgICA3OSxcbiAgICAgICAgMjQyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDk5LFxuICAgICAgICAxMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTA4LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjlBVklWZCtTMmQ2TStsRHRBc2ZIQjd5L0hvb05rZE1USDAyeHZwd0VsVVU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0ODE0NjQ0MTYyNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQTM1QTJCQTBDNzA2QzgwOEExMTQ4QjM3MDcwQUEzOUFcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzM2MjY0Mjc5XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiA2MSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiA2MSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkoydVd2VmRGUnktLXk0c3U3eGpIWGdcIixcbiAgXCJwaG9uZUlkXCI6IFwiZWEwZjA2ZjYtNjhmNy00MzE2LThkODEtN2YyMTQ5NGNmMzViXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE4NyxcbiAgICAgIDcsXG4gICAgICAxNjYsXG4gICAgICAyOSxcbiAgICAgIDI2LFxuICAgICAgMjMxLFxuICAgICAgMTA0LFxuICAgICAgMjIzLFxuICAgICAgMTU2LFxuICAgICAgMjE5LFxuICAgICAgNzksXG4gICAgICAxNTgsXG4gICAgICAyMjksXG4gICAgICA0LFxuICAgICAgMjI0LFxuICAgICAgMyxcbiAgICAgIDE4LFxuICAgICAgMTMsXG4gICAgICA3NSxcbiAgICAgIDIzM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNjUsXG4gICAgICAyMzAsXG4gICAgICAxODgsXG4gICAgICAyNTIsXG4gICAgICAxNzIsXG4gICAgICAyMzIsXG4gICAgICAxMzMsXG4gICAgICAyMTQsXG4gICAgICAzNyxcbiAgICAgIDE3MyxcbiAgICAgIDk5LFxuICAgICAgMjQsXG4gICAgICA3MyxcbiAgICAgIDc5LFxuICAgICAgNzEsXG4gICAgICAxNDYsXG4gICAgICA3MixcbiAgICAgIDYsXG4gICAgICAyMCxcbiAgICAgIDgxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkpCSzdYUExTXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTQ2NDQxNjI0OjExQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNzQyMTcyOTUzMDY3NzU6MTFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTTNlMlBZSEVNeVU5YnNHR0FRZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJmd2E4Z1ptSXRvM3FNZXdVYzRuZjIxdHR1R1RhbW0zbjJUcnhBc0cyK2dNPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInduTWVTYXl4OXdrWkg2SURUSVNobWY2ZFJXNy8yQ1Jlay9CVEhaVzZtbkEzZGdQVnZmS2JzL01MTDRGeXdFUEVhYUp0U2VjcW5XR2hWTEJqRmNUa0RnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIklqTXBWSCtPZ3JSWlo3bmZSMFhkMlVRbHNrTkpuQ0hHQ1pIN3ptaWx3cE1GR0M4VlRGdTU4NUd2S1FZbS8rWUQ0U0RBVTBQeG9YbitnUkZHa0Yyb0JRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxNDY0NDE2MjQ6MTFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNjI2NDI3MixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU1hNFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTWE0Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiMFB3UjlRYndvTkl6NDZZWTNqclMrR2hHTkZsTGR6WlZoL0tTdUxaVzhIbz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMTI3OTY2MDI4LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "zecco",


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
