function RHFSelect({
  label,
  name,
  register,
  options,
  required,
  proposalStatus,
}) {
  return (
    <div>
      <label htmlFor={name} className='mb-2 text-secondary-700  block'>
        {label}
        {required && <span className='text-error'>*</span>}
      </label>
      <select {...register(name)} id={name} className='textField__input' defaultValue={proposalStatus}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default RHFSelect;
