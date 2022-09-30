import { Request, Response } from "express";
import { E } from "../ts";

export async function crudResponseToHttp(
  req: Request,
  res: Response,
  fn: (body: string) => Promise<any>
) {
  try {
    const { doc } = await fn(req.body as any);
    res.status(E.StatusCode.SuccessOK).json({ doc });
  } catch (error: any) {
    res.status(E.StatusCode.ServerErrorInternal).json({ error: error.message });
  }
}

export async function socketToCtrl(
  req: any,
  fn: (body: string) => Promise<any>
) {
  //TODO
}
