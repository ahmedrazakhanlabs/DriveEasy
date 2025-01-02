const Pupils = `/pupils`;
const Instructor = `/instructor`;

export const Routes = {
  OtpVerification: (key) => `/otp-verfication/${key}`,
  login: `/`,
  forgotPassword: `/forgot-password`,
  passwordSetup: (key) => `/password-setup/${key}`,
  signUp: `${Pupils}/sign-up`,
  instructorSignUp: `${Instructor}/sign-up`,
  userVault: `/userVault`,
  // Parents Routes
  parentHome: `${Pupils}/home`,
  parentLessons: `${Pupils}/lessons`,
  parentDrivingAbility: `${Pupils}/driving-ability`,
  resources: `${Pupils}/resources`,
  contacts: `${Pupils}/contacts`,
  AddContact: `${Pupils}/add-contact`,
  relativeLogs: `${Pupils}/relative-logs`,
  parentInbox: `${Pupils}/inbox`,
  parentPayement: `${Pupils}/payement`,
  parentProfile: `${Pupils}/profile`,
  parentEditProfile: `${Pupils}/edit-profile`,
  parentInboxById: (id) => `${Pupils}/inbox/${id}`,

  // Instructor Routes
  InstructorHome: `${Instructor}/`,
  instructorPupil: `${Instructor}/pupil`,
};
