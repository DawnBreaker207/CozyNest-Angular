export interface ApiRes<T> {
  message: string;
  res: T;
  pagination?: {
    currentPage?: number;
    totalPages?: number;
    totalItems?: number;
  };
}

export type IQuery = {
  _order: string;
  _sort: string;
  _page: number | string;
  _limit: number;
  _category: number;
  _id: string | null;
};
