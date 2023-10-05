import SelectInput from '../components/SelectInput';
import TextArea from '../components/TextArea';
import TextBox from '../components/TextBox';
import { InputProps, InputType } from '../types';

export const createInput = (type: InputType, props: InputProps) => {
  if (type === 'textarea') return <TextArea name={props.id} {...props} />;

  if (type === 'select') return <SelectInput name={props.id} {...props} />;

  return <TextBox name={props.id} {...props} />;
};
