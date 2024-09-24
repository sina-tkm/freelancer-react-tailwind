import Loading from "../../style/ui/Loading";
import { useForm } from "react-hook-form";
import RHFSelect from "../../style/ui/RHFSelect";
import useChangeProposalStatus from "./useChangeProposalStatus";
import { useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
const option = [
  {
    label: "رد شده ",
    value: "0",
  },
  {
    label: "در انتظار تایید",
    value: "1",
  },
  {
    label: "تایید شده",
    value: "2",
  },
];
function ChangeProposalStatus({ proposaId, onClose, proposalStatus }) {
  const { id: projectId } = useParams();
  const { register, handleSubmit } = useForm({});
  const { isUpdating, changeProposalStatus } = useChangeProposalStatus();
  const queryClient = useQueryClient();
  const onSubmit = (data) => {
    changeProposalStatus(
      { id: proposaId, data },
      {
        onSuccess: () => {
          onClose();
          queryClient.invalidateQueries({
            queryKey: ["project", projectId],
          });
        },
      }
    );
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <RHFSelect
        register={register}
        proposalStatus={proposalStatus}
        name='status'
        label='تغییر وضعیت'
        required
        options={option}
      />
      <div className='!mt-8'>
        {isUpdating ? (
          <Loading />
        ) : (
          <button type='submit' className='btn btn--primary w-full'>
            تایید
          </button>
        )}
      </div>
    </form>
  );
}

export default ChangeProposalStatus;
