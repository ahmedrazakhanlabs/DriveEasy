const Pupils = `/pupils`;
const Instructor = `/instructor`;

export const Routes = {
  OtpVerification: `/otp-verfication`,
  login: `/login`,
  signUp: `/`,

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
  parentInboxById: (id) => `${Pupils}/inbox/${id}`,

  // Instructor Routes
  InstructorHome: `${Instructor}/home`,
};
