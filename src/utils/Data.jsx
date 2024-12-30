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

export const publicRoutes = [
  { path: Routes.OtpVerification(":key"), element: <OtpVerification /> },
  { path: Routes.login, element: <Login /> },
  { path: Routes.signUp, element: <Signup /> },
  { path: Routes.userVault, element: <UserVault /> },
  { path: Routes.instructorSignUp, element: <InstructorSignUp /> },
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
    availability: {
      date: "2024-01-01",
      Monday: "9:00 AM - 12:00 PM",
      Tuesday: "9:00 AM - 12:00 PM",
      Wednesday: "2:00 PM - 5:00 PM",
      Thursday: "2:00 PM - 5:00 PM",
    },
    preferences: {
      transmission: "Automatic",
    },
    image: "https://zyacom.com/backend/public/uploads/uesrs/1735165715.jpg", // Added image URL
  },
  {
    id: 2,
    name: "John Doe",
    username: "john_doe22",
    email: "john.doe@gmail.com",
    phone: "+447860112233",
    address: "456 Elm St, Manchester, UK",
    driving_level: "Advanced",
    perHour: "70",
    packages: [
      {
        id: 1,
        time: "10 hours",
        price: "200",
      },
    ],
    preferred_learning_style: "Theory and Practice",
    lessons_booked: [
      {
        lesson_id: 103,
        date: "2024-01-03",
        time: "1:00 PM - 2:00 PM",
        instructor: "Sophie Lee",
        topic: "Highway Driving",
      },
      {
        lesson_id: 104,
        date: "2024-01-05",
        time: "9:00 AM - 10:00 AM",
        instructor: "Alex Jones",
        topic: "Night Driving",
      },
    ],
    gaps: [
      {
        date: "2024-01-06",
        available_slot: "10:00 AM - 12:00 PM",
      },
    ],
    payment_history: [
      {
        payment_id: 204,
        amount: 70,
        date: "2023-12-25",
        status: "Confirmed",
      },
      {
        payment_id: 205,
        amount: 35,
        date: "2023-12-20",
        status: "Confirmed",
      },
    ],
    availability: {
      date: "2024-01-01",
      Tuesday: "3:00 PM - 6:00 PM",
      Thursday: "10:00 AM - 12:00 PM",
    },
    preferences: {
      transmission: "Manual",
    },
    image: "https://zyacom.com/backend/public/uploads/users/1718363170.jpeg", // Added image URL
  },
  {
    id: 3,
    name: "Sophia Adams",
    username: "sophia_a1",
    email: "sophia.adams@gmail.com",
    phone: "+447702334455",
    address: "789 Oak Rd, Birmingham, UK",
    driving_level: "Intermediate",
    perHour: "60",
    packages: [
      {
        id: 1,
        time: "6 hours",
        price: "120",
      },
    ],
    preferred_learning_style: "Visual and Practical",
    lessons_booked: [
      {
        lesson_id: 105,
        date: "2024-01-07",
        time: "11:00 AM - 12:00 PM",
        instructor: "Alex Jones",
        topic: "Parallel Parking",
      },
      {
        lesson_id: 106,
        date: "2024-01-08",
        time: "3:00 PM - 4:00 PM",
        instructor: "Sophie Lee",
        topic: "Roundabout Navigation",
      },
    ],
    gaps: [
      {
        date: "2024-01-09",
        available_slot: "2:00 PM - 4:00 PM",
      },
    ],
    payment_history: [
      {
        payment_id: 206,
        amount: 60,
        date: "2023-12-29",
        status: "Confirmed",
      },
      {
        payment_id: 207,
        amount: 45,
        date: "2023-12-18",
        status: "Confirmed",
      },
    ],
    availability: {
      date: "2024-01-01",
      Monday: "10:00 AM - 12:00 PM",
      Friday: "1:00 PM - 4:00 PM",
    },
    preferences: {
      transmission: "Automatic",
    },
    image: "https://zyacom.com/backend/public/uploads/users/1718366945.jpeg", // Added image URL
  },
  {
    id: 4,
    name: "Liam Smith",
    username: "liam_smith4",
    email: "liam.smith4@gmail.com",
    phone: "+447750667788",
    address: "101 Pine St, Liverpool, UK",
    driving_level: "Beginner",
    perHour: "45",
    packages: [
      {
        id: 1,
        time: "4 hours",
        price: "90",
      },
    ],
    preferred_learning_style: "Audio and Visual",
    lessons_booked: [
      {
        lesson_id: 107,
        date: "2024-01-10",
        time: "10:00 AM - 11:00 AM",
        instructor: "Sophie Lee",
        topic: "Reversing",
      },
      {
        lesson_id: 108,
        date: "2024-01-12",
        time: "2:00 PM - 3:00 PM",
        instructor: "Alex Jones",
        topic: "Basic Driving Techniques",
      },
    ],
    gaps: [
      {
        date: "2024-01-13",
        available_slot: "9:00 AM - 11:00 AM",
      },
    ],
    payment_history: [
      {
        payment_id: 208,
        amount: 45,
        date: "2023-12-28",
        status: "Confirmed",
      },
      {
        payment_id: 209,
        amount: 40,
        date: "2023-12-21",
        status: "Confirmed",
      },
    ],
    availability: {
      date: "2024-01-01",
      Tuesday: "9:00 AM - 12:00 PM",
      Saturday: "10:00 AM - 12:00 PM",
    },
    preferences: {
      transmission: "Manual",
    },
    image: "https://www.zyacom.com/assets/default_image-nxOmd3fF.jpeg", // Added image URL
  },
  {
    id: 5,
    name: "Emma Wilson",
    username: "emma_wilson8",
    email: "emma.wilson8@gmail.com",
    phone: "+447774556677",
    address: "234 Birch Ave, Edinburgh, UK",
    driving_level: "Advanced",
    perHour: "80",
    packages: [
      {
        id: 1,
        time: "12 hours",
        price: "240",
      },
    ],
    preferred_learning_style: "Interactive and Hands-on",
    lessons_booked: [
      {
        lesson_id: 109,
        date: "2024-01-11",
        time: "1:00 PM - 2:00 PM",
        instructor: "Alex Jones",
        topic: "Advanced Parking",
      },
      {
        lesson_id: 110,
        date: "2024-01-14",
        time: "11:00 AM - 12:00 PM",
        instructor: "Sophie Lee",
        topic: "Defensive Driving Techniques",
      },
    ],
    gaps: [
      {
        date: "2024-01-15",
        available_slot: "2:00 PM - 4:00 PM",
      },
    ],
    payment_history: [
      {
        payment_id: 210,
        amount: 80,
        date: "2023-12-30",
        status: "Confirmed",
      },
      {
        payment_id: 211,
        amount: 50,
        date: "2023-12-24",
        status: "Confirmed",
      },
    ],
    availability: {
      date: "2024-01-01",
      Wednesday: "9:00 AM - 11:00 AM",
      Friday: "2:00 PM - 5:00 PM",
    },
    preferences: {
      transmission: "Automatic",
    },
    image: "https://zyacom.com/backend/public/uploads/users/1718366945.jpeg", // Added image URL
  },
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
      { id: 1, hours: 25, price: 529.5 },
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
    availability: {
      date: "2024-01-01",
      Monday: "9:00 AM - 12:00 PM",
      Wednesday: "2:00 PM - 5:00 PM",
    },
    preferences: {
      transmission: "Automatic",
    },
    image: "https://zyacom.com/backend/public/uploads/uesrs/1735165715.jpg", // Added image URL
  },
  {
    id: 2,
    name: "John Doe",
    username: "john_doe22",
    email: "john.doe@gmail.com",
    phone: "+447860112233",
    address: "456 Elm St, Manchester, UK",
    driving_level: "Advanced",
    perHour: "70",
    packages: [
      { id: 1, hours: 1, price: 59.5 },
      { id: 2, hours: 2, price: 19.0 },
      { id: 3, hours: 3, price: 299.0 },
    ],
    preferred_learning_style: "Theory and Practice",
    lessons_booked: [
      {
        lesson_id: 103,
        date: "2024-01-03",
        time: "1:00 PM - 2:00 PM",
        instructor: "Sophie Lee",
        topic: "Highway Driving",
      },
      {
        lesson_id: 104,
        date: "2024-01-05",
        time: "9:00 AM - 10:00 AM",
        instructor: "Alex Jones",
        topic: "Night Driving",
      },
    ],
    gaps: [
      {
        date: "2024-01-06",
        available_slot: "10:00 AM - 12:00 PM",
      },
    ],
    payment_history: [
      {
        payment_id: 204,
        amount: 70,
        date: "2023-12-25",
        status: "Confirmed",
      },
      {
        payment_id: 205,
        amount: 35,
        date: "2023-12-20",
        status: "Confirmed",
      },
    ],
    availability: {
      date: "2024-01-01",
      Tuesday: "3:00 PM - 6:00 PM",
      Thursday: "10:00 AM - 12:00 PM",
    },
    preferences: {
      transmission: "Manual",
    },
    image: "https://zyacom.com/backend/public/uploads/users/1718363170.jpeg", // Added image URL
  },
  {
    id: 3,
    name: "Sophia Adams",
    username: "sophia_a1",
    email: "sophia.adams@gmail.com",
    phone: "+447702334455",
    address: "789 Oak Rd, Birmingham, UK",
    driving_level: "Intermediate",
    perHour: "60",
    packages: [
      { id: 1, hours: 5, price: 59.5 },
      { id: 2, hours: 10, price: 109.0 },
      { id: 3, hours: 20, price: 199.0 },
    ],
    preferred_learning_style: "Visual and Practical",
    lessons_booked: [
      {
        lesson_id: 105,
        date: "2024-01-07",
        time: "11:00 AM - 12:00 PM",
        instructor: "Alex Jones",
        topic: "Parallel Parking",
      },
      {
        lesson_id: 106,
        date: "2024-01-08",
        time: "3:00 PM - 4:00 PM",
        instructor: "Sophie Lee",
        topic: "Roundabout Navigation",
      },
    ],
    gaps: [
      {
        date: "2024-01-09",
        available_slot: "2:00 PM - 4:00 PM",
      },
    ],
    payment_history: [
      {
        payment_id: 206,
        amount: 60,
        date: "2023-12-29",
        status: "Confirmed",
      },
      {
        payment_id: 207,
        amount: 45,
        date: "2023-12-18",
        status: "Confirmed",
      },
    ],
    availability: {
      date: "2024-01-01",
      Monday: "10:00 AM - 12:00 PM",
      Friday: "1:00 PM - 4:00 PM",
    },
    preferences: {
      transmission: "Automatic",
    },
    image: "https://zyacom.com/backend/public/uploads/users/1718366945.jpeg", // Added image URL
  },
  {
    id: 4,
    name: "Liam Smith",
    username: "liam_smith4",
    email: "liam.smith4@gmail.com",
    phone: "+447750667788",
    address: "101 Pine St, Liverpool, UK",
    driving_level: "Beginner",
    perHour: "45",
    packages: [
      {
        id: 1,
        time: "4 hours",
        price: "90",
      },
    ],
    preferred_learning_style: "Audio and Visual",
    lessons_booked: [
      {
        lesson_id: 107,
        date: "2024-01-10",
        time: "10:00 AM - 11:00 AM",
        instructor: "Sophie Lee",
        topic: "Reversing",
      },
      {
        lesson_id: 108,
        date: "2024-01-12",
        time: "2:00 PM - 3:00 PM",
        instructor: "Alex Jones",
        topic: "Basic Driving Techniques",
      },
    ],
    gaps: [
      {
        date: "2024-01-13",
        available_slot: "9:00 AM - 11:00 AM",
      },
    ],
    payment_history: [
      {
        payment_id: 208,
        amount: 45,
        date: "2023-12-28",
        status: "Confirmed",
      },
      {
        payment_id: 209,
        amount: 40,
        date: "2023-12-21",
        status: "Confirmed",
      },
    ],
    availability: {
      date: "2024-01-01",
      Tuesday: "9:00 AM - 12:00 PM",
      Saturday: "10:00 AM - 12:00 PM",
    },
    preferences: {
      transmission: "Manual",
    },
    image: "https://www.zyacom.com/assets/default_image-nxOmd3fF.jpeg", // Added image URL
  },
  {
    id: 5,
    name: "Emma Wilson",
    username: "emma_wilson8",
    email: "emma.wilson8@gmail.com",
    phone: "+447774556677",
    address: "234 Birch Ave, Edinburgh, UK",
    driving_level: "Advanced",
    perHour: "80",
    packages: [
      {
        id: 1,
        time: "12 hours",
        price: "240",
      },
    ],
    preferred_learning_style: "Interactive and Hands-on",
    lessons_booked: [
      {
        lesson_id: 109,
        date: "2024-01-11",
        time: "1:00 PM - 2:00 PM",
        instructor: "Alex Jones",
        topic: "Advanced Parking",
      },
      {
        lesson_id: 110,
        date: "2024-01-14",
        time: "11:00 AM - 12:00 PM",
        instructor: "Sophie Lee",
        topic: "Defensive Driving Techniques",
      },
    ],
    gaps: [
      {
        date: "2024-01-15",
        available_slot: "2:00 PM - 4:00 PM",
      },
    ],
    payment_history: [
      {
        payment_id: 210,
        amount: 80,
        date: "2023-12-30",
        status: "Confirmed",
      },
      {
        payment_id: 211,
        amount: 50,
        date: "2023-12-24",
        status: "Confirmed",
      },
    ],
    availability: {
      date: "2024-01-01",
      Wednesday: "9:00 AM - 11:00 AM",
      Friday: "2:00 PM - 5:00 PM",
    },
    preferences: {
      transmission: "Automatic",
    },
    image: "https://zyacom.com/backend/public/uploads/users/1718366945.jpeg", // Added image URL
  },
];

