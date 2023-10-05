import { HTMLInputTypeAttribute } from 'react';

type Props = {
  required?: boolean;
  name: string;
  placeholder: string;
  type: HTMLInputTypeAttribute;
  id: string;
};

const TextBox = ({ required = false, name, placeholder, id, type }: Props) => {
  return (
    <input
      key={id}
      id={id}
      name={name}
      required={required}
      type={type}
      placeholder={placeholder}
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
    />
  );
};

export default TextBox;
