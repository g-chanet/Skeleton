import { Common, Gameobject, Media } from "..";
import { I } from "../..";

//------------------------------------------
//  INTERFACES
//------------------------------------------

export const n_Map = "Map";
export type RefMap = Common.mongoId | IMap;
export interface IMap extends Common.ISchema {
  _id: string;
  name: string;
  text?: string;
  image?: Media.RefImage;

  size: I.IPoint;
  grid: {
    visible: boolean;
    color: string;
  };
  board: {
    visible: boolean;
    color: string;
  };
  option: {
    uniteLabel?: string;
    uniteScale?: number;
  };
  layers: ILayer[];
  gameobjects?: Gameobject.RefGameObject[];
  matchLinked: string;
  createdBy: string;
}

export interface ILayer {
  _id: string;
  name: string;
  zOrder: number;
  gmOnly: boolean;
}
