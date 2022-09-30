import { m_User } from "../models";

export async function userCreate(obj: any): Promise<any> {
  return await new m_User(obj).save();
}

export async function userRead(obj: any): Promise<any> {
  return await m_User.findByIdAndUpdate(obj?._id, obj);
}

export async function userUpdate(obj: any): Promise<any> {
  return await m_User.findByIdAndUpdate(obj?._id, obj);
}

export async function userDelete(obj: any): Promise<any> {
  return await m_User.findByIdAndDelete(obj?._id, obj);
}
