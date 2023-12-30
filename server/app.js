const config = require("./config");
const express= require("express");
const cors= require('cors');
const http=require('http')
const bodyParser = require('body-parser');
const app=express();
const Constant=require('./constants.js')

// parse application/json
app.use(bodyParser.json({ limit: '50mb' }));

// CORS + BODY_PARSE
const corsOptions = {
    origin: [process.env.CLIENT_URL],
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions));

//routes file
app.use('/api/v1', require('./routes/searchRoute.js'));


//Handling production and development server
if (config.NODE_ENV == "production") {
    console.log("Production ENV");
    //  httpServer = http.createServer(app);
} else {
    console.log("Development ENV")
    httpServer = http.createServer(app);
}

//Server connection
httpServer.listen(config.PORT, () => {
    console.log(`APP LISTENING ON http://${config.HOST}:${config.PORT}`);
});

// Handling non matching request from the client
app.use((req, res, next) => {
    return res.status(Constant.NOT_FOUND).json({
        code: Constant.NOT_FOUND,
        message: Constant.REQUEST_NOT_FOUND,
    })
});