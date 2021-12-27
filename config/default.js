module.exports = {
    server: {
        port: 9000
    },
    database: {
        url: "mongodb://localhost:27017/nodejssimpledev",
        properties: {
            useNewUrlParser: true,
            useUnifiedTopology: true,
           /* user: "abass",
            pass: "abass"*/
        }
    },
    key: {
        privateKey: '37LvDSm4XvjYOh9Y',
        tokenExpireInSeconds: 1440
    },
    pagination: {
        defaultPage: 1,
        defaultLimit: 10
    }
};