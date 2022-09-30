import { Common } from "..";
import { Attr, Display } from ".";

//------------------------------------------
//  INTERFACES
//------------------------------------------

export const n_Table = "Table";
export type RefTable = Common.mongoId | ITable;
export interface ITable extends Common.ISchema {
  name: string;
  tag: ETableTag;
  color?: Common.mongoHex;
  parent?: Common.mongoId;
  attrs: Attr.IAttr[];

  displayType?: Display.EType;
  display?: Display.ITable;
}

//------------------------------------------
//  ENUMS
//------------------------------------------

export enum ETableTag {
  Undefined = 0,
  Character = 1,
}
