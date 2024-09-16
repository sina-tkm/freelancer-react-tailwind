import { useState } from "react";
import Modal from "../../style/ui/Modal";
import CreateProjectForm from "./CreateProjectForm";
import { HiOutlinePlus } from "react-icons/hi";

function ProjectHeader() {
  const [open, setOpen] = useState(false);
  return (
    <div className='flex items-center justify-between mb-8'>
      <h1 className='font-black text-secondary-700 text-xl'>پروژه های من </h1>
      <Modal
        title='اضافه کردن پروژه'
        open={open}
        onClose={() => setOpen(false)}
      >
        <CreateProjectForm />
      </Modal>
      <button
        onClick={() => setOpen(true)}
        className='btn btn--primary flex items-center gap-x-2'
      >
        <HiOutlinePlus />
        <span>اضافه کردن پروژه</span>
      </button>
    </div>
  );
}

export default ProjectHeader;
