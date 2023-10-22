import { IVideo } from './search-item.model';

export interface IVideoList {
  kind: string;
  etag: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  items: IVideo[];
}
