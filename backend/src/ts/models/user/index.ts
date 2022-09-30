import { Common, Media } from "..";
import { E } from "../../";

//------------------------------------------
//  INTERFACES
//------------------------------------------

export const n_User = "User";
export type RefUser = Common.mongoId | IUser;
export interface IUser extends Common.ISchema {
  pseudo: string;
  mail: string;
  password: string;
  firstName: string;
  lastName: string;
  birthday: Date;
  avatar?: Media.RefImage;
  bio?: string;
  friends?: IFriend[];

  theme: E.ETheme;
  language: E.ELanguage;
  verifiedMail: boolean;

  lastConnected: Date;
  isConnected: boolean;
}

export const n_Admin = "Admin";
export type RefAdmin = Common.mongoId | IAdmin;
export interface IAdmin extends IUser {}

export interface IFriend {
  user: RefUser;
  status: E.EFriendStatus;
  updatedStatus: Date;
}
