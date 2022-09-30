import { Common } from "..";

//------------------------------------------
//  INTERFACES
//------------------------------------------

export const n_Media = "Media";
export type RefMedia = Common.mongoId | IMedia;
export interface IMedia extends Common.ISchema {
  name: string;
  path: string;
  size: number;
  mime: string;
}

export const n_Image = "MediaImage";
export type RefImage = Common.mongoId | IImage;
export interface IImage extends IMedia {}

export const n_Video = "MediaVideo";
export type RefVideo = Common.mongoId | IVideo;
export interface IVideo extends IMedia {}

export const n_Audio = "MediaAudio";
export type RefAudio = Common.mongoId | IAudio;
export interface IAudio extends IMedia {}
