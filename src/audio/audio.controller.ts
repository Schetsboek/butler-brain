import { Body, Controller, Post } from '@nestjs/common';
import { AudioService } from './audio.service';

@Controller('audio')
export class AudioController {

  constructor(private readonly audioService: AudioService) {}

  @Post('download')
  async download(@Body() dto): Promise<string> {
    return this.audioService.download(dto.id);
  }
}
