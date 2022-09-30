import { Common, Session, User, Map, Media } from "..";

//------------------------------------------
//  INTERFACES
//------------------------------------------

export const n_Player = "Player";
export type RefPlayer = Common.mongoId | IPlayer;
export interface IPlayer extends Common.ISchema {
  session: Session.RefSession;
  user: User.RefUser;

  pseudo: string;
  color: Common.mongoHex;
  avatar: Media.RefImage;

  activeMap: Map.RefMap;
  lastConnected: Date;
  isConnected: boolean;
}

export const n_PC = "PC";
export type RefPC = Common.mongoId | IPC;
export interface IPC extends IPlayer {
  mapsAccess: Map.RefMap[];
}

export const n_GM = "GM";
export type RefGM = Common.mongoId | IGM;
export interface IGM extends IPlayer {}
