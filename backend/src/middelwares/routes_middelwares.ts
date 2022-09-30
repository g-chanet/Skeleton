import { Request, Response } from "express";
import StatusCode from "../ts/statuscode.enum";

export async function crudResponseToHttp(
  req: Request,
  res: Response,
  fn: (body: string) => Promise<any>
) {
  try {
    const { doc } = await fn(req.body as any);
    res.status(StatusCode.SuccessOK).json({ doc });
  } catch (error: any) {
    res.status(StatusCode.ServerErrorInternal).json({ error: error.message });
  }
}

export async function socketToCtrl() {}
