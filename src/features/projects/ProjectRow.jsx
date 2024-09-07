import Table from "../../style/ui/Table";
import toLocalDateShort from "../../utils/toLocalDateShort";
import toPersianNumbers from "../../utils/toPersianNumbers";
import truncateText from "../../utils/truncateText";

function ProjectRow({ project, index }) {
  return (
    <Table.row key={project._id}>
      <th>{index + 1}</th>
      <th>{truncateText(project.title, 30)}</th>
      <th>{project.category.title}</th>
      <th>{toPersianNumbers(project.budget)}</th>
      <th>{toLocalDateShort(project.deadline)}</th>
      <th>
        <div className='flex flex-wrap items-center gap-2 max-w-[200px]'>
          {project.tags.map((tag) => (
            <span key={tag} className='badge badge--secondary'>
              {tag}
            </span>
          ))}
        </div>
      </th>
      <th>{project.freelancer?.name || "-"}</th>
      <th>
        {project.status === "OPEN" ? (
          <span className='badge badge--success'>باز</span>
        ) : (
          <span className='badge badge--danger'>بسته</span>
        )}
      </th>
      <th>...</th>
    </Table.row>
  );
}

export default ProjectRow;
