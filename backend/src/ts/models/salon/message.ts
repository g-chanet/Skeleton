import { Common, Player, User, Session, Salon, Media } from "..";

//------------------------------------------
//  INTERFACES
//------------------------------------------

export const n_Message = "Message";
export type RefMessage = Common.mongoId | IMessage;
export interface IMessage extends Common.ISchema {
  text?: string;
  image?: Media.RefMedia; // Oui Media

  user: User.RefUser;
  player: Player.RefPlayer;
  session: Session.RefSession;
  salon: Salon.RefSalon;
}

// db_message: mongoose.model(
//   "message",
//   new Schema(
//     {
//       throw: { type: Object, required: false },
//       isServer: { type: Boolean, default: false },
//       serverType: { type: String, enum: serverMsgType },
//       characterLinked: { type: Schema.Types.ObjectId, ref: "element" },
//       elementsLinked: [{ type: Schema.Types.ObjectId, ref: "element" }],

//     },
//     { timestamps: true }
//   ).plugin(autopopulate)
// ),
