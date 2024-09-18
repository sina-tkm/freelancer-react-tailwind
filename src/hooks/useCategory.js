import { useQuery } from "@tanstack/react-query";
import getCategoryService from "../services/categoryService";
export default function useCategories() {
  const { data, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategoryService,
  });
  const { categories: rawCategories = [] } = data || {};
  const categories = rawCategories.map((item) => ({
    label: item.title,
    value: item.englishTitle,
  }));
  const transformCategories = rawCategories.map((item) => ({
    label: item.title,
    value: item._id,
  }));
  return { categories, transformCategories, isLoading };
}
