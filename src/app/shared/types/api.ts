export interface ApiRes<T> {
  message: string;
  res: T;
  pagination?: {
    currentPage?: number;
    totalPages?: number;
    totalItems?: number;
  };
}

export type Query = {
  _order: string;
  _sort: string;
  _page: number | string;
  _limit: number;
  _category: number;
  _id: string;
};
