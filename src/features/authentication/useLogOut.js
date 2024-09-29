import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { logOutApi } from "../../services/authservice";
import { useNavigate } from "react-router-dom";
export default function useLogOut() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { isPending, mutate: logout } = useMutation({
    mutationFn: logOutApi,
    onSuccess: () => {
      queryClient.removeQueries();
      navigate("/auth", { replace: true });
    },
    onError: (err) => {
      const errorMessage =
        err?.response?.data?.statusCode || "An error occurred";
      toast.error(errorMessage);
    },
  });
  return { isPending, logout };
}
