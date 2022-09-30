import { Common, Session, User } from "..";
import * as Music from "./music";

export * as Music from "./music";

//------------------------------------------
//  INTERFACES
//------------------------------------------

export const n_Playlist = "Playlist";
export type RefPlaylist = Common.mongoId | IPlaylist;
export interface IPlaylist extends Common.ISchema {
  name: string;

  user: User.RefUser;
  session: Session.RefSession;
}
