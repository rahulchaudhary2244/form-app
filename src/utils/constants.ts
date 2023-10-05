import { FormFields } from '../types';

export const FORM_FIELDS: FormFields = [
  [
    {
      id: 'firstName',
      placeholder: 'First name',
      required: true,
      type: 'text',
    },
    {
      id: 'lastName',
      placeholder: 'Last name',
      required: true,
      type: 'text',
    },
  ],
  {
    id: 'Email',
    placeholder: 'Email',
    required: true,
    type: 'email',
  },
  {
    id: 'address1',
    placeholder: 'Address 1',
    type: 'text',
  },
  [
    {
      id: 'city',
      placeholder: 'City',
      type: 'text',
    },
    {
      id: 'state',
      placeholder: 'State',
      type: 'text',
    },
    {
      id: 'zip',
      placeholder: 'Zip',
      type: 'text',
    },
  ],
  {
    id: 'phone',
    placeholder: 'Phone',
    required: true,
    type: 'text',
  },
  {
    id: 'jobTitle',
    options: [
      'Engineer - lead',
      'Engineer - mid level',
      'Engineer - junion',
      'Engineer - front end focused',
      'Engineer - backend focused',
      'Engineer - full stack',
    ],
    placeholder: 'Please select job title',
    type: 'select',
  },
  {
    id: 'reason',
    placeholder: 'Describe why you are a good fit for the job you are applying for.',
    type: 'textarea',
  },
];
