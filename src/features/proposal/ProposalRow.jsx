import Table from "../../style/ui/Table";
import toPersianNumbers from "../../utils/toPersianNumbers";
import truncateText from "../../utils/truncateText";

function ProposalRow({ proposal, index }) {
  const { status } = proposal;
  const statusStyle = [
    {
      label: "رد شده ",
      className: "badge--danger",
    },
    {
      label: "در انتظار تایید",
      className: "badge--secondary",
    },
    {
      label: "تایید شده",
      className: "badge--success",
    },
  ];
  return (
    <Table.row key={proposal._id}>
      <td>{index + 1}</td>
      <td>{truncateText(proposal.description, 50)}</td>
      <td>{toPersianNumbers(proposal.duration)} روز</td>
      <td>{toPersianNumbers(proposal.price)}</td>
      <td>
        <span className={`badge ${statusStyle[status].className} my-4`}>
          {statusStyle[status].label}
        </span>
      </td>
    </Table.row>
  );
}

export default ProposalRow;
