import { useState } from "react";
import Modal from "../../style/ui/Modal";
import Table from "../../style/ui/Table";
import toLocalDateShort from "../../utils/toLocalDateShort";
import toPersianNumbers from "../../utils/toPersianNumbers";
import truncateText from "../../utils/truncateText";
import { HiOutlineTrash } from "react-icons/hi";
import { TbPencilMinus } from "react-icons/tb";
import ConfirmDelete from "../../style/ui/ConfirmDelete";
import useRemoveProject from "./useREmoveProject";
import CreateProjectForm from "./CreateProjectForm";

function ProjectRow({ project, index }) {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const { isDeleting, removeProject } = useRemoveProject();
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
      <th>
        <div className='flex gap-x-4'>
          <>
            <button onClick={() => setIsEditOpen(true)}>
              <TbPencilMinus className='w-5 h-5 text-primary-900' />
            </button>
            <Modal
              title={`ویرایش ${project.title}`}
              open={isEditOpen}
              onClose={() => setIsEditOpen(false)}
            >
              <CreateProjectForm
                onClose={() => setIsEditOpen(false)}
                projectToEdit={project}
              />
            </Modal>
          </>
          <>
            <button onClick={() => setIsDeleteOpen(true)}>
              <HiOutlineTrash className='w-5 h-5 text-error' />
            </button>
            <Modal
              title={` حذف ${project.title}`}
              open={isDeleteOpen}
              onClose={() => setIsDeleteOpen(false)}
            >
              <ConfirmDelete
                resourceName={project.title}
                onclose={() => setIsDeleteOpen(false)}
                onConfirm={() =>
                  removeProject(project._id, {
                    onSuccess: () => setIsDeleteOpen(false),
                  })
                }
                disabled={false}
              />
            </Modal>
          </>
        </div>
      </th>
    </Table.row>
  );
}

export default ProjectRow;
