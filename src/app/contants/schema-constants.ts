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
  '__v',
  'list_of_appointments',
  'next_of_kin.occupation',
  'next_of_kin_address',
  'next_of_kin_email',
  'next_of_kin_fname',
  'next_of_kin_lname',
  'next_of_kin_phone',
  'next_of_kin_sex',
  'next_of_kin_relationship',
  'retainership',
  'password',
  'consultation_history.surgery_history.complications.is_true',
  'consultation_history.surgery_history.drug_allergies.is_true',
  'consultation_history.social_history.alcohol.is_true',
  'consultation_history.social_history.cigarettes.is_true.sticks_per_day',
  'consultation_history.social_history.cigarettes.is_true.duration',
  'onsultation_history.family_history.family_tree.mother.achievement',
  'onsultation_history.family_history.family_tree.father.achievement',
  'consultation_history.neonatal_history.natal.gestational_age_at_delivery.term_type',
  'consultation_history.breast.doctor_remarks.impression_on_expectation',
  'consultation_history.neonatal_history.pre_natal.ingestion_of_herbal_concoctions_during_pregnancy.other_herbal_concoctions',
  'consultation_history.family_history.does_child_go_to_creche_or_school',
  'consultation_history.family_history.siblings_age_and_class',
  'consultation_history.family_history.family_tree.mother.achievement',
  'consultation_history.family_history.family_tree.father.achievement',
  'consultation_history.neonatal_history.post_natal.others_in_postnatal'

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
  department_name: {
    type: 'string',
    models: '*',
    label: 'Department Name'
  },
  department_route: {
    type: 'string',
    models: '*',
    label: 'Department Route'
  },
  department_type: {
    type: 'string',
    models: '*',
    label: 'Department Type'
  },
  department_appointment_code: {
    type: 'string',
    models: '*',
    label: 'Department Appointment Code'
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
  balance: {
    type: 'number',
    models: ['Patient'],
    label: 'Balance',
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
    //label: 'Consultation History Dental History',
    label: 'Dental History',
  },
  'consultation_history.developmental_milestone.gross_motor.comment' : {
    type: 'string',
    models: ['Patient'],
    //label: 'Consultation History Developmental Milestone Gross Motor Comment',
    label: 'Gross Motor Comment',

  },
  'consultation_history.developmental_milestone.fine_motor.adequate' : {
    type: 'string',
    models: ['Patient'],
    //label: 'Consultation History Developmental Milestone Fine Motor Adequate',
    label: 'Fine Motor Adequate',
  },
  'consultation_history.developmental_milestone.fine_motor.comment' : {
    type: 'string',
    models: ['Patient'],
    //label: 'Consultation History Developmental Milestone Fine Motor Comment',
    label: 'Fine Motor Comment',

  },
  'consultation_history.developmental_milestone.dental.adequate' : {
    type: 'string',
    models: ['Patient'],
    //label: 'Consultation History Developmental Milestone Dental Adequate',
    label: 'Dental Adequate',

  },
  'consultation_history.developmental_milestone.dental.comment' : {
    type: 'string',
    models: ['Patient'],
    //label: 'Consultation History Developmental Milestone Dental Comment',
    label: 'Dental Comment',

  },
  'consultation_history.surgery_history.previous_surgery' : {
    type: 'string',
    models: ['Patient'],
    label: 'Previous Surgery',
   // label: 'Consultation History Surgery History Previous Surgery',

  },

  'consultation_history.developmental_milestone.language.adequate': {
    type: 'string',
    models: ['Patient'],
   // label: 'Consultation History Developmental Milestone Language Adequate'
    label: 'Language Adequate'
  },
  'consultation_history.developmental_milestone.language.comment': {
    type: 'string',
    models: ['Patient'],
    label: 'Language Comment'
    //label: 'Consultation History Developmental Milestone Language Comment'
  },
  'consultation_history.surgery_history.complications.any': {
    type: 'boolean',
    models: ['Patient'],
    label: 'Any Surgery Complications '
    //label: 'Consultation History Surgery History Complications Any'

  },

  'consultation_history.surgery_history.drugs_history': {
    type: 'boolean',
    models: ['Patient'],
    label: 'Drugs History'
    //label: 'Consultation History Surgery History Drugs History'
  },
  'consultation_history.surgery_history.drug_allergies.any': {
    type: 'string',
    models: ['Patient'],
    //label: 'Consultation History Surgery History Drug Allergies Any'
    label: 'Any Drug Allergies'
  },
    'consultation_history.surgery_history.other_comments': {
    type: 'string',
    models: ['Patient'],
    label:'Surgery History Other Comments'
    //label:'Consultation History Surgery History Other Comments'
  },
  'consultation_history.obstetrics_history.menarche': {
    type: 'string',
    models: ['Patient'],
    label:'Menarche History'
    //label:'Consultation History Obstetrics History Menarche'
  },
  'consultation_history.obstetrics_history.last_menstrual_period.date': {
    type: 'date',
    models: ['Patient'],
    label:'Last Menstrual Period Date'
    //label:'Consultation History Obstetrics History Last Menstrual Period Date'

  },
  'consultation_history.obstetrics_history.last_menstrual_period.number_of_days': {
    type: 'number',
    models: ['Patient'],
    label:'Menstrual Period Number Of Days'
    //label:'Consultation History Obstetrics History Last Menstrual Period Number Of Days'

  },
  'consultation_history.obstetrics_history.last_menstrual_period.regular_flow': {
    type: 'boolean',
    models: ['Patient'],
    label:'Menstrual Period Regular Flow'
    //label:'Consultation History Obstetrics History Last Menstrual Period Regular Flow'

  },
  'consultation_history.obstetrics_history.last_menstrual_period.comment': {
    type: 'string',
    models: ['Patient'],
    label:'Menstrual Period Comment'
    //label:'Consultation History Obstetrics History Last Menstrual Period Comment'

  },
  'consultation_history.obstetrics_history.contraceptives.was_any_used': {
    type: 'boolean',
    models: ['Patient'],
    label:'Contraceptives Used'
    //label:'Consultation History Obstetrics History Contraceptives Was Any Used'
  },
  'consultation_history.obstetrics_history.contraceptives.type_if_true' : {
    type: 'boolean',
    models: ['Patient'],
    label:' Contraceptives Type If True'
    //label:'Consultation History Obstetrics History Contraceptives Type If True'

  },
  'consultation_history.obstetrics_history.pap_smear.any_been_done' : {
    type: 'string',
    models: ['Patient'],
    //label: 'Consultation History Obstetrics History Pap Smear Any Been Done'
    label: 'Pap Smear Been Done'

  },
  'consultation_history_obstetrics_hstory_pap_smear_last_papsmear_year' : {
    type: 'string',
    models: ['Patient'],
    //label: 'Consultation History Obstetrics History Pap Smear Last Papsmear Year'
    label: 'Last Pap Smear (Year)'

  },
  'consultation_history.obstetrics_history.pap_smear.last_papsmear_findings' : {
    type: 'string',
    models: ['Patient'],
    label: 'Last Pap Smear Findings'
    //label: 'Consultation History Obstetrics History Pap Smear Last Ppapsmear Findings'
  },
  'consultation_history.obstetrics_history.parity' : {
    type: 'string',
    models: ['Patient'],
    //label: 'Consultation History Obstetrics History Parity'
    label: 'History Parity'
  },
  'consultation_history.obstetrics_history.pap_smear.last_papsmear_year': {
    type: 'string',
    models: ['Patient'],
    label: 'Consultation History Obstetrics History Pap Smear Last Papsmear Year'
    //label: 'Consultation History Obstetrics History Pap Smear Last Papsmear Year'

  },
  'consultation_history.obstetrics_history.obs_history': {
    type: 'string',
    models: ['Patient'],
    label: 'Obs History'
    //label: 'Consultation History Obstetrics History Obs History'
  },
  'consultation_history.obstetrics_history.number_of_deliveries': {
    type: 'number',
    models: ['Patient'],
    //label: 'Consultation History Obstetrics History Number Of Deliveries'
    label: 'Number Of Deliveries'

  },
  'consultation_history.reproduction_history': {
    type: 'string',
    models: ['Patient'],
    //label: 'Consultation History Reproduction History'
    label: 'Reproduction History'

  },
  'consultation_history.obstetrics_history.mode_of_delivery': {
    type: 'string',
    models: ['Patient'],
    //label: 'Consultation History Obstetrics History Mode Of Delivery'
    label: 'Mode Of Delivery'

  },
  'consultation_history.obstetrics_history.history_of_termination_of_children': {
    type: 'string',
    models: ['Patient'],
    label: 'Termination Of Children'
    //label: 'Consultation History Obstetrics History History Of Termination Of Children'

  },
  'consultation_history.obstetrics_history.any_complications': {
    type: 'string',
    models: ['Patient'],
    label: 'Any Complications'
    //label: 'Consultation History Obstetrics History Any Complications'
  },
  'consultation_history.obstetrics_history.other_comments': {
    type: 'string',
    models: ['Patient'],
    //label: 'Consultation History Obstetrics History Other Comments'
    label: 'Obstetrics History Other Comments'

  },
  'consultation_history.medical_history.previous_condition': {
    type: 'string',
    models: ['Patient'],
    //label: 'Consultation History Medical History Previous Condition'
    label: 'Previous Medical Condition'
  },
  'consultation_history.medical_history.previous_blood_transfusion': {
    type: 'string',
    models: ['Patient'],
    label: 'Previous Blood Transfusion'
    //label: 'Consultation History Medical History Previous Blood Transfusion'
  },
  'consultation_history.medical_history.any_complications': {
    type: 'string',
    models: ['Patient'],
    label: 'Any Complications'
    //label: 'Consultation History Medical History Any Complications'
  },
  'consultation_history.medical_history.other_coments': {
    type: 'string',
    models: ['Patient'],
    label: 'Other Medical Coments'
    //label: 'Consultation History Medical History Other Coments'

  },
  'consultation_history.nutritional_history.type_of_feeding': {
    type: 'string',
    models: ['Patient'],
    //label: 'Consultation History Nutritional History Type Of Feeding'
    label: 'Type Of Feeding'

  },
  'consultation_history.nutritional_history.method_of_feeding': {
    type: 'string',
    models: ['Patient'],
    label: 'Method Of Feeding'
    //label: 'Consultation History Nutritional History Method Of Feeding'
  },
  'consultation_history.nutritional_history.weaning_diet': {
    type: 'string',
    models: ['Patient'],
    label: 'Weaning Diet'
    //label: 'Consultation History Nutritional History Weaning Diet'

  },
  'consultation_history.nutritional_history.frequency_adequacy_intervals_between_feeds': {
    type: 'string',
    models: ['Patient'],
    label: 'Intervals Between Feeds'
    //label: 'Consultation History Nutritional History Frequency Adequacy Intervals Between Feeds'

  },
  'consultation_history.nutritional_history.diet_recall': {
    type: 'string',
    models: ['Patient'],
    label: 'Diet Recall'
    //label: 'Consultation History Nutritional History Diet Recall'

  },
  'consultation_history.nutritional_history.method_of_preparation': {
    type: 'string',
    models: ['Patient'],
    label: 'Nutritional  Method Of Preparation'
    //label: 'Consultation History Nutritional History Method Of Preparation'

  },
  'consultation_history.immunization_history': {
    type: 'string',
    models: ['Patient'],
    label: 'Immunization History'
    //label: 'Consultation History Immunization History'
  },
  'consultation_history.social_history.alcohol.drinks_alcohol': {
    type: 'string',
    models: ['Patient'],
    label: 'Drinks Alcohol'
    //label: 'Consultation Sistory Social History Alcohol Drinks Alcohol'

  },

  'consultation_history.social_history.takes_shisha': {
    type: 'string',
    models: ['Patient'],
    label: 'Takes Shisha'
    // /label: 'Consultation History Social History Takes Shisha'
  },
  'consultation_history.social_history.cigarettes.smokes_cigarette': {
    type: 'string',
    models: ['Patient'],
    label: 'Smokes Cigarette'
    //label: 'Consultation History Social History Cigarettes Smokes Cigarette'
  },


  'consultation_history.social_history.hard_drugs': {
    type: 'string',
    models: ['Patient'],
    label: 'Hard Drugs'
    //label: 'Consultation History Social History Hard Drugs'

  },
  /*'consultation_history.social_history.other_Coments': {
    type: 'string',
    models: ['Patient'],
    label: 'Other  Social Coments'
   // label: 'Consultation History Social History Other Coments'

  },
  **/
  'consultation_history.family_history.hereditory_condition': {
    type: 'string',
    models: ['Patient'],
    label: 'Family Hereditory Condition'
    //label: 'Consultation History Family History Hereditory Condition'
  },
  'consultation_history.family_history.relationship_to_client': {
    type: 'string',
    models: ['Patient'],
    label: 'Relationship To Client'
    //label: 'Consultation History Family History Relationship To Client'
  },
  'consultation_history.family_history.history_of_similar_illness_in_siblings': {
    type: 'string',
    models: ['Patient'],
    label: 'Similar Illness In Siblings'
    //label: 'Consultation History Family History History Of Similar Illness In Siblings'

  },
  'consultation_history.social_history.other_coments	': {
    type: 'string',
    models: ['Patient'],
    label: 'Social History Other Coments	'
    //label: 'Consultation History Social History Other Coments	'
  },
  'consultation_history.family_history.any_other_information': {
    type: 'string',
    models: ['Patient'],
    label: 'Other Information'
    //label: 'Consultation History Family History Any Other Information'
  },
  'consultation_history.family_history.patient_position_in_family': {
    type: 'string',
    models: ['Patient'],
    label: 'Position In Family'
   // label: 'Consultation History Family History Patient Position In Family'

  },
  'consultation_history.family_history.intervention_so_far': {
    type: 'string',
    models: ['Patient'],
    label: 'Intervention So Far'
    //label: 'Consultation History Family History Intervention So Far'

  },
  'consultation_history.family_history.family_tree.mother.age': {
    type: 'number',
    models: ['Patient'],
    label: 'Mothers Age'
    //label: 'Consultation History Family History Family Tree Mother Age'

  },
  'consultation_history.family_history.family_tree.mother.blood_group': {
    type: 'string',
    models: ['Patient'],
    label: 'Mother Blood Group'
    //label: 'Consultation History Family History Family Tree Mother Blood Group'

  },
  'consultation_history.family_history.family_tree.mother.genotype': {
    type: 'string',
    models: ['Patient'],
    label: 'Mother Genotype'
    //label: 'Consultation History Family History Family Tree Mother Genotype'

  },
  'consultation_history.family_history.family_tree.mother.profession': {
    type: 'string',
    models: ['Patient'],
    label: 'Mother Profession'
    //label: 'Consultation History Family History Family Tree Mother Profession'

  },

  'consultation_history.social_history.other_coments': {
    type: 'string',
    models: ['Patient'],
    label: 'Other Social History Coments'
    //label: 'Consultation History Social History Other Coments'

  },
  'consultation_history.family_history.family_tree.father.age': {
    type: 'string',
    models: ['Patient'],
    label: 'Father Age'
    //label: 'Consultation History Family History Family Tree Father Age'

  },
  'consultation_history.family_history.family_tree.father.blood_group': {
    type: 'string',
    models: ['Patient'],
    label: 'Father Blood Group'
    //label: 'Consultation History Family History Family Tree Father Blood Group'

  },
  'consultation_history.family_history.family_tree.father.genotype': {
    type: 'string',
    models: ['Patient'],
    label: 'Father Genotype'
    //label: 'Consultation History Family History Family Tree Father Genotype'

  },
  'consultation_history.psychiatric_history.addictions.has_addictions': {
    type: 'string',
    models: ['Patient'],
    label: ' Has Addictions'
    //label: 'Consultation History Psychiatric History Addictions Has Addictions'

  },
  'consultation_history.psychiatric_history.addictions.addictions_if_true': {
    type: 'string',
    models: ['Patient'],
    label: 'Addictions If True'
    //label: 'Consultation History Psychiatric History Addictions Addictions If True'
  },
  'consultation_history.psychiatric_history.previous_episode_of_depression': {
    type: 'string',
    models: ['Patient'],
    label: 'Previous Episode Of Depression'
    //label: 'Consultation History Psychiatric History Previous Episode Of Depression'

  },
  'consultation_history.psychiatric_history.previous_episode_of_elation': {
    type: 'string',
    models: ['Patient'],
    label: 'Previous Episode Of Elation'
    //label: 'Consultation History Psychiatric History Previous Episode Of Elation'

  },
  'consultation_history.psychiatric_history.surgery.reason': {
    type: 'string',
    models: ['Patient'],
    label: 'Surgery Reason'
    //label: 'Consultation History Psychiatric History Surgery Reason'

  },
  'consultation_history.psychiatric_history.surgery.clarify_if_others': {
    type: 'string',
    models: ['Patient'],
    label: 'Surgery Clarify If Others'
   // label: 'Consultation History Psychiatric History Surgery Clarify If Others'

  },
  'consultation_history.family_history.family_tree.father.profession': {
    type: 'string',
    models: ['Patient'],
    label: 'Father Profession'
    //label: 'Consultation History Family History Family Tree Father Profession'

  },
  'Consultation_history.family_history.family_tree.father_achievement': {
    type: 'string',
    models: ['Patient'],
    label: ' Father Achievement'
    //label: 'Consultation History Family History Family Tree Father Achievement'


  },
  'consultation_history.bbl.buttocks_size_wanted': {
    type: 'string',
    models: ['Patient'],
    label: 'Buttocks Size'
    //label: 'Consultation History Bbl Buttocks Size Wanted'

  },
  'consultation_history.bbl.client_expectation': {
    type: 'string',
    models: ['Patient'],
    label: 'Client Expectation'
    //label: 'Consultation History Bbl Client Expectation'

  },
  'consultation_history.bbl.doctor_remarks.comment': {
    type: 'string',
    models: ['Patient'],
    label: 'Bbl Doctor Remarks'
    //label: 'Consultation History Bbl Doctor Remarks Comment'

  },
  'consultation_history.bbl.doctor_remarks.impression_on_expectation': {
    type: 'string',
    models: ['Patient'],
    label: 'Doctor Impression On Expectation'
    //label: 'Consultation History Bbl Doctor Remarks Impression On Expectation'

  },
  'consultation_history.breast.cup_size_wanted': {
    type: 'string',
    models: ['Patient'],
    label: 'Breast Cup Size '
    //label: 'Consultation History Breast Cup Size Wanted'

  },
  'consultation_history.breast.client_expectation': {
    type: 'string',
    models: ['Patient'],
    label: 'Breast Client Expectation'
    //label: 'Consultation History Breast Client Expectation'

  },
  'consultation_history.breast.doctor_remarks.comment': {
    type: 'string',
    models: ['Patient'],
    label: 'Breast Doctor Comment'
    //label: 'Consultation History Breast Doctor Remarks Comment'

  },
  /*'consultation_history.breast.doctor_remarks.impression_on_expectation': {
    type: 'string',
    models: ['Patient'],
    label: 'Brest Doctor Remarks On Expectation'
    //label: 'Consultation History Breast Doctor Remarks Impression On Expectation'
  },
  **/
  'consultation_history.special_precaution.comorbidity': {
    type: 'string',
    models: ['Patient'],
    label: 'Special Precaution Comorbidity'
    //label: 'Consultation History Special Precaution Comorbidity'
  },
  'consultation_history.special_precaution.has_drug_allergies': {
    type: 'boolean',
    models: ['Patient'],
    label: 'Drug Allergies'
    //label: 'Consultation History Special Precaution Has Drug Allergies'
  },
  'consultation_history.special_precaution.drug_allergies': {
    type: 'string',
    models: ['Patient'],
    label: 'Drug Allergies If Any'
    //label: 'Consultation History Special Precaution Drug Allergies'

  },
  'consultation_history.special_precaution.has_other_allergies': {
    type: 'string',
    models: ['Patient'],
    label: 'Other Allergies'
    //label: 'Consultation History Special Precaution Has Other Allergies'

  },
  'consultation_history_special_precaution_special_notes': {
    type: 'string',
    models: ['Patient'],
    label: 'Special Notes'
    //label: 'Consultation History Special Precaution Special Notes'

  },
  'consultation_history.neonatal_history.pre_natal.age_and_parity_of_mother': {
    type: 'string',
    models: ['Patient'],
    label: 'Pre Natal Age And Parity Of Mother'
    //label: 'Consultation History Neonatal History Pre Natal Age And Parity Of Mother'
  },
  'consultation_history.neonatal_history.pre_natal.ipt': {
    type: 'string',
    models: ['Patient'],
    label: 'Pre Natal Ipt'
    //label: 'Consultation History Neonatal History Pre Natal Ipt'
  },
  'consultation_history.special_precaution.other_allergies': {
    type: 'string',
    models: ['Patient'],
    label: 'Precaution And Other Allergies'
    //label: 'Consultation History Special Precaution Other Allergies'
  },
  'consultation_history.special_precaution.special_notes': {
    type: 'string',
    models: ['Patient'],
    label: 'Special Precaution Notes'
    //label: 'Consultation History Special Precaution Special Notes'
  },
  'consultation_history.neonatal_history.pre_natal.antenatal_visits_and_family_attended': {
    type: 'string',
    models: ['Patient'],
    label: 'Antenatal Visits And Family Attended'
    //label: 'Consultation History Neonatal History Pre Natal Antenatal Visits And Family Attended'
  },
  'consultation_history.neonatal_history.pre_natal.antenatal_infections_during_pregnancy.rash': {
    type: 'string',
    models: ['Patient'],
    label: 'Pregnancy Rash'
    //label: 'Consultation History Neonatal History Pre Natal Antenatal Infections During Pregnancy Rash'

  },
  'consultation_history.neonatal_history.pre_natal.antenatal_infections_during_pregnancy.other_antenatal_infections': {
    type: 'string',
    models: ['Patient'],
    label: 'Other Antenatal Infections'
    //label: 'Consultation History Neonatal History Pre Natal Antenatal Infections During Pregnancy Other Antenatal Infections'

  },
  'consultation_history.neonatal_history.pre_natal.ingestion_of_herbal_concoctions_during_pregnancy.alcohol': {
    type: 'string',
    models: ['Patient'],
    label: 'Ingestion  Of Alcohol Or Herbal Concoctions During Pregnancy'
    //label: 'Consultation History Neonatal History Pre Natal Ingestion Of Herbal Concoctions During Pregnancy Alcohol'

  },
  'consultation_history.neonatal_history.natal.how_soon_after_birth_was_the_child_put_to_breast': {
    type: 'string',
    models: ['Patient'],
    label: 'How Soon After Birth Was The Child Put To Breast'
    //label: 'Consultation History Neonatal History Natal How Soon After Birth Was The Child Put To Breast'

  },

  'consultation_history.neonatal_history.pre_natal.ingestion_of_herbal_concoctions_during_pregnancy.cigarrete_smooking': {
    type: 'string',
    models: ['Patient'],
    label: 'Ingestion Of Herbal Concoctions And  Cigarrete smooking During Pregnancy'
    //label: 'Consultation History Neonatal History Pre Natal Ingestion Of Herbal Concoctions During Pregnancy Cigarrete smooking'
  },
  'consultation_history.neonatal_history.pre_natal.routine_immunization_given': {
    type: 'string',
    models: ['Patient'],
    label: 'Immunization Given'
    //label: 'Consultation History Neonatal History Pre Natal Routine Immunization Given'
  },
  'consultation_history.neonatal_history.pre_natal.list_of_immunization_given': {
    type: 'string',
    models: ['Patient'],
    label: 'List Of Immunization Given'
    //label: 'Consultation History Neonatal History Pre Natal List Of Immunization Given'
  },
  'consultation_history.neonatal_history.pre_natal.antenatal_infections_during_pregnancy.fever': {
    type: 'boolean',
    models: ['Patient'],
    label: 'Pregnancy Fever'
    //label: 'Consultation History Neonatal History Pre Natal Antenatal Infections During Pregnancy Fever'

  },
  'consultation_history.neonatal_history.natal.gestational_age_at_delivery.no_of_weeks': {
    type: 'number',
    models: ['Patient'],
    label: 'Gestational Age (Number Of Weeks)'
    //label: 'Consultation History Neonatal History Natal Gestational Age At Delivery Number Of Weeks'

  },
  'consultation_history.neonatal_history.natal.state_of_child_at_delivery.reflex_irritability.one_min': {
    type: 'string',
    models: ['Patient'],
    label: 'Child Reflex Irritability (One Min)'
    //label: 'Consultation History Neonatal History Natal State Of Child At Delivery Reflex Irritability One Min'

  },
  'consultation_history.neonatal_history.natal.birth_weight': {
    type: 'string',
    models: ['Patient'],
    label: 'Birth Weight'
    //label: 'Consultation History Neonatal History Natal Birth Weight'

  },
  'consultation_history.neonatal_history.natal.mode_of_delivery': {
    type: 'string',
    models: ['Patient'],
    label: 'Mode Of Delivery'
    //label: 'Consultation History Neonatal History Natal Mode Of Delivery'


  },
  'consultation_history.neonatal_history.natal.state_of_child_at_delivery.heart_rate.five_min': {
    type: 'string',
    models: ['Patient'],
    label: 'Child Heart Rate (Five Min)'
    //label: 'Consultation History Neonatal History Natal State Of Child At Delivery Heart Rate Five Min'

  },
  'consultation_history.neonatal_history.post_natal.fever': {
    type: 'string',
    models: ['Patient'],
    label: 'Post Natal Fever'
    //label: 'Consultation History Neonatal History Post Natal Fever'
  },
  'consultation_history.neonatal_history.natal.state_of_child_at_delivery.respiratory_effort.one_min': {
    type: 'number',
    models: ['Patient'],
    label: 'State Respiratory Effort (One min)'
    //label: 'Consultation History Neonatal History Natal State Of Child At Delivery Respiratory Effort One min'

  },
  'consultation_history.neonatal_history.natal.duration_of_rupture_of_memberane_to_delivery': {
    type: 'string',
    models: ['Patient'],
    label: 'Duration Of Rupture Of Memberane'
    //label: 'Consultation History Neonatal History Natal Duration Of Rupture Of Memberane To Delivery'

  },
  'consultation_history.neonatal_history.natal.duration_of_labour': {
    type: 'string',
    models: ['Patient'],
    label: 'Duration Of Labour'
    //label: 'Consultation History Neonatal History Natal Duration Of Labour'

  },
  'consultation_history.neonatal_history.natal.duration_of_hospital_stay_before_discharge': {
    type: 'string',
    models: ['Patient'],
    label: 'Duration Of Hospital Stay Before Discharge'
    //label: 'Consultation History Neonatal History Natal Duration Of Hospital Stay Before Discharge'

  },
  'consultation_history.neonatal_history.natal.state_of_child_at_delivery.heart_rate.one_min': {
    type: 'string',
    models: ['Patient'],
    label: 'Child Heart Rate (One Min)'
    //label: 'Consultation History Neonatal History Natal State Of Child At Delivery Heart Rate One Min'

  },
  'consultation_history.neonatal_history.natal.state_of_child_at_delivery.respiratory_effort.five_min': {
    type: 'string',
    models: ['Patient'],
    label: 'Child Respiratory Effort (Five min)'
    //label: 'Consultation History Neonatal History Natal State Of Child At Delivery Respiratory Effort Five min'
  },
  'consultation_history.neonatal_history.natal.state_of_child_at_delivery.muscle_tone.one_min': {
    type: 'string',
    models: ['Patient'],
    label: 'Child Muscle Tone (One Min)'
    //label: 'Consultation History Neonatal History Natal State Of Child At Delivery Muscle Tone One Min'
  },
  'consultation_history.neonatal_history.natal.state_of_child_at_delivery.muscle_tone.five_min': {
    type: 'string',
    models: ['Patient'],
    label: 'Child Muscle Tone (Five Min)'
    //label: 'Consultation History Neonatal History Natal State Of Child At Delivery Muscle Tone Five Min'

  },
  'consultation_history.neonatal_history.natal.state_of_child_at_delivery.reflex_irritability.five_min': {
    type: 'string',
    models: ['Patient'],
    label: 'Child Reflex Irritability (Five Min)'
    //label: 'Consultation History Neonatal History Natal State Of Child At Delivery Reflex Irritability Five Min'

  },
  'consultation_history.neonatal_history.natal.state_of_child_at_delivery.color.one_min': {
    type: 'string',
    models: ['Patient'],
    label: 'Child Color (One Min)'
    //label: 'Consultation History Neonatal History Natal State Of Child At Delivery Color One Min'

  },
  'consultation_history.neonatal_history.post_natal.neonatal_jaundice': {
    type: 'string',
    models: ['Patient'],
    label: 'Neonatal Jaundice'
    //label: 'Consultation History Neonatal History Post Natal Neonatal Jaundice'

  },
  'consultation_history.neonatal_history.natal.state_of_child_at_delivery.color.five_min': {
    type: 'string',
    models: ['Patient'],
    label: 'Child Color (Five Min)'
    //label: 'Consultation History Neonatal History Natal State Of Child At Delivery Color Five Min'

  },
  'consultation_history.neonatal_history.natal.state_of_child_at_delivery.total_score.one_min': {
    type: 'string',
    models: ['Patient'],
    label: 'Child Total Score (One Min)'
    //label: 'Consultation history Neonatal History Natal State Of Child At Delivery Total Score One Min'

  },
  'consultation_history.neonatal_history.post_natal.sepsis': {
    type: 'string',
    models: ['Patient'],
    label: 'Post Natal Sepsis'
    //label: 'Consultation History Neonatal History Post Natal Sepsis'

  },
  'consultation_history.neonatal_history.natal.state_of_child_at_delivery.total_score.five_min': {
    type: 'string',
    models: ['Patient'],
    label: 'Child Total Score (Five Min)'
    //label: 'Consultation History Neonatal History natal State of Child At Delivery Total Score Five Min'

  },
  'consultation_history.neonatal_history.post_natal.convulsion': {
    type: 'string',
    models: ['Patient'],
    label: 'Post Natal Convulsion'
    //label: 'Consultation History Neonatal History Post Natal Convulsion'
  },
  'last_appointment': {
    type: 'string',
    models: ['Patient'],
    label: 'Last Appointment'
  },
  'ICE.contact': {
    type: 'string',
    models: ['Patient'],
    label: 'ICE contact'
  },
  'ICE.number': {
    type: 'number',
    models: ['Patient'],
    label: 'ICE Number'
  },
  'is_married': {
    type: 'boolean',
    models: ['Patient'],
    label: 'Is Married'
  },
  immunization :  {
    type: 'string',
    models: ['Patient'],
    label: 'Immunization',
  },
  isAlive :  {
    type: 'boolean',
    models: ['Patient'],
    label: 'IsAlive',
  },
  'marital_status': {
    type: 'string',
    models: ['Patient'],
    label: 'Marital Status'
  },
  'military_status.is_military': {
    type: 'boolean',
    models: ['Patient'],
    label: 'Military Status Is Military'
  },
  'military_status.arm': {
    type: 'boolean',
    models: ['Patient'],
    label: 'Military Status Arm'
  },
  'military_status.exact_arm': {
    type: 'string',
    models: ['Patient'],
    label: 'Military Status Exact Arm'
  },
  'national_identity_number': {
    type: 'number',
    models: ['Patient'],
    label: 'National Identity Number'
  },
  'next_of_kin.address': {
    type: 'string',
    models: ['Patient'],
    label: 'Next Of Kin Address'
  },
  'next_of_kin.email': {
    type: 'string',
    models: ['Patient'],
    label: 'Next Of Kin Email'
  },
  'next_of_kin.phone': {
    type: 'number',
    models: ['Patient'],
    label: 'Next Of Kin Phone'
  },
  'next_of_kin.sex': {
    type: 'string',
    models: ['Patient'],
    label: 'Next Of Kin Sex'
  },
  'next_of_kin.fname': {
    type: 'string',
    models: ['Patient'],
    label: 'Next Of Kin Fname'
  },
  'next_of_kin.lname': {
    type: 'string',
    models: ['Patient'],
    label: 'Next Of Kin Lname'
  },
  'next_of_kin.relationship': {
    type: 'string',
    models: ['Patient'],
    label: 'Next Of Kin Relationship'
  },
  'next_of_kin_occupation': {
    type: 'string',
    models: ['Patient'],
    label: 'Next Of Kin Occupation'
  },
  'nationality': {
    type: 'string',
    models: ['Patient'],
    label: 'Nationality'
  },
  'old_hospital_number': {
    type: 'number',
    models: ['Patient'],
    label: 'Old Hospital Number'
  },
  'patient_retainership_code': {
    type: 'number',
    models: ['Patient'],
    label: 'Patient Retainership Code'
  },
  'payment_status': {
    type: 'boolean',
    models: ['Patient'],
    label: 'Payment Status'
  },
  'place_of_origin': {
    type: 'string',
    models: ['Patient'],
    label: 'Place Of Origin'
  },
  'profile_image': {
    type: 'string',
    models: ['Patient'],
    label: 'Profile Image'
  },
  'purpose_of_visit':{
    type: 'string',
    models: ['Patient'],
    label: 'Purpose Of Visit'
  },
  'retainership_expiry_date': {
    type: 'date',
    models: ['Patient'],
    label: 'Retainership Expiry Date'
  },
  'smart_id': {
    type: 'number',
    models: ['Patient'],
    label: 'Smart Id'
  },
  'smart_code': {
    type: 'number',
    models: ['Patient'],
    label: 'Smart Code'
  },
  'social_activities': {
    type: 'string',
    models: ['Patient'],
    label: 'Social Activities'
  },
  'spouse': {
    type: 'string',
    models: ['Patient'],
    label: 'Spouse'
  },
  'spouse_info.fullname': {
    type: 'string',
    models: ['Patient'],
    label: 'Spouse Info Fullname'
  },
  'spouse_info.occupation': {
    type: 'string',
    models: ['Patient'],
    label: 'Spouse Info Occupation'
  },
  'blood_group': {
    type: 'string',
    models: ['Patient'],
    label: 'Blood Group'
  },
  'district': {
    type: 'string',
    models: ['Patient'],
    label: 'District'
  },
  'tribe': {
    type: 'string',
    models: ['Patient'],
    label: 'Tribe'
  },

  'state': {
    type: 'string',
    models: ['Patient'],
    label: 'State'
  },

  'epid_number': {
    type: 'number',
    models: ['Patient'],
    label: 'Epid Number'
  },
  'service_number': {
    type: 'number',
    models: ['Patient'],
    label: 'Service Number'
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
  hmo: {
    type: 'string',
    models: ['Patient'],
    label: 'HMO',
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
  occupation: {
    type: 'string',
    models: ['Patient'],
    label: 'Occupation'
  },
  oname: {
    type: 'string',
    models: ['Patient'],
    label: 'Oname'
  },
  patient_hmo_code: {
    type: 'string',
    models: ['Patient'],
    label: 'Patient HMO Code',
  },
  parent: {
    type: 'string',
    models: ['Patient'],
    label: 'Parent',
  },
  phone: {
    type: 'number',
    models: ['Patient'],
    label: 'Phone',
  },
  religion: {
    type: 'number',
    models: ['Patient'],
    label: 'Religion',
  },
  children: {
    type: 'string',
    models: ['Patient'],
    label: 'Children',
  },

  file_id: {
    type: 'number',
    models: ['Patient'],
    label: 'File Id',
  },
  is_nhis: {
    type: 'number',
    models: ['Patient'],
    label: 'Is Nhis',
  },
  nutrition_history: {
    type: 'number',
    models: ['Patient'],
    label: 'Nutrition History',
  },
  'spouse_info.phone': {
    type: 'number',
    models: ['Patient'],
    label: 'spouse Info Phone',
  },
  genotype: {
    type: 'string',
    models: ['Patient'],
    label: 'Genotype',
  },
  username: {
    type: 'string',
    models: ['Patient'],
    label: 'Username',
  },
  unit: {
    type: 'string',
    models: ['Patient'],
    label: 'Unit',
  },
  'discharge_summary.date_of_discharge': {
    type: 'date',
    models: ['AdmissionRecord'],
    label: 'Date of Discharge',
    transform: 'Date',
  },
  title :  {
    type: 'string',
    models: ['Patient'],
    label: 'Title',
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
