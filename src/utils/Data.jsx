import OtpVerification from "../screens/auth/OtpVerification";
import Login from "../screens/auth/Login";
import Signup from "../screens/auth/signup/Signup";
import Home from "../screens/parent/Home";
import Lessons from "../screens/parent/Lessons";
import DrivingAbility from "../screens/parent/driving-ability/DrivingAbility";
import Payement from "../screens/parent/payement/Payement";
import Inbox from "../screens/parent/Inbox";
import InboxById from "../screens/parent/InboxById";
import Resources from "../screens/parent/Resources";
import Contacts from "../screens/parent/contacts/Contacts";
import AddContact from "../screens/parent/contacts/subpage/AddContact";
import Profile from "../screens/parent/Profile";
import RelativeLogs from "../screens/parent/RelativeLogs";
import InstructorHome from "../screens/instructor/Home/Home.jsx";
import {
  ClipboardIcon,
  HomeIcon,
  MessageIcon,
  PhoneIcon,
  ProfileIcon,
  WalletIcon,
  WorldIcon,
} from "./Icons";
import { Routes } from "./Routes";
import {
  CalenderIcon,
  CardIcon1,
  CardIcon2,
  CardIcon3,
  ProgressIcon,
} from "./Icons.jsx";
import { useNavigate } from "react-router-dom";
import { Plus } from "lucide-react";
import Pupil from "../screens/instructor/Pupil.jsx";
import UserVault from "../screens/auth/UserVault.jsx";
import InstructorSignUp from "../screens/auth/InstructorSignUp.jsx";
import ForgotPassword from "../screens/auth/ForgotPassword.jsx";
import PasswordSetup from "../screens/auth/PasswordSetup.jsx";
import EditProfile from "../screens/parent/EditProfile.jsx";

export const publicRoutes = [
  { path: Routes.OtpVerification(":key"), element: <OtpVerification /> },
  { path: Routes.login, element: <Login /> },
  { path: Routes.passwordSetup, element: <PasswordSetup /> },
  { path: Routes.forgotPassword, element: <ForgotPassword /> },
  { path: Routes.signUp, element: <Signup /> },
  { path: Routes.userVault, element: <UserVault /> },
  { path: Routes.instructorSignUp, element: <InstructorSignUp /> },
];

export const privateRoutes = [
  { path: Routes.parentHome, element: <Home /> },
  { path: Routes.parentLessons, element: <Lessons /> },
  { path: Routes.parentDrivingAbility, element: <DrivingAbility /> },
  { path: Routes.parentPayement, element: <Payement /> },
  { path: Routes.parentEditProfile, element: <EditProfile /> },
  { path: Routes.parentInbox, element: <Inbox /> },
  { path: Routes.parentInboxById(":id"), element: <InboxById /> },
  { path: Routes.resources, element: <Resources /> },
  { path: Routes.contacts, element: <Contacts /> },
  { path: Routes.AddContact, element: <AddContact /> },
  { path: Routes.parentProfile, element: <Profile /> },
  { path: Routes.relativeLogs, element: <RelativeLogs /> },
  // Instructor Routes
  { path: Routes.InstructorHome, element: <InstructorHome /> },
  { path: Routes.instructorPupil, element: <Pupil /> },
];

export const MenuTabs = [
  { path: Routes.parentHome, label: "Home", Icon: HomeIcon },
  { path: Routes.resources, label: "Resources", Icon: WorldIcon },
  { path: Routes.contacts, label: "Contacts", Icon: PhoneIcon },
  { path: Routes.relativeLogs, label: "Relative Logs", Icon: ClipboardIcon },
];

export const InstructorMenuTabs = [
  { path: Routes.InstructorHome, label: "Diary", Icon: HomeIcon },
  { path: Routes.instructorPupil, label: "Pupil", Icon: ProfileIcon },
  { path: "", label: "plus", Icon: Plus },
  { path: "", label: "Expense", Icon: WalletIcon },
  { path: "", label: "Message", Icon: MessageIcon },
];

export const homeSection1 = (navigate) => [
  {
    label: "Lesson",
    onclick: () => navigate(Routes.parentLessons),
    icon: <CalenderIcon />,
  },
  {
    label: "Progress",
    onclick: () => console.log("lesson"),
    icon: <ProgressIcon />,
  },
];

export const homeSection2 = (navigate) => [
  {
    label: "Pay",
    icon: <CardIcon1 />,
    onclick: () => navigate(Routes.parentPayement),
  },
  {
    label: "Inbox",
    icon: <CardIcon2 />,
    onclick: () => navigate(Routes.parentInbox),
  },
  {
    label: "Gap",
    icon: <CardIcon3 />,
    iconClass: "bottom-[-12px]",
    onclick: () => navigate(Routes.parentDrivingAbility),
  },
];

export const progressData = [
  {
    label: "Basic Skills",
    Percent: "15%",
  },
  {
    label: "Junctions",
    Percent: "100%",
  },
  {
    label: "Manoeuvers",
    Percent: "45%",
  },
  {
    label: "Road Use",
    Percent: "25%",
  },
  {
    label: "Other",
    Percent: "10%",
  },
];

export const drivingAblilityData = [
  {
    label: "Changing Gear",
  },
  {
    label: "Clutch Control",
  },
  {
    label: "Cockpit Drill & Safety Checks",
  },
  {
    label: "Move Off Safely",
  },
  {
    label: "MSPSL Routine",
  },
  {
    label: "Steering",
  },
  {
    label: "Stop Safely",
  },
];

export const JunctionControlData = [
  {
    label: "Approaching",
  },
  {
    label: "Crossroads",
  },
];

export const drivingAblilityListingData = [
  {
    label: "Introduced",
  },
  {
    label: "Under Full Instruction",
  },
  {
    label: "Prompted",
  },
  {
    label: "Seldom Prompted",
  },
  {
    label: "Independent",
  },
];

export const instructorSignUpFields = [
  {
    label: "Driving School Name",
    type: "text",
    name: "drivingSchoolName",
    placeholder: "Enter Driving School Name",
  },
  {
    label: "Full Name",
    type: "text",
    name: "fullName",
    placeholder: "Enter Full Name",
  },
  {
    label: "Email Address",
    type: "email",
    name: "email",
    placeholder: "Enter Email Address",
  },
  {
    label: "Phone Number",
    type: "number",
    name: "phoneNumber",
    placeholder: "Enter Phone Number",
  },
  {
    label: "Password",
    type: "password",
    name: "password",
    placeholder: "Enter Password",
  },
  {
    label: "Confirm Password",
    type: "password",
    name: "confirmPassword",
    placeholder: "Enter Confirm Password",
  },
];

export const fakeInstructorData = [
  {
    id: 1,
    name: "Ahmed Raza Khan",
    username: "ahmed_i9",
    email: "ahmed@gmail.com",
    phone: "+447891234567",
    address: "123 Main St, London, UK",
    driving_level: "Beginner",
    perHour: "50",
    packages: [
      { id: 1, hours: 5, price: 59.5 },
      { id: 2, hours: 10, price: 109.0 },
      { id: 3, hours: 20, price: 199.0 },
    ],
    preferred_learning_style: "Hands-on practice",
    lessons_booked: [
      {
        lesson_id: 101,
        date: "2024-01-02",
        time: "10:00 AM - 11:00 AM",
        instructor: "Alex Jones",
        topic: "Parking Maneuvers",
      },
      {
        lesson_id: 102,
        date: "2024-01-04",
        time: "2:00 PM - 3:00 PM",
        instructor: "Sophie Lee",
        topic: "Emergency Stops",
      },
    ],
    gaps: [
      {
        date: "2024-01-05",
        available_slot: "9:00 AM - 11:00 AM",
      },
    ],
    payment_history: [
      {
        payment_id: 201,
        amount: 30,
        date: "2023-12-27",
        status: "Confirmed",
      },
      {
        payment_id: 202,
        amount: 60,
        date: "2023-12-22",
        status: "Confirmed",
      },
      { payment_id: 203, amount: 45, date: "2023-12-19", status: "Failed" },
    ],
    availability: [
      {
        date: "2024-12-31",
        Monday: "9:00 AM - 12:00 PM",
        Tuesday: "9:00 AM - 12:00 PM",
        Wednesday: "2:00 PM - 5:00 PM",
        Thursday: "2:00 PM - 5:00 PM",
      },
    ],
    preferences: {
      transmission: "Automatic",
    },
    image: "https://zyacom.com/backend/public/uploads/uesrs/1735165715.jpg",
  },
];

export const DrivingLevels = {
  All: "All",
  Beginner: "Beginner",
  Intermediate: "Intermediate",
  Advanced: "Advanced",
};

export const signUpDropdownItems = (setDrivingLevel) =>
  Object.entries(DrivingLevels).map(([key, value]) => ({
    label: key,
    onClick: () => setDrivingLevel(value),
  }));
