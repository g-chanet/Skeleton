import { Schema, model } from "mongoose";
import { User, Media } from "../ts/models";
import { E } from "../ts/index";
const ObjectId = Schema.Types.ObjectId;
const uniqueValidator = require("mongoose-unique-validator");

const s_Friend = new Schema<User.IFriend>({
  user: { type: ObjectId, ref: "User" },
  // TODO
});

const s_User = new Schema<User.IUser>(
  {
    pseudo: { type: String, required: true, trim: true, unique: true },
    mail: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
      unique: true,
    },
    password: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    birthday: { type: Date, required: true },
    avatar: { type: ObjectId, ref: Media.n_Image },
    bio: { type: String, required: false },
    friends: { type: [s_Friend], required: false },
    theme: { type: Number, required: true, enum: E.ETheme },
    language: { type: Number, required: true, enum: E.ELanguage },
    verifiedMail: { type: Boolean, required: true },
    lastConnected: { type: Date, required: true },
    isConnected: { type: Boolean, required: true },
  },
  { timestamps: true }
).plugin(uniqueValidator);

const s_Admin = new Schema<User.IAdmin>({});

export const m_User = model(User.n_User, s_User);
export const m_Admin = m_User.discriminator(User.n_Admin, s_Admin);
