const hiddenProps = (propsToHide: string[]) => {
  const finalObj = {};
  propsToHide.forEach((val) => {
    finalObj[val] = {
      hide: true,
      models: '*',
    };
  });
  return finalObj;
};

const propsToHide = [
  'address',
  'appointment',
  'attached_to',
  'care_plan',
  'consultation',
  'daily_report.assessment',
  'daily_report.background',
  'daily_report.recommendation',
  'daily_report.report',
  'daily_report.situation',
  'daily_report.entry_by',
  'daily_report.entry_by_name',
  'daily_report.date_created',
  'daily_reports',
  // 'department',
  'discharge_options',
  'discharge_summary.clinic_appointment',
  'Date of Admission',
  // 'discharge_summary.definitive_diagnosis',
  'discharge_summary.discharge_medications',
  'discharge_summary.relevant_investigation_results',
  'discharge_summary.status_on_discharge',
  'duration_in_hours',
  'duration_in_days',
  'discharge_summary.staff',
  'fluid_balance',
  'hmo_beneficiaries',
  'fluid_detail.amount_bf',
  'fluid_detail.amount_to_be_given',
  'fluid_detail.iv_fluid_details',
  'hospital_branch_code',
  'discharge_summary.date_of_admission',
  'lab_requests',
  'adult_feeding_chart',
  'nursing_history.examinations',
  'nursing_history.glucose_profile_chart_fields',
  'nursing_history.history.elimination',
  'neonatal_feeding_chart',
  'nursing_history.history.activity_or_exercise',
  'nursing_history.history.communication_or_special_senses',
  'nursing_history.history.coping_with_stress',
  'nursing_history.history.family_social_relationship',
  'nursing_history.history.feeling_about_self_or_image',
  'nursing_history.history.information',
  'nursing_history.history.nutrition',
  'nursing_history.history.other_information',
  'nursing_history.history.sexuality_or_reproduction',
  'nursing_history.history.sleep_and_rest',
  'nursing_history.history.state_of_health.past',
  'nursing_history.history.values_and_beliefs',
  'nursing_history.history.state_of_health.present',
  'observation_chart',
  'patient',
  'seizure_chart',
  'treatment_chart',
   'status',
   'vitals',
   'ward_round.drug_history_allergy',
   'ward_round.past_medical_history',
   'ward_round.family_and_social_history',
   'ward_round.initial_diagnosis',
   'ward_round.complains',
   'ward_round.initial_ward_round_notes',
   'ward_round.follow_up_ward_round_notes',
   'bed.description',
   'bed.bed_id',
   'bed.is_occupied',
   'cost_per_night',
   'emergency',
   'instruction',
   'drugs',
   '_id',
   'surgery_type',
   'slug',
   'Provisional Diagnosis',
   'discharge_summary.provisional_diagnosis',
   '-v',
   'allergies',
   'ward_beds',
   'consultation_history.developmental_milestone.gross_motor.adequate',
   'ward',
   'clinic',
   'admitted_by',
   '__v'



];

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
  patient_name: {
    type: 'string',
    models: '*',
    label: 'Patient Name',
  },

  hospital_number: {
    type: 'string',
    models: '*',
    label: 'Hospital Number',
  },
  address: {
    type: 'string',
    models: '*',
    label: 'Address',
  },
  number_of_nights: {
    type: 'number',
    models: '*',
    label: 'Number of Nights',
  },
  ward: {
    type: 'string',
    models: '*',
    label: 'Ward',
  },
  ward_name: {
    type: 'string',
    models: '*',
    label: 'Ward Name',
  },
  ward_department_route: {
    type: 'string',
    models: '*',
    label: 'ward Department Route',
  },
  number_of_beds_in_ward: {
    type: 'number',
    models: '*',
    label: 'Number Of Beds In Ward',
  },
  number_of_free_beds_in_ward: {
    type: 'number',
    models: '*',
    label: 'Number Of Free Beds In Ward',
  },
  is_ward_icu: {
    type: 'boolean',
    models: '*',
    label: 'Is Ward Icu',
  },
  no_of_patients_in_ward: {
    type: 'number',
    models: '*',
    label: 'Number Of Patients In Ward',
  },
  ward_capacity: {
    type: 'number',
    models: '*',
    label: 'Ward Capacity',
  },
  ward_gender: {
    type: 'number',
    models: '*',
    label: 'Ward Gender',
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
    label: 'Date Of Admission',
    transform: 'Date',
  },
  admitted_by: {
    type: 'string',
    models: ['AdmissionRecord'],
    label: 'Admitted By',
  },

  admitted_by_fname : {
    type: 'string',
    models: '*',
    label: 'Admitted By First Name',
  },
  admitted_by_lname  : {
    type: 'string',
    models: '*',
    label: 'Admitted By Last Name',
  },
  admitted_by_department_route : {
    type: 'string',
    models: '*',
    label: 'Admitted By Department Route',
  },
  admitted_by_gender : {
    type: 'string',
    models: '*',
    label: 'Admitted By Gender',
  },
  admitted_by_designation : {
    type: 'string',
    models: '*',
    label: 'Admitted By Designation',
  },

  'bed.name': {
    type: 'string',
    models: ['AdmissionRecord'],
    label: 'Bed Name',
  },

  'condition.stable': {
    type: 'boolean',
    models: ['AdmissionRecord'],
    label: 'Stable Condition',
  },

  'condition.ventilator': {
    type: 'boolean',
    models: ['AdmissionRecord'],
    label: 'On Ventilator',
  },

  discharge_method: {
    type: 'string',
    models: ['AdmissionRecord'],
    label: 'Discharge Method',
  },
  'discharge_summary.definitive_diagnosis':{
    type: 'string',
    models: '*',
    label: 'Discharge Summary Definitive Diagnosis',
  },

  'Date of Discharge': {
    type: 'date',
    models: ['AdmissionRecord'],
    label: 'Date of Discharge',
  },

  // 'discharge_summary.provisional_diagnosis': {
  //   type: 'string',
  //   models: ['AdmissionRecord'],
  //   label: 'discharge_summary Provisional Diagnosis',
  // },

  'discharge_summary.staff_name': {
    type: 'string',
    models: ['AdmissionRecord'],
    label: 'Discharged By',
  },
  final_diagnosis: {
    type: 'string',
    models: ['AdmissionRecord'],
    label: 'Final Diagnosis',
  },
  'provisional_diagnosis': {
    type: 'string',
    models: ['AdmissionRecord'],
    label: 'Provisional Diagnosis',
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

  'consultation_history.dental_history' : {
    type: 'string',
    models: ['Patient'],
    label: 'Consultation History Dental History',
  },
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

  'discharge_summary.date_of_discharge': {
    type: 'date',
    models: ['AdmissionRecord'],
    label: 'Date of Discharge',
    transform: 'Date',
  },
  ...hiddenProps(propsToHide),
};

console.log(schemaHelperMap);

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
