import { Schema, model } from "mongoose";
import { Media } from "../ts/models";
const ObjectId = Schema.Types.ObjectId;

const s_Media = new Schema<Media.IMedia>(
  {
    name: { type: String, required: true },
    path: { type: String, required: true },
    size: { type: Number, required: true },
    mime: { type: String, required: true },
  },
  { timestamps: true }
);

const s_MediaImage = new Schema<Media.IImage>({});
const s_MediaVideo = new Schema<Media.IVideo>({});
const s_MediaAudio = new Schema<Media.IAudio>({});

const m_Media = model(Media.n_Media, s_Media);
export const m_MediaImage = m_Media.discriminator(Media.n_Image, s_MediaImage);
export const m_MediaVideo = m_Media.discriminator(Media.n_Video, s_MediaVideo);
export const m_MediaAudio = m_Media.discriminator(Media.n_Audio, s_MediaAudio);
