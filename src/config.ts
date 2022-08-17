require('dotenv').config({ path: './.env' });

export default {
  PORT: process.env.PORT || '4040',
  VERSION: process.env.VERSION || '1.0',
  MUSIC_FOLDER: process.env.MUSIC_FOLDER || '/home/schetsboek/music',
}