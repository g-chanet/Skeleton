import { Schema, model } from "mongoose";

//==================================
//  USER
//==================================

export const s_User = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  mail: { type: String, required: true },
  password: { type: String, required: true },
});

export const n_User = "User";
export const m_User = model(n_User, s_User);

//==================================
//  USER / ADMIN
//==================================

export const s_Amin = new Schema({
  createAccount: { type: Boolean, required: true },
});

export const n_Admin = "Admin";
export const m_Admin = m_User.discriminator(n_Admin, s_Amin);
