import * as express from "express";
import * as path from "path";
import * as ws from "ws";
import * as http from "http";
import HomeRouter from "./routers/HomeRouter";

class App
{
    private _port = process.env.PORT || 3000;
    private _server: ws.Server;

    public constructor()
    {
        const app = express();
        app.set("view engine", "hbs");
        app.set("views", path.join(__dirname, "/views"));
        app.use(express.static(path.join(__dirname, "../public")));
        app.use("/", HomeRouter);

        const httpServer = http.createServer(app);
        const wss = new ws.Server({ server: httpServer });

        wss.on("connection", (ws) => console.log("connection"));

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

        httpServer.listen(this._port,
            () =>
            {
                console.log("Server started. Port: ", this._port);
            });
    }
}

new App();
