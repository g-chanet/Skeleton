import { Common, Media } from "..";
import * as Attr from "./attr";
import * as Display from "./display";
import * as Table from "./table";

export * as Attr from "./attr";
export * as Display from "./display";
export * as Table from "./table";

//------------------------------------------
//  INTERFACES
//------------------------------------------

export const n_System = "System";
export type RefSystem = Common.mongoId | ISystem;
export interface ISystem extends Common.ISchema {
  name: string;
  text?: string;
  image?: Media.IImage;
  tables: Table.ITable[];
  version: number;
}
