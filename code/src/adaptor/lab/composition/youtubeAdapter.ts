import { MediaProvider } from './spotifyAPI';
import { YoutubeAPI } from './youtubeAPI';

export class YoutubeAdapter implements MediaProvider {
  private youtube: YoutubeAPI;
  constructor(youtube: YoutubeAPI) {
    this.youtube = youtube;
  }

  connect(): string {
    return this.youtube.connect();
  }

  getPlaylist(): string[] {
    return this.youtube.getMusicLibrary().map((music) => music.name);
  }
}
