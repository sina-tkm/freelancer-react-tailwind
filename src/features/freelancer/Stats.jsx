import Stat from "../../style/ui/stat";
import {
  HiOutlineViewGrid,
  HiCurrencyDollar,
  HiCollection,
} from "react-icons/hi";
function Stats({ proposals }) {
  const numOfProposals = proposals.length;
  const acceptedProposals = proposals.filter(
    (proposal) => proposal.status === 2
  );
  const balance = acceptedProposals.reduce((acc, curr) => acc + curr.price, 0);

  return (
    <div className='grid grid-cols-3 gap-8'>
      <Stat
        color='primary'
        title=' درخواست ها '
        value={numOfProposals}
        icon={<HiOutlineViewGrid className='w-20 h-20' />}
      />
      <Stat
        color='green'
        title='درخواست های قبول شده '
        value={acceptedProposals.length}
        icon={<HiCurrencyDollar className='w-20 h-20' />}
      />
      <Stat
        color='orange'
        title='کیف پول'
        value={balance}
        icon={<HiCollection className='w-20 h-20' />}
      />
    </div>
  );
}

export default Stats;
