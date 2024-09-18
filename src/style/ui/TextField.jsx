function TextField({
  label,
  name,
  register,
  type = "text",
  required,
  validationSchema,
  errors,
}) {
  return (
    <div>
      <label htmlFor={name} className='mb-2 block text-secondary-700'>
        {label} {required && <span className='text-error'>*</span>}
      </label>
      <input
        id={name}
        name={name}
        {...register(name, validationSchema)}
        type={type}
        className='textField__input'
        autoComplete='off'
      />
      {errors && errors[name] && (
        <span className='text-error block text-sm mt-2'>
          {errors[name]?.message}
        </span>
      )}
    </div>
  );
}

export default TextField;
