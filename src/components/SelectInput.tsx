type Props = {
  name: string;
  id: string;
  placeholder: string;
  required?: boolean;
  options?: string[];
};

export const SelectInput = ({ id, name, options, placeholder, required = false }: Props) => {
  return (
    <select
      name={name}
      required={required}
      id={id}
      defaultValue={''}
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
    >
      <option value="" disabled>
        {placeholder}
      </option>
      {options &&
        options.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
    </select>
  );
};
