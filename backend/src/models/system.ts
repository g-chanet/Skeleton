import { Schema, model } from "mongoose";
import { System, Media, User } from "../ts/models";
const ObjectId = Schema.Types.ObjectId;
const Attr = System.Attr;

const s_AttrString = new Schema<System.Attr.IString>({});
const s_AttrNumber = new Schema<System.Attr.INumber>({});
const s_AttrImage = new Schema<System.Attr.IImage>({});
const s_AttrDate = new Schema<System.Attr.IDate>({});
const s_AttrMod = new Schema<System.Attr.IMod>({});
const s_AttrRef = new Schema<System.Attr.IRef>({});
const s_AttrRefs = new Schema<System.Attr.IRefs>({});

const s_Attr = new Schema<System.Attr.IAttr>({
  name: { type: String, require: true, trim: true },
  tag: { type: Number, require: true, enum: System.Attr.ETag },
  // display: { type: Boolean, default: false },
});

const s_Table = new Schema<System.Table.ITable>({
  name: { type: String, require: true, trim: true },
  tag: { type: Number, require: true, enum: System.Table.ETableTag },
  color: { type: String, required: false },
  parent: { type: ObjectId, ref: System.Table.n_Table },
  attrs: [{ type: ObjectId, ref: Attr.n_Attr }],
  displayType: { type: Number, require: true, enum: System.Display.EType },
  // display: { type: Boolean, default: false },
});

const s_System = new Schema<System.ISystem>(
  {
    name: { type: String, required: true },
    text: { type: String, required: false },
    image: { type: ObjectId, ref: Media.n_Image },
    tables: [{ type: ObjectId, ref: System.Table.n_Table }],
    createdBy: { type: ObjectId, ref: User.n_User },
  },
  { timestamps: true }
);

export const m_System = model(System.n_System, s_System);

export const m_Table = model(System.Table.n_Table, s_Table);

const m_Attr = model(Attr.n_Attr, s_Attr);
export const m_AttrString = m_Attr.discriminator(Attr.n_String, s_AttrString);
export const m_AttrNumber = m_Attr.discriminator(Attr.n_Number, s_AttrNumber);
export const m_AttrImage = m_Attr.discriminator(Attr.n_Image, s_AttrImage);
export const m_AttrDate = m_Attr.discriminator(Attr.n_Date, s_AttrDate);
export const m_AttrMod = m_Attr.discriminator(Attr.n_Mod, s_AttrMod);
export const m_AttrRef = m_Attr.discriminator(Attr.n_Ref, s_AttrRef);
export const m_AttrRefs = m_Attr.discriminator(Attr.n_Refs, s_AttrRefs);
