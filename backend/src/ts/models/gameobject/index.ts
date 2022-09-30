import { Common, Media } from "..";
import { I } from "../..";

//------------------------------------------
//  INTERFACES
//------------------------------------------

export const n_GameObject = "GameObject";
export type RefGameObject = Common.mongoId | IGameobject;
export interface IGameobject extends Common.ISchema {
  position: I.IPoint;
  scale: I.IPoint;
  locked: boolean;
  rotation: number;
  layerIndex: string;
  zOrder: number;
  visible: boolean;
  objectLinked?: string;
  tokenLinked?: string | any;
  playersOwner?: string[];
  __t: string;
}

export const n_GoImage = "GoImage";
export type RefGoImage = Common.mongoId | IGoImage;
export interface IGoImage extends IGameobject {
  mediaLinked: Media.RefImage;
}

export const n_GoVideo = "GoVideo";
export type RefGoVideo = Common.mongoId | IGoVideo;
export interface IGoVideo extends IGameobject {
  video: Media.RefVideo;
}

export const n_GoLine = "GoLine";
export type RefGoLine = Common.mongoId | IGoLine;
export interface IGoLine extends IGameobject {
  pointA: I.IPoint;
  pointB: I.IPoint;
  color: number;
  size: number;
}

export const n_GoSquare = "GoSquare";
export type RefGoSquare = Common.mongoId | IGoSquare;
export interface IGoSquare extends IGameobject {
  pointA: I.IPoint;
  pointB: I.IPoint;
  color: number;
  size: number;
}

export const n_GoCircle = "GoCircle";
export type RefGoCircle = Common.mongoId | IGoCircle;
export interface IGoCircle extends IGameobject {
  radius: number;
  color: number;
}

export const n_GoText = "GoText";
export type RefGoText = Common.mongoId | IGoText;
export interface IGoText extends IGameobject {
  label: string;
}

export const n_GoToken = "GoToken";
export type RefGoToken = Common.mongoId | IGoToken;
export interface IGoToken extends IGameobject {
  characterId: Common.mongoId;
}
