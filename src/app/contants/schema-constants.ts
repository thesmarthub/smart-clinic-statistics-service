export const schemaHelperMap = {
  d_o_b: {
    type: 'age',
    models: [
      'Patient',
      'AppointmentRecord',
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
  },
  patient_sex: {
    type: 'string',
    models: '*',
    label: 'Sex',
    enum: ['Female', 'Male'],
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
  alt_phone: {
    type: 'string',
    models: ['Patient'],
    label: 'Alternative Phone number',
  },
  antenatal_status: {
    type: 'string',
    models: ['Patient'],
    label: 'Antenatal Status',
  },
  // consultation_history.developmental_milestone.fine_motor.adequate: {
  //   type: 'string',
  //   models: ['Patient'],
  //   label: 'Antenatal Status',
  // },
  date_of_evacuation: {
    type: 'date',
    models: ['Patient'],
    label: 'Date of Evacuation',
    transform: 'Date',
  },
  family_members: {
    type: 'string',
    models: ['Patient'],
    label: 'Family Members',
  },
  hiv_status: { 
    type: 'boolean',
    models: ['Patient'], 
    label: 'HIV Status',
    transform: 'Boolean',
  },
  hospital_branch_code: {
    type: 'string',
    models: ['Patient'],
    label: 'Hospital Branch Code',
  },
  is_art: {
    type: 'boolean',
    models: ['Patient'],
    label: 'ART patient',
    transform: 'Boolean',
  },
  hmo_benefactors: {
    type: 'string',
    models: ['Patient'],
    label: 'HMO Benefactors',
  },
  hmo_beneficiaries: {
    type: 'string',
    models: ['Patient'],
    label: 'HMO Beneficiaries',
  },
  hmo_expiry_date: {
    type: 'date',
    models: ['Patient'],
    label: 'HMO Expiring Date',
    transform: 'Date',
  },
  hmo_group: {
    type: 'string',
    models: ['Patient'],
    label: 'HMO Group',
  },
  hmo_code: {
    type: 'string',
    models: ['Patient'],
    label: 'HMO Code',
  },
  other_hmo_codes: {
    type: 'string',
    models: ['Patient'],
    label: 'Other HMO Code',
  },
  patient_hmo_code: {
    type: 'string',
    models: ['Patient'],
    label: 'Patient HMO Code',
  },
};

export interface ISchemaHelperMap {
  api?: string;
  models: string[];
  display?: string[];
  field?: string;
  type: string;
}
