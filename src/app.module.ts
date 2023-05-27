import { Module } from '@nestjs/common';
import { TrackModule } from './track/track.module';
import { MongooseModule } from '@nestjs/mongoose';



@Module({
  imports:[
    MongooseModule.forRoot('mongodb+srv://windoxas:5hspkfn9@music.a4twbzi.mongodb.net/music-platform?retryWrites=true&w=majority'),
    TrackModule
  ]
})
export class AppModule {}