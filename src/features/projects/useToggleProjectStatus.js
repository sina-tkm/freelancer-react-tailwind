import { useMutation, useQueryClient } from "@tanstack/react-query";
import ToggleProjectStatus from "./ToggleProjectStatus";
import toast from "react-hot-toast";
import { toggleProjectStatusApi } from "../../services/projectService";

export default function useToggleProjectStatus() {
  const queryClient = useQueryClient();
  const { isPending: isUpating, mutate: toggleProjectStatus } = useMutation({
    mutationFn: toggleProjectStatusApi,
    onSuccess: (data) => {
      toast.success(data.message);
      queryClient.invalidateQueries({
        queryKey: ["owner-projects"],
      });
    },
    onError: (err) => {
      const errorMessage = err?.response?.data?.statusCode || "an error";
      toast.error(errorMessage);
    },
  });
  return { isUpating, toggleProjectStatus };
}
