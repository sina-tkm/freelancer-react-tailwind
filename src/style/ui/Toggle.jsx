import { Field, Label, Switch } from "@headlessui/react";

function Toggle({ onChange, enabled, label }) {
  return (
    <div>
      {" "}
      <Field className='flex  gap-x-2'>
        <Label>{label}</Label>
        <Switch
          checked={enabled}
          onChange={onChange}
          className='group inline-flex h-6 w-11 items-center rounded-full bg-secondary-200 transition data-[checked]:bg-primary-900'
        >
          <span className='size-4 -translate-x-1 rounded-full bg-secondary-0 transition group-data-[checked]:-translate-x-6' />
        </Switch>
      </Field>
    </div>
  );
}

export default Toggle;
