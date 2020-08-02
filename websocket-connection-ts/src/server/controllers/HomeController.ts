import { Request, Response } from "express";

export default class HomeController
{
    public static Index(req: Request, res: Response): void
    {
        res.render("home.hbs", { layout: "layouts/layout" });
    }
}