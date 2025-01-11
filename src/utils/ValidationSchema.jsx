import * as Yup from "yup";

export const validationSchema = Yup.object({
  firstName: Yup.string()
    .trim()
    .min(2, "First name must be at least 2 characters long")
    .max(50, "First name cannot exceed 50 characters")
    .required("First name is required"),
  address: Yup.string()
    .trim()
    .min(2, "Address must be at least 2 characters long")
    .max(250, "Address cannot exceed 250 characters")
    .required("Address name is required"),
  fullName: Yup.string()
    .trim()
    .min(2, "Full name must be at least 2 characters long")
    .max(50, "Full name cannot exceed 50 characters")
    .required("First name is required"),
  lastName: Yup.string()
    .trim()
    .min(2, "Last name must be at least 2 characters long")
    .max(50, "Last name cannot exceed 50 characters")
    .required("Last name is required"),

  postalCode: Yup.string()
    .trim()
    .min(2, "Postal Code must be at least 2 characters long")
    .max(15, "Postal Code cannot exceed 15 characters")
    .required("Postal Code is required"),

  phoneNumber: Yup.string()
    .matches(/^\d+$/, "Must be a valid number")
    .min(10, "Phone number must be at least 10 digits long")
    .max(15, "Phone number cannot exceed 15 digits")
    .required("Mobile number is required"),

  emailAddress: Yup.string()
    .trim()
    .email("Invalid email address")
    .max(155, "Email address cannot exceed 155 characters")
    .required("Email is required"),
  selectedLesson: Yup.string().trim().required("Please select a lesson type."),
  cardNumber: Yup.string()
    .required("Card number is required")
    .matches(/^[0-9]{16}$/, "Card number must be exactly 16 digits"),

  expiryDate: Yup.string()
    .required("Expiry date is required")
    .matches(/^(0[1-9]|1[0-2])\/\d{2}$/, "Invalid expiry date (MM/YY format)"),

  cvv: Yup.string()
    .required("CVV is required")
    .matches(/^[0-9]{3,4}$/, "CVV must be 3 or 4 digits"),

  cardName: Yup.string()
    .required("Cardholder name is required")
    .matches(
      /^[a-zA-Z\s]+$/,
      "Cardholder name can only contain letters and spaces"
    ),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters long")
    .max(20, "Password cannot exceed 20 characters")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])(?=.*[A-Z]).{8,20}$/,
      "Password must contain at least one uppercase letter, one number, and one special character"
    )
    .required("Password is required"),
  dateOfBirth: Yup.string()
    .required("Date of birth is required")
    .matches(/^\d{4}-\d{2}-\d{2}$/, "Date must be in the format YYYY-MM-DD")
    .test(
      "is-valid-date",
      "Date of birth must be a valid date",
      (value) => !value || !isNaN(Date.parse(value))
    ),

  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm password is required"),
  drivingSchoolName: Yup.string().required("Driving School Name is required"),
});
