import { decode, verify, sign, Algorithm, JwtPayload } from "jsonwebtoken";
import * as configs from "./";

const jwtKey = (configs.env.get("TOKEN_KEY") || "hnU5Pno") as string;
const jwtAlg = (configs.env.get("TOKEN_ALG") || "RS256") as Algorithm;
const jwtExp = (configs.env.get("TOKEN_EXP") || "24h") as string;

export function JwtSign(userId: string) {
  return sign({ id: userId }, jwtKey, {
    expiresIn: jwtExp,
    algorithm: jwtAlg,
  });
}

export function JwtVerify(token: string): { error: any; data: any } {
  try {
    const decode = verify(token, jwtKey) as JwtPayload;
    return { error: null, data: decode };
  } catch (err: any) {
    return { error: err.message, data: null };
  }
}
