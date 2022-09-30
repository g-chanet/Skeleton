import { Common, Playlist, Session, User } from "..";

//------------------------------------------
//  INTERFACES
//------------------------------------------

export const n_Music = "Music";
export type RefMusic = Common.mongoId | IMusic;
export interface IMusic extends Common.ISchema {
  snippet: "???";
  content: "???";

  playlist: Playlist.RefPlaylist;
  sessions: Session.RefSession[];
  user: User.RefUser;
}
