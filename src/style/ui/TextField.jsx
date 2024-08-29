function TextField({ label, name, value, onChange }) {
  return (
    <div>
      <label htmlFor={name} className='mb-2 block'>
        {label}
      </label>
      <input
        value={value}
        onChange={onChange}
        id={name}
        name={name}
        type='text'
        className='textField__input'
      />
    </div>
  );
}

export default TextField;
