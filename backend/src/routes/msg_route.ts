import { crudResponseToHttp } from "../middelwares/routes_middelwares";
import { Request, Response, Router } from "express";
import * as controllers from "../controllers";
const msgRoute = Router();

msgRoute.post("/", (req: Request, res: Response) => {
  crudResponseToHttp(req, res, controllers.msgDelete);
});

msgRoute.get("/", (req: Request, res: Response) => {
  crudResponseToHttp(req, res, controllers.msgDelete);
});

msgRoute.put("/", (req: Request, res: Response) => {
  crudResponseToHttp(req, res, controllers.msgDelete);
});

msgRoute.delete("/", (req: Request, res: Response) => {
  crudResponseToHttp(req, res, controllers.msgDelete);
});

export { msgRoute };
