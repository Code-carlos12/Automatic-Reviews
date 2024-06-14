const TelegramBot = require('node-telegram-bot-api');
const token = '7394769981:AAHacg5-sxklMSIKNTnxuoH3hz6NvyN1I-Y';
const bot =new TelegramBot(token, {polling: true});

function extractPlaceId(url){
    const match = url.match(/place\/([^\/]+)\//);
    return match ? match[1] : null;
}

bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text;
    const url = msg.text;

    bot.sendMessage(chatId, `Place ID: ${placeId}`);
});

