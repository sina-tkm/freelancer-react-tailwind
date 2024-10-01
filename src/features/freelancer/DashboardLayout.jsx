import Loading from "../../style/ui/Loading";
import useProposals from "../proposal/useProposals";
import DashboardHeader from "./DashboardHeader";
import Stats from "./Stats";

function DashboardLayout() {
  const { proposals, isLoading } = useProposals();
  if (isLoading) return <Loading />;
  return (
    <div>
      <DashboardHeader />
      <Stats proposals={proposals} />
    </div>
  );
}

export default DashboardLayout;
