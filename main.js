
const RhythmBot = require('./src/rhythm-bot.js');
const logger = require('./src/logger.js');

const bot = new RhythmBot({
    command: {
        symbol: '!' // command symbol trigger
    },
    discord: {
        token: 'NTY2MTM3ODM4NzQ4MzAzMzcw.XRiAWQ.Kn0dgIk7w6U7F4xfY6DYuILsrBw'//,
        // manage: {
        //     channels: [ 
        //         // Example text channel manager, limits media channel to 5 posts, limit should probably be less than 100 to avoid bugs
        //         { name: 'media', limit: 5 }  
        //     ]
        // }
    }
});

bot.connect()
    .then(() => { 
        logger.log('Listening');
        bot.listen();
    })
    .catch(err => {
        logger.error(err);
    });
