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

export const publicRoutes = [
  { path: Routes.OtpVerification, element: <OtpVerification /> },
  { path: Routes.login, element: <Login /> },
  { path: Routes.signUp, element: <Signup /> },
];

export const privateRoutes = [
  // Parent OR Pupils Routes
  { path: Routes.parentHome, element: <Home /> },
  { path: Routes.parentLessons, element: <Lessons /> },
  { path: Routes.parentDrivingAbility, element: <DrivingAbility /> },
  { path: Routes.parentPayement, element: <Payement /> },
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
