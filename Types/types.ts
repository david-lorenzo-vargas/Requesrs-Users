export type User = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

type Support = {
  text: string;
  url: string;
}

export type UsersFetchResponse = {
  data: User[];
  page: number;
  per_page: number;
  support: Support;
  total: number;
  total_pages: number;
}