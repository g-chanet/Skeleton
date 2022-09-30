import { Express, Request, Response, Router } from 'express';
const authRoute = Router()

authRoute.get("/login", (req: Request, res: Response) => {
  res.send("Hello World in login!");
});

authRoute.get("/register", (req: Request, res: Response) => {
  res.send("Hello World in register!");
});

authRoute.get("/mailexist", (req: Request, res: Response) => {
  res.send("Hello World in register / verifymail!");
});

export { authRoute }