export interface IEpisode {
  id: number;
  name: string;
  air_date: string;
  episode: string;

  characters: string[];
}

export interface IPaginationInfo {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}

export interface IResponseWithPagination<T> {
  info: IPaginationInfo;
  results: T[];
}
