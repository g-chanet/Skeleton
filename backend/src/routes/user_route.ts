import { crudResponseToHttp } from "../middelwares/routes_middelwares";
import { Request, Response, Router } from "express";
import * as controllers from "../controllers";
const userRoute = Router();

userRoute.post("/", (req: Request, res: Response) => {
  crudResponseToHttp(req, res, controllers.userCreate);
});

userRoute.get("/", (req: Request, res: Response) => {
  crudResponseToHttp(req, res, controllers.userRead);
});

userRoute.put("/", (req: Request, res: Response) => {
  crudResponseToHttp(req, res, controllers.userUpdate);
});

userRoute.delete("/", (req: Request, res: Response) => {
  crudResponseToHttp(req, res, controllers.userDelete);
});

export { userRoute };
