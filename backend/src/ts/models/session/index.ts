import { Common, Media, User, System, Player, Salon, Collection } from "..";

//------------------------------------------
//  INTERFACES
//------------------------------------------

export const n_Session = "Session";
export type RefSession = Common.mongoId | ISession;
export interface ISession extends Common.ISchema {
  name: string;
  text?: string;
  image?: Media.IImage;

  creator: User.RefUser;
  system: System.RefSystem;
  collections: Collection.RefCollection[];
  users: User.RefUser[];
  players: Player.RefPlayer[];
  salon: Salon.RefSalon[];
}
