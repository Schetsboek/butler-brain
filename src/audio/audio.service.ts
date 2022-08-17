import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { createWriteStream } from 'fs';
import * as ytdl from 'ytdl-core';
import Config from './../config';

@Injectable()
export class AudioService {

  async download(id: string): Promise<string> {
    const uuid = randomUUID();
    const filePath = Config.MUSIC_FOLDER + '/' + uuid + '.mp3';
    ytdl(id, { quality: 'highestaudio' }).pipe(createWriteStream(Config.MUSIC_FOLDER + '/' + uuid + '.mp3'));
    return filePath;
  }
}
