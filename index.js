
const {
WAMessageProto,
MessageOptions,
WAFlag,
WANode,
WAMetric,
ChatModification,
DisconectReason,
MessageTypeProto,
WAConnection,
WALocationMessage,
ReconnectMode,
WAContextInfo,
proto,
ProxyAgent,
waChatKey,
MimetypeMap,
MediaPathMap,
WAContactMessage,
WAContactsArrayMessage,
WAGroupInviteMessage,
WATextMessage,
WAMessageContent, 
WAMessage, 
BaileysError, 
WA_MESSAGE_STATUS_TYPE, 
MediaConnInfo, 
URL_REGEX, 
WAUrlInfo, 
WA_DEFAULT_EPHEMERAL, 
WAMediaUpload,
mentionedJid,
processTime,
Browser,
MessageType,
Presence,
GroupSettingChange,
WA_MESSAGE_STUB_TYPES,
Mimetype,
relayWAMessage,
GroupconfigChange } = require('@adiwajshing/baileys')

const fs = require('fs')
const { ptbr } = require('./base de dados/mess')
const axios = require('axios')
const encodeUrl = require('encodeurl')
const {fetchJson} = require('./lib/fetcher');
const { convertSticker } = require("./lib/plugins/swm.js")
const ffmpeg = require('fluent-ffmpeg')
const translate = require('@vitalets/google-translate-api');
const crypto = require('crypto')
const { spawn, exec, execSync } = require("child_process")
const tescuk = ["0@s.whatsapp.net"]
const { wait, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { color, bgcolor } = require('./lib/color')
const moment = require('moment-timezone')
//const hours = ('meupau')//
const arrayQND = ['Hoje', 'Amanhã', 'Nunca', 'dia', 'semana', 'mês', 'ano']
const arrayQND2 = ['dias', 'semanas', 'meses', 'anos']

//**********Arquivos**********//
const { createSerial } = require('./base de dados/lib/register.js')
const { yag } = require('./base de dados/asu')
const { isFiltered, addFilter } = require('./base de dados/antiflod/antispam')
const dinheiro = JSON.parse(fs.readFileSync('./base de dados/dinheiro/dinheiro.json')) //ONDE FICA ARMAZENADO OS DADOS
const registro = JSON.parse(fs.readFileSync('./base de dados/registro/registro.json')) //DADOS DAS PESSOAS REGISTRADAS
const { webp2gifFile } = require("./base de dados/lib/gif.js")
const { linguagem } = require('./base de dados/datauser/mess')
const registro18 = JSON.parse(fs.readFileSync('./base de dados/registro/registro18.json')) //DADOS DAS PESSOAS REGISTRADAS +18	
const { conselhob } = require('./base de dados/armor/js/conselhob.js');
const palavrão = JSON.parse(fs.readFileSync('./base de dados/anti palavrao/palavrão.json'))
const { palavras } = require('./base de dados/armor/js/conselhos.js');
const setting = JSON.parse(fs.readFileSync('./settings.json'))
const antifake = JSON.parse(fs.readFileSync('./base de dados/anti fake/antifake.json'))
const antilink = JSON.parse(fs.readFileSync('./base de dados/antlink/antilink.json'))
const { dono } = require('./settings.json')
const palavra = JSON.parse(fs.readFileSync('./base de dados/palavras/palavras.json'))
const uzumaki = JSON.parse(fs.readFileSync('./base de dados/clans/uzumaki.json'))
const nakano = JSON.parse(fs.readFileSync('./base de dados/clans/nakano.json'))
const hatake = JSON.parse(fs.readFileSync('./base de dados/clans/hatake.json'))
const akatsuki = JSON.parse(fs.readFileSync('./base de dados/clans/akatsuki.json'))
const uchiha = JSON.parse(fs.readFileSync('./base de dados/clans/uchiha.json'))
const welkom = JSON.parse(fs.readFileSync('./base de dados/welcom/welkom.json'))
const premium = JSON.parse(fs.readFileSync('./base de dados/premium/premium.json'))
const comum = JSON.parse(fs.readFileSync('./base de dados/user/user.json'))
const _leveling = JSON.parse(fs.readFileSync('./base de dados/level/leveling.json'))
const _level = JSON.parse(fs.readFileSync('./base de dados/level/level.json'))
const sotoy = JSON.parse(fs.readFileSync('./base de dados/jogos/sotoy.json'))
const { p } = require ('./settings.json')
const { emojidobot } = require ('./settings.json')
const { donodobot } = require ('./settings.json')
const { nomedobot } = require ('./settings.json')
const { nomedono } = require ('./settings.json')
const ownerNumber = [`${donodobot}`]
const dc = (`\`\`\``)
const cd = (`\´\´\´`)
const { guxtadnv } = require ('./base de dados/datauser/mensagemdebaixo.json')

/************** Arquivos Na Nuvem ************/
let antiflod = JSON.parse(fs.readFileSync('./base de dados/antiflod/arquivos/_antiflod.json'));

/************** HORAS ************/
const speedB = moment.tz('America/Sao_Paulo').format('ss')
const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
const data = moment.tz('Asia/Jakarta').format('DD/MM')
const time2 = moment().tz('America/Sao_Paulo').format('HH:mm:ss')
const waktu = moment.tz('Asia/Jakarta').format('HHmmss')
const time3 = moment().tz('America/Sao_Paulo').format('HH:mm')

/********** FUCTION TEMPORIZADO **********/ 
function temporizado(seconds){
function pad(s){
return (s < 10 ? '0' : '') + s;
}
var hours = Math.floor(seconds / (60*60));
var minutes = Math.floor(seconds % (60*60) / 60);
var seconds = Math.floor(seconds % 60);
return `${pad(hours)} Horas ${pad(minutes)} minutos ${pad(seconds)} Segundos`
}

function horaOn(seconds){
function pad(s){
return (s < 10 ? '0' : '') + s;
}
var hours = Math.floor(seconds / (60*60));
var minutes = Math.floor(seconds % (60*60) / 60);
var seconds = Math.floor(seconds % 60);
return `${pad(hours)} Horas`
}

//********** Funcion var **********//
var tttset = require('./base de dados/jogos/ttt/TTTconfig/tttset.json');
var esp = require('./base de dados/jogos/ttt/TTTconfig/tttframe.json');

/********** FUCTION LEVEL **********/
const { getUserRank, addCooldown, leveltab } = require('./database/lib/leveling.js') 
const getLevelingXp = (userId) => {
let position = false
Object.keys(_level).forEach((i) => {
if (_level[i].jid === userId) {
position = i
}
})
if (position !== false) {
return _level[position].xp
}
}
const getLevelingLevel = (userId) => {
let position = false
Object.keys(_level).forEach((i) => {
if (_level[i].jid === userId) {
position = i
}
})
if (position !== false) {
return _level[position].level
}
}   
const getLevelingId = (userId) => {
let position = false
Object.keys(_level).forEach((i) => {
if (_level[i].jid === userId) {
position = i
}
})
if (position !== false) {
return _level[position].jid
}
}

const addLevelingXp = (userId, amount) => {
let position = false
Object.keys(_level).forEach((i) => {
if (_level[i].jid === userId) {
position = i
}
})
if (position !== false) {
_level[position].xp += amount
fs.writeFileSync('./base de dados/level/level.json', JSON.stringify(_level))
}
}
const addLevelingLevel = (userId, amount) => {
let position = false
Object.keys(_level).forEach((i) => {
if (_level[i].jid === userId) {
position = i
}
})
if (position !== false) {
_level[position].level += amount
fs.writeFileSync('./base de dados/level/level.json', JSON.stringify(_level))
}
}
const addLevelingId = (userId) => {
const obj = {jid: userId, xp: 1, level: 1}
_level.push(obj)
fs.writeFileSync('./base de dados/level/level.json', JSON.stringify(_level))
}
//********** TEMPORIZADOR**********//
function horaOn(seconds){
function pad(s){
return (s < 10 ? '0' : '') + s;
}
var hours = Math.floor(seconds / (60*60));
var minutes = Math.floor(seconds % (60*60) / 60);
var seconds = Math.floor(seconds % 60);
return `${pad(hours)} Horas`
}

async function starts() {
const client = new WAConnection()
client.logger.level = 'warn'
console.log(banner.string)
client.on('qr', () => {
console.log(color('[','white'), color('!','red'), color(']','white'), color('escaneie o código qr'))
	})
fs.existsSync('./guxta.json') && client.loadAuthInfo('./guxta.json')
client.on('connecting', () => {
start('2', ` `)
	})
client.on('open', () => {
success('2','Estou acordada')
	})
await client.connect({timeoutMs: 30*1000})
fs.writeFileSync('./guxta.json', JSON.stringify(client.base64EncodedAuthInfo(), null, '\t'))
const getLevelingLevel = (sender) => {
let position = false
Object.keys(_level).forEach((i) => {
if (_level[i].id === sender) {
position = i
}
client.setStatus(`Estou online desde às ${hours}`)
 
})
if (position !== false) {
return _level[position].level
}
}
const getLevelingId = (sender) => {
let position = false
Object.keys(_level).forEach((i) => {
if (_level[i].id === sender) {
position = i
}
})
if (position !== false) {
return _level[position].id
}
}
const addLevelingXp = (sender, amount) => {
let position = false
Object.keys(_level).forEach((i) => {
if (_level[i].id === sender) {
position = i
}
})
if (position !== false) {
_level[position].xp += amount
fs.writeFileSync('./base de dados/level.json', JSON.stringify(_level))
}
}
const addLevelingLevel = (sender, amount) => {
let position = false
Object.keys(_level).forEach((i) => {
if (_level[i].id === sender) {
position = i
}
})
if (position !== false) {
_level[position].level += amount
fs.writeFileSync('./base de dados/level.json', JSON.stringify(_level))
}
}
const addLevelingId = (sender) => {
const obj = {id: sender, xp: 1, level: 1}
_level.push(obj)
fs.writeFileSync('./base de dados/level.json', JSON.stringify(_level))
}
const addATM = (sender) => {
const obj = {id: sender, uang : 0}
uang.push(obj)
fs.writeFileSync('./base de dados/dinheiro.json', JSON.stringify(uang))
}
const addKoinUser = (sender, amount) => {
let position = false
Object.keys(uang).forEach((i) => {
if (uang[i].id === sender) {
position = i
}
})
if (position !== false) {
uang[position].uang += amount
fs.writeFileSync('./base de dados/dinheiro.json', JSON.stringify(uang))
}
}
const checkATMuser = (sender) => {
let position = false
Object.keys(uang).forEach((i) => {
if (uang[i].id === sender) {
position = i
}
})
if (position !== false) {
return uang[position].uang
}
}
const confirmATM = (sender, amount) => {
let position = false
Object.keys(uang).forEach((i) => {
if (uang[i].id === sender) {
position = i
}
})
if (position !== false) {
uang[position].uang -= amount
fs.writeFileSync('./base de dados/dinheiro.json', JSON.stringify(uang))
}
}

/********** MENSAGENS DO BOT **********/
var replys = ["[ ! ] Aguarde amigo, estou fazendo...", "Vai beber uma água, ja estou terminando de enviar..", "㋡ Opa, calma ae, tô enviando já!!", "❬❗❭ Aguarde 5 segundos", "☬ Seu pedido é uma ordem companheiro(a), Enviando...", "ههههه𓅂 Oi filho de Deus, calma ae, tô terminando de fazer..", "Oi princesa, já estou preparando pra enviar, Aguarde..", "Salve mano, só aguarde um pouquinho que já estou enviando!!", "Aquieta o coração amigo, já estou enviando!", "Espere sentado que estou enviando!", "Pisa no freio aí amigo, tô enviando já!", "Foi daqui que pediram comando? Ta chegando...", "Oq vc ñ pede chorando, que eu não faço sorrindo, enviando já!", "Em 365 dias úteis termino o comando kkkk meme, to enviando!", "Aproveita que tô terminando aqui e beba água, hidrate-se!", "Seu pedido é uma ordem, terminando patrão!", "Manda quem pode, obedece quem tem juízo. Já tô enviando...", "Jaja está na mão amigo, aguarde um instante!", "Quem espera, sempre alcança","Tô enviando já amigão!"]
var replys_aiai = replys[Math.floor(Math.random() * (replys.length))]

//********** Mensagens setadas **********//
mess = {
wait: 'Estou fazendo ⌛',
registro: `
╭Registre-se
╰────────────────────╯
╭────────────────────
├Olá Você Não Está registrado
├Basta Bigitar ${p}Login SeuNome/Idade
├Exemplo : ${p}Login guxta/14
╰────────────────────
	`,
success: 'Deu certo', 
espere: `${replys_aiai}`,
guxta: 'vc éo guxa??',
error: {
stick: 'Error deu erro man tenta dnv ae',
Iv: 'link invalido tente outro'
},
only: {
group: 'Este comando só pode ser usado em grupos!',
ownerG: 'Este comando só pode ser usado pelo dono!',
ownerB: 'Este comando só pode ser usado pelo meu dono!',
admin: 'Este comando só pode ser usado por administradores de grupo!',
Badmin: 'Este comando só pode ser usado quando o bot se torna administrador!'
}
}

/************** Registro ************/
const getRegisteredRandomId = () => {
return registro[Math.floor(Math.random() * registro.length)].id
}
const addRegisteredUser = (userid, sender, idade, horário, serials) => {
const obj = { id: userid, nome: sender, idade: idade, horário: horário, serial: serials }
registro.push(obj)
fs.writeFileSync('./base de dados/registro/registro.json', JSON.stringify(registro))
}
const addRegisteredUser18 = (userid, sender, idade, horário, serials) => {
const obj = { id: userid, nome: sender, idade: idade, horário: horário, serial: serials }
registro18.push(obj)
fs.writeFileSync('./base de dados/registro/registro18.json', JSON.stringify(registro18))
} 
const sayoseri = (size) => {
return crypto.randomBytes(size).toString('hex').slice(0, size)
}
const checaregistro = (sender) => {
let status = false
Object.keys(registro).forEach((i) => {
 if (registro[i].id === sender) {
status = true
}
})
return status
}

//********** CHAT UPDATE**********//
client.on('chat-update', async (mek) => {
try {
if (!mek.hasNewMessage) return
mek = mek.messages.all()[0]
if (!mek.message) return
if (mek.key && mek.key.remoteJid == 'status@broadcast') return
if (mek.key.fromMe) return
const content = JSON.stringify(mek.message)
const type = Object.keys(mek.message)[0]
const from = mek.key.remoteJid
const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
const time = moment.tz('America/Sao_Paulo').format('HH:mm:ss')
const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
const prefix = /^[°•π÷×¶∆£¢€¥®™=|~#%^&.?/\\©^z+*,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~#%^&.?/\\©^z+*,;]/gi) : '.'
body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
const isCmd = body.startsWith(prefix)
global.prefix

//********** PARA OS BOTOES **********//
selectedButton = (type == 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedButtonId : ''
body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : (mek.message.listResponseMessage && mek.message.listResponseMessage.singleSelectReply.selectedRowId.startsWith(prefix) && mek.message.listResponseMessage.singleSelectReply.selectedRowId) ? mek.message.listResponseMessage.singleSelectReply.selectedRowId : (mek.message.buttonsResponseMessage && mek.message.buttonsResponseMessage.selectedButtonId.startsWith(prefix) && mek.message.buttonsResponseMessage.selectedButtonId) ? mek.message.buttonsResponseMessage.selectedButtonId : ''
budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : (type == 'buttonsMessage') && mek.message.buttonsMessage.text ? mek.message.buttonsMessage.text : ''
const comando = body.slice(1).trim().split(/ +/).shift().toLowerCase()
const mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ? client.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : client.sendMessage(from, teks.trim(), extendedText, {quoted: info, contextInfo: {"mentionedJid": memberr}})
}

//********** LINGUAGEM DE GRUPO **********//
const botNumber = client.user.jid
const isGroup = from.endsWith('@g.us')
const sender = isGroup ? mek.participant : mek.key.remoteJid
const isPrem = premium.includes(sender)
const groupMetadata = isGroup ? await client.groupMetadata(from) : ''
const groupName = isGroup ? groupMetadata.subject : ''
const isWelkom = isGroup ? welkom.includes(from) : false   
const isComum = comum.includes(sender)
const isAntiflod = isGroup ? antiflod.includes(from) : true
const isLevelingOn = isGroup ? _leveling.includes(from) : true 
const isUchiha = uchiha.includes(sender)
const isUzumaki = uzumaki.includes(sender)
const isAntiFake = isGroup ? antifake.includes(from) : false
const isNakano = nakano.includes(sender)
const isPalavrão = isGroup ? palavrão.includes(from) : false
const isHatake = hatake.includes(sender)
const isAkatsuki = akatsuki.includes(sender)
const me = client.user
const groupId = isGroup ? groupMetadata.jid : ''
const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
const groupMembers = isGroup ? groupMetadata.participants : ''
const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
const isGroupAdmins = groupAdmins.includes(sender) || false
const isAntiLink = isGroup ? antilink.includes(from) : false
const isOwner = ownerNumber.includes(sender)
pushname = client.contacts[sender] != undefined ? client.contacts[sender].vname || client.contacts[sender].notify : undefined
const selo = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": nomedobot, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync(`./guxta/fotos/guxta.jpg`)} } }
const args = body.trim().split(/ +/).slice(1)
const isRegistrar = checaregistro(sender)
const isRegistrar18 = registro18.includes(sender)
const q = args.join(" ")


/*[--ANTI PALAVRÃO --]*/
if (isGroup && isPalavrão) { //ÍDEIA DO TIAGO
if (palavra.includes(messagesC)) {
if (!isGroupAdmins) {
try { 
client.sendMessage(from, `SEM PALAVRÃO!! 😠!!`, text , {quoted : mek})
setTimeout( () => {
client.groupRemove(from, [sender])
}, 5000)
setTimeout( () => {
client.updatePresence(from, Presence.composing)
reply("1")
}, 4000)
setTimeout( () => {
client.updatePresence(from, Presence.composing)
reply("2")
}, 3000)
setTimeout( () => {
client.updatePresence(from, Presence.composing)
reply("3")
}, 2000)
setTimeout( () => {
client.updatePresence(from, Presence.composing)
reply("4")
}, 1000)
setTimeout( () => {
client.updatePresence(from, Presence.composing)
client.sendMessage(from, `*「 🗣️ANTI PALAVRÃO🗣️ ━━╮\nVocê será banido do gp, Na proxima tenha ética ao falar!!`, text , {quoted : mek}) 
}, 0)
} catch { client.sendMessage(from, `InFelizmente, não sou um administrador, entt não posso te banir!!`, text , {quoted : mek}) }
} else {
return reply(`VOCÊ PODE ${pushname} 😇`)
}
}
}

const getLevelingXp = (sender) => {
let position = false
Object.keys(_level).forEach((i) => {
if (_level[i].id === sender) {
position = i
}
})
if (position !== false) {
return _level[position].xp
}
}

const sendButImage = async(id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await client.prepareMessage(from, kma, image, {quoted:selo})
const buttonMessages = {
imageMessage: mhan.message.imageMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 4
}
client.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}

const sendBut = (id, text1, desc1, but = [], options = {}) => {
const buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1
}
client.sendMessage(id, buttonMessage, MessageType.buttonsMessage, options)
}
 
//**********tempo ativo**********//
if (selectedButton == `nãoDaEsseMekAiManoGay`) {
uptime = process.uptime();
client.sendMessage(from, `*${temporizado(uptime)}*`, MessageType.text, {quoted: mek})
}

if (isGroup && isLevelingOn) {
const currentLevel = getLevelingLevel(sender)
const checkId = getLevelingId(sender)
try {
if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
const amountXp = Math.floor(Math.random() * (20 - 30 + 45) + 15)
var requiredXp = 20 * Math.pow(currentLevel, 2) + 150 * currentLevel + 1000
var getLevel = getLevelingLevel(sender)
const namelv = checkId
mett = ["1", "2", "3", "4", "5"]
res = mett[Math.floor(Math.random() * mett.length)]
result = fs.readFileSync(`./base de dados/audio/bah.mp3`)
addLevelingXp(sender, amountXp)
if (requiredXp <= getLevelingXp(sender)) {
addLevelingLevel(sender, 1)
console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m LEVEL UP \x1b[1;37m]', color(pushname, "yellow"), color('subiu'), color('de', "yellow"), color('level'), color('no', "yellow"), color('grupo:'), color(groupName, "yellow"))
const level_quetod = { key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "caption": `❲👾️-❪ 𝙻ᴇᴠᴇʟ ᴜᴘ ❫-👾❳\nTag: @${namelv.split('@')[0]}\n${per}`}}}
let contentt = await getBuffer(`https://yuzzu-api.herokuapp.com/api/level?icon=https://i.ibb.co/KKgYHRW/8c5dc479e4a8a9404e292b5fc50ab8db.jpg`)
const media = await client.prepareMessage(from, contentt, MessageType.image, { thumbnail: null})
let qweriio = media.message["ephemeralMessage"] ? media.message.ephemeralMessage : media
const buttons1 = [{buttonId: `${p}perfil`, buttonText: {displayText: 'ＰＥＲＦＩＬ'}, type: 1}]
const btn1 = {contentText: `
═══╾ Lᴇᴠᴇʟ Uᴘ ╼═══   
  ➣ Numero: @${namelv.split('@')[0]}
╭════╾「👾」╼════╾
┣❲🔰❳ Xp: ${getLevelingXp(sender)}
┣❲🆙❳ Level: ${getLevel} -> ${getLevelingLevel(sender)}
┣❲〽️❳ Patente : ${role}
╰════╾「🌀」╼════╾`, buttons: buttons1, headerType: 4, imageMessage: qweriio.message.imageMessage}
client.sendMessage(from, btn1, MessageType.buttonsMessage, {quoted: mek})
}
} catch (err) {
console.error(err)
}
}

//JOGO DO ANAGRAMA
if(isGroup && fs.existsSync(`./base de dados/jogos/anagrama-${from}.json`)){
console.log(budy)
let dataAnagrama = JSON.parse(fs.readFileSync(`./base de dados/jogos/anagrama-${from}.json`))
if(budy.slice(0,4).toUpperCase() == dataAnagrama.original.slice(0,4).toUpperCase() && budy.toUpperCase() != dataAnagrama.original) return reply('está perto')
xp = Math.floor(Math.random() * 14) + 1500
dinhero = Math.floor(Math.random() * 10) + 1000000
if(budy.toUpperCase() == dataAnagrama.original) { client.sendMessage(from, `parabéns ${pushname} 🥳 você ganhou o jogo\nPalavra : ${dataAnagrama.original}\nIniciando o proximo jogo em 5 segundos...`, MessageType.text, {"mentionedJid": [sender]}), fs.unlinkSync(`./base de dados/jogos/anagrama-${from}.json`)		
addLevelingXp(sender, xp)
addKoinUser(sender, dinhero)
recompensa = `🎉🎉RECOMPENSA🎉🎉\nVocê ganhou ${xp} em *xp* e ${dinhero} em *dinhero*`
reply(recompensa)
setTimeout(async() => {
fs.writeFileSync(`./base de dados/jogos/anagrama-${from}.json`, `${JSON.stringify(palavrasANA[Math.floor(Math.random() * palavrasANA.length)])}`)
let dataAnagrama2 = JSON.parse(fs.readFileSync(`./base de dados/jogos/anagrama-${from}.json`))
client.sendMessage(from, `
╭━❒ 𝗔𝗡𝗔𝗚𝗥𝗔𝗠𝗔 🦋
│◦➛𝗗𝗲𝘀𝗰𝘂𝗯𝗿𝗮 𝗮 𝗽𝗮𝗹𝗮𝘃𝗿𝗮
│◦➛𝗔𝗡𝗔𝗚𝗥𝗔𝗠𝗔: ${dataAnagrama2.embaralhada}
│◦➛𝗗𝗜𝗖𝗔: ${dataAnagrama2.dica}
╰━━•ೋೋ•━━
`, MessageType.text) 
}, 5000)
}}
	
//=================================================//
client.on('group-participants-update', async (anu) => {
if(antifake.includes(anu.jid)) {
const mdata = await client.groupMetadata(anu.jid)
if (anu.action == 'add'){
num = anu.participants[0]
if(!num.split('@')[0].startsWith(55)) {
client.sendMessage(mdata.id, 'Numeros Fake Aqui Não Amigo 😘 bye', MessageType.text)
setTimeout(async function () {
console.log(color('[','white'), color('!','red'), color(']','white'), color('Numero Fake Banido ✅','red'))
client.groupRemove(mdata.id, [num])
}, )
}
			}
		}		
if (!welkom.includes(anu.jid)) return
try {
const mdata = await client.groupMetadata(anu.jid)
num = anu.participants[0]
console.log(anu)
ini_user = client.contacts[num]
namaewa = ini_user.notify
member = mdata.participants.length
try {
var ppimg = await client.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
} catch {
var ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
try {
var ppgc = await client.getProfilePicture(anu.jid)
} catch {
var ppgc = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
shortpc = await axios.get(`https://tinyurl.com/api-create.php?url=${ppimg}`)
shortgc = await axios.get(`https://tinyurl.com/api-create.php?url=${ppgc}`)
if (anu.action == 'add') {
img = await getBuffer(`  https://api-gdr2.herokuapp.com/api/canvas/menu?titulo=BEM VINDO(A)&nome=${encodeUrl(namaewa)}&perfil=${shortpc.data}&fundo=https://i.ibb.co/VS8WPv5/c18c1803cbe0.jpg&grupo=SEJA BEM VINDO AO GRUPO ${encodeUrl(mdata.subject)}&numero=2021&membroConta=${mdata.participants.length}`)
//	img = await getBuffer(`https://servant-of-evil.herokuapp.com/api/swiftlite/welkom?nama=${num.split('@')[0]}&gc=${encodeUrl(mdata.subject)}&ppgc=${shortgc.data}&pp=${shortpc.data}&bg=https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxANrjm0j_uzUclnOAlHjtgroMtblwSPChJg&usqp=CAU'&member=${mdata.participants.length}&apikey=GFL`)
teks = `「💡」 Olá @${num.split('@')[0]} \nBem vindo para utilizar o bot use o comando ${p}rg`
client.sendMessage(mdata.id, img, MessageType.image, {caption: teks, contextInfo: {'mentionedJid': [num]} })
} else if (anu.action == 'remove') {
img = await getBuffer(`  https://api-gdr2.herokuapp.com/api/canvas/menu?titulo=ADEUS&nome=${encodeUrl(namaewa)}&perfil=${shortpc.data}&fundo=https://i.ibb.co/VS8WPv5/c18c1803cbe0.jpg&grupo=SAIU DE ${encodeUrl(mdata.subject)}&numero=2021&membroConta=${mdata.participants.length}`)
//	img = await getBuffer(`https://servant-of-evil.herokuapp.com/api/swiftlite/goodbye?nama=${num.split('@')[0]}&gc=${encodeUrl(mdata.subject)}&ppgc=${shortgc.data}&pp=${shortpc.data}&bg=https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxANrjm0j_uzUclnOAlHjtgroMtblwSPChJg&usqp=CAU'&member=${mdata.participants.length}&apikey=GFL`)
teks = `「💡」 Tchau @${num.split('@')[0]} 👋\ntomara q nao se arrependa😔~~`
client.sendMessage(mdata.id, img, MessageType.image, {caption: teks, contextInfo: {'mentionedJid': [num]}})
} else if (anu.action == 'promote') {
img = await getBuffer(`http://hadi-api.herokuapp.com/api/card/promote?nama=${encodeUrl(namaewa)}&member=${member}&pesan=Parabéns por se tornar um adm do grupo!&pp=${shortpc.data}&bg=https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxANrjm0j_uzUclnOAlHjtgroMtblwSPChJg&usqp=CAU'`)
teks = `◪ PROMOVER DETECTADO\n\n├─ Número: ${num.replace('@s.whatsapp.net', '')}\n├─ @${num.split('@')[0]} se tornou um administrador do grupo, parabéns`
client.sendMessage(mdata.id, img, MessageType.image, {caption: teks, contextInfo: {'mentionedJid': [num]}})
} else if (anu.action == 'demote') {
img = await getBuffer(`http://hadi-api.herokuapp.com/api/card/demote?nama=${encodeUrl(namaewa)}&member=${member}&pesan=${namaewa} virou membro comum&pp=${shortpc.data}&bg=https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxANrjm0j_uzUclnOAlHjtgroMtblwSPChJg&usqp=CAU'`)
teks = `◪ DESPROMOVER DETECTADO\n\n\n├─ Número: ${num.replace('@s.whatsapp.net', '')}\n├─  @${num.split('@')[0]} Não e mais um administrador do grupo`
client.sendMessage(mdata.id, img, MessageType.image, {caption: teks, contextInfo: {'mentionedJid': [num]}})
}
} catch (e) {
console.log('Error : %s', color(e, 'red'))
}
})
client.on('CB:Blocklist', json => {
if (blocked.length > 2) return
for (let i of json[1].blocklist) {
blocked.push(i.replace('c.us','s.whatsapp.net'))
}
})

/************** jogo da velha ************/
const WinnerX = () => {
if (
(esp.a1=="❌"&&esp.a2=="❌"&&esp.a3=="❌") || (esp.b1=="❌"&&esp.b2=="❌"&&esp.b3=="❌") || (esp.c1=="❌"&&esp.c2=="❌"&&esp.c3=="❌") || 
(esp.a1=="❌"&&esp.b1=="❌"&&esp.c1=="❌") || (esp.a2=="❌"&&esp.b2=="❌"&&esp.c2=="❌") || (esp.a3=="❌"&&esp.b3=="❌"&&esp.c3=="❌") ||
(esp.a1=="❌"&&esp.b2=="❌"&&esp.c3=="❌") || (esp.a3=="❌"&&esp.b2=="❌"&&esp.c1=="❌")
) {
return true
} else {
return false
}
}

//TESTE PARA VITÓRIA DE ⭕
const WinnerO = () => {
if (
(esp.a1=="⭕"&&esp.a2=="⭕"&&esp.a3=="⭕") || (esp.b1=="⭕"&&esp.b2=="⭕"&&esp.b3=="⭕") || (esp.c1=="⭕"&&esp.c2=="⭕"&&esp.c3=="⭕") || 
(esp.a1=="⭕"&&esp.b1=="⭕"&&esp.c1=="⭕") || (esp.a2=="⭕"&&esp.b2=="⭕"&&esp.c2=="⭕") || (esp.a3=="⭕"&&esp.b3=="⭕"&&esp.c3=="⭕") ||
(esp.a1=="⭕"&&esp.b2=="⭕"&&esp.c3=="⭕") || (esp.a3=="⭕"&&esp.b2=="⭕"&&esp.c1=="⭕")
) {
return true
} else {
return false
}
}

//TESTE PARA EMPATE
const Tie = () => {
if (esp.a1!="🔲"&&esp.a2!="🔲"&&esp.a3!="🔲"&&esp.b1!="🔲"&&esp.b2!="🔲"&&esp.b3!="🔲"&&esp.c1!="🔲"&&esp.c2!="??"&&esp.c3!="🔲") {
return true
} else {
return false
}
}

const IA = () => {
if (WinnerX() || WinnerO() || Tie()) {
tttset.reActivate1 = "off"
//INICIO DO MODO IMPOSSIVEL
} else if (tttset.tttdifficulty == "IMPOSSIBLE" && ( 
//TESTE PARA TENTATIVA DE VITÓRIA
(esp.a1=="⭕"&&esp.a2=="⭕"&&esp.a3=="🔲") || (esp.a1=="⭕"&&esp.a2=="🔲"&&esp.a3=="⭕") || (esp.a1=="🔲"&&esp.a2=="⭕"&&esp.a3=="⭕") ||
(esp.b1=="⭕"&&esp.b2=="⭕"&&esp.b3=="🔲") || (esp.b1=="⭕"&&esp.b2=="🔲"&&esp.b3=="⭕") || (esp.b1=="🔲"&&esp.b2=="⭕"&&esp.b3=="⭕") ||
(esp.c1=="⭕"&&esp.c2=="⭕"&&esp.c3=="🔲") || (esp.c1=="⭕"&&esp.c2=="🔲"&&esp.c3=="⭕") || (esp.c1=="🔲"&&esp.c2=="⭕"&&esp.c3=="⭕") ||
(esp.a1=="⭕"&&esp.b1=="⭕"&&esp.c1=="🔲") || (esp.a1=="⭕"&&esp.b1=="🔲"&&esp.c1=="⭕") || (esp.a1=="🔲"&&esp.b1=="⭕"&&esp.c1=="⭕") ||
(esp.a2=="⭕"&&esp.b2=="⭕"&&esp.c2=="🔲") || (esp.a2=="⭕"&&esp.b2=="🔲"&&esp.c2=="⭕") || (esp.a2=="🔲"&&esp.b2=="⭕"&&esp.c2=="⭕") ||
(esp.a3=="⭕"&&esp.b3=="⭕"&&esp.c3=="🔲") || (esp.a3=="⭕"&&esp.b3=="🔲"&&esp.c3=="⭕") || (esp.a3=="🔲"&&esp.b3=="⭕"&&esp.c3=="⭕") ||
(esp.a1=="⭕"&&esp.b2=="⭕"&&esp.c3=="🔲") || (esp.a1=="⭕"&&esp.b2=="🔲"&&esp.c3=="⭕") || (esp.a1=="🔲"&&esp.b2=="⭕"&&esp.c3=="⭕") ||
(esp.a3=="⭕"&&esp.b2=="⭕"&&esp.c1=="🔲") || (esp.a3=="⭕"&&esp.b2=="🔲"&&esp.c1=="⭕") || (esp.a3=="🔲"&&esp.b2=="⭕"&&esp.c1=="⭕") ||
//TESTE PARA TENTATIVA DE BLOQUEIO
(esp.a1=="❌"&&esp.a2=="❌"&&esp.a3=="🔲") || (esp.a1=="❌"&&esp.a2=="🔲"&&esp.a3=="❌") || (esp.a1=="🔲"&&esp.a2=="❌"&&esp.a3=="❌") ||
(esp.b1=="❌"&&esp.b2=="❌"&&esp.b3=="🔲") || (esp.b1=="❌"&&esp.b2=="🔲"&&esp.b3=="❌") || (esp.b1=="🔲"&&esp.b2=="❌"&&esp.b3=="❌") ||
(esp.c1=="❌"&&esp.c2=="❌"&&esp.c3=="🔲") || (esp.c1=="❌"&&esp.c2=="🔲"&&esp.c3=="❌") || (esp.c1=="🔲"&&esp.c2=="❌"&&esp.c3=="❌") ||
(esp.a1=="❌"&&esp.b1=="❌"&&esp.c1=="🔲") || (esp.a1=="❌"&&esp.b1=="🔲"&&esp.c1=="❌") || (esp.a1=="🔲"&&esp.b1=="❌"&&esp.c1=="❌") ||
(esp.a2=="❌"&&esp.b2=="❌"&&esp.c2=="🔲") || (esp.a2=="❌"&&esp.b2=="🔲"&&esp.c2=="❌") || (esp.a2=="🔲"&&esp.b2=="❌"&&esp.c2=="❌") ||
(esp.a3=="❌"&&esp.b3=="❌"&&esp.c3=="🔲") || (esp.a3=="❌"&&esp.b3=="🔲"&&esp.c3=="❌") || (esp.a3=="🔲"&&esp.b3=="❌"&&esp.c3=="❌") ||
(esp.a1=="❌"&&esp.b2=="❌"&&esp.c3=="🔲") || (esp.a1=="❌"&&esp.b2=="🔲"&&esp.c3=="❌") || (esp.a1=="🔲"&&esp.b2=="❌"&&esp.c3=="❌") ||
(esp.a3=="❌"&&esp.b2=="❌"&&esp.c1=="🔲") || (esp.a3=="❌"&&esp.b2=="🔲"&&esp.c1=="❌") || (esp.a3=="🔲"&&esp.b2=="❌"&&esp.c1=="❌")
)){
tttset.reActivate1 = "off"
IAmove1()
//JOGADAS PROGRAMADAS ABAIXO
} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
((esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "❌" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "❌" && esp.c3 == "🔲") ||
(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "❌" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲"))) {
tttset.reActivate1 = "off"
esp.a1 = "⭕"
} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
((esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "❌" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌") ||
(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "❌" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
(esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌") ||
(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲"))) {
tttset.reActivate1 = "off"
esp.a2 = "⭕"
} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
((esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "❌") ||
(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "❌" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
(esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "❌" && esp.c3 == "⭕") ||
(esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌"))) {
tttset.reActivate1 = "off"
esp.a3 = "⭕"
} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
((esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "❌" && esp.c3 == "🔲") ||
(esp.a1 == "⭕" && esp.a2 == "❌" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌"))) {
tttset.reActivate1 = "off"
esp.b1 = "⭕"
} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
((esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "❌" && esp.c3 == "🔲") ||
(esp.a1 == "🔲" && esp.a2 == "??" && esp.a3 == "🔲" && esp.b1 == "❌" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "❌" && esp.c3 == "⭕") ||
(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "❌" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
(esp.a1 == "⭕" && esp.a2 == "❌" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "??" && esp.c3 == "🔲") ||
(esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "❌" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
(esp.a1 == "🔲" && esp.a2 == "❌" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "❌" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
(esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
(esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌") ||
(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "❌" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
(esp.a1 == "🔲" && esp.a2 == "❌" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "❌" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
(esp.a1 == "🔲" && esp.a2 == "❌" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
(esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "❌" && esp.c3 == "🔲") ||
(esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "❌" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "❌" && esp.c3 == "🔲") ||
(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "❌" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌") ||
(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
(esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲"))) {
tttset.reActivate1 = "off"
esp.b2 = "⭕"
} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
((esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "❌" && esp.c3 == "⭕") ||
(esp.a1 == "🔲" && esp.a2 == "❌" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲"))) {
tttset.reActivate1 = "off"
esp.b3 = "⭕"
} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
((esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "❌" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
(esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "❌" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
(esp.a1 == "⭕" && esp.a2 == "❌" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌"))) {
tttset.reActivate1 = "off"
esp.c1 = "⭕"
} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
((esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "❌" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
(esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "❌" && esp.c1 == "??" && esp.c2 == "🔲" && esp.c3 == "⭕"))) {
tttset.reActivate1 = "off"
esp.c2 = "⭕"
} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
((esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "??" && esp.c3 == "🔲") ||
(esp.a1 == "⭕" && esp.a2 == "??" && esp.a3 == "??" && esp.b1 == "🔲" && esp.b2 == "❌" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
(esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "❌" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
(esp.a1 == "🔲" && esp.a2 == "❌" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲"))) {
tttset.reActivate1 = "off"
esp.c3 = "⭕"
} else if (tttset.tttdifficulty == "IMPOSSIBLE" && (esp.a1 ==  "🔲" || esp.a3 ==  "🔲" || esp.b2 ==  "🔲" || esp.c1 ==  "🔲" || esp.c3 ==  "🔲")) {
//PRIORIZAR CANTOS E CENTRO
tttset.reActivate1 = "off"
while (tttset.reActivate3 == "on") {
priorityC()
}
tttset.reActivate3 = "on"
//FIM DO MODO IMPOSSIVEL
} else if (tttset.tttdifficulty == "HARD" && ( 
//TESTE PARA TENTATIVA DE VITÓRIA
(esp.a1=="⭕"&&esp.a2=="⭕"&&esp.a3=="🔲") || (esp.a1=="⭕"&&esp.a2=="🔲"&&esp.a3=="⭕") || (esp.a1=="🔲"&&esp.a2=="⭕"&&esp.a3=="⭕") ||
(esp.b1=="⭕"&&esp.b2=="⭕"&&esp.b3=="🔲") || (esp.b1=="⭕"&&esp.b2=="🔲"&&esp.b3=="⭕") || (esp.b1=="🔲"&&esp.b2=="⭕"&&esp.b3=="⭕") ||
(esp.c1=="⭕"&&esp.c2=="⭕"&&esp.c3=="🔲") || (esp.c1=="⭕"&&esp.c2=="🔲"&&esp.c3=="⭕") || (esp.c1=="🔲"&&esp.c2=="⭕"&&esp.c3=="⭕") ||
(esp.a1=="⭕"&&esp.b1=="⭕"&&esp.c1=="🔲") || (esp.a1=="⭕"&&esp.b1=="🔲"&&esp.c1=="⭕") || (esp.a1=="🔲"&&esp.b1=="⭕"&&esp.c1=="⭕") ||
(esp.a2=="⭕"&&esp.b2=="⭕"&&esp.c2=="🔲") || (esp.a2=="⭕"&&esp.b2=="🔲"&&esp.c2=="⭕") || (esp.a2=="🔲"&&esp.b2=="⭕"&&esp.c2=="⭕") ||
(esp.a3=="⭕"&&esp.b3=="⭕"&&esp.c3=="🔲") || (esp.a3=="⭕"&&esp.b3=="🔲"&&esp.c3=="⭕") || (esp.a3=="🔲"&&esp.b3=="⭕"&&esp.c3=="⭕") ||
(esp.a1=="⭕"&&esp.b2=="⭕"&&esp.c3=="🔲") || (esp.a1=="⭕"&&esp.b2=="🔲"&&esp.c3=="⭕") || (esp.a1=="🔲"&&esp.b2=="⭕"&&esp.c3=="⭕") ||
(esp.a3=="⭕"&&esp.b2=="⭕"&&esp.c1=="🔲") || (esp.a3=="⭕"&&esp.b2=="🔲"&&esp.c1=="⭕") || (esp.a3=="🔲"&&esp.b2=="⭕"&&esp.c1=="⭕") ||
//TESTE PARA TENTATIVA DE BLOQUEIO
(esp.a1=="❌"&&esp.a2=="❌"&&esp.a3=="🔲") || (esp.a1=="❌"&&esp.a2=="🔲"&&esp.a3=="❌") || (esp.a1=="🔲"&&esp.a2=="❌"&&esp.a3=="❌") ||
(esp.b1=="❌"&&esp.b2=="❌"&&esp.b3=="🔲") || (esp.b1=="❌"&&esp.b2=="🔲"&&esp.b3=="❌") || (esp.b1=="🔲"&&esp.b2=="❌"&&esp.b3=="❌") ||
(esp.c1=="❌"&&esp.c2=="❌"&&esp.c3=="🔲") || (esp.c1=="❌"&&esp.c2=="🔲"&&esp.c3=="❌") || (esp.c1=="🔲"&&esp.c2=="❌"&&esp.c3=="❌") ||
(esp.a1=="❌"&&esp.b1=="❌"&&esp.c1=="🔲") || (esp.a1=="❌"&&esp.b1=="🔲"&&esp.c1=="❌") || (esp.a1=="🔲"&&esp.b1=="❌"&&esp.c1=="❌") ||
(esp.a2=="❌"&&esp.b2=="❌"&&esp.c2=="🔲") || (esp.a2=="❌"&&esp.b2=="🔲"&&esp.c2=="❌") || (esp.a2=="🔲"&&esp.b2=="❌"&&esp.c2=="❌") ||
(esp.a3=="❌"&&esp.b3=="❌"&&esp.c3=="🔲") || (esp.a3=="❌"&&esp.b3=="🔲"&&esp.c3=="❌") || (esp.a3=="🔲"&&esp.b3=="❌"&&esp.c3=="❌") ||
(esp.a1=="❌"&&esp.b2=="❌"&&esp.c3=="🔲") || (esp.a1=="❌"&&esp.b2=="🔲"&&esp.c3=="❌") || (esp.a1=="🔲"&&esp.b2=="❌"&&esp.c3=="❌") ||
(esp.a3=="❌"&&esp.b2=="❌"&&esp.c1=="🔲") || (esp.a3=="❌"&&esp.b2=="🔲"&&esp.c1=="❌") || (esp.a3=="🔲"&&esp.b2=="❌"&&esp.c1=="❌")
)){
//HARD
tttset.reActivate1 = "off"
IAmove1()
} else if (tttset.tttdifficulty == "NORMAL" && ( 
//TESTE PARA TENTATIVA DE VITÓRIA
(esp.a1=="⭕"&&esp.a2=="⭕"&&esp.a3=="🔲") || (esp.a1=="⭕"&&esp.a2=="🔲"&&esp.a3=="⭕") || (esp.a1=="🔲"&&esp.a2=="⭕"&&esp.a3=="⭕") ||
(esp.b1=="⭕"&&esp.b2=="⭕"&&esp.b3=="🔲") || (esp.b1=="⭕"&&esp.b2=="🔲"&&esp.b3=="⭕") || (esp.b1=="🔲"&&esp.b2=="⭕"&&esp.b3=="⭕") ||
(esp.c1=="⭕"&&esp.c2=="⭕"&&esp.c3=="🔲") || (esp.c1=="⭕"&&esp.c2=="🔲"&&esp.c3=="⭕") || (esp.c1=="🔲"&&esp.c2=="⭕"&&esp.c3=="⭕") ||
(esp.a1=="⭕"&&esp.b1=="⭕"&&esp.c1=="??") || (esp.a1=="⭕"&&esp.b1=="🔲"&&esp.c1=="⭕") || (esp.a1=="🔲"&&esp.b1=="⭕"&&esp.c1=="⭕") ||
(esp.a2=="⭕"&&esp.b2=="⭕"&&esp.c2=="🔲") || (esp.a2=="⭕"&&esp.b2=="🔲"&&esp.c2=="⭕") || (esp.a2=="🔲"&&esp.b2=="⭕"&&esp.c2=="⭕") ||
(esp.a3=="⭕"&&esp.b3=="⭕"&&esp.c3=="🔲") || (esp.a3=="⭕"&&esp.b3=="🔲"&&esp.c3=="⭕") || (esp.a3=="🔲"&&esp.b3=="⭕"&&esp.c3=="⭕") ||
(esp.a1=="⭕"&&esp.b2=="⭕"&&esp.c3=="🔲") || (esp.a1=="⭕"&&esp.b2=="🔲"&&esp.c3=="⭕") || (esp.a1=="🔲"&&esp.b2=="⭕"&&esp.c3=="⭕") ||
(esp.a3=="⭕"&&esp.b2=="⭕"&&esp.c1=="🔲") || (esp.a3=="⭕"&&esp.b2=="🔲"&&esp.c1=="⭕") || (esp.a3=="🔲"&&esp.b2=="⭕"&&esp.c1=="⭕") ||
//TESTE PARA TENTATIVA DE BLOQUEIO
(esp.a1=="❌"&&esp.a2=="❌"&&esp.a3=="🔲") || (esp.a1=="❌"&&esp.a2=="🔲"&&esp.a3=="❌") || (esp.a1=="🔲"&&esp.a2=="❌"&&esp.a3=="❌") ||
(esp.b1=="❌"&&esp.b2=="❌"&&esp.b3=="🔲") || (esp.b1=="❌"&&esp.b2=="🔲"&&esp.b3=="❌") || (esp.b1=="??"&&esp.b2=="❌"&&esp.b3=="❌") ||
(esp.c1=="❌"&&esp.c2=="❌"&&esp.c3=="🔲") || (esp.c1=="❌"&&esp.c2=="🔲"&&esp.c3=="❌") || (esp.c1=="🔲"&&esp.c2=="❌"&&esp.c3=="❌") ||
(esp.a1=="❌"&&esp.b1=="❌"&&esp.c1=="🔲") || (esp.a1=="❌"&&esp.b1=="🔲"&&esp.c1=="❌") || (esp.a1=="🔲"&&esp.b1=="❌"&&esp.c1=="❌") ||
(esp.a2=="❌"&&esp.b2=="❌"&&esp.c2=="🔲") || (esp.a2=="❌"&&esp.b2=="🔲"&&esp.c2=="❌") || (esp.a2=="🔲"&&esp.b2=="❌"&&esp.c2=="❌") ||
(esp.a3=="❌"&&esp.b3=="❌"&&esp.c3=="🔲") || (esp.a3=="❌"&&esp.b3=="🔲"&&esp.c3=="❌") || (esp.a3=="🔲"&&esp.b3=="❌"&&esp.c3=="❌") ||
(esp.a1=="❌"&&esp.b2=="❌"&&esp.c3=="🔲") || (esp.a1=="❌"&&esp.b2=="🔲"&&esp.c3=="❌") || (esp.a1=="🔲"&&esp.b2=="❌"&&esp.c3=="❌") ||
(esp.a3=="❌"&&esp.b2=="❌"&&esp.c1=="🔲") || (esp.a3=="❌"&&esp.b2=="🔲"&&esp.c1=="❌") || (esp.a3=="🔲"&&esp.b2=="❌"&&esp.c1=="❌")
)){
//NORMAL
tttset.reActivate1 = "off"
let randomNORMAL = Math.floor(Math.random() * 3)
if (randomNORMAL == 0 || randomNORMAL == 1) {
IAmove1()
} else {
while (tttset.reActivate2 == "on") {
IAalter()
}
}
tttset.reActivate2 = "on"
} else {
//EASY / RANDOM
let randomALL = Math.floor(Math.random() * 9)
switch (randomALL) {
case 0:
if (esp.a1 == "🔲") {
tttset.reActivate1 = "off"
esp.a1 = "⭕"
}
break
case 1:
if (esp.a2 == "🔲") {
tttset.reActivate1 = "off"
esp.a2 = "⭕"
}
break
case 2:
if (esp.a3 == "🔲") {
tttset.reActivate1 = "off"
esp.a3 = "⭕"
}
break
case 3:
if (esp.b1 == "🔲") {
tttset.reActivate1 = "off"
esp.b1 = "⭕"
}
break
case 4:
if (esp.b2 == "🔲") {
tttset.reActivate1 = "off"
esp.b2 = "⭕"
}
break
case 5:
if (esp.b3 == "🔲") {
tttset.reActivate1 = "off"
esp.b3 = "⭕"
}
break
case 6:
if (esp.c1 == "🔲") {
tttset.reActivate1 = "off"
esp.c1 = "⭕"
}
break
case 7:
if (esp.c2 == "🔲") {
tttset.reActivate1 = "off"
esp.c2 = "⭕"
}
break
case 8:
if (esp.c3 == "🔲") {
tttset.reActivate1 = "off"
esp.c3 = "⭕"
}
break
}
}
}

const IAmove1 = () => {
//JOGADA PARA VITÓRIA
if (esp.a1=="⭕"&&esp.a2=="⭕"&&esp.a3=="🔲") {
esp.a3 = "⭕"
} else if (esp.a1=="⭕"&&esp.a2=="🔲"&&esp.a3=="⭕") {
esp.a2 = "⭕"
} else if (esp.a1=="🔲"&&esp.a2=="⭕"&&esp.a3=="⭕") {
esp.a1 = "⭕"
} else if (esp.b1=="⭕"&&esp.b2=="⭕"&&esp.b3=="🔲") {
esp.b3 = "⭕"
} else if (esp.b1=="⭕"&&esp.b2=="🔲"&&esp.b3=="⭕") {
esp.b2 = "⭕"
} else if (esp.b1=="🔲"&&esp.b2=="⭕"&&esp.b3=="⭕") {
esp.b1 = "⭕"
} else if (esp.c1=="⭕"&&esp.c2=="⭕"&&esp.c3=="🔲") {
esp.c3 = "⭕"
} else if (esp.c1=="⭕"&&esp.c2=="🔲"&&esp.c3=="⭕") {
esp.c2 = "⭕"
} else if (esp.c1=="🔲"&&esp.c2=="⭕"&&esp.c3=="⭕") {
esp.c1 = "⭕"
} else if (esp.a1=="⭕"&&esp.b1=="⭕"&&esp.c1=="🔲") {
esp.c1 = "⭕"
} else if (esp.a1=="⭕"&&esp.b1=="🔲"&&esp.c1=="⭕") {
esp.b1 = "⭕"
} else if (esp.a1=="🔲"&&esp.b1=="⭕"&&esp.c1=="⭕") {
esp.a1 = "⭕"
} else if (esp.a2=="⭕"&&esp.b2=="⭕"&&esp.c2=="🔲") {
esp.c2 = "⭕"
} else if (esp.a2=="⭕"&&esp.b2=="🔲"&&esp.c2=="⭕") {
esp.b2 = "⭕"
} else if (esp.a2=="🔲"&&esp.b2=="⭕"&&esp.c2=="⭕") {
esp.a2 = "⭕"
} else if (esp.a3=="⭕"&&esp.b3=="⭕"&&esp.c3=="🔲") {
esp.c3 = "⭕"
} else if (esp.a3=="⭕"&&esp.b3=="🔲"&&esp.c3=="⭕") {
esp.b3 = "⭕"
} else if (esp.a3=="🔲"&&esp.b3=="⭕"&&esp.c3=="⭕") {
esp.a3 = "⭕"
} else if (esp.a1=="⭕"&&esp.b2=="⭕"&&esp.c3=="🔲") {
esp.c3 = "⭕"
} else if (esp.a1=="⭕"&&esp.b2=="🔲"&&esp.c3=="⭕") {
esp.b2 = "⭕"
} else if (esp.a1=="🔲"&&esp.b2=="⭕"&&esp.c3=="⭕") {
esp.a1 = "⭕"
} else if (esp.a3=="⭕"&&esp.b2=="⭕"&&esp.c1=="🔲") {
esp.c1 = "⭕"
} else if (esp.a3=="⭕"&&esp.b2=="🔲"&&esp.c1=="⭕") {
esp.b2 = "⭕"
} else if (esp.a3=="🔲"&&esp.b2=="⭕"&&esp.c1=="⭕") {
esp.a3 = "⭕"
//JOGADA PARA BLOQUEIO
} else if (esp.a1=="❌"&&esp.a2=="❌"&&esp.a3=="🔲") {
esp.a3 = "⭕"
} else if (esp.a1=="❌"&&esp.a2=="🔲"&&esp.a3=="❌") {
esp.a2 = "⭕"
} else if (esp.a1=="🔲"&&esp.a2=="❌"&&esp.a3=="❌") {
esp.a1 = "⭕"
} else if (esp.b1=="❌"&&esp.b2=="❌"&&esp.b3=="🔲") {
esp.b3 = "⭕"
} else if (esp.b1=="❌"&&esp.b2=="🔲"&&esp.b3=="❌") {
esp.b2 = "⭕"
} else if (esp.b1=="🔲"&&esp.b2=="❌"&&esp.b3=="❌") {
esp.b1 = "⭕"
} else if (esp.c1=="❌"&&esp.c2=="❌"&&esp.c3=="🔲") {
esp.c3 = "⭕"
} else if (esp.c1=="❌"&&esp.c2=="🔲"&&esp.c3=="❌") {
esp.c2 = "⭕"
} else if (esp.c1=="🔲"&&esp.c2=="❌"&&esp.c3=="❌") {
esp.c1 = "⭕"
} else if (esp.a1=="❌"&&esp.b1=="❌"&&esp.c1=="🔲") {
esp.c1 = "⭕"
} else if (esp.a1=="❌"&&esp.b1=="🔲"&&esp.c1=="❌") {
esp.b1 = "⭕"
} else if (esp.a1=="🔲"&&esp.b1=="❌"&&esp.c1=="❌") {
esp.a1 = "⭕"
} else if (esp.a2=="❌"&&esp.b2=="❌"&&esp.c2=="🔲") {
esp.c2 = "⭕"
} else if (esp.a2=="❌"&&esp.b2=="🔲"&&esp.c2=="❌") {
esp.b2 = "⭕"
} else if (esp.a2=="🔲"&&esp.b2=="❌"&&esp.c2=="❌") {
esp.a2 = "⭕"
} else if (esp.a3=="❌"&&esp.b3=="❌"&&esp.c3=="🔲") {
esp.c3 = "⭕"
} else if (esp.a3=="❌"&&esp.b3=="🔲"&&esp.c3=="❌") {
esp.b3 = "⭕"
} else if (esp.a3=="🔲"&&esp.b3=="❌"&&esp.c3=="❌") {
esp.a3 = "⭕"
} else if (esp.a1=="❌"&&esp.b2=="❌"&&esp.c3=="🔲") {
esp.c3 = "⭕"
} else if (esp.a1=="❌"&&esp.b2=="🔲"&&esp.c3=="❌") {
esp.b2 = "⭕"
} else if (esp.a1=="🔲"&&esp.b2=="❌"&&esp.c3=="❌") {
esp.a1 = "⭕"
} else if (esp.a3=="❌"&&esp.b2=="❌"&&esp.c1=="🔲") {
esp.c1 = "⭕"
} else if (esp.a3=="❌"&&esp.b2=="🔲"&&esp.c1=="❌") {
esp.b2 = "⭕"
} else if (esp.a3=="🔲"&&esp.b2=="❌"&&esp.c1=="❌") {
esp.a3 = "⭕"
}
}

//MOVIMENTO ALTERNATIVO
const IAalter = () => {
let randomALTER = Math.floor(Math.random() * 9)
switch (randomALTER) {
case 0:
if (esp.a1 == "🔲") {
tttset.reActivate2 = "off"
esp.a1 = "⭕"
}
break
case 1:
if (esp.a2 == "🔲") {
tttset.reActivate2 = "off"
esp.a2 = "⭕"
}
break
case 2:
if (esp.a3 == "🔲") {
tttset.reActivate2 = "off"
esp.a3 = "⭕"
}
break
case 3:
if (esp.b1 == "🔲") {
tttset.reActivate2 = "off"
esp.b1 = "⭕"
}
break
case 4:
if (esp.b2 == "🔲") {
tttset.reActivate2 = "off"
esp.b2 = "⭕"
}
break
case 5:
if (esp.b3 == "🔲") {
tttset.reActivate2 = "off"
esp.b3 = "⭕"
}
break
case 6:
if (esp.c1 == "🔲") {
tttset.reActivate2 = "off"
esp.c1 = "⭕"
}
break
case 7:
if (esp.c2 == "🔲") {
tttset.reActivate2 = "off"
esp.c2 = "⭕"
}
break
case 8:
if (esp.c3 == "🔲") {
tttset.reActivate2 = "off"
esp.c3 = "⭕"
}
break
}
}

//JOGAR NOS CANTOS E CENTRO - IMPOSSIVEL
const priorityC = () => {
let randomPriC = Math.floor(Math.random() * 5)
switch (randomPriC) {
case 0 :
if (esp.a1 == "🔲") {
tttset.reActivate3 = "off"
esp.a1 = "⭕"
}
break
case 1 :
if (esp.a3 == "🔲") {
tttset.reActivate3 = "off"
esp.a3 = "⭕"
}
break
case 2 :
if (esp.b2 == "🔲") {
tttset.reActivate3 = "off"
esp.b2 = "⭕"
}
break
case 3 :
if (esp.c1 == "🔲") {
tttset.reActivate3 = "off"
esp.c1 = "⭕"
}
break
case 4 :
if (esp.c3 == "🔲") {
tttset.reActivate3 = "off"
esp.c3 = "⭕"
}
break
}
}
 //function leveling
if (isGroup && isLevelingOn) {
const currentLevel = getLevelingLevel(sender)
const checkId = getLevelingId(sender)
try {
if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
const amountXp = Math.floor(Math.random() * 10) + 500
const requiredXp = 10000 * (Math.pow(2, currentLevel) - 1)
const getLevel = getLevelingLevel(sender)
addLevelingXp(sender, amountXp)
if (requiredXp <= getLevelingXp(sender)) {
addLevelingLevel(sender, 1)
await reply(`*「 LEVEL UP 」*\n\n➸ *Nome*: ${sender}\n➸ *XP*: ${getLevelingXp(sender)}\n➸ *Level*: ${getLevel} -> ${getLevelingLevel(sender)}\n\nParabéns!!  🎉🎉`)
}
} catch (err) {
console.error(err)
}
}

client.on('CB:action,,battery', json => {
global.batteryLevelStr = json[2][0][1].value
global.batterylevel = parseInt(batteryLevelStr)
baterai = batterylevel
if (json[2][0][1].live == 'true') charging = true
if (json[2][0][1].live == 'false') charging = false
})
global.p
global.batrei = global.batrei ? global.batrei : []
client.on('CB:action,,battery', json => {
const batteryLevelStr = json[2][0][1].value
const batterylevel = parseInt(batteryLevelStr)
global.batrei.push(batterylevel)
})
   
/********** FUCTION BATERIA **********/
client.on('CB:action,,battery', json => {
global.batteryLevelStr = json[2][0][1].value
global.batterylevel = parseInt(batteryLevelStr)
var baterai = batterylevel
if (json[2][0][1].live == 'true') charging = true
if (json[2][0][1].live == 'false') charging = false
console.log(color('🔋Carga da bateria: ' + batterylevel+'%', "yellow"))
})

const time2 = moment().tz('America/Sao_Paulo').format('HH:mm:ss')
if(time2 < "23:00:00"){
var ucapanWaktu = 'Boa Noite'
}
if(time2 < "19:00:00"){
var ucapanWaktu = 'Boa Noite'
}
if(time2 < "18:00:00"){
var ucapanWaktu = 'Boa Tarde'
}
if(time2 < "12:00:00"){
var ucapanWaktu = 'Boa Tarde'
}
if(time2 < "11:00:00"){
var ucapanWaktu = 'Bom Dia'
}
if(time2 < "05:00:00"){
var ucapanWaktu = 'Bom dia'
}
/********** FUCTION LEVELING **********/
var per = '*[▒▒▒▒▒▒▒▒▒▒] 0%*'
const peri = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
const perl = peri-getLevelingXp(sender) 
const resl = Math.round(100-((perl/getLevelingXp(sender))*100))
if (resl <= 10) {
per = `*[█▒▒▒▒▒▒▒▒▒] ${resl}%*`
} else if (resl <= 20) {
per = `*[██▒▒▒▒▒▒▒▒] ${resl}%*`
} else if (resl <= 30) {
per = `*[███▒▒▒▒▒▒▒] ${resl}%*`
} else if (resl <= 40) {
per = `*[████▒▒▒▒▒▒] ${resl}%*`
} else if (resl <= 50) {
per = `*[█████▒▒▒▒▒] ${resl}%*`
} else if (resl <= 60) {
per = `*[██████▒▒▒▒] ${resl}%*`
} else if (resl <= 70) {
per = `*[███████▒▒▒] ${resl}%*`
} else if (resl <= 80) {
per = `*[████████▒▒] ${resl}%*`
} else if (resl <= 90) {
per = `*[█████████▒] ${resl}%*`
} else if (resl <= 100) {
per = `*[██████████] ${resl}%*`
} 
const levelRole = getLevelingLevel(sender)
var role = 'Bronze I🥉'
if (levelRole <= 3) {
role = 'Bronze I 🥉'
} else if (levelRole <= 5)  {
role = 'Bronze II 🥉'
} else if (levelRole <= 10) {
role = 'Bronze III 🥉'
} else if (levelRole <= 15) {
role = 'Bronze IV 🥉'
} else if (levelRole <= 20) {
role = 'Bronze V 🥉'
} else if (levelRole <= 25) {
role = 'Prata I 🥈'
} else if (levelRole <= 30) {
role = 'Prata II 🥈'
} else if (levelRole <= 35) {
role = 'Prata III 🥈'
} else if (levelRole <= 40) {
role = 'Prata IV 🥈'
} else if (levelRole <= 45) {
role = 'Prata V 🥈'
} else if (levelRole <= 50) {
role = 'Ouro I 🥇'
} else if (levelRole <= 55) {
role = 'Ouro II 🥇'
} else if (levelRole <= 60) {
role = 'Ouro III 🥇'
} else if (levelRole <= 65) {
role = 'Ouro IV 🥇'
} else if (levelRole <= 70) {
role = 'Ouro V 🥇'
} else if (levelRole <= 75) {
role = 'Campeão I 🏆'
} else if (levelRole <= 80) {
role = 'Campeão II 🏆'
} else if (levelRole <= 85) {
role = 'Campeão III 🏆'
} else if (levelRole <= 90) {
role = 'Campeão IV 🏆'
} else if (levelRole <= 95) {
role = 'Campeão V 🏆'
} else if (levelRole <= 100) {
role = 'Diamante I 💎'
} else if (levelRole <= 110) {
role = 'Diamante II 💎'
} else if (levelRole <= 120) {
role = 'Diamante III 💎'    
} else if (levelRole <= 130) {
role = 'Diamante IV 💎'
} else if (levelRole <= 140) {
role = 'Diamante V 💎'
} else if (levelRole <= 150) {
role = 'Mestre I 🔥' 
} else if (levelRole <= 170) {
role = 'Mestre II 🔥' 
} else if (levelRole <= 180) {
role = 'Mestre III 🔥'
} else if (levelRole <= 190) {
role = 'Mestre IV 🔥'
} else if (levelRole <= 200) {
role = 'Mestre V 🔥' 
} else if (levelRole <= 250) {
role = 'Mítico I 🔮'
} else if (levelRole <= 300) {
role = 'Mítico II 🔮'
} else if (levelRole <= 350) {
role = 'Mítico III 🔮'
} else if (levelRole <= 400) {
role = 'Mítico IV 🔮' 
} else if (levelRole <= 450) {
role = 'Mítico V 🔮'   
} else if (levelRole <= 500) {
role = 'Lenda I ⚡'
} else if (levelRole <= 550) {
role = 'Lenda II ⚡'
} else if (levelRole <= 600) {
role = 'Lenda III ⚡'
} else if (levelRole <= 650) {
role = 'Lenda IV ⚡'
} else if (levelRole <= 700) {
role = 'Lenda V ⚡'
} else if (levelRole <= 750) {
role = 'Lendário I 🎑'
} else if (levelRole <= 800) {
role = 'Lendário II 🎑'
} else if (levelRole <= 850) {
role = 'Lendário III 🎑'
} else if (levelRole <= 900) {
role = 'Lendário IV 🎑'
} else if (levelRole <= 910) {
role = 'Lendário V 🎑'
} else if (levelRole <= 920) {
role = 'EL guxta I 🏅'
} else if (levelRole <= 930) {
role = 'EL guxta II 🏅'
} else if (levelRole <= 940) {
role = 'EL guxta III 🏅'
} else if (levelRole <= 950) {
role = 'EL guxta IV 🏅'
} else if (levelRole <= 10000) {
role = 'EL guxta V 🏅'
}
var tipo = 'COMUM'
if (dono) {
tipo = 'CRIADOR️'
} 
if (isPrem) {
tipo = 'PREMIUM️'
} 
if (isGroupAdmins) {
tipo = '️ADMIN️'
} 
var clã = 'Não esta em nenhum clã'
if (isUzumaki) {
clã = '⚜️UZUMAKI🔱'
} 
if (isUchiha) {
clã = '🚂guxta💨'
}   
if (isNakano) {
clã = '💜NAKANO♥️'
}
if (isHatake) {
clã = '⚡HATAKE⚡'
}   
if (isAkatsuki) {
clã = '🩸AKATSUKI🩸'
}   
let palavrasANA = [
{
original: 'NETFLIX',
embaralhada: 'TFLIXNE',
dica: 'APLICATIVO'
},
{
original: 'YOUTUBE',
embaralhada: 'TUBEYOU',
dica: 'APLICATIVO'
},
{
original: 'PORTUGAL',
embaralhada: 'TUGALPOR',
dica: 'PAÍS'
},
{
original: 'PISTOLA',
embaralhada: 'TOPISLA',
dica: 'OBJETO'
},

{
original: 'CAMARÃO',
embaralhada: 'MARÃOCA',
dica: 'COMIDA'
},
{
original: 'HIDRANTE',
embaralhada: 'TEHDIRAN',
dica: 'OBJETO'
},
{
original: 'FOGUETE',
embaralhada: 'TEFOGUE',
dica: 'OBJETO'
},
{
original: 'SKATE',
embaralhada: 'TEASK',
dica: 'OBJETO'
},
{
original: 'MACACO',
embaralhada: 'CACOMA',
dica: 'ANIMAL'
},
{
original: 'LASANHA',
embaralhada: 'NHASALA',
dica: 'COMIDA'
},
{
original: 'PASTEL',
embaralhada: 'PATELS',
dica: 'COMIDA'
},
{
original: 'COXINHA',
embaralhada: 'XICONHA',
dica: 'COMIDA'
},
{
original: 'BICICLETA',
embaralhada: 'CIBITACLE',
dica: 'OBJETO'
},
{
original: 'SASUKE',
embaralhada: 'ESASUK',
dica: 'PERSONAGEM'
},
{
original: 'CAVALO',
embaralhada: 'LACAVO',
dica: 'ANIMAL'
},
{
original: 'LEVI',
embaralhada: 'EVIL',
dica: 'PERSONAGEM'
},
{
original: 'KAMAITACHI',
embaralhada: 'TAICAMAKHI',
dica: 'CANTOR'
},
{
original: 'LUBA',
embaralhada: 'UBAL',
dica: 'YOUTUBER'
},
{
original: 'GRÊMIO',
embaralhada: 'OMÊGRI',
dica: 'TIME'
},
{
original: 'SATURNO',
embaralhada: 'UTARSON',
dica: 'PLANETA'
},
{
original: 'MIKASA',
embaralhada: 'KAMISA',
dica: 'PERSONAGEM'
},
{
original: 'LEÃO',
embaralhada: 'OLEÃ',
dica: 'ANIMAL'
},
{
original: 'SAKURA',
embaralhada: 'SUKARA',
dica: 'PERSONAGEM'
},
{
original: 'HADES',
embaralhada: 'SEDAH',
dica: 'MITOLOGIA'
},
{
original: 'CORRIDA',
embaralhada: 'ARROCID',
dica: 'ESPORTE'
},
{
original: 'ODIN',
embaralhada: 'NODI',
dica: 'MITOLOGIA'
},
{
original: 'BICICLETA',
embaralhada: 'CIBITACLE',
dica: 'OBJETO'
},
{
original: 'BICICLETA',
embaralhada: 'CIBITACLE',
dica: 'OBJETO'
},
{
original: 'GUATEMALA',
embaralhada: 'LATEMAGUA',
dica: 'PAÍS'
},
{
original: 'CEREJA',
embaralhada: 'ECREJA',
dica: 'FRUTA'
},
{
original: 'VENEZUELA',
embaralhada: 'ZUNEEVELA',
dica: 'PAÍS'
},
{
original: 'HISTÓRIA',
embaralhada: 'TÓRISIAH',
dica: 'MATÉRIA'
},
{
original: 'INSTAGRAM',
embaralhada: 'TAGRAMINS',
dica: 'APLICATIVO'
},
{
original: 'WHATSAPP',
embaralhada: 'TSWHAAPP',
dica: 'APLICATIVO'
},
{
original: 'HIDRANTE',
embaralhada: 'TEHDIRAN',
dica: 'OBJETO'
},
{
original: 'CELULAR',
embaralhada: 'CELARLU',
dica: 'OBJETO'
},
{
original: 'NOTEBOOK',
embaralhada: 'TENOBOOK',
dica: 'OBJETO'
},
{
original: 'COMPUTADOR',
embaralhada: 'PUCOMDORTA',
dica: 'OBJETO'
},
{
original: 'LANTERNA',
embaralhada: 'TERLANNA',
dica: 'OBJETO'
},
{
original: 'CACHORRO',
embaralhada: 'CAORROCHO',
dica: 'ANIMAL'
},
{
original: 'DESENTUPIDOR',
embaralhada: 'SENDETUDORPI',
dica: 'OBJETO'
},
{
original: 'TOMATE',
embaralhada: 'ATEMOT',
dica: 'ALIMENTO'
},
{
original: 'SAXOFONE',
embaralhada: 'ASXOEOFN',
dica: 'INSTRUMENTO MUSICAL'
},
{
original: 'CAZAQUISTÃO',
embaralhada: 'ZAACQIUSÃOT',
dica: 'PAÍS'
},
{
original: 'CROÁCIA',
embaralhada: 'CRCÁOAI',
dica: 'PAÍS'
},
{
original: 'HUNGRIA',
embaralhada: 'UHGINRA',
dica: 'PAÍS'
},
{
original: 'MEGAFONE',
embaralhada: 'MOEFGNEA',
dica: 'OBJETO'
},
{
original: 'CINTURA',
embaralhada: 'RCIANUT',
dica: 'CORPO HUMANO'
},
{
original: 'SACOLE',
embaralhada: 'ESCLOA',
dica: 'NOME'
},
{
original: 'MARIA',
embaralhada: 'MRIAA',
dica: 'NOME'
},
{
original: 'PARALELEPÍPEDO',
embaralhada: 'dolepilepapera',
dica: 'forma geometrica'
},
{
original: 'BRASIL',
embaralhada: 'LBARSI',
dica: 'PAÍS'
},
{
original: 'GIRAFA',
embaralhada: 'FRAGAI',
dica: 'ANIMAL'
},
{
original: 'ELEFANTE',
embaralhada: 'FATELEEN',
dica: 'ANIMAL'
},
{
original: 'ABDÔMEN',
embaralhada: 'MBÔDENA',
dica: 'CORPO HUMANO'
},
{
original: 'VAGNER',
embaralhada: 'GNEVAR',
dica: 'NOME'
},
{
original: 'GUSTA',
embaralhada: 'ATUSG',
dica: 'MEU CRIADOR'
},
{
original: 'TANGERINA',
embaralhada: 'RITAANGNE',
dica: 'ALIMENTO'
}
]

const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
const buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1
}
client.sendMessage(id, buttonMessage, MessageType.buttonsMessage, options)
}
//********** Visualizar msg **********//
client.chatRead(from)


/********** MENSAGENS DO BOT **********/
var replys = ["[ ! ] Aguarde amigo, estou fazendo...", "Ja estou terminando de enviar...", "Calma ae, tô enviando já!!", "❬❗❭ Aguarde um pouco...", "Seu pedido é uma ordem", "Calma tô terminando de fazer..", "Já estou preparando pra enviar, Aguarde..", "Salve mano, só aguarde um pouquinho!!", "Aquieta o coração amigo!", "Espere sentado que estou enviando!", "Pisa no freio aí tô enviando já!", "Foi daqui que pediram comando?...", "Em 365 dias úteis termino o comando kkkj!", "tô terminando aqui vai bebar uam água!", "Seu pedido é uma ordem!", "Jaja está na mão amigo, aguarde!", "Quem espera, sempre alcança","Tô enviando já amigão!"]
gosto = body.slice(3)
var replys_aiai = replys[Math.floor(Math.random() * (replys.length))]
hasil = `${gosto} ai ${replys_aiai}`


//********** VERIFICADO **********//
const say3 = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `6283136505591-1614953337@g.us` } : {}) }, message: { 'contactMessage': { 'displayName': `${nomedobot}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;megumin,;;;\nFN:megumin,\nitem1.TEL;item1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync(`./guxta/fotos/guxta.jpg`), thumbnail:fs.readFileSync(`./guxta/fotos/guxta.jpg`),sendEphemeral: true}}}
const ftroli2 ={"key": {   "fromMe": false,"participant":"0@s.whatsapp.net",   "remoteJid": "6289523258649-1604595598@g.us"  }, "message": {orderMessage: {itemCount: 10,status: 200, thumbnail: fs.readFileSync(`./guxta/fotos/guxta.jpg`), surface: 200, message: `Made with ❣️ `, orderTitle: 'sacole', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
const menu ={"key": {   "fromMe": false,"participant":"0@s.whatsapp.net",   "remoteJid": "6289523258649-1604595598@g.us"  }, "message": {orderMessage: {itemCount: 10,status: 200, thumbnail: fs.readFileSync(`./guxta/fotos/guxta.jpg`), surface: 200, message: `Made with ❣️ `, orderTitle: 'sacole', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
const say2 ={"key": {   "fromMe": false,"participant":"0@s.whatsapp.net",   "remoteJid": "556293294732-1625944593@g.us"  }, "message": {orderMessage: {itemCount: 34,status: 200, thumbnail: fs.readFileSync(`./guxta/fotos/guxta.jpg`), surface: 200, message: ` `, orderTitle: 'sacole', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}

//**********Const para função inportante**********//
const isUrl = (url) => {
return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
}
const enviar = (teks) => {
client.sendMessage(from, teks, text, {quoted:mek})
}
const reply = (teks) => {
client.sendMessage(from, teks, text, {quoted:mek})
}
const sendMess = (hehe, teks) => {
client.sendMessage(hehe, teks, text)
}

const addATM = (sender) => {
const obj = {id: sender, dinheiro : 0}
dinheiro.push(obj)
fs.writeFileSync('./base de dados/dinheiro/dinheiro.json', JSON.stringify(dinheiro))
}
 
const addKoinUser = (sender, amount) => {
let position = false
Object.keys(dinheiro).forEach((i) => {
if (dinheiro[i].id === sender) {
position = i
}
})
if (position !== false) {
dinheiro[position].dinheiro += amount
fs.writeFileSync('./base de dados/dinheiro/dinheiro.json', JSON.stringify(dinheiro))
}
}
 
const fgclink = {
"key": {
"fromMe": false,
"participant": "0@s.whatsapp.net",
"remoteJid": "0@s.whatsapp.net"
},
"message": {
"groupInviteMessage": {
"groupJid": "6288213840883-1616169743@g.us",
"inviteCode": "NgsCIU2lXKh3VHJT",
"groupName": `${ucapanWaktu} ${pushname}\n⎇ ${comando}`, 
"caption": `${ucapanWaktu} ${pushname}\n⎇ ${comando}`, 
'jpegThumbnail': fs.readFileSync('./guxta/fotos/guxta.jpg')
}
}
}
const checkATMuser = (sender) => {
let position = false
Object.keys(dinheiro).forEach((i) => {
if (dinheiro[i].id === sender) {
position = i
}
})
if (position !== false) {
return dinheiro[position].dinheiro
}
}
  
const confirmATM = (sender, amount) => {
let position = false
Object.keys(dinheiro).forEach((i) => {
if (dinheiro[i].id === sender) {
position = i
}
})
if (position !== false) {
dinheiro[position].dinheiro -= amount
fs.writeFileSync('./base de dados/dinheiro/dinheiro.json', JSON.stringify(dinheiro))
}
}   
client.on('group-participants-update', async (anu) => {
if (!welkom.includes(anu.jid)) return
try {
const mdata = await client.groupMetadata(anu.jid)
console.log(anu)
if (anu.action == 'add') {
num = anu.participants[0]
try {
ppimg = await client.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
teks = `𝐎𝐩𝐚 @${num.split('@')[0]}\n𝖡𝖾𝗆 𝗏𝗂𝗇𝖽𝗈 𝖺𝗈 𝗀𝗋𝗎𝗉𝗈 *${mdata.subject}*\n\n𝗅𝖾𝗂𝖺 𝖺𝗌 𝗋𝖾𝗀𝗋𝖺𝗌 𝗉𝗋𝖺 𝖾𝗏𝗂𝗍𝖺𝗋 𝖻𝖺𝗇𝗂𝗆𝖾𝗇𝖽𝗈❤️\n ${mdata.desc}`
let buff = await getBuffer(ppimg)
client.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
img = ('./guxta/figurinhas/delaglck.webp')
buffer = fs.readFileSync(img)
client.sendMessage(from, buffer, sticker, {quoted: mek})
} else if (anu.action == 'remove') {
num = anu.participants[0]
try {
ppimg = await client.getProfilePicture(`${num.split('@')[0]}@c.us`)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
teks = `@${num.split('@')[0]} 𝘍𝘰𝘪 𝘮𝘦𝘪𝘰 𝘵𝘢𝘳𝘥𝘦 𝘯𝘦́𝘬𝘬𝘬𝘬 𝘱𝘰𝘥𝘦𝘳𝘪𝘢 𝘵𝘦𝘳 𝘪𝘥𝘰 𝘲𝘶𝘢𝘯𝘥𝘰 𝘤𝘩𝘦𝘨𝘰𝘶😂👋`
let buff = await getBuffer(ppimg)
client.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
}
} catch (e) {
console.log('Error : %s', color(e, 'red'))
}
})

//botão 1
if (selectedButton == `.numero`) {
reply(`╭─────≽
╰────────────≽
─≽Wa.me/5511973664069
╭────────────≽
╰─────≽`)
}
if (selectedButton == `.canal`) {
reply(`╭─────≽
╰────────────≽
https://youtube.com/channel/UCqJOcwjb3ksaVUtuEPl9y4Q
╭────────────≽
╰─────≽`)
}
if (selectedButton == `.grupo`) {
reply(`╭─────≽
╰──────────≽
https://chat.whatsapp.com/F7Cb9coUmjVJFHRF9QgjZw
╭──────────≽
╰─────≽`)
}

//**********Comandos sem prefixo**********//
if (messagesC.includes("oi")){
client.updatePresence(from, Presence.composing)
reply(`Oie ${pushname} como vai?`)
}
if (messagesC.includes("gay")){
client.updatePresence(from, Presence.composing)
reply("🌈Somos 🙈🏳️‍🌈")
}
if (messagesC.includes("vsfd")){
client.updatePresence(from, Presence.composing)
reply("vamos juntas(o)?")
}
if (messagesC.includes("lixo")){
client.updatePresence(from, Presence.composing)
reply("Tua mãe q te fez fdp!")
}
if (messagesC.includes("bot")){
client.updatePresence(from, Presence.composing)
reply(`Estou aqui ${pushname}!`)
}
if (messagesC.includes("gostoza")){
client.updatePresence(from, Presence.composing)
reply("A para assim eu fico de pau duro👉🏻👈🏻")
}
if (messagesC.includes("linda")){
client.updatePresence(from, Presence.composing)
reply(`Aaaa ${pushname} q fofo me da um beijo?`)
}
if (messagesC.includes("porra")){
client.updatePresence(from, Presence.composing)
reply(`Olha a xiu sem palavrão c não toma ban`)
}
if (messagesC.includes("caralho")){
client.updatePresence(from, Presence.composing)
reply(`Olha a xiu sem palavrão c não toma ban`)
}
if (messagesC.includes("minha+pica")){
client.updatePresence(from, Presence.composing)
reply(`Olha a xiu sem palavrão c não toma ban`)
}
if (messagesC.includes("fdp")){
client.updatePresence(from, Presence.composing)
reply(`Me mama vadia`)
}
if (messagesC.includes("pnc")){
client.updatePresence(from, Presence.composing)
reply(`Olha a xiu sem palavrão c não toma ban`)
}
if (messagesC.includes("cu")){
client.updatePresence(from, Presence.composing)
reply(`Olha a xiu sem palavrão c não toma ban`)
}
if (messagesC.includes("bot")){
tujuh = fs.readFileSync('./guxta/figurinhas/guxta.webp');
client.sendMessage(from, tujuh, sticker, {quoted: mek})
}

//**********Tipo de midia**********//
colors = ['red','white','black','blue','yellow','green']
const isMedia = (type === 'imageMessage' || type === 'videoMessage')
const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
body = (type === 'conversation' && mek.message.conversation.startsWith(p)) ? mek.message.conversation : (type == 'imageMessage') && mek.message[type].caption.startsWith(p) ? mek.message[type].caption : (type == 'videoMessage') && mek.message[type].caption.startsWith(p) ? mek.message[type].caption : (type == 'extendedTextMessage') && mek.message[type].text.startsWith(p) ? mek.message[type].text : (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId ? mek.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : (type == 'stickerMessage') && ((mek.message[type].fileSha256.toString('base64')) !== null && (mek.message[type].fileSha256.toString('base64')) !== undefined) ? (mek.message[type].fileSha256.toString('base64')) : ""
budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
selectedButton = (type == 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedButtonId : ''

//**********Let**********//
let senderr = mek.key.fromMe ? client.user.jid : mek.key.remoteJid.endsWith('@g.us') ? mek.participant : mek.key.remoteJid

//**********Comandos**********//
if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mCMD\x1b[1;37m]', time, color(comando), 'de', color(pushname), color(sender.split('@')[0]),'args :', color(args.length))
if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mCMD\x1b[1;37m]', time, color(comando), 'de', color(pushname), color(sender.split('@')[0]), 'grupo', color(groupName), 'args :', color(args.length))

//**********Mensagemns**********//
if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mMSG\x1b[1;37m]', time, color('Mensagem'), 'de', color(pushname), color(sender.split('@')[0]), 'args :', color(args.length))
if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mMSG\x1b[1;37m]', time, color('Mensagem'), 'de', color(pushname), color(sender.split('@')[0]), 'grupo', color(groupName), 'args :', color(args.length))

//********** COMEÇO  DOS COMANDOS **********//
switch(comando) {

//**********Registro**********//
case 'registrar':
case 'login':  
if (console.log == "marker was not found")
reply('ocorreu um erro\n\nTente novamente. ')
if (isRegistrar) return  reply(`ola ${pushname} Você já está registrado`)
if (!q.includes('/')) return  reply(` Formato errado coloque assim:\n\n*${p}login ${pushname}/15*`)
const nome = q.substring(0, q.indexOf('/') - 0)
const idade = q.substring(q.lastIndexOf('/') + 1)
const idseri = sayoseri(20)
if(isNaN(idade)) return await reply('A idade precisa ser um número!!')
if (nome.length >= 30) return reply(`seu nome e muito grande!!!`)
if (idade > 40) return reply(`Precisa ter no maximo 40 anos`)
if (idade < 12) return reply(`Precisa ter no mínimo 12 anos`)
try {
var ppimg = await client.getProfilePicture(`${sender.split('@')[0]}@c.us`)
 } catch {
var ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
 }
buff = await getBuffer(ppimg)
const kentod = 
`
╭─「 SEU REGISTRO 」
│Registro bem-sucedido com
│ID: ${idseri}
│horário ${time}
│Nome: ${nome}
│Idade: ${idade}
│Número: wa.me/${sender.split('@')[0]}
│Obrigado por se registrar
│Para usar o bot digite ${p}menu
│Total de usuários registrados: ${registro.length}
╰───────────────────
`
veri = sender
if (idade > 17)
addRegisteredUser18(sender, nome, idade, time, idseri)
if (isGroup) {
addRegisteredUser(sender, nome, idade, time, idseri)
await client.sendMessage(from, buff, image, {sendEphemeral: true, contextInfo: { forwardingScore: 508, isForwarded: true}, quoted: mek, caption: `${kentod}`})
addATM(sender)  
console.log(color('[REGISTRO]'), color(time, 'yellow'), 'Nome:', color(nome, 'cyan'), 'Idade:', color(idade, 'cyan'), 'id:', color(idseri, 'cyan'), 'em', color(sender || groupName))
} else {
addRegisteredUser(sender, nome, idade, time, idseri)
await client.sendMessage(from, buff, image, {sendEphemeral: true, contextInfo: { forwardingScore: 508, isForwarded: true}, quoted: mek, caption: `${kentod}`})
addATM(sender)
console.log(color('[REGISTRO]'), color(time, 'yellow'), 'Nome:', color(nome, 'cyan'), 'Idade:', color(idade, 'cyan'), 'id:', color(idseri, 'cyan'))}  
break

//**********Menus principais**********//
case 'menu':
if (!isRegistrar) return reply(mess.registro)
const botao = [
{buttonId: 'null', buttonText: {displayText: `𝙾𝙺 ${nomedobot}`}, type: 1},
]
const botaoMensagem = {
contentText: `${replys_aiai}`,
footerText: ` `,
buttons: botao,
headerType: 1
}
client.sendMessage(from, botaoMensagem, MessageType.buttonsMessage, {quoted: mek})
buttons = [{buttonId: `.perfil`,buttonText:{displayText: 'SEU PERFIL'},type:1},{buttonId:`.criador`,buttonText:{displayText:'CRIADOR'},type:1}]
totalChat = await client.chats.all()
imageMsg = (await client.prepareMessageMedia(fs.readFileSync(`./guxta/fotos/guxta2.jpg`), 'imageMessage', {thumbnail: fs.readFileSync(`./guxta/fotos/guxta2.jpg`)})).imageMessage

guxtanocontrole = `
╭═━═━═━ • ❪ ${ucapanWaktu} ❫ • ═━═━═━
║                   ${dc} ${time} ${cd}
╿╭═─═─═─═─ • ◆ • ─═─═─═─═─═
║║                   ⃝⃕𝙸𝙽𝙵𝙾 𝙳𝙾 𝙱𝙾𝚃⃝⃕
╿╞═─═─═─═─ • ◆ • ─═─═─═─═─═
╿║PREFIXO: ⟬${p}⟭
║╿DONO: ${nomedono}
╿║NOME: ${nomedobot}
╿╰═─═─═─═─ • ◆ • ─═─═─═─═─═
├───────────────────────
║╭═─═─═─═─ • ◆ • ─═─═─═─═─═
╿║              ⃝⃕𝙸𝙽𝙵𝙾 𝙳𝙴 𝚄𝚂𝚄𝙰𝚁𝙸𝙾⃝⃕
║╞═─═─═─═─ • ◆ • ─═─═─═─═─═
╿║CLÃ: ${clã}
║╿TIPO: ${tipo}
╿║NOME: ${pushname} 
║╿PATENTE: ${role}
╿║SEU DINHEIRO: ${checkATMuser(sender)}
║╰═─═─═─═─ • ◆ • ─═─═─═─═─═
├───────────────────────
║╭═─═─═─═─ • ◆ • ─═─═─═─═─═
┃│                 シCLANSシ︎
║
┃│${emojidobot} ${p}clãns
║
┃│${emojidobot} ${p}uchiha
║
┃│${emojidobot} ${p}hatake
║
┃│${emojidobot} ${p}akatsuki
║
┃│${emojidobot} ${p}uzumaki
║╰═─═─═─═─ • ◆ • ─═─═─═─═─═
┃
║╭═─═─═─═─ • ◆ • ─═─═─═─═─═
┃│                 シ︎DONOシ︎
║
┃│${emojidobot} ${p}bc (Texto)
║
┃│${emojidobot} ${p}bcfigu
║
┃│${emojidobot} ${p}entra (Link Do Grupo)
║╰═─═─═─═─ • ◆ • ─═─═─═─═─═
┃
║╭═─═─═─═─ • ◆ • ─═─═─═─═─═
┃│          シ︎GRUPOSシ︎
║
┃│${emojidobot} ${p}nomegp
║
┃│${emojidobot} ${p}descgp
║
┃│${emojidobot} ${p}hidetag
║
┃│${emojidobot} ${p}grupo
║
┃│${emojidobot} ${p}bemvindo ativar/desativar
║╰═─═─═─═─ • ◆ • ─═─═─═─═─═
┃
║╭═─═─═─═─ • ◆ • ─═─═─═─═─═
┃│                   シFIGURINHAS︎シ︎
║
┃│${emojidobot} ${p}f (marca imagem)
║
┃│${emojidobot} ${p}fgif
║
┃│${emojidobot} ${p}attp (texto)
║
┃│${emojidobot} ${p}toimg (marca uma figurinha)
║╰═─═─═─═─ • ◆ • ─═─═─═─═─═
┃
║╭═─═─═─═─ • ◆ • ─═─═─═─═─═
┃│                  シPLAQUINHASシ︎
║
┃│${emojidobot} ${p}plaquinha1
║
┃│${emojidobot} ${p}plaquinha2
║
┃│${emojidobot} ${p}plaquinha3
║╰═─═─═─═─ • ◆ • ─═─═─═─═─═
┃
║╭═─═─═─═─ • ◆ • ─═─═─═─═─═
┃│                      シJOGOS︎シ︎
║
┃│${emojidobot} ${p}caracoroa
║
┃│${emojidobot} ${p}tembor
║
┃│${emojidobot} ${p}pau
║
┃│${emojidobot} ${p}dado
║
┃│${emojidobot} ${p}gay1
║
┃│${emojidobot} ${p}gadometro
║
┃│${emojidobot} ${p}chance (Texto)
║
┃│${emojidobot} ${p}tembor
║
┃│${emojidobot} ${p}morte (nome)
║
┃│${emojidobot} ${p}ppt (exemplo: ${p}ppt pedra)
║
┃│${emojidobot} ${p}slot
║
┃│${emojidobot} ${p}chance (Texto)
║
┃│${emojidobot} ${p}sn  (Texto)
║
┃│${emojidobot} ${p}feio1
║
┃│${emojidobot} ${p}lindo1
║
┃│${emojidobot} ${p}gostoso1
║
┃│${emojidobot} ${p}gado1
║
┃│${emojidobot} ${p}nickff
║
║╭═─═─═─═─ • ◆ • ─═─═─═─═─═
┃│          シ︎*OUTROS*シ︎
║
┃│${emojidobot} ${p}perfil
║
┃│${emojidobot} ${p}traduzir (texto)
║
┃│${emojidobot} ${p}wa.me
║
┃│${emojidobot} ${p}figualeatoria
║
┃│${emojidobot} ${p}romantic
║
┃│${emojidobot} ${p}quando (Texto)
║
┃│${emojidobot} ${p}textcat (Texto)
║
┃│${emojidobot} ${p}gato
║
┃│${emojidobot} ${p}dadu
║
┃│${emojidobot} ${p}conselho
║
║╭═─═─═─═─ • ◆ • ─═─═─═─═─═
┃│              シ︎*DINHEIRO*シ︎
║
┃│${emojidobot} ${p}apostar
║
┃│${emojidobot} ${p}buyprem
║
┃│${emojidobot} ${p}meudinhero
║╭═─═─═─═─ • ◆ • ─═─═─═─═─═
┃│              シ︎*BAIXAR MÚSICA*シ︎ 
║
┃│${emojidobot} ${p}play
║╭═─═─═─═─ • ◆ • ─═─═─═─═─═
┃│              シ︎MUSICAS DO REPOSITÓRIOシ︎ 
┃│
┃│${emojidobot} ${p}brocasito1 (Tantos Planos)
┃│${emojidobot} ${p}brocasito2 (Luz Do Luar)
┃│${emojidobot} ${p}brocasito3 (Fuck17fuck12)
┃│${emojidobot} ${p}brocasito4 (P90)
┃│${emojidobot} ${p}brocasito5 (O mundo e Meu)
┃│${emojidobot} ${p}brocasito6 (Perguntas)
┃│${emojidobot} ${p}brocasito7 (Tijolos e Vadias)
║╭═─═─═─═─ • ◆ • ─═─═─═─═─═
┃│          シ︎MEU CRIADORシ︎
║
┃│${emojidobot} ${p}Dono
║
┃│${emojidobot} ${p}Criador
║╭═─═─═─═─ • ◆ • ─═─═─═─═─═
┃│          シ︎REPORTAR BUGSシ︎
║
┃│${emojidobot} ${p}bug (O bug Ocorrido)
║
┃│${emojidobot} ${p}novocmd (Sua ideia)
║╰═─═─═─═─ • ◆ • ─═─═─═─═─═
┃ COPYRIGHT ©GUXTA
╰═─═─═─═─═─ • ◆ • ─═─═─═─═─`,
buttonsMessage = {
contentText: guxtanocontrole,
footerText: `𝚁𝙴𝙶𝙸𝚂𝚃𝚁𝙰𝙳𝙾𝚂: ${registro.length}\n𝚃𝙾𝚃𝙰𝙻 𝙳𝙴 𝙲𝙷𝙰𝚃𝚂: ${totalChat.length}\n𝙲𝚁𝙸𝙰𝙳𝙾𝚁 𝙳𝙰 𝙱𝙰𝚂𝙴 𝙳𝙾 𝙱𝙾𝚃: 𝙶𝚄𝚇𝚃𝙰`, imageMessage: imageMsg,
buttons: buttons,
headerType: 4
}

prep = await client.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
client.relayWAMessage(prep)
tujuh = fs.readFileSync('./base de dados/audio/ola.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break

//**********diversas coisas**********//
case 'perfil':
try {
ppimg = await client.getProfilePicture(`${sender.split('@')[0]}@c.us`)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
var conselho = palavras[Math.floor(Math.random() * palavras.length)]
const nivelgado = ['1','2','3','4','5','6','7','8','9']
const nivelgado2 = ['1','2','3','4','5','6','7','8','9'] 
const nivelgador = nivelgado[Math.floor(Math.random() * (nivelgado.length))]
const nivelgado2r = nivelgado2[Math.floor(Math.random() * (nivelgado2.length))] 
const puta = ['1','2','3','4','5','6','7','8','9']
const puta2 = ['1','2','3','4','5','6','7','8','9'] 
const putar = puta[Math.floor(Math.random() * (puta.length))]
const putar2 = puta2[Math.floor(Math.random() * (puta2.length))] 
const popular = ['1','2','3','4','5','6','7','8','9']
const popular2 = ['1','2','3','4','5','6','7','8','9'] 
const popul2ar = nivelgado[Math.floor(Math.random() * (nivelgado.length))]
const popular2r = nivelgado2[Math.floor(Math.random() * (nivelgado2.length))] 
const gostosura = ['1','2','3','4','5','6','7','8','9']
const gostosura2 = ['1','2','3','4','5','6','7','8','9'] 
const gostosurar = gostosura[Math.floor(Math.random() * (gostosura.length))]
const gostosurar2 = gostosura2[Math.floor(Math.random() * (gostosura2.length))] 
gadop = `${Math.floor(Math.random() * 100)}`
const programa = Math.ceil(Math.random() * 10000)
const dptr = `
╭═━═━═━ • ❪ SEU PERFIL ❫ • ━═━═━
║╭═━═━═━═━═━═━═━═━═━═━═━
╿║Nome : ${pushname} 😑
╿║Dinheiro : ${checkATMuser(sender)} 💵
╿║Número : @${sender.split("@")[0]} 🤓
╿║Nível gado : ${nivelgador}${nivelgado2r}% 🐂
╿║Seu Célular : ${mek.key.id.length > 21 ? 'Android 🧐' : mek.key.id.substring(0, 2) == '3A' ? 'IOS' : 'Zap zap web'}
╿║Nível de gostosura : ${gostosurar}${gostosurar2}% 💅🏻
╿║Nível de Popularidade : ${popul2ar}${popular2r}% 👥
║╰═─═─═─═─ • ◆ • ─═─═─═─═─═
╰═━═━═━═━═━═━═━═━═━═━═━
`
daftarimg = await getBuffer(ppimg)
client.sendMessage(from, daftarimg , MessageType.image, {caption: dptr, quoted: selo})
break

case 'hatake':
//*ꪶ͢  𝐊𝐍𝐎𝐗 ꫂ❅ۣ̤ۜ𝑺𝛬𝑪𝛳𝑳𝜩⛧ ᭄//*
 if (isBanned) return reply(yag.ban())  
client.updatePresence(from, Presence.composing) 
teks = `╭─「 *CLÃN HATAKE* 」\n`
no = 0
for (let uzu of hatake) {
no += 1
teks += `│「${no.toString()}」 @${uzu.split('@')[0]}\n`  //NÚMEROS DAS PESSOAS QUE TA NO CLÃ
}
teks += `│ Total : ${hatake.length}\n╰──────「 *MEMBROS* 」`
client.sendMessage(from, teks.trim(), extendedText, {quoted: say3, contextInfo: {"mentionedJid": hatake}})
await limitAdd(sender)
break
case 'akatsuki':
//*ꪶ͢  𝐊𝐍𝐎𝐗 ꫂ❅ۣ̤ۜ𝑺𝛬𝑪𝛳𝑳𝜩⛧ ᭄//*
   if (isBanned) return reply(yag.ban())  
client.updatePresence(from, Presence.composing) 
teks = `╭─「 *🩸AKATSUKI🩸*」\n`
no = 0
for (let uzu of akatsuki) {
no += 1
teks += `│「${no.toString()}」 @${uzu.split('@')[0]}\n`  //NÚMEROS DAS PESSOAS QUE TA NO CLÃ
}
teks += `│ Total : ${akatsuki.length}\n╰──────「 *MEMBROS* 」`
client.sendMessage(from, teks.trim(), extendedText, {quoted: say3, contextInfo: {"mentionedJid": akatsuki}})
await limitAdd(sender)
break

case 'marcar':
client.updatePresence(from, Presence.composing)
if (!isGroup) 
if (!isGroupAdmins) 
if (!isBotGroupAdmins) 
membersid = []
todos = (args.length > 1) ? body.slice(8).trim(): ''
todos += `${q}\n\n`
for (let mem of groupMembers) {
todos += `⪧ @${mem.jid.split('@')[0]}\n`
membersid.push(mem.jid)
}
mentions(' '+todos+' ', membersid, true)
break

case 'rgguxta':
//*ꪶ͢  𝐊𝐍𝐎𝐗 ꫂ❅ۣ̤ۜ𝑺𝛬𝑪𝛳𝑳𝜩⛧ ᭄//*
payout2 = 1//NÃO MUDE NADA AQUI
const koinPerlimit4 = 15000//QUANTIDADE DA TAXA
const totaluc = koinPerlimit4 * payout2
if ( checkATMuser(sender) <= totaluc)  return reply(`「❔ 」Desculpe ${pushname} você não tem dinhero suficiente\nvalor da taxa : ${koinPerlimit4} mil`)
if ( checkATMuser(sender) >= totaluc) {
confirmATM(sender, totaluc)
uchiha.push(`${senderr.split('@')[0]}@s.whatsapp.net`)
fs.writeFileSync('./base de dados/clans/uchiha.json', JSON.stringify(uchiha))
await reply(`TROPA guxtaNEL\n\n*RECRUTADOR* : guxta ボ\n*NINJA RECRUTADO* : ${pushname}\n*PREÇO DA TAXA* : ${koinPerlimit4}\n*o resto do seu dinheiro* : ${checkATMuser(sender)}\n\nrecrutamento bem sucedido com o id : \n: ${createSerial(15)}`)
}
break

case 'guxta':
//*ꪶ͢  𝐊𝐍𝐎𝐗 ꫂ❅ۣ̤ۜ𝑺𝛬𝑪𝛳𝑳𝜩⛧ ᭄//*
client.updatePresence(from, Presence.composing) 
teks = `╭─「 TROPA guxta 」\n`
no = 0
for (let uch of uchiha) {
no += 1
teks += `│「${no.toString()}」 @${uch.split('@')[0]}\n`  //NÚMEROS DAS PESSOAS QUE TA NO CLÃ
}
teks += `│ Total : ${uchiha.length}\n╰──────「 * GUXTA * 」`
client.sendMessage(from, teks.trim(), extendedText, {quoted: say3, contextInfo: {"mentionedJid": uchiha}})
await limitAdd(sender)
break

case 'rguzumaki':
//*ꪶ͢  𝐊𝐍𝐎𝐗 ꫂ❅ۣ̤ۜ𝑺𝛬𝑪𝛳𝑳𝜩⛧ ᭄//*
client.updatePresence(from, Presence.composing) 
payout2 = 1 //NÃO MUDE NADA AQUI
const koinPerlimit6 = 15000 //QUANTIDADE DA TAXA
const totaluz = koinPerlimit6 * payout2
if ( checkATMuser(sender) <= totaluz)  return reply(`「❔ 」Desculpe ${pushname} você não tem dinhero suficiente\nvalor da taxa : ${koinPerlimit6} mil`)
if ( checkATMuser(sender) >= totaluz) {
confirmATM(sender, totaluz)
uzumaki.push(`${senderr.split('@')[0]}@s.whatsapp.net`)
fs.writeFileSync('./base de dados/clans/uzumaki.json', JSON.stringify(uzumaki))
await reply(`CLÃN UZUMAKI\n\n*RECRUTADOR* : guxta ボ\n*NINJA RECRUTADO* : ${pushname}\n*PREÇO DA TAXA* : ${koinPerlimit6}\n*o resto do seu dinheiro* : ${checkATMuser(sender)}\n\nrecrutamento bem sucedido com o id : \n: ${createSerial(15)}`)
}
break

case 'rgnakano':
//*ꪶ͢  𝐊𝐍𝐎𝐗 ꫂ❅ۣ̤ۜ𝑺𝛬𝑪𝛳𝑳𝜩⛧ ᭄//*
client.updatePresence(from, Presence.composing) 
payout2 = 1 //NÃO MUDE NADA AQUI
const sacoledlç = 15000 //QUANTIDADE DA TAXA
const totauuu = sacoledlç * payout2
if ( checkATMuser(sender) <= totauuu)  return reply(`「❔ 」Desculpe ${pushname} você não tem dinhero suficiente\nvalor da taxa : ${koinPerlimit6} mil`)
if ( checkATMuser(sender) >= totauuu) {
confirmATM(sender, totauuu)
nakano.push(`${senderr.split('@')[0]}@s.whatsapp.net`)
fs.writeFileSync('./base de dados/clans/nakano.json', JSON.stringify(nakano))
await reply(`️CLÃN Nakano\n\n*RECRUTADOR* : guxta ボ\n*NINJA RECRUTADO* : ${pushname}\n*PREÇO DA TAXA* : ${sacoledlç}\n*o resto do seu dinheiro* : ${checkATMuser(sender)}\n\nrecrutamento bem sucedido com o id : \n: ${createSerial(15)}`)
}
break
case 'rghatake':
//*ꪶ͢  𝐊𝐍𝐎𝐗 ꫂ❅ۣ̤ۜ𝑺𝛬𝑪𝛳𝑳𝜩⛧ ᭄//*
client.updatePresence(from, Presence.composing) 
payout2 = 1 //NÃO MUDE NADA AQUI
const koinPerlimit23 = 15000 //QUANTIDADE DA TAXA
const totaluy = koinPerlimit23 * payout2
if ( checkATMuser(sender) <= totaluy)  return reply(`「❔ 」Desculpe ${pushname} você não tem dinhero suficiente\nvalor da taxa : ${koinPerlimit23} mil`)
if ( checkATMuser(sender) >= totaluy) {
confirmATM(sender, totaluy)
hatake.push(`${senderr.split('@')[0]}@s.whatsapp.net`)
fs.writeFileSync('./base de dados/clans/clans/hatake.json', JSON.stringify(hatake))
await reply(`CLÃN HATAKE\n\n*RECRUTADOR* : guxta ボ\n*NINJA RECRUTADO* : ${pushname}\n*PREÇO DA TAXA* : ${koinPerlimit23}\n*o resto do seu dinheiro* : ${checkATMuser(sender)}\n\nrecrutamento bem sucedido com o id : \n: ${createSerial(15)}`)
}
break
case 'rgakatsuki':
//*ꪶ͢  𝐊𝐍𝐎𝐗 ꫂ❅ۣ̤ۜ𝑺𝛬𝑪𝛳𝑳𝜩⛧ ᭄//*
client.updatePresence(from, Presence.composing) 
payout2 = 1 //NÃO MUDE NADA AQUI
const koinPerlimit8 = 15000 //QUANTIDADE DA TAXA
const totalup = koinPerlimit8 * payout2
if ( checkATMuser(sender) <= totalup)  return reply(`「❔ 」Desculpe ${pushname} você não tem dinhero suficiente\nvalor da taxa : ${koinPerlimit8} mil`)
if ( checkATMuser(sender) >= totalup) {
confirmATM(sender, totalup)
akatsuki.push(`${senderr.split('@')[0]}@s.whatsapp.net`)
fs.writeFileSync('./base de dados/clans/akatsuki.json', JSON.stringify(akatsuki))
await reply(`AKATSUKI\n\n*RECRUTADOR* : guxta ボ\n*NINJA RECRUTADO*  ${pushname}\n*PREÇO DA TAXA * : ${koinPerlimit8}\n*o resto do seu dinheiro* : ${checkATMuser(sender)}\n\nrecrutamento bem sucedido com o id : \n : ${createSerial(15)}`)
}
break
case 'uzumaki':
//*ꪶ͢  𝐊𝐍𝐎𝐗 ꫂ❅ۣ̤ۜ𝑺𝛬𝑪𝛳𝑳𝜩⛧ ᭄//*
client.updatePresence(from, Presence.composing) 
teks = `╭─「 *CLÃN UZUMAKI* 」\n`
no = 0
for (let uzu of uzumaki) {
no += 1
teks += `│「${no.toString()}」 @${uzu.split('@')[0]}\n`  //NÚMEROS DAS PESSOAS QUE TA NO CLÃ
}
teks += `│ Total : ${uzumaki.length}\n╰──────「 *MEMBROS️* 」`
client.sendMessage(from, teks.trim(), extendedText, {quoted: say3, contextInfo: {"mentionedJid": uzumaki}})
await limitAdd(sender)
break

case 'clãns':
if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
buttons = [{buttonId: `.dono`,buttonText:{displayText: 'Dono'},type:1},{buttonId:`.grupo`,buttonText:{displayText:'Grupo'},type:1},{buttonId:`.figurinha`,buttonText:{displayText:'figurinha'},type:1}]
imageMsg = (await client.prepareMessageMedia(fs.readFileSync(`./guxta/fotos/guxtinhah.png`), 'imageMessage', {thumbnail: fs.readFileSync(`./guxta/fotos/guxtinhah.png`)})).imageMessage
aiaiguxtaro = `
╭─「 🌀TABELA⚔️ 」
│ */uzumaki*
│ *clãn uzumaki*
│PARA ENTRAR DIGITE /rguzumaki
│PREÇO DA TAXA :  : 150.000 💰
╰━━━々──────
│ */hatake*
│ *clãn hatake*
│PARA ENTRAR DIGITE /rghatake
│PREÇO DA TAXA :  : 150.000 💰
╰━━━々──────
│ */nakano*
│ *clãn hatake*
│PARA ENTRAR DIGITE /nakano
│PREÇO DA TAXA :  : 150.000 💰
╰━━━々──────
│ */akatsuki*
│ *clãn akatsuki*
│PARA ENTRAR DIGITE /rgakatsuki
│PREÇO DA TAXA :  : 150.000 💰
╰━━━々──────
│ */uchiha*
│ *clãn uzumaki*
│PARA ENTRAR DIGITE /rguzumaki
│PREÇO DA TAXA :  : 150.000 💰
╰────────────────
`,
buttonsMessage = {
contentText: aiaiguxtaro,
footerText: `${guxtadnv}`, imageMessage: imageMsg,
buttons: buttons,
headerType: 4
}
prep = await client.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
client.relayWAMessage(prep)
break

case 'report':
case 'bug':
if (!q) return reply('Sem bugs?🥰')
reply(`bugs falsos não serao respondidos`)
client.sendMessage(`5511973664069@s.whatsapp.net`, `!!!𝗨𝗺 𝗕𝘂𝗴!!!\n𝗗𝗼 𝗡𝘂𝗺𝗲𝗿𝗼: @${senderr.split('@')[0]},\n𝗥𝗲𝗽𝗼𝗿𝘁𝗼𝘂 𝗢 𝗖𝗼𝗺𝗮𝗻𝗱𝗼: ${q}`, MessageType.text, {contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: "𝗗𝗮 𝗖𝗼𝗿𝗼",body:"",previewType:"PHOTO",thumbnail:fs.readFileSync('./guxta/fotos/guxta.jpg'),sourceUrl:"https://wa.me/5511973664069?text=𝗦𝗮𝗹𝘃𝗮 𝗢 𝗡𝘂𝗺𝗲𝗿𝗼 𝗔𝗲"}}})   
break
case 'novocmd':
if (!q) return reply('Sem ideias?🥰')
reply(`Obrigada pela colaboração`)
client.sendMessage(`5511973664069@s.whatsapp.net`, `!!!𝗜𝗱𝗲𝗶𝗮 𝗣𝗮𝗿𝗮 𝗡𝗼𝘃𝗼𝘀 𝗖𝗺𝗱!!!\n𝗗𝗼 𝗡𝘂𝗺𝗲𝗿𝗼: @${senderr.split('@')[0]},\n𝗰𝗼𝗺𝗮𝗻𝗱𝗼: ${q}`, MessageType.text, {contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: "𝗗𝗮 𝗖𝗼𝗿𝗼",body:"",previewType:"PHOTO",thumbnail:fs.readFileSync('./guxta/fotos/guxta.jpg'),sourceUrl:"https://wa.me/5511973664069?text=𝗦𝗮𝗹𝘃𝗮 𝗢 𝗡𝘂𝗺𝗲𝗿𝗼 𝗔𝗲"}}})   
break

//**********Menus de grupo**********//
case 'nomegp':
if (!isGroup) return reply(enviar.apenas.grupos)
if (!isGroupAdmins) return reply(enviar.bad.adm)
if (!isBotGroupAdmins) return reply(enviar.bad.BotAdm)
guxtaman = args.join(" ")
client.groupUpdateSubject(from, `${guxtaman}`)
client.sendMessage(from, 'Nome Do Grupo Alterado Com Sucesso!', text, {quoted: selo})
break

case 'descgp':
if (!isGroup) return reply(enviar.apenas.grupos)
if (!isGroupAdmins) return reply(enviar.bad.adm)
if (!isBotGroupAdmins) return reply(enviar.bad.BotAdm)
desc = args.join(" ")
client.groupUpdateDescription(from, `${desc}`)
client.sendMessage(from, 'descrição do grupo alterada com sucesso', text, {quoted: selo})
break

case 'guxtane':
if (args[0] === 'abrir') {
reply(`${pushname} O Grupo Foi Aberto Com Sucesso`)
client.groupSettingChange(from, GroupSettingChange.messageSend, false)
} else if (args[0] === 'fechar') {
await client.groupSettingChange(from, GroupSettingChange.messageSend, true)
reply(`${pushname} O Grupo Foi Fechado Com Sucesso`)
}
break
//=======================================\\

case 'marcar':
if (!isGroup) return reply(enviar.apenas.grupos)
if (!isGroupAdmins) return reply(enviar.bad.adm)
members_id = []
teks = (args.length > 1) ? body.slice(8).trim() : ''
teks += '\n\n'
for (let mem of groupMembers) {
teks += `[#] @${mem.jid.split('@')[0]}\n`
members_id.push(mem.jid)
}
mentions(teks, members_id, true)
break

//=====================================\\

case 'marcar2':
members_id = []
teks = (args.length > 1) ? body.slice(8).trim() : ''
teks += '\n\n'
for (let mem of groupMembers) {
teks += `╠> https://wa.me/${mem.jid.split('@')[0]}\n`
members_id.push(mem.jid)
}
client.sendMessage(from, teks, text, {detectLinks: false, quoted: info})
break
case 'grupo':
buttons = [{buttonId: `.guxtane abrir`,buttonText:{displayText: 'ABRIR'},type:1},{buttonId:`.guxtane fechar`,buttonText:{displayText:'FECHAR'},type:1}]
imageMsg = (await client.prepareMessageMedia(fs.readFileSync(`./guxta/fotos/guxtinhah.jpg`), 'imageMessage', {thumbnail: fs.readFileSync(`./guxta/fotos/guxtinhah.jpg`)})).imageMessage
aiaiguxtaro = `Olá ${pushname} Como Vai?`
buttonsMessage = {
contentText: aiaiguxtaro,
footerText: "⟬Escolha Entre As Duas Opções Abaixo⟭", imageMessage: imageMsg,
buttons: buttons,
headerType: 4
}
prep = await client.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
client.relayWAMessage(prep)
break

case 'hidetag':
if (!isRegistrar) return reply(mess.registro)
if (!isGroup) return reply(enviar.apenas.grupos)
if (!groupAdmins) return reply(enviar.bad.adm)
var value = body.slice(9)
var group = await client.groupMetadata(from)
var member = group['participants']
var mem = []
member.map( async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
text: value,
contextInfo: { mentionedJid: mem },
quoted: info
}
client.sendMessage(from, options, text)
break

case 'add':
if (!isGroup) return enviar(ptbr.group())
if (!isGroupAdmins) return enviar(ptbr.admin())
if (!isBotGroupAdmins) return enviar(ptbr.Badmin()) //_`Pedi adm, para o bot //_`Pedi adm, para o bot
if (args.length < 1) return enviar('Você quer adicionar um gênio?')
if (args[0].startsWith('08')) return enviar('Use o código do país, man')
try {
num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
client.groupAdd(from, [num])
} catch (e) {
console.log('Error :', e)
enviar('Falha ao adicionar destino, talvez porque é privado')
}
break

//**********Comandos de sticker**********//
case 'figu':
case 'fig':
case 'f':
case 'sticker':
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
const media = await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.webp')
await ffmpeg(`./${media}`)
.input(media)
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
reply(mess.error.stick)
})
.on('end', function () {
console.log('Finish')
client.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
const media = await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.webp')
reply(mess.wait)
await ffmpeg(`./${media}`)
.inputFormat(media.split('.')[1])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(`❌ Falhou, no momento da conversão ${tipe} para o adesivo`)
})
.on('end', function () {
console.log('Finish')
client.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else if ((isMedia || isQuotedImage) && args[0] == 'nobg') {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
const media = await client.downloadAndSaveMediaMessage(encmedia)
ranw = getRandom('.webp')
ranp = getRandom('.png')
reply(mess.wait)
keyrmbg = 'Your-ApiKey'
await removeBackgroundFromImageFile({path: media, apiKey: keyrmbg.result, size: 'auto', type: 'auto', ranp}).then(res => {
fs.unlinkSync(media)
let buffer = Buffer.from(res.base64img, 'base64')
fs.writeFileSync(ranp, buffer, (err) => {
if (err) return reply('Falha, ocorreu um erro, tente novamente mais tarde.')
})
exec(`ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranw}`, (err) => {
fs.unlinkSync(ranp)
if (err) return reply(mess.error.stick)
client.sendMessage(from, fs.readFileSync(ranw), sticker, {quoted: mek})
})
})
} else {
reply(`Envie fotos com legendas *.f* ou marque uma imagem que já foi enviada`)
}
break

case 'toimg':
client.updatePresence(from, Presence.composing)
if (!isQuotedSticker) return enviar(`${emoji_bot} Você precisa marcar um sticker não animado para isso`)
tomg = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
medtmg = await client.downloadAndSaveMediaMessage(tomg)
ran = getRandom('.png')
exec(`ffmpeg -i ${medtmg} ${ran}`, (err) => {
fs.unlinkSync(medtmg)
if (err) return enviar(`${emoji_bot} falha ao converter sticker em imagem`)
buffer = fs.readFileSync(ran)
client.sendMessage(from, buffer, image, {quoted: mek, caption: `Aqui está ${pushname}💨`})
fs.unlinkSync(ran)
})
break

case 'attp': 
if (args.length < 1) return enviar(`Use dessa forma:\nComando: ${p}attp ${nomedono} gado`)
enviar(ptbr.wait())
attp2 = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURIComponent(body.slice(5))}`)
client.sendMessage(from, attp2, sticker, {quoted: mek})
break

//**********Comandos de dono**********//
case 'bc':
if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
if (!isOwner)
if (args.length < 1) return reply('.......')
anu = await client.chats.all()
if (isMedia && !mek.message.videoMessage || isQuotedImage) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
buff = await client.downloadMediaMessage(encmedia)
for (let _ of anu) {
client.sendMessage(_.jid, buff, image, {caption: `[ transmição ]\n\n${body.slice(4)}`})
}
reply('Transmissao enviada')
} else {
for (let _ of anu) {
sendMess(_.jid, `╭────── • ◆ • ──────\n│Transmição do ${nomedono}\n╠────── • ◆ • ──────\n│\n│♞Ξ ${body.slice(4)}\n│\n│Fim do recado!\n╰────── • ◆ • ──────`)
}
reply('Tm enviada com sucesso')
}
break

case 'tagimg':
if (!isOwner)
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
const ncmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
filePath = await client.downloadAndSaveMediaMessage(ncmedia, filename = getRandom())
var value = args.join(" ")
var group = await client.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
contextInfo: {
mentionedJid: mem
},
quoted: mek
}
ini_buffer = fs.readFileSync(filePath)
client.sendMessage(from, ini_buffer, image, options)
fs.unlinkSync(filePath)
} else {
enviar(`Marque uma imagem para que eu mencione todos com ela`)
}
break

case 'bcstik':
case 'bcfig':
if (!isQuotedSticker) return enviar('Marque uma figurinha!!!')
bcsticker = await client.chats.all()
if (isMedia && !mek.message.videoMessage || isQuotedSticker) {
const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
bc = await client.downloadMediaMessage(encmedia)
for (let _ of bcsticker) {
client.sendMessage(_.jid, bc, sticker) 
}
enviar(`Figurinha envianda para: ${totalchat.length} chats`)
}
break

case 'entrar':
if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
if (!isOwner)
if (!q) return reply('Digite o link do grupo ')
var codeInvite = body.slice(6).split('https://chat.whatsapp.com/')[1]
if (!codeInvite) return fakegroup ('certifique-se de que o link está correto! ')
var response = await client.acceptInvite(codeInvite);
reply('Aguarde Um Minutinho. Já Entrei No Grupo!')
console.log(response);
break

case 'bemvindo':
buttons = [{buttonId: `.dnvguxta 1`,buttonText:{displayText: 'ATIVAR'},type:1},{buttonId:`.dnvguxta 0`,buttonText:{displayText:'DESATIVAR'},type:1}]
imageMsg = (await client.prepareMessageMedia(fs.readFileSync(`./guxta/fotos/guxtinhah.jpg`), 'imageMessage', {thumbnail: fs.readFileSync(`./guxta/fotos/guxtinhah.jpg`)})).imageMessage
aiaiguxtaro = `ohayo. ${pushname}`
buttonsMessage = {
contentText: aiaiguxtaro,
footerText: "⟬Escolha Entre As Duas Opções Abaixo⟭", imageMessage: imageMsg,
buttons: buttons,
headerType: 4
}
prep = await client.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
client.relayWAMessage(prep)
break

case 'dnvguxta':
if (!isGroup) return reply(mess.only.group)
if (args.length < 1) return reply(`Use ativar para ativar e desativar para desativar, exemplo : ${p +comando} 1`)
if (args[0] === 'ativar') {
if (isWelkom) return reply(`O ${command} ja esta ativo`)
welkom.push(from)
fs.writeFileSync('./database/welkom.json', JSON.stringify(welkom))
reply('welcome ativo')
} else if (args[0] === 'desativar') {
welkom.splice(from, 1)
fs.writeFileSync('./database/welkom.json', JSON.stringify(welkom))
reply('✖welcome desativado')
reply('😣')
} else {
reply(`ativar/desativar`)
}
break

/************** case plaquinhas ************/
case 'plaquinha1':
if (args.length < 1) return enviar(mess.blank)
teks = body.slice(12)
if (teks.length > 25) return reply('O texto é longo, até 25 caracteres')
reply('*Estou fazendo, se der erro tente novamente ✓*')
buffer = await getBuffer(`https://ubbornag.sirv.com/Screenshot_20210513-151821.png?text.0.text=${teks}&text.0.position.x=-40%25&text.0.position.y=-65%25&text.0.size=30&text.0.color=000000&text.0.opacity=53&text.0.font.family=Shadows%20Into%20Light%20Two&text.0.outline.blur=15`)
client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Ta na mão 😈\n\n'})
break

case 'plaquinha2':
if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
if (args.length < 1) return enviar(mess.blank)
teks = body.slice(11)
if (teks.length > 10) return reply('O texto é longo, até 10 caracteres')
reply('*Estou fazendo... *')
buffer = await getBuffer(`https://rsymenti.sirv.com/images%20(10).jpeg?text.0.text=${teks}&text.0.position.gravity=south&text.0.position.x=4%25&text.0.position.y=-32%25&text.0.align=left&text.0.size=34&text.0.color=000000&text.0.opacity=78&text.0.background.opacity=78&text.0.outline.blur=72&text.0.outline.opacity=74`)
client.sendMessage(from, buffer, image, {quoted: mek, caption: 'ai está 😈\n\n'})
break

case 'plaquinha3':
if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
if (args.length < 1) return enviar(mess.blank)
teks = body.slice(10)
if (teks.length > 20) return reply('O TEXTO E MUITO GRANDE NO MAXIMO 20 LETRAS')
reply('ESPERE...')
buffer = await getBuffer(`https://lculitas.sirv.com/ETw3FRnXgAI3Up_.jpg?text.0.text=${teks}&text.0.position.gravity=center&text.0.align=left&text.0.size=46&text.0.color=221b1b&text.0.opacity=47&text.0.font.family=Architects%20Daughter&text.0.background.color=783852&text.0.background.opacity=5&text.0.outline.blur=58`)
client.sendMessage(from, buffer, image, {quoted: mek, caption: 'PRONTINHO AQUI ESTAR SUA PLAQUINHA 😈\n\n'})
break

//**********antis**********//
case 'antlink':
buttons = [{buttonId: `.dacooro 1`,buttonText:{displayText: 'ATIVAR'},type:1},{buttonId:`.dacooro 0`,buttonText:{displayText:'DESATIVAR'},type:1}]
imageMsg = (await client.prepareMessageMedia(fs.readFileSync(`./guxta/fotos/guxtinhah.jpg`), 'imageMessage', {thumbnail: fs.readFileSync(`./guxta/fotos/guxtinhah.jpg`)})).imageMessage
aiaiguxtaro = `Olá ${pushname} Como Você Está Hoje?`
buttonsMessage = {
contentText: aiaiguxtaro,
footerText: "⟬Escolha Entre As Duas Opções Abaixo⟭", imageMessage: imageMsg,
buttons: buttons,
headerType: 4
}
prep = await client.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
client.relayWAMessage(prep)
break

case 'dacooro':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (args.length < 1) return reply('digite 1 para ativar ')
if (Number(args[0]) === 1) {
if (isAntiLink) return reply('o anti-link está ativo')
antilink.push(from)
fs.writeFileSync('./base de dados/antlink/antilink.json', JSON.stringify(antilink))
reply('O anti-link foi ativo no grupo ✔️')
sendButMessage(from , mess.functionOn(comando), [{buttonId: linguagem.sexo(), buttonText: {displayText: linguagem.okLolizitaBot(me)}, type: 1}], {quoted: mek})
} else if (Number(args[0]) === 0) {
antilink.splice(from, 1)
fs.writeFileSync('./base de dados/antlink/antilink.json', JSON.stringify(antilink))
reply('O anti-link foi desativado com sucesso neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar ')
}
break

case 'antifake':
buttons = [{buttonId: `.aiiguxta 1`,buttonText:{displayText: 'ATIVAR'},type:1},{buttonId:`.aiiguxta 0`,buttonText:{displayText:'DESATIVAR'},type:1}]
imageMsg = (await client.prepareMessageMedia(fs.readFileSync(`./guxta/fotos/guxtinhah.jpg`), 'imageMessage', {thumbnail: fs.readFileSync(`./guxta/fotos/guxtinhah.jpg`)})).imageMessage
aiaiguxtaro = `hi ${pushname} `
buttonsMessage = {
contentText: aiaiguxtaro,
footerText: "⟬Escolha Entre As Duas Opções Abaixo⟭", imageMessage: imageMsg,
buttons: buttons,
headerType: 4
}
prep = await client.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
client.relayWAMessage(prep)
break

case 'aiiguxta':
if (!isGroup) return reply(`[📍] SOMENTE EM GRUPOS`)
if (!isBotGroupAdmins) return reply(`[📍] O BOT PRECISA SER ADMIN`)
try { 
if (args.length < 1) return reply('Hmmmm')
if (Number(args[0]) === 1) {
if (isAntiFake) return reply('Ja esta ativo')
antifake.push(from)
fs.writeFileSync('./base de dados/anti fake/antifake.json', JSON.stringify(antifake))
reply('Ativou com sucesso o antifake neste grupo✔️')
 } else if (Number(args[0]) === 0) {
antifake.splice(from, 1)
fs.writeFileSync('./base de dados/anti fake/antifake.json', JSON.stringify(antifake))
reply('Desativou com sucesso o antifake neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
} catch {
reply('Deu erro, tente novamente :/')
}
break

case 'antipalavrão':
buttons = [{buttonId: `.dacooroo ativar`,buttonText:{displayText: 'ATIVAR'},type:1},{buttonId:`.dacooroo desativar`,buttonText:{displayText:'DESATIVAR'},type:1}]
imageMsg = (await client.prepareMessageMedia(fs.readFileSync(`./guxta/fotos/guxtinhah.jpg`), 'imageMessage', {thumbnail: fs.readFileSync(`./guxta/fotos/guxtinhah.jpg`)})).imageMessage
aiaiguxtaro = `Oie ${pushname}`
buttonsMessage = {
contentText: aiaiguxtaro,
footerText: "⟬Escolha Entre As Duas Opções Abaixo⟭", imageMessage: imageMsg,
buttons: buttons,
headerType: 4
}
prep = await client.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
client.relayWAMessage(prep)
break

case 'dacooroo':
if (!isGroup) return reply(`[📍] SOMENTE EM GRUPOS`)
if (!isBotGroupAdmins) return reply(`[📍] O BOT PRECISA SER ADMIN`)
if (args.length < 1) return reply(`「💡」ativar/desativar, Exemplo ${p + command} ativar`)
if (args[0] === 'ativar') {
if (isPalavrão) return reply('*Já esta ativado...*')
palavrão.push(from)
fs.writeFileSync('./base de dados/anti palavrao/palavrão.json', JSON.stringify(palavrão))
reply(`「💡」 anti palavrão ativado`)
} else if (args[0] === 'desativar') {
palavrão.splice(from, 1)
fs.writeFileSync('./base de dados/anti palavrao/palavrão.json', JSON.stringify(palavrão))
reply(`「💡」 anti palavrão desativado...`)
} else {
reply(`「💡」ativar/desativar, Exemplo ${p + command} ativar`)
}
break

//**********Diversos comandos**********//
case 'traduzir':
qpp = args.join(' ')
if(!qpp) return reply('Digite o texto a ser traduzido | Exemplo: .traduzir hello')
translate(`${qpp}`, {to: 'pt'}).then(res => {
textooo = res.text
textooo = `${textooo}`
reply(textooo)
}).catch(err => {
console.error(err);
});
break

case 'wa.me':
case 'wame':
if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
client.updatePresence(from, Presence.composing) 
options = {
text: `AQUI ESTA\n\n_Solicitado por_ : *@${sender.split("@s.whatsapp.net")[0]}\n\nSeu link Whatsapp : *https://wa.me/${sender.split("@s.whatsapp.net")[0]}*\n*Or ( / )*\n*https://api.whatsapp.com/send?phone=${sender.split("@")[0]}*`,
contextInfo: { mentionedJid: [sender] }
}
client.sendMessage(from, options, text, { quoted: mek } )
break
if (data.error) return reply(data.error)
reply(data.result)
break

case 'quando': //by: Resen
if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
client.updatePresence(from, Presence.composing)
if (args.length < 1) return reply('Digite a pergunta')
random = arrayQND[Math.floor(Math.random() * arrayQND.length)]
random2 = `${Math.floor(Math.random() * 11) + 1}`
if (random == 'Hoje' || random == 'Amanhã' || random == 'Nunca') {
texto = `Pergunta: ${body.slice(1)}\n\nResposta: ${random}`
} else if (random2 == 1) {
texto = `Pergunta: ${body.slice(1)}\n\nResposta: 1 ${random}`
} else {
random3 = arrayQND2[Math.floor(Math.random() * arrayQND2.length)]
texto = `Pergunta: ${body.slice(1)}\n\nResposta: ${random2} ${random3}`
}
reply(texto)
addFilter(from)
break

case 'gato':
if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
reply(ptbr.wait())
buffer = await getBuffer(`https://cataas.com/cat`)
client.sendMessage(from, buffer, image, {
quoted: mek,
caption: '𝙼𝚊𝚒𝚜 𝚏𝚘𝚏𝚘 𝚚 𝚟𝚌✅'
})
break
 
case 'textcat':
if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
reply(ptbr.wait())
say = body.slice(8)
buffer = await getBuffer(`https://cataas.com/cat/says/${say}`)
client.sendMessage(from, buffer, image, {
quoted: mek,
caption: `${say}`
})
break

case 'bomdia':
if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
reply(ptbr.wait())
buffer = await getBuffer(`https://cataas.com/cat/says/Bom%20Dia`)
client.sendMessage(from, buffer, image, {
quoted: mek,
caption: 'Bom dia grupo'
})
break

case 'boatarde':
if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
reply(ptbr.wait())
buffer = await getBuffer(`https://cataas.com/cat/says/Boa%20Tarde`)
client.sendMessage(from, buffer, image, {
quoted: mek,
caption: 'Boa tarde grupo'
})
break

case 'boanoite':
if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
reply(ptbr.wait())
buffer = await getBuffer(`https://cataas.com/cat/sleep/says/Boa%20Noite`)
client.sendMessage(from, buffer, image, {
quoted: mek,
caption: 'Boa noite grupo'
})
break

case 'romantic':
sads = await getBuffer(`https://luganobr.vteximg.com.br/arquivos/ids/156458-800-800/https://pin.it/oWW9elp.jpg?v=637358652692600000`)
fre = await fetchJson(`https://supra-api.herokuapp.com/api/romanticafrase?apikey=supraz`)
shaa = `Frase Romântica:\n♡︎${fre.frase}♡︎`
client.sendMessage(from, sads, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": `${nomedobot}`, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": await getBuffer('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc-NRMQF2-VrJNX9hEdKjqLewMUtPMsFKvPA&usqp=CAU.jpg')} } }, caption: shaa })
break
 
case 'dadu':
anu = await getBuffer(`https://supra-api.herokuapp.com/api/dadu?apikey=supraz`)
client.sendMessage(from, anu, sticker, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": `${nomedobot}`, 'jpegThumbnail': await getBuffer('https://i.pinimg.com/736x/6a/f4/43/6af4437506b69872c7ff6ec9b915dbe6.jpg')}}}})
break
 
case 'figu-aleatoria':
case 'figualeatoria ':
reply(`Acalme seu coração já estou enviando🤙`)
anu = await getBuffer(`https://supra-api.herokuapp.com/api/stickera?apikey=supraz`)
client.sendMessage(from, anu, sticker, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": `${nomedobot}`, 'jpegThumbnail': await getBuffer('https://i.pinimg.com/736x/6a/f4/43/6af4437506b69872c7ff6ec9b915dbe6.jpg')}}}})
break
 
case 'conselho':
try {
anu = await fetchJson(`https://supra-api.herokuapp.com/api/conselho?apikey=supraz`)
ppimg = await client.getProfilePicture(`${sender.split('@')[0]}@c.us`)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
its = await getBuffer (ppimg)
randTeks = `\n${anu.frase}\n`
client.sendMessage(from, its, image, {quoted: mek, caption: randTeks})
break

//**********Comandos q tem aver com money**********//
case 'dinheiro':  
case 'meudinhero':
try {
var ppimg = await client.getProfilePicture(`${sender.split('@')[0]}@c.us`)
} catch {
var ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
haitod = await getBuffer(`${ppimg}`)
buttons = [{buttonId: `.menu`,buttonText:{displayText: `Menu`},type:1}]
imageMsg = (await client.prepareMessageMedia(haitod, "imageMessage", { thumbnail: haitod,})).imageMessage
buttonsMessage = {footerText:`${guxtadnv}`, imageMessage: imageMsg,
contentText:`
╭━➪ 🤑 MONEY 🤑
│◦➛𝗡𝗼𝗺𝗲 : ${pushname}
│◦➛𝗡𝘂𝗺𝗲𝗿𝗼 : ${sender.split("@")[0]}
│◦➛𝗗𝗶𝗻𝗵𝗲𝗶𝗿𝗼 : *${checkATMuser(sender)}*
╰━━━━━━━━`,buttons,headerType:4}
prep = await client.prepareMessageFromContent(from,{buttonsMessage},{quoted: say3})
client.relayWAMessage(prep)
break



case 'buyprem':
if (prem.includes(sender)) return enviar("❌ Só pode comprar premium uma vez! ❌")
payout2 = 1
const koinPerlimit2 = 100000
const buyPrem = koinPerlimit2 * payout2
if ( checkATMuser(sender) <= buyPrem) return enviar(`[❗] Desculpe ${pushname} você não tem dinhero suficiente\nvalor do premiun : 100000 mil`)
if ( checkATMuser(sender) >= buyPrem) {
confirmATM(sender, buyPrem)
prem.push(`${sender}`)
fs.writeFileSync('./base de dados/premium/premium.json', JSON.stringify(prem))
await enviar(`き⃟💲COMPRA BEM SUCEDIDA💲️⃟き\n\nき⃟👤️ Vendedor : *${nomedobot}*\nき⃟🏷️ Comprador : *${pushname}*\nき⃟💱 Preço do premium : *${koinPerlimit2}*`)
}
break

case 'apostar':
if (!isGroup) return enviar(`SOMENTE EM GRUPOS`)
const dinheiro = checkATMuser(sender)
const checkxpr = checkATMuser(sender, dinheiro) 
const quantidader = `10000`
if (checkxpr <= quantidader) return enviar(`Você não possui licença para jogar, obtenha uma quando tiver ${quantidader} de dinheiro.\n\nSeu dinheiro: ${checkxpr}`)
if (args.length !== 1) return enviar('Especifique a quantidade de dinheiro para apostar.')
if (Number(args[0]) >= checkxpr || Number(args[0]) >= dinheiro) return enviar(`Você não pode apostar uma quantidade de dinheiro maior do que a você tem, e nosso limite de apostas é de ${quantidader} dinheiro por vez!\n\nSeu dinheiro: ${checkxpr}`)
if (Number(args[0]) < 1000) return enviar(`O minimo para se apostar é de 1000 dinheiro`)
if (isNaN(args[0])) return enviar('Para apostar use apenas números, nada de inserir letras, a menos que queira perder todo o XP que tenha.')
const double = Math.floor(Math.random() * 7) + 1
const nrolxp = Number(-args[0])
const prolxp = double + Number(args[0])
if (double == 1) {
await enviar(`🔪BANG!!!💣\n\nVocê perdeu na roleta-russa, causando uma perca de ${nrolxp} em seu dinheiro.`)
addKoinUser(sender, nrolxp, dinheiro)
addKoinUser(`${OwnerNumber}@s.whatsapp.net`, prolxp)
} else if (double == 2) {
await enviar(`🙌🏻SALVO😇\n\nVocê não levou um tiro e ganhou ${prolxp} dinheiro`)
addKoinUser(sender, prolxp, dinheiro)
} else if (double == 3) {
await enviar(`👎🏼BAAAAH MÁ SORTE😔\n\nPerdeu ${nrolxp} KKK Continua apostando pra perder mais otário kkkkkkkkkkkkkkk`)
addKoinUser(sender, nrolxp, dinheiro)
addKoinUser(`${OwnerNumber}@s.whatsapp.net`, prolxp)
} else if (double == 4) {
await enviar(`👍🏼MUITA SORTE!!!😬\n\nVocê pulou o muro, e se salvou da polícia.\nGanhou ${prolxp} Dinheiro, Meu soldado anti prisão!`)
addKoinUser(sender, prolxp, dinheiro)
} else if (double == 5) {
await enviar(`💀 WASTED - SE FODEU ⚰️\n\nAcabou perdendo ${nrolxp} em seu dinheiro, pra ganhar, aposte mais alto.`)
addKoinUser(sender, nrolxp, dinheiro)
addKoinUser(`${OwnerNumber}@s.whatsapp.net`, prolxp)
} else if (double == 6) {
await enviar(`✨CONGRATULATIONS💫\n\nVocê finalmente ganhou, receba seus ${prolxp} de dinheiro`)
addKoinUser(sender, prolxp, dinheiro)
}
break

//**********Baixar musica**********//
case 'play':
playzin = args.join(' ')
if(!playzin) return reply('Cade o nome da música?')
bla = await fetchJson(`https://aleatoryapi.herokuapp.com/api/play?q=${playzin}&apikey=ale203`) 
pla = `
╭═─═─═─═─ • ◆ • ─═─═─═─═
╿TITULO: ${bla.titulo}
╿VISUS: ${bla.visu}
╿CANAL: ${bla.canal}
╿PUBLICADO EM: ${bla.publicado}
╰═─═─═─═─ • ◆ • ─═─═─═─═`
img = await getBuffer(bla.thumb)
footerText: `Escolha entre as tres opções`
client.sendMessage(from, img, image, {quoted: mek, caption: pla})
aud = await getBuffer(bla.url)
client.sendMessage(from, aud, audio, {quoted: mek, mimetype: 'audio/mp4'})
break

//**********Jogos**********//
case 'gay1':
if (args.length < 1) return reply('marque os gay do gp!')
rate = body.slice(5)
var ti =['4','9','17','28','34','48','59','62','74','83','97','100','29','94','75','82','41','39']
var kl = ti[Math.floor(Math.random() * ti.length)]
client.sendMessage(from, 'Como você é gay: *'+rate+'*\n\nSua porcentagem gay : '+ kl+'%\n esse ai ama dá o cu', text, { quoted: mek })
break

case 'feio1':
if (args.length < 1) return reply('marque alguem fei que doi!')
rate = body.slice(6)
var ti =['4','9','17','28','34','48','59','62','74','83','97','100','29','94','75','82','41','39']
var kl = ti[Math.floor(Math.random() * ti.length)]
client.sendMessage(from, 'Como você é feio: *'+rate+'*\n\nSua porcentagem de feiura é : '+ kl+'%\n parece um sarigue kkk', text, { quoted: mek })
break
case 'lindo1':
if (args.length < 1) return reply('marque alguem bonito!')
rate = body.slice(8)
var ti =['4','9','17','28','34','48','59','62','74','83','97','100','29','94','75','82','41','39']
var kl = ti[Math.floor(Math.random() * ti.length)]
client.sendMessage(from, 'Como você é lindo: *'+rate+'*\n\nSua porcentagem de Lindeza é : '+ kl+'%\n parece um boleto pago kkk', text, { quoted: mek })
break
case 'gostoso1':
if (args.length < 1) return reply('marque sua mãe aquela gostosa!')
rate = body.slice(9)
var ti =['4','9','17','28','34','48','59','62','74','83','97','100','29','94','75','82','41','39']
var kl = ti[Math.floor(Math.random() * ti.length)]
client.sendMessage(from, 'tu e gostoso(a) será?: *'+rate+'*\n\nSua porcentagem de gostoso é : '+ kl+'%🤤\n slk comia ate o pau mofar🌚 kkk', text, { quoted: mek })
break
case 'gado1':
if (args.length < 1) return reply('marque um gado!')
rate = body.slice(6)
var ti =['4','9','17','28','34','48','59','62','74','83','97','100','29','94','75','82','41','39']
var kl = ti[Math.floor(Math.random() * ti.length)]
client.sendMessage(from, 'tu e gado(a) será?: *'+rate+'*\n\nSua porcentagem de gado é : '+ kl+'%😏\n maluco falta comer um buraco na parede kkk', text, { quoted: mek })
break

case 'nickff': 
if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
anu = await fetchJson(`https://api.zeks.me/api/nickepep?apikey=Alphabott`)
anu1 = `Aqui está: ${anu.result}\n`
reply(anu1)
break

case 'morte':
if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
idde = ["30", "76", "90", "72", "83", "73", "83", "74", "92", "100", "94", "48", "37", "53", "63"]
idadez = idde[Math.floor(Math.random() * (idde.length))]
morte = `Pessoas com este nome: ${pushname} \nTendem a morrer aos ${idadez} anos de idadez.`
reply(morte)
break

case 'gadometro':
if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
var chifre = ["ultra extreme gado", "Gado-Master", "Gado-Rei", "Gado", "Escravo-ceta", "Escravo-ceta Maximo", "Gacorno?", "Jogador De Forno Livre<3", "Mestre Do Frifai<3<3", "Gado-Manso", "Gado-Conformado", "Gado-Incubado", "Gado Deus", "Mestre dos Gados", "Topa tudo por buceta", "Gado Comum", "Mini Gadinho", "Gado Iniciante", "Gado Basico", "Gado Intermediario", "Gado Avançado", "Gado Profisional", "Gado Mestre", "Gado Chifrudo", "Corno Conformado", "Corno HiperChifrudo", "Chifrudo Deus", "Mestre dos Chifrudos"]
var gado = chifre[Math.floor(Math.random() * chifre.length)]
gadop = `${Math.floor(Math.random() * 100)}`
hisil = `Você é:\n\n${gado}`
reply(hisil)
break

case 'grupo':
buttons = [{buttonId: `.guxtane abrir`,buttonText:{displayText: 'ABRIR'},type:1},{buttonId:`.guxtane fechar`,buttonText:{displayText:'FECHAR'},type:1}]
imageMsg = (await client.prepareMessageMedia(fs.readFileSync(`./guxta/fotos/guxtinhah.jpg`), 'imageMessage', {thumbnail: fs.readFileSync(`./guxta/fotos/guxtinhah.jpg`)})).imageMessage
aiaiguxtaro = `Olá ${pushname} Como Vai?`
buttonsMessage = {
contentText: aiaiguxtaro,
footerText: "⟬Escolha Entre As Duas Opções Abaixo⟭", imageMessage: imageMsg,
buttons: buttons,
headerType: 4
}
prep = await client.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
client.relayWAMessage(prep)
break

case 'ppt':
if (!isRegistrar) return reply(mess.registro)
if (args.length < 1) return reply(ptbr.tterro())
ppt = ["pedra", "papel", "tesoura"]
ppy = ppt[Math.floor(Math.random() * ppt.length)]
ppg = Math.floor(Math.random() * 13) + 349
pptb = ppy
pph = `Você ganhou ${ppg} em xp`
if ((pptb == "pedra" && args == "papel") ||
(pptb == "papel" && args == "tesoura") ||
(pptb == "tesoura" && args == "pedra")) {
var vit = "vitoria"
} else if ((pptb == "pedra" && args == "tesoura") ||
(pptb == "papel" && args == "pedra") ||
(pptb == "tesoura" && args == "papel")) {
var vit = "derrota"
} else if ((pptb == "pedra" && args == "pedra") ||
(pptb == "papel" && args == "papel") ||
(pptb == "tesoura" && args == "tesoura")) {
var vit = "empate"
} else if (vit = "undefined") {
return reply(ptbr.tterro())
}
if (vit == "vitoria") {
var tes = `Vitória do ${pushname}`
}
if (vit == "derrota") {
var tes = `A vitória é do ${nomedobot}`
}
if (vit == "empate") {
var tes = `O jogo terminou em empate`
}
reply(`${nomedobot} jogou: ${pptb}\n${pushname} jogou: ${args}\n\n${tes}`)
if (tes == `Vitória do(a) ${pushname}`) {
reply(pph)
}
break

case 'sn': //jogos
if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
const sn = ['sim', 'não']
const gosto = body.slice(3)
if (args.length < 1) return client.sendMessage(from, `Você deve fazer uma pergunta...\nExemplo: ${p}sn O ${SeuNome} é um baiano preguiçoso?`, text, {quoted: mek})
const jawab = sn[Math.floor(Math.random() * (sn.length))]
hasil = `${gosto}\n\nSegundo meus cálculos, eu acredito que... ${jawab}`
enviar(hasil)
break

case 'chance': //Jogos
if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
client.sendMessage(from, Presence.composing) 
var avb = body.slice(7)
if (args.length < 1) return client.sendMessage(from, `Você precisa digitar da forma correta\nExemplo: ${p}chance do ${SeuNome} ser um trouxa`, text, {quoted: mek})
random = `${Math.floor(Math.random() * 100)}`
hasil = `A chance ${body.slice(7)}\n\né de... ${random}%`
client.sendMessage(from, hasil, text, {quoted: mek, contextInfo: {mentionedJid: [sender]}})
break

case 'pau'://Jogos
if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
random = `${Math.floor(Math.random() * 35)}`
const tamanho = random
if (tamanho < 13 ) {pp = 'só a fimose'} else if (tamanho == 13 ) {pp = 'passou da média😳'} else if (tamanho == 14 ) {pp = 'passou da média😳'} else if (tamanho == 15 ) {pp = 'eita, vai pegar manga?'} else if (tamanho == 16 ) {pp = 'eita, vai pegar manga?'} else if (tamanho == 17 ) {pp = 'calma man, a mina não é um poço😳'} else if (tamanho == 18 ) {pp = 'calma man, a mina não é um poço😳'} else if (tamanho == 19 ) {pp = 'calma man, a mina não é um poço😳'} else if (tamanho == 20 ) {pp = 'você tem um poste no meio das pernas'} else if (tamanho == 21 ) {pp = 'você tem um poste no meio das pernas'} else if (tamanho == 22 ) {pp = 'você tem um poste no meio das pernas'} else if (tamanho == 23 ) {pp = 'você tem um poste no meio das pernas'} else if (tamanho == 24 ) {pp = 'você tem um poste no meio das pernas'} else if (tamanho > 25 ) {pp = 'vai procurar petróleo com isso?'
}
hasil = `Seu pau tem ${random}cm\n\n${pp}`
enviar(hasil)
break

case 'slot': //Jogos
if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
client.updatePresence(from, Presence.composing) 
const somtoy = sotoy[Math.floor(Math.random() * (sotoy.length))]
ppg = Math.floor(Math.random() * 15) + 5490
dinheroslot = Math.floor(Math.random() * 14) + 500
addLevelingXp(sender, ppg)
addKoinUser(sender, dinheroslot)
if ((somtoy == '🥑 : 🥑 : 🥑') ||(somtoy == '🍉 : 🍉 : 🍉') ||(somtoy == '🍓 : 🍓 : 🍓') ||(somtoy == '🍎 : 🍎 : 🍎') ||(somtoy == '🍍 : 🍍 : 🍍') ||(somtoy == '🥝 : 🥝 : 🥝') ||(somtoy == '🍑 : 🍑 : 🍑') ||(somtoy == '🥥 : 🥥 : 🥥') ||(somtoy == '🍋 : 🍋 : 🍋') ||(somtoy == '🍐 : 🍐 : 🍐') ||(somtoy == '🍌 : 🍌 : ??') ||(somtoy == '❄️ : ❄️ : ❄️') ||(somtoy == '🔔 : 🔔 : 🔔') ||(somtoy == '🍊 : 🍊 : 🍊') ||(somtoy == '🍇 : 🍇 : 🍇')) {
var vitr = "Você ganhou!!!"
} else {
var vitr = "Você perdeu..."
}
const slott = 
`Consiga 3 iguais para ganhar
╔════ ≪ •❈• ≫ ════╗
║     [💰SLOT💰 | 777 ]        
║                                             
║                                             
║           ${somtoy}  ◄━━┛
║            
║                                           
║          [💰SLOT💰 | 777 ]        
╚════ ≪ •❈• ≫ ════╝
                     

${vitr}`
if (vitr == "Você ganhou!!!") {
setTimeout( () => {
reply(`Você ganhou ${ppg} em xp e ${dinheroslot} em dinhero!!!`)
}, 1100)
}
client.sendMessage(from, slott, text, {sendEphemeral: true, contextInfo: { forwardingScore: 508, isForwarded: true}, quoted: say3})
break

case 'minerar':
if (isOwner) {
const one = 9999999
addLevelingXp(sender, one)
addLevelingLevel(sender, 10)
reply(`como e vc sacole ganhou ${one} e +10 nível ⚡`)
}else{
const mining = Math.ceil(Math.random() * 20000)
addLevelingXp(sender, mining) 
await reply(`*${pushname} minérou⛏️ na mina e conseguiu* ${mining} de xp...*`)
}
break

case 'gay': //Jogos
if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
client.updatePresence(from, Presence.composing) 
random = `${Math.floor(Math.random() * 100)}`
boiola = random
if (boiola < 20 ) {bo = 'hmm... você é hetero😔'} else if (boiola == 21 ) {bo = '+/- boiola'} else if (boiola == 23 ) {bo = '+/- boiola'} else if (boiola == 24 ) {bo = '+/- boiola'} else if (boiola == 25 ) {bo = '+/- boiola'} else if (boiola == 26 ) {bo = '+/- boiola'} else if (boiola == 27 ) {bo = '+/- boiola'} else if (boiola == 28 ) {bo = '+/- boiola'} else if (boiola == 29 ) {bo = '+/- boiola'} else if (boiola == 30 ) {bo = '+/- boiola'} else if (boiola == 31 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 32 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 33 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 34 ) {bo = 'tenho minha desconfiança...??'} else if (boiola == 35 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 36 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 37 ) {bo = 'tenho minha desconfiança...??'} else if (boiola == 38 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 39 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 40 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 41 ) {bo = 'você é né?😏'} else if (boiola == 42 ) {bo = 'você é né?😏'} else if (boiola == 43 ) {bo = 'você é né?😏'} else if (boiola == 44 ) {bo = 'você é né?😏'} else if (boiola == 45 ) {bo = 'você é né?😏'} else if (boiola == 46 ) {bo = 'você é né?😏'} else if (boiola == 47 ) {bo = 'você é né?😏'} else if (boiola == 48 ) {bo = 'você é né?😏'} else if (boiola == 49 ) {bo = 'você é né?😏'} else if (boiola == 50 ) {bo = 'você é ou não???'} else if (boiola > 51) {bo = 'você é gay??'
}
hasil = `Você é ${random}% gay\n\n${bo}`
enviar(hasil)
break

case 'dado': //Jogos
if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
const dadus = ["1","2","3","4","5","6"]
dadu = dadus[Math.floor(Math.random() * dadus.length)]
dador = fs.readFileSync('./base de dados/dados/'+dadu+'.webp')
client.sendMessage(from, dador, sticker, {quoted: mek})
break

case 'tambor': //Jogos
if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
const tiro = ["vazio","vazio","vazio","vazio","vazio","vazio","vazio","vazio","pow","pow"]
const figr = ["pattta1","pattta2","pattta3"]
tpa = tiro[Math.floor(Math.random() * (tiro.length))]
tpb = figr[Math.floor(Math.random() * (figr.length))]
figb = fs.readFileSync('./src/'+tpb+'.webp')
if (tpa == "vazio") {
var morte = "Voc? teve sorte dessa vez, o tambor estava vazio."
} else if (tpa == "pow") {
var morte = "Tinha uma bala no tambor, POW!"
}
if (morte == "Tinha uma bala no tambor, POW!") {
setTimeout( () => {
client.sendMessage(from, figb, sticker, {quoted: mek})
}, 2100)
}
setTimeout( () => {
client.sendMessage(from, morte, text, {quoted: mek})
}, 2300)
break

case 'caracoroa': //Jogos
if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
const cara = fs.readFileSync('./base de dados/cara/cara.webp');
const coroa = fs.readFileSync('./base de dados/cara/coroa.webp');
cararo = ["cara", "coroa"]
fej = cararo[Math.floor(Math.random() * cararo.length)]
gg = fej
enviar(`voce conseguiu: ${fej}`)
cararoa = fs.readFileSync('./base de dados/cara/'+fej+'.webp')
client.sendMessage(from, cararoa, sticker, {quoted: mek})
break

case 'ttt':
if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
if (!isGroup) {
wtujuh = fs.readFileSync('./base de dados/audio/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
} else if (tttset.tttstatus == "on") {
reply(`Alguém já está jogando no momento\nPor favor aguarde um instante...`)
//} else if (tttset.waitingTime == "on") {
//reply(`Alguém jogou recentemente\nPor favor aguarde o tempo de espera...`)
} else if (args == 0 || (args != 'easy' && args != 'Easy' && args != 'EASY' && args != 'normal' && args != 'Normal' && args != 'NORMAL' && args != 'hard' && args != 'Hard' && args != 'HARD'&& args != 'impossible'&& args != 'Impossible' && args != 'IMPOSSIBLE')) {
reply(`Defina a dificuldade\nEx.: ${prefix}ttt easy\n\nDificuldades: easy, normal, hard e impossible`)
} else {
tttset.tttstatus = "on"
tttset.player = sender
tttset.playerName = pushname
tttset.mentionPlayer = mek
tttset.local = from
if (args == 'easy' || args == 'Easy' || args == 'EASY') {
tttset.tttdifficulty = "EASY"
} else if (args == 'normal' || args == 'Normal' || args == 'NORMAL') {
tttset.tttdifficulty = "NORMAL"
} else if (args == 'hard' || args == 'Hard' || args == 'HARD') {
tttset.tttdifficulty = "HARD"
} else if (args == 'impossible' || args == 'Impossible' || args == 'IMPOSSIBLE') {
tttset.tttdifficulty = "IMPOSSIBLE"
}
const randomStartIA = Math.floor(Math.random() * 3)
if (randomStartIA == 0) {
IA()
tttset.reActivate1 = "on"
}
reply(`O jogo começou!!!\nModo: ${tttset.tttdifficulty}`, text, tescuk)
client.sendMessage(from, `🌀1️⃣2️⃣3️⃣\n🅰️${esp.a1}${esp.a2}${esp.a3}\n🅱️${esp.b1}${esp.b2}${esp.b3}\n©️${esp.c1}${esp.c2}${esp.c3}`,text )
client.sendMessage(from,`Caso não saiba como jogar digite: ${prefix}ttthelp`, text) 
setTimeout( () => {
//tttset.waitingTime = "off"
tttset.autoEndTime = "on"
}, 120000) //4 minutos
addLimit(sender, daily)
}
break
case 'ttthelp':
if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
client.sendMessage(from, ttthelp(prefix), text)
break

case 'tttme':
if (!isGroup) return reply('SÓ EM GRUPO')
const checkTTTIdMe = getTTTId(sender)
if (checkTTTIdMe === undefined) addTTTId(sender)
client.sendMessage(from, tttme(pushname, getTTTwins(sender), getTTTdefeats(sender), getTTTties(sender), getTTTpoints(sender)), text, {quoted:mek, thumbnail:akaky})
break

case 'coord' :
tttset.playertest = sender
if (!isGroup) {
wtujuh = fs.readFileSync('./base de dados/audio/aguarde.mp3')
client.sendMessage(from, wtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
} else if (tttset.tttstatus == "off") {
reply(`Você ainda não iniciou o jogo\nDigite ${prefix}ttt [DIFICULDADE] para iniciar`)
} else if (tttset.player != tttset.playertest) {
reply(`Alguém já está jogando no momento\nPor favor aguarde um instante...`)
} else if (tttset.tttantibug == "on") {
reply(`Aguarde a ação anterior ser concluída...`)
} else {
tttset.tttantibug = "on"
const coordX = args
if (coordX != 'a1' && coordX != 'a2' && coordX != 'a3' &&
coordX != 'b1' && coordX != 'b2' && coordX != 'b3' &&
coordX != 'c1' && coordX != 'c2' && coordX != 'c3') {
reply(`Digite o comando com uma coordenada\nExemplo: ${prefix}coord a1`)
tttset.tttantibug = "off"
} else {
switch (args[0]) {
case 'a1':
if (esp.a1 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.a1 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break

case 'a2':
if (esp.a2 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.a2 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break

case 'a3':
if (esp.a3 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.a3 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'b1':
if (esp.b1 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.b1 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break

case 'b2':
if (esp.b2 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.b2 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break

case 'b3':
if (esp.b3 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.b3 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break

case 'c1':
if (esp.c1 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.c1 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break

case 'c2':
if (esp.c2 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.c2 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break

case 'c3':
if (esp.c3 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.c3 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
}
tttset.reActivate1 = "on"
reply(`🌀1️⃣2️⃣3️⃣\n🅰️${esp.a1}${esp.a2}${esp.a3}\n🅱️${esp.b1}${esp.b2}${esp.b3}\n©️${esp.c1}${esp.c2}${esp.c3}`)
var randomTTTXP = 0
if (WinnerX()) {
if (isLevelingOn) {
switch (tttset.tttdifficulty) {
case "EASY":
randomTTTXP = Math.floor(Math.random() * 500) + 505
addLevelingXp(tttset.player, randomTTTXP)
break
case "NORMAL":
randomTTTXP = Math.floor(Math.random() * 2000) + 5000
addLevelingXp(tttset.player, randomTTTXP)
break
case "HARD":
randomTTTXP = Math.floor(Math.random() * 5000) + 10000
addLevelingXp(tttset.player, randomTTTXP)
break
case "IMPOSSIBLE":
randomTTTXP = Math.floor(Math.random() * 9000) + 18000
addLevelingXp(tttset.player, randomTTTXP)
break
}
client.sendMessage(from, `🎉🎉 VITÓRIA DO JOGADOR 🎉🎉\n\n➣  RECOMPENSA: +${randomTTTXP} XP 🔮`, text)
ywtujuh = fs.readFileSync('./base de dados/audio/vitória.mp3')
client.sendMessage(from, ywtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
} else {
client.sendMessage(from, `🎉🎉 VITÓRIA DO JOGADOR 🎉🎉`, text)
ywtujuh = fs.readFileSync('./base de dados/audio/vitória.mp3')
client.sendMessage(from, ywtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
}
const currentTTTwins = getTTTwins(tttset.player)
const checkTTTIdWin = getTTTId(tttset.player)
if (currentTTTwins === undefined && checkTTTIdWin === undefined) addTTTId(tttset.player)
addTTTwin(tttset.player, 1)
addTTTpoints(tttset.player, randomTTTXP)
esp.a1 = "🔲"; esp.a2 = "🔲"; esp.a3 = "🔲"
esp.b1 = "🔲"; esp.b2 = "🔲"; esp.b3 = "🔲"
esp.c1 = "🔲"; esp.c2 = "🔲"; esp.c3 = "🔲"
tttset.tttstatus = "off"
tttset.waitingTime = "on"
} else if (WinnerO()) {
if (isLevelingOn) {
switch (tttset.tttdifficulty) {
case "EASY":
randomTTTXP = 0 - (Math.floor(Math.random() * 500) + 505)
addLevelingXp(tttset.player, randomTTTXP)
break
case "NORMAL":
randomTTTXP = 0 - (Math.floor(Math.random() * 2000) + 5000)
addLevelingXp(tttset.player, randomTTTXP)
break
case "HARD":
randomTTTXP = 0 - (Math.floor(Math.random() * 5000) + 10000)
addLevelingXp(tttset.player, randomTTTXP)
break
case "IMPOSSIBLE":
randomTTTXP = 0
addLevelingXp(tttset.player, randomTTTXP)
break
}
client.sendMessage(from, `🎉🎉 VITÓRIA DO ${setting. NamaBot} 🎉🎉\n\n➣  PUNIÇÃO: ${randomTTTXP} XP 🔮`, text)
if (!isOwner) ywtujuh = fs.readFileSync('./base de dados/audio/derrota.mp3')
if (!isOwner) client.sendMessage(from, ywtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
if (isOwner) ywtujuh = fs.readFileSync('./base de dados/audio/derrota.mp3')
if (isOwner) client.sendMessage(from, ywtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
} else {
client.sendMessage(from, ` *VOCÊ PERDEU! VITÓRIA É DA ${setting. NamaBot} 🎉🎉`, text)
if (!isOwner) ywtujuh = fs.readFileSync('./base de dados/audio/derrota.mp3')
if (!isOwner) client.sendMessage(from, ywtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
if (isOwner) ywtujuh = fs.readFileSync('./base de dados/audio/derrota.mp3')
if (isOwner) client.sendMessage(from, ywtujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
}
const currentTTTdefeats = getTTTdefeats(tttset.player)
const checkTTTIdDefeat = getTTTId(tttset.player)
if (currentTTTdefeats === undefined && checkTTTIdDefeat === undefined) addTTTId(tttset.player)
addTTTdefeat(tttset.player, 1)
addTTTpoints(tttset.player, randomTTTXP)
esp.a1 = "🔲"; esp.a2 = "🔲"; esp.a3 = "🔲"
esp.b1 = "🔲"; esp.b2 = "🔲"; esp.b3 = "🔲"
esp.c1 = "🔲"; esp.c2 = "🔲"; esp.c3 = "🔲"
tttset.tttstatus = "off"
tttset.waitingTime = "on"
} else if (Tie()) {
if (isLevelingOn) {
client.sendMessage(from, `🎉🎉 EMPATE 🎉🎉\n\n➣  NÃO HÁ GANHOS NEM PERDAS`, text)
tujuh = fs.readFileSync('./base de dados/audio/empate.mp3');
client.sendMessage(from, tujuh, audio, {quoted:mek, thumbnail:akaky})
} else {
client.sendMessage(from, `🎉🎉 EMPATE 🎉🎉`, text)
tujuh = fs.readFileSync('./base de dados/audio/empate.mp3');
client.sendMessage(from, tujuh, audio, {quoted:mek, thumbnail:akaky})
}
const currentTTTties = getTTTties(tttset.player)
const checkTTTIdTie = getTTTId(tttset.player)
if (currentTTTties === undefined && checkTTTIdTie === undefined) addTTTId(tttset.player)
addTTTtie(tttset.player, 1)
esp.a1 = "🔲"; esp.a2 = "🔲"; esp.a3 = "🔲"
esp.b1 = "🔲"; esp.b2 = "🔲"; esp.b3 = "🔲"
esp.c1 = "🔲"; esp.c2 = "🔲"; esp.c3 = "🔲"
tttset.tttstatus = "off"
tttset.waitingTime = "on"
}
tttset.tttantibug = "off"
}
}
break

case 'level':
if (!isGroup) return enviar(linguagem.group())
const userLevel = getLevelingLevel(sender)
const userXp = getLevelingXp(sender)
if (userLevel === undefined && userXp === undefined) return enviar(linguagem.levelnol())
var requiredXp = 5 * Math.pow(userLevel, (5 / 2)) + 50 * userLevel + 100
var getLevel = getLevelingLevel(sender)
const level_quetod = { key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "caption": `❲👾️-❪ 𝙻ᴇᴠᴇʟ ᴜᴘ ❫-👾❳\n⪧𝖳𝚊𝚐: @${sender.split('@')[0]}\n${per}`}}}
client.sendMessage(from, leveltab(sender, pushname, userLevel, userXp, role, getLevel), text, {quoted: level_quetod, contextInfo: {mentionedJid: [sender]}})
.catch(async(err) => {
console.error(err)
await enviar(`Error!\n${err}`)
})
break


//********** Criador **********//
case 'criador'://Não Remova isso São meus creditos
if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
buttons = [{buttonId: `.canal`,buttonText:{displayText: 'Ξ CANAL Ξ'},type:1},{buttonId:`.numero`,buttonText:{displayText:'Ξ NUMERO Ξ'},type:1}]
totalChat = await client.chats.all()
imageMsg = (await client.prepareMessageMedia(fs.readFileSync(`./guxta/fotos/guxtinhah.jpg`), 'imageMessage', {thumbnail: fs.readFileSync(`./guxta/fotos/guxtinhah.jpg`)})).imageMessage

guxtanocontrole = `Tdc é o trem `,
buttonsMessage = {
contentText: guxtanocontrole,
footerText: `${guxtadnv}`, imageMessage: imageMsg,
buttons: buttons,
headerType: 4
}
prep = await client.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
client.relayWAMessage(prep)
break

//********** Musicas **********//
case 'brocasito1'://tantos planos
tujuh = fs.readFileSync('./guxta/musicas/brocasitoplanos.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break

case 'brocasito2'://luz do luar
tujuh = fs.readFileSync('./guxta/musicas/brocaluzdoluar.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break

case 'brocasito3'://fuck17fuck12
tujuh = fs.readFileSync('./guxta/musicas/brocafuck.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break

case 'brocasito4'://p90
tujuh = fs.readFileSync('./guxta/flmusicas/brocasitoP90.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break

case 'brocasito5'://o mundo e meu
tujuh = fs.readFileSync('./guxta/musicas/brocaomundo.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break

case 'brocasito6'://perguntas
tujuh = fs.readFileSync('./guxta/musicas/brocaperguntas.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break

case 'brocasito7'://tijolos e vadias
tujuh = fs.readFileSync('./guxta/musicas/brocatijolos.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break

case 'placaloli':
if (args.length < 1) return reply(mess.blank)
teks = body.slice(10)
if (teks.length > 10) return reply('O texto é longo, até 10> caracteres')
reply('Acalme Seu Coração Um Pouquinho')
buffer = await getBuffer(`https://boonewsc.sirv.com/ae48756cab1adde1ad6c32913e86c43f.jpg?text.0.text=${teks}&text.0.position.x=-45%25&text.0.position.y=-15%25&text.0.size=48&text.0.color=000000&text.0.font.family=Vollkorn&text.0.font.weight=800&text.0.background.opacity=57" width="640" height="632" alt="" />`)
client.sendMessage(from, buffer, image, {quoted: mek, caption: 'cophyrigth©guxta?kkkkvsfd'})
break

case 'ddd'://@SUPRA ♡  
textw = body.slice(5)
reply(`Aguarde...`)
fref = await fetchJson(`https://supra-api.herokuapp.com/api/ddd?quero=${textw}&apikey=supraz`)
textt = `Estado = ${fref.estado}
Cidades = ${fref.cidades}`
client.sendMessage(from, textt, text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": `${nomedobot}`, 'jpegThumbnail': await getBuffer('https://i.pinimg.com/736x/6a/f4/43/6af4437506b69872c7ff6ec9b915dbe6.jpg')}}}})
break

case 'nsfw_ass':
ini_result = await fetchJson(`https://api-alphabot.herokuapp.com/api/nsfw/ass?apikey=Alphabot`)
get_result = ini_result.result
ini_img = await getBuffer(get_result)
client.sendMessage(from, ini_img, image, {quoted:mek})
break



case 'prr': // botão clicavel
if (!isRegistrar) return reply(mess.registro)//PEDI O REGISTRO
const botao3 = [
{buttonId: 'null', buttonText: {displayText: `Fazer Pix`}, type: 1},
]
const botao3Mensagem = {
contentText: `${replys_aiai}`,
footerText: ` `,
buttons: botao3,
headerType: 1
}
client.sendMessage(from, botao3Mensagem, MessageType.buttonsMessage, {quoted: mek})
break

default:
if (budy.includes(".com")){
if (!isGroup) return
if (!isAntiLink) return
if (isGroupAdmins) return reply(`*${pushname}* vc é admin por isso não vou te banir`)
client.updatePresence(from, Presence.composing)
var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
setTimeout( () => {
reply(`*🗣Sem link no grupo fdp❤*`)
}, 100)
reply(`*_「 link  detectado 」_*\n*${pushname}* Vc será banido do grupo *${groupMetadata.subject}*`)
setTimeout( () => {  
client.groupRemove(from, [Kick]).catch((e) => {reply(`*ERROR:* ${e}`)}) 
}, 10)
setTimeout( () => {
}, 0)
}
if (budy.includes("http://")){
if (!isGroup) return
if (!isAntiLink) return
if (isGroupAdmins) return reply(`*${pushname}* vc é admin por isso não vou te banir`)
client.updatePresence(from, Presence.composing)
var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
setTimeout( () => {
reply(`*🗣Sem link no grupo fdp❤*`)
}, 100)
reply(`*_「 link  detectado 」_*\n*${pushname}*\nBye Bye `)
setTimeout( () => {  
client.groupRemove(from, [Kick]).catch((e) => {reply(`*ERROR:* ${e}`)}) 
}, 10)
setTimeout( () => {
}, 0)
}

if (body == `${p + comando}`)  {
try {
ppimg = await client.getProfilePicture(sender)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
let menuAjuda = await getBuffer(ppimg)
hsl = `╭────── • ◆ • ──────\n│ ⟅❗CMD NÃO ENCONTRADO❗⟆ \n╠────── • ◆ • ──────\n│♞Ξ ❯ Olá @${sender.split("@")[0]}!\n│♞Ξ ❯ O comando: ${prefix}${comando}\n│♞Ξ ❯ Não existe ou digitou errado\n│♞Ξ ❯ Verifique usando ${p}menu \n╰────── • ◆ • ──────`
client.sendMessage(from, hsl, text, {quoted: mek, contextInfo: {mentionedJid: [sender]}})
}
}
} catch (err) {
e = String(err)
if (!e.includes("this.isZero" || !e.match("jid is not defined"))){
const time_error = moment.tz('America/Sao_Paulo').format('HH:mm:ss')
console.log(color(time_error, "yellow"), color("[ ERRO ]", "aqua"), color(e, 'red'))
}
}
})
}
starts()