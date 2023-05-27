import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Track } from './track.schema';

export type CommentDocument = Document & Comment;

@Schema()
export class Comment {
  @Prop()
  username: string;
  @Prop()
  text: string;
  @Prop({type:mongoose.Schema.Types.ObjectId, ref:"Track"})
  track:Track


}

export const CommentSchema = SchemaFactory.createForClass(Comment);