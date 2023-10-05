import { FORM_FIELDS } from '../utils/constants';
import EqualWidth from './EqualWidth';
import { createInput } from '../utils/utils';

const DynamicForm = () => {
  return (
    <>
      <h1 className="text-center text-xl py-4">Registration form</h1>
      <form className="flex flex-col gap-3">
        {FORM_FIELDS.map((item, __idx) => {
          if (Array.isArray(item))
            return <EqualWidth key={__idx}>{item.map((child) => createInput(child.type, child))}</EqualWidth>;

          return createInput(item.type, item);
        })}
      </form>
    </>
  );
};

export default DynamicForm;
