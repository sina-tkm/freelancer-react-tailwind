import useToggleProjectStatus from "./useToggleProjectStatus";
import Loading from "../../style/ui/Loading";
import Toggle from "../../style/ui/Toggle";

function ToggleProjectStatus({ project }) {
  const { status } = project;

  const { isUpating, toggleProjectStatus } = useToggleProjectStatus();
  const toggleHandler = () => {
    const newStatus = status === "OPEN" ? "CLOSED" : "OPEN";

    toggleProjectStatus({
      id: project._id,
      data: { status: newStatus },
    });
  };
  return (
    <div className='w-[5rem]'>
      {isUpating ? (
        <Loading height={20} width={20} />
      ) : (
        <Toggle
          label={status === "OPEN" ? "باز" : "بسته"}
          enabled={project.status === "OPEN" ? true : false}
          onChange={toggleHandler}
        />
      )}
    </div>
  );
}

export default ToggleProjectStatus;
