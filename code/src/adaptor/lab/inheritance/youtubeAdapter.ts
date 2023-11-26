
import { Youtube } from "./youtubeAPI";
import { MediaProvider } from "./spotifyAPI";


export class YoutubeAdapter extends Youtube implements MediaProvider {
  getPlaylist(): string[] {
    return this.getMusicLibrary().map((music) => music.name);
  }
}
