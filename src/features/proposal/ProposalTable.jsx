import Empty from "../../style/ui/Empty";
import Loading from "../../style/ui/Loading";
import Table from "../../style/ui/Table";
import ProposalRow from "./ProposalRow";
import useProposals from "./useProposals";

function ProposalTable() {
  const { proposals, isLoading } = useProposals();
  if (isLoading) return <Loading />;
  if (!proposals.length) return <Empty resouseName='پروپوزال ' />;
  return (
    <Table>
      <Table.Header>
        <th>#</th>
        <th>توضیحات </th>
        <th>زمان تحویل</th>
        <th>هزینه</th>
        <th>وضعیت</th>
      </Table.Header>
      <Table.Body>
        {proposals.map((proposal, index) => (
          <ProposalRow key={proposal._id} index={index} proposal={proposal} />
        ))}
      </Table.Body>
    </Table>
  );
}

export default ProposalTable;
