import ProjectHeader from "../features/Project/ProjectHeader";
import ProposalsTable from "../features/Project/ProposalsTable";
import useProject from "../features/Project/useProject";
import Loading from "../style/ui/Loading";

function Project() {
  const { isLoading, project } = useProject();

  if (isLoading) return <Loading />;
  return (
    <div>
      <ProjectHeader project={project} />
      <ProposalsTable proposals={project.proposals} />
    </div>
  );
}

export default Project;
