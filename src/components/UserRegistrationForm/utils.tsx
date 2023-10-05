import { SelectInput, TextArea, TextBox } from '..';
import { InputProps, InputType } from './types';

export const createInput = (type: InputType, props: InputProps) => {
  if (type === 'textarea') return <TextArea key={props.id} name={props.id} {...props} />;

  if (type === 'select') return <SelectInput key={props.id} name={props.id} {...props} />;

  return <TextBox key={props.id} name={props.id} {...props} />;
};
