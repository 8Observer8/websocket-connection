"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var path = require("path");
var ws = require("ws");
var http = require("http");
var HomeRouter_1 = require("./routers/HomeRouter");
var App = /** @class */ (function () {
    function App() {
        var _this = this;
        this._port = process.env.PORT || 3000;
        var app = express();
        app.set("view engine", "hbs");
        app.set("views", path.join(__dirname, "/views"));
        app.use(express.static(path.join(__dirname, "../public")));
        app.use("/", HomeRouter_1.default);
        var httpServer = http.createServer(app);
        var wss = new ws.Server({ server: httpServer });
        wss.on("connection", function (ws) { return console.log("connection"); });
        // app.listen(this._port,
        //     () =>
        //     {
        //         console.log("Server started. Port: ", this._port);
        //     });
        // this._server = new ws.Server({ port: this._port as number });
        // this._server.on("connection",
        //     (ws) =>
        //     {
        //         console.log("connection");
        //     });
        httpServer.listen(this._port, function () {
            console.log("Server started. Port: ", _this._port);
        });
    }
    return App;
}());
new App();
//# sourceMappingURL=App.js.map