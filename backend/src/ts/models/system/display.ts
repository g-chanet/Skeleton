import { Common } from "..";

//------------------------------------------
//  INTERFACES
//------------------------------------------

export const n_Table = "DisplayTable";
export type RefTable = Common.mongoId | ITable;
export interface ITable extends Common.ISchema {} // BRAINSTROMING

export const n_Attr = "DisplayAttr";
export type RefAttr = Common.mongoId | IAttr;
export interface IAttr extends Common.ISchema {} // BRAINSTROMING

//------------------------------------------
//  ENUMS
//------------------------------------------

export enum EType {
  Default = 0,
  Custom = 1,
}
