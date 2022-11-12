// a song from the Last.fm API
export default interface Song {
  name: string;
  // duration: string;
  playcount: string;
  listeners: string;
  url: string;
  artist: {
    name: string;
    url: string;
    mbid: string;
    // image: string | undefined;
  };
  // image: {
  //   "#text": string;
  //   size: string;
  // }[];
}
