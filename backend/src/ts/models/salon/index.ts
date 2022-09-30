import { Common, Session, Player } from "..";
import * as Message from "./message";

export * as Message from "./message";

//------------------------------------------
//  INTERFACES
//------------------------------------------

export const n_Salon = "Salon";
export type RefSalon = Common.mongoId | ISalon;
export interface ISalon extends Common.ISchema {
  session: Session.RefSession;
  players: Player.RefPlayer[];
}
