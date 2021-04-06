export const schemaHelperMap = {
  d_o_b: {
    type: 'age',
    models: [
      'Patient',
      'AppointmentRecord',
      'AdmissionRecord',
      'Consultation',
      'LabRequest',
      'RadiologyRequest',
      'PharmacyRequest',
    ],
    label: 'Age',
    transform: 'Date',
  },
  diagnosis: {
    type: 'search',
    api: ['/find-icd'],
    models: ['Consultation'],
    label: 'Diagnosis',
  },
  requests: {
    type: 'populate-search',
    field: 'requests.test',
    display: ['requests.test.name'],
    models: ['LabRequest', 'RadiologyRequest'],
  },
  created_at: {
    type: 'date',
    models: '*',
    label: 'Created On',
    transform: 'Date',
  },
  updated_at: {
    type: 'date',
    models: '*',
    label: 'Updated On',
    transform: 'Date',
  },
  fname: {
    type: 'string',
    models: '*',
    label: 'First Name',
  },
  lname: {
    type: 'string',
    models: '*',
    label: 'Last Name',
  },
  appointment_time: {
    type: 'date',
    models: ['AppointmentModel'],
    label: 'Appointment Date',
    transform: 'Date',
  },
  sex: {
    type: 'string',
    models: '*',
    label: 'Sex',
    enum: ['Female', 'Male'],
    hide: true
  },
  patient_sex: {
    type: 'string',
    models: '*',
    label: 'Sex',
    enum: ['Female', 'Male'],
    hide: true
  },
  activePackage: {
    type: 'string',
    models: ['Patient'],
    label: 'Account Type',
    enum: ['hmo', 'retainership'],
  },
  admission_time: {
    type: 'date',
    models: ['AdmissionRecord'],
    label: 'Date Admitted',
    transform: 'Date',
  },
  "discharge_summary.date_of_admission": {
    type: 'date',
    models: ['AdmissionRecord'],
    label: 'Date of Admission',
    transform: 'Date'
  },
  "discharge_summary.date_of_discharge": {
    type: 'date',
    models: ['AdmissionRecord'],
    label: 'Date of Discharge',
    transform: 'Date'
  },
  
};

export interface ISchemaHelperMap {
  api?: string;
  models: string[] | string;
  display?: string[];
  field?: string;
  type: string;
  transform?: string;
  label?: string;
  enum?: any[];
  hide?: boolean;
}
