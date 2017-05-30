export class Photo {
  images: {
    thumbnail: {
      width: number;
      height: number;
      url: string;
    },
    low_resolution: {
      width: number;
      height: number;
      url: string;
    },
    standard_resolution: {
      width: number;
      height: number;
      url: string;
    }
  }
}
