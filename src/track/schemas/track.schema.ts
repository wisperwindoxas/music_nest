import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, ObjectId } from 'mongoose';
import { Comment } from './comment.schema';
import * as mongoose from 'mongoose'
export type TrackDocument = Track & Document;

@Schema()
export class Track {
  @Prop()
  name: string;
  @Prop()
  artist: string;
  @Prop()
  text: string;
  @Prop()
  listens: string;
  @Prop()
  picture: string;
  @Prop()
  audio: string;
  @Prop({type:[{type:mongoose.Schema.Types.ObjectId, ref:"Comment"}]})
  comments: Comment[];


}

export const TrackSchema = SchemaFactory.createForClass(Track);