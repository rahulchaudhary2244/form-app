export type InputType = 'text' | 'email' | 'number' | 'textarea' | 'select';

export type InputProps = {
  id: string;
  placeholder: string;
  required?: boolean;
  type: InputType;
  options?: string[];
};

export type FormFields = Array<InputProps | InputProps[]>;
