export type SearchResultResponse = {
  title: string;
  url: string;
};

export type GetSearchRequestParams = {
  q: string;
};

export type PostSearchRequestBody = {
  query: string;
};
