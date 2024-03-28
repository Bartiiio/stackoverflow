import { useQuery } from "@tanstack/react-query";
import { getTags } from "../api/getTags";

export function useGetTags(pageSize: number) {
   const {
      data: Tags,
      isLoading,
      error,
   } = useQuery({
      queryKey: ["Tags"],
      queryFn: () => getTags(pageSize),
   });
   return { Tags, isLoading, error };
}
