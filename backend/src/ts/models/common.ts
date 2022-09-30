import { S } from "..";

export type mongoRef = mongoId | mongoDoc;
export type mongoDoc = any;
export type mongoId = string;
export type mongoHex = string;
export type mongoColor = mongoHex;

//------------------------------------------
//  INTERFACES
//------------------------------------------

export interface ISchema {
  readonly _id: mongoId;
  readonly createdBy?: S.User.RefUser;
  readonly updatedAt: Date;
  readonly createdAt: Date;
}

// String
// Number
// Date
// Buffer
// Boolean
// Mixed
// ObjectId
// Array
// Decimal128
// Map
// Schema
