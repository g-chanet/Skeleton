import { Common } from "..";

//------------------------------------------
//  INTERFACES
//------------------------------------------

export const n_Collection = "Collection";
export type RefCollection = Common.mongoId | ICollection;
export interface ICollection extends Common.ISchema {}

export interface IFolder {}

export interface IElement {}
