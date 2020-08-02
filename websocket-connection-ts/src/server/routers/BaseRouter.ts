import { Router } from "express";

export default abstract class BaseRouter
{
    private _router: Router;

    public constructor()
    {
        this._router = Router();
        this.Init();
    }

    public get Router(): Router
    {
        return this._router;
    }

    protected abstract Init();
}