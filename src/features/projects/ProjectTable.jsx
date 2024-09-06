import useOwnerProject from "./useOwnerProject";
import Loading from "../../style/ui/Loading";
import Empty from "../../style/ui/Empty";
import truncateText from "../../utils/truncateText";
import toLocalDateShort from "../../utils/toLocalDateShort";
import toPersianNumbers from "../../utils/toPersianNumbers";
function ProjectTable() {
  const { isLoading, projects } = useOwnerProject();

  if (isLoading) return <Loading />;
  if (!projects.length) return <Empty resouseName=' پروژه ای' />;
  return (
    <div className='bg-secondary-0 overflow-x-auto'>
      <table>
        <thead>
          <tr className='title-row'>
            <th>#</th>
            <th>عنوان پروژه</th>
            <th>دسته بندی</th>
            <th>بودجه</th>
            <th>ددلاین</th>
            <th>تگ ها</th>
            <th>فریلنسر</th>
            <th>وضعیت </th>
            <th>عملیات</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project, index) => (
            <tr key={project._id}>
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProjectTable;
