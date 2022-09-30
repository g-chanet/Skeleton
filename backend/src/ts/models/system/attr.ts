import { Common, System } from "..";

//------------------------------------------
//  INTERFACES
//------------------------------------------

export const n_Attr = "Attr";
export type RefAttr = Common.mongoId | IAttr;
export interface IAttr extends Common.ISchema {
  name: string;
  tag: ETag;
  display?: System.Display.IAttr;
}

export const n_String = "AttrString";
export type RefString = Common.mongoId | IString;
export interface IString extends IAttr {
  default: string;
  textarea: boolean;
}

export const n_Number = "AttrNumber";
export type RefNumber = Common.mongoId | INumber;
export interface INumber extends IAttr {
  default: number;
}

export const n_Image = "AttrImage";
export type RefImage = Common.mongoId | IImage;
export interface IImage extends IAttr {}

export const n_Date = "AttrDate";
export type RefDate = Common.mongoId | IDate;
export interface IDate extends IAttr {}

export const n_Mod = "AttrMod";
export type RefMod = Common.mongoId | IMod;
export interface IMod extends IAttr {}

export const n_Ref = "AttrRef";
export type RefRef = Common.mongoId | IRef;
export interface IRef extends IAttr {}

export const n_Refs = "AttrRefs";
export type RefRefs = Common.mongoId | IRefs;
export interface IRefs extends IAttr {}

//------------------------------------------
//  ENUMS
//------------------------------------------

export enum ETag {
  Undefined = 0,
  Name = 1,
}
