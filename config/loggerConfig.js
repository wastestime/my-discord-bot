var winston = require('winston');
const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports: [
        new winston.transports.File({ filename: 'logger.log'})
    ]
});

if (process.env.NODE_ENV !== 'production') {
    logger.remove(logger.transports.Console);
    logger.add(new winston.transports.Console({
        colorize: true,
        format: winston.format.simple()
    }));
    logger.level = 'debug';
}

module.exports = logger;