import { SearchResultResponse } from '../search';

export type QueryHistoryEntry = {
  query: string;
  timestamp: string;
  data: SearchResultResponse[];
};

export type PaginatedQueryHistoryResponse = {
  entries: QueryHistoryEntry[];
  totalCount: number;
  totalPages: number;
  currentPage: number;
  pageSize: number;
};
