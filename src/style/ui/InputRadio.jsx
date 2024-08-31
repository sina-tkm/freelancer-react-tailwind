function InputRadio({ name, value, label, id, onChange ,checked }) {
  return (
    <div className='flex gap-x-2 text-secondary-600 items-center'>
      <input
        type='radio'
        name={name}
        value={value}
        id={id}
        className=' w-4 h-4 cursor-pointer form-radio'
        onChange={onChange}
        checked={checked}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
}

export default InputRadio;
