/*
Thanks to Botcahx
Thanks to Betabotz
Thanks to DyLux-FG
Thanks to Subscriber
*/

import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.owner = [
  ['628972966717', 'Anzyy', true],
  ['6285880029379']
] // Nomor Owner

global.mods = ['628972966717'] 
global.prems = ['628972966717', '6285880029379']

// apikey
global.lann = '3ZdAVo8E'
// apikeylu di ganti menggunakan apikey yang di dapatkan di website https://api.betabotz.org. contohnya global.lann = 'nans' (contoh). cara mendapatkan apikey. masuk website > scroll ke bawah dan cari harga yang kamu mau ada juga yang free dan tekan > otomatis akan di arahkan untuk registrasi, isi data diri email dll. > kalo sudah klik profil dan di situ akan muncul apikey mu. terima kasih.

global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api-fgmods.ddns.net': 'mhdAnan',
  'https://api.betabotz.org': '3ZdAVo8E'
}

global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://fg-nrtm.ddns.net',
  fgmods: 'https://api-fgmods.ddns.net',
  lann: 'https://api.betabotz.org'
}

// Watermark
global.nama = 'Anzyy' // nama owner
global.nomor = '628972966717' // nomor owner
global.nans = 'AYAME BOT V.3.2' // nama bot 
global.thumb = 'https://i.ibb.co/JKjkmhT/20230913-081048.jpg' // thumbnail bot ( foto menu )
global.dygp = 'https://chat.whatsapp.com/EiLz6fwM4oCC5XHlT4fXgU' // link group yang ada di menu

// Sticker wm
global.packname = 'AYAME BOT┃ᴮᴼᵀ' 
global.author = '@anzyy 
global.fgig = 'https://instagram.com/fauzyyy22' // bebas tapi jangan kosong 
global.fgsc = 'https://github.com/AnzyCh' // bebas tapi jangan kosong
global.fgyt = 'https://youtube.com/@mudmud380' // bebas tapi jangan kosong
global.fgpyp = 'https://youtube.com/@mudmud380' // bebas tapi jangan kosong
global.fglog = 'https://i.ibb.co/kXw4XhL/nansoffc-logo.jpg'

// Other
global.dana = '08972966717'
global.qris = 'https://i.ibb.co/KVbR6zX/Picsart-23-10-18-14-29-57-405.jpg'
global.web = 'https://instagram.com/fauzyyy22'
global.email = 'mudchan21@gmail.com'
global.lastm = 'ꜱɪᴍᴘʟᴇ ʙᴏᴛ ᴡʜᴀᴛꜱᴀᴘᴘ ʙʏ ᴀɴʏʏ'

global.wait = 'Tunggu sebentar....'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

global.multiplier = 69 
global.maxwarn = '2' // Peringatan maksimum

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})