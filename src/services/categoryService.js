import http from "./httpService";

export default function getCategoryService() {
  return http.get("/category/list").then(({ data }) => data.data);
}
