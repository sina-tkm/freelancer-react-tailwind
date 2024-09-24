import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import changeProposalStatusApi from "../../services/prposalService";
export default function useChangeProposalStatus() {
  const { isPending: isUpdating, mutate: changeProposalStatus } = useMutation({
    mutationFn: changeProposalStatusApi,
    onSuccess: (data) => {
      toast.success(data.message);
    },
    onError: (err) => {
      const errorMessage =
        err?.response?.data?.statusCode || "An error occurred";
      toast.error(errorMessage);
    },
  });
  return { isUpdating, changeProposalStatus };
}
