import HomeController from "../controllers/HomeController";
import BaseRouter from "./BaseRouter";

export class HomeRouter extends BaseRouter
{
    public constructor()
    {
        super();
    }

    protected Init(): void
    {
        this.Router.get("/", HomeController.Index);
    }
}

const homeRouter = new HomeRouter();
export default homeRouter.Router;