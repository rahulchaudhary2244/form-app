import { EqualWidth } from '..';
import { FORM_FIELDS } from './constants';
import { createInput } from './utils';

export const UserRegistrationForm = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log('clicked');
    e.preventDefault();
  };

  return (
    <>
      <h1 className="text-center text-xl py-4">User registration form</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        {FORM_FIELDS.map((item, __idx) => {
          if (Array.isArray(item))
            return <EqualWidth key={__idx}>{item.map((child) => createInput(child.type, child))}</EqualWidth>;

          return createInput(item.type, item);
        })}
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Register User
        </button>
      </form>
    </>
  );
};
