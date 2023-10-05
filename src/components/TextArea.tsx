type Props = {
  name: string;
  id: string;
  placeholder: string;
  required?: boolean;
};

const TextArea = ({ id, name, placeholder, required = false }: Props) => {
  return (
    <textarea
      key={id}
      required={required}
      id={id}
      rows={4}
      name={name}
      className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
      placeholder={placeholder}
    />
  );
};

export default TextArea;
